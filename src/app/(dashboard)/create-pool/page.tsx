"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import StepProgress from "@/src/components/ui/StepProgress";
import LivePreview from "@/src/components/create-pool/LivePreview";
import PoolBasicsStep from "@/src/components/create-pool/steps/PoolBasicsStep";
import RulesFieldsStep from "@/src/components/create-pool/steps/RulesFieldsStep";
import AddMembersStep from "@/src/components/create-pool/steps/AddMembersStep";
import ReviewLaunchStep from "@/src/components/create-pool/steps/ReviewLaunchStep";
import PoolLiveSuccess from "@/src/components/create-pool/PoolLiveSuccess";

const steps = [
  { label: "Pool Basics", number: 1 },
  { label: "Rules & Fields", number: 2 },
  { label: "Add Members", number: 3 },
  { label: "Review & Launch", number: 4 },
];

function slugifyPoolName(value: string) {
  return value
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

export default function CreatePoolPage() {
  const router = useRouter();
  const [currentStep, setCurrentStep] = useState(1);
  const [isPoolLiveOpen, setIsPoolLiveOpen] = useState(false);
  const [isLaunchingPool, setIsLaunchingPool] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [createdPoolLink, setCreatedPoolLink] = useState("");

  // Step 1 data
  const [basicsData, setBasicsData] = useState({
    name: "",
    description: "",
    targetAmount: "",
    perPerson: "",
    startDate: "",
    deadline: "",
    category: "education",
  });

  // Step 2 data
  const [rulesData, setRulesData] = useState({
    takeAllAtClose: false,
    milestoneWithdrawals: true,
    milestones: [
      { percentage: "50%", label: "First release — midpoint" },
      { percentage: "100%", label: "Final release —pool closes" },
    ],
    autoClose: false,
    allowAnonymous: false,
    autoReminders: false,
  });

  // Step 3 data
  const [membersData, setMembersData] = useState({
    identityFields: ["Full Name", "Matric. No", "Phone No"],
    customFields: [] as string[],
    members: [] as { name: string; phone: string; custom: string }[],
  });

  const formatDeadline = (dateStr: string) => {
    if (!dateStr) return "";
    try {
      const d = new Date(dateStr);
      return d.toLocaleDateString("en-GB", {
        day: "numeric",
        month: "short",
        year: "numeric",
      });
    } catch {
      return dateStr;
    }
  };

  const poolNameForLink = basicsData.name || "300L Class Dues";
  const poolSlug = slugifyPoolName(poolNameForLink) || "unilag-class-dues-2025";
  const poolLink = `poolfi.app/pool/${poolSlug}-x7k9m`;

  const launchPool = async () => {
    setErrorMessage("");
    setIsLaunchingPool(true);

    const response = await fetch("/api/pools", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        basics: basicsData,
        members: membersData,
        rules: rulesData,
        type: "goal",
      }),
    });

    const payload = (await response.json().catch(() => null)) as
      | { message?: string; poolLink?: string }
      | null;

    if (!response.ok) {
      setErrorMessage(
        payload?.message ?? "We couldn't launch your pool right now. Try again."
      );
      setIsLaunchingPool(false);
      return;
    }

    setCreatedPoolLink(payload?.poolLink ?? poolLink);
    setIsPoolLiveOpen(true);
    setIsLaunchingPool(false);
  };

  return (
    <div>
      {/* Top bar */}
      <div className="mb-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex items-center gap-3">
          <button
            onClick={() =>
              currentStep > 1
                ? setCurrentStep(currentStep - 1)
                : router.push("/")
            }
            className="text-[13px] font-semibold font-card text-text-muted transition-colors hover:text-text-dark"
          >
            ←
          </button>
          <h1 className="font-heading text-base font-bold text-text-dark">
            Create Goal Pool
          </h1>
        </div>
        <button className="rounded-full bg-primary px-5 py-2 text-xs font-semibold font-card text-white shadow-[0_10px_24px_rgba(51,94,255,0.24)] transition-colors hover:bg-primary-dark">
          Preview
        </button>
      </div>

      {/* Step progress */}
      <div className="max-w-[900px] mb-7">
        <StepProgress
          steps={steps}
          currentStep={currentStep}
          onStepClick={setCurrentStep}
        />
      </div>

      {errorMessage ? (
        <div className="mb-6 rounded-[18px] border border-danger/20 bg-danger/5 px-4 py-3 text-sm font-medium text-danger">
          {errorMessage}
        </div>
      ) : null}

      {/* Content area */}
      <div className="flex flex-col gap-7 xl:flex-row">
        {/* Left: Form */}
        <div className="min-w-0 flex-1 xl:max-w-[740px]">
          {currentStep === 1 && (
            <PoolBasicsStep
              data={basicsData}
              onChange={setBasicsData}
              onNext={() => setCurrentStep(2)}
              onCancel={() => router.push("/")}
            />
          )}
          {currentStep === 2 && (
            <RulesFieldsStep
              data={rulesData}
              onChange={setRulesData}
              onNext={() => setCurrentStep(3)}
              onBack={() => setCurrentStep(1)}
            />
          )}
          {currentStep === 3 && (
            <AddMembersStep
              data={membersData}
              onChange={setMembersData}
              onNext={() => setCurrentStep(4)}
              onBack={() => setCurrentStep(2)}
            />
          )}
          {currentStep === 4 && (
            <ReviewLaunchStep
              data={{
                poolName: basicsData.name || "300L Class Dues",
                target: basicsData.targetAmount || "400,000",
                perPerson: basicsData.perPerson || "1,000",
                deadline: formatDeadline(basicsData.deadline) || "7 Mar 2026",
                slots: membersData.members.length || 400,
              }}
              isLaunching={isLaunchingPool}
              onLaunch={launchPool}
              onBack={() => setCurrentStep(3)}
            />
          )}
        </div>

        {/* Right: Preview */}
        <LivePreview
          poolName={basicsData.name || undefined}
          description={basicsData.description || undefined}
          target={basicsData.targetAmount || undefined}
          perPerson={basicsData.perPerson || undefined}
        />
      </div>

      <PoolLiveSuccess
        isOpen={isPoolLiveOpen}
        onClose={() => setIsPoolLiveOpen(false)}
        poolLink={createdPoolLink || poolLink}
        onBackToDashboard={() => router.push("/")}
      />
    </div>
  );
}
