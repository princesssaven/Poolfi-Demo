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

export default function CreatePoolPage() {
  const router = useRouter();
  const [currentStep, setCurrentStep] = useState(1);
  const [launched, setLaunched] = useState(false);

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

  if (launched) {
    return (
      <PoolLiveSuccess
        poolLink="poolfi.app/pool/unilag-class-dues-2025-x7k9m"
        onBackToDashboard={() => router.push("/")}
      />
    );
  }

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
            className="text-[13px] font-semibold font-card text-text-muted hover:text-text-dark transition-colors"
          >
            ←
          </button>
          <h1 className="font-heading text-base font-bold text-text-dark">
            Create Goal Pool
          </h1>
        </div>
        <button className="bg-primary text-white px-5 py-2 rounded-full text-xs font-semibold font-card hover:bg-primary-dark transition-colors">
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
              onLaunch={() => setLaunched(true)}
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
    </div>
  );
}
