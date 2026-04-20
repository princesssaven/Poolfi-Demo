"use client";

import { useState, useCallback } from "react";
import { useRouter } from "next/navigation";
import SuccessModal from "./SuccessModal";
import FileUploadDropzone, { type FileWithPreview } from "@/src/components/ui/FileUploadDropzone";
import { supabaseStorageClient } from "@/src/lib/supabase/client";

/* ─── tiny reusable bits ─── */

function SectionIcon({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary-light text-primary">
      {children}
    </div>
  );
}

function FormLabel({
  htmlFor,
  children,
  optional,
}: {
  htmlFor: string;
  children: React.ReactNode;
  optional?: boolean;
}) {
  return (
    <label
      htmlFor={htmlFor}
      className="flex items-center gap-2 text-[13px] font-semibold text-text-dark font-card"
    >
      {children}
      {optional && (
        <span className="text-[11px] font-normal text-text-muted">
          optional
        </span>
      )}
    </label>
  );
}

/* ─── SVG Icons ─── */

function ChecklistIcon() {
  return (
    <svg width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M9 11l3 3L22 4" />
      <path d="M21 12v7a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h11" />
    </svg>
  );
}

function MoneyIcon() {
  return (
    <svg width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="6" width="20" height="12" rx="2" />
      <circle cx="12" cy="12" r="2" />
      <path d="M6 12h.01M18 12h.01" />
    </svg>
  );
}

function GovernanceIcon() {
  return (
    <svg width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 2L2 7l10 5 10-5-10-5z" />
      <path d="M2 17l10 5 10-5" />
      <path d="M2 12l10 5 10-5" />
    </svg>
  );
}

function EvidenceIcon() {
  return (
    <svg width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z" />
      <polyline points="14 2 14 8 20 8" />
      <line x1="16" y1="13" x2="8" y2="13" />
      <line x1="16" y1="17" x2="8" y2="17" />
      <polyline points="10 9 9 9 8 9" />
    </svg>
  );
}

function CameraIcon() {
  return (
    <svg width="40" height="40" fill="none" viewBox="0 0 48 48" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="text-primary">
      <path d="M43 38a3 3 0 01-3 3H8a3 3 0 01-3-3V18a3 3 0 013-3h6l3-4h14l3 4h6a3 3 0 013 3z" />
      <circle cx="24" cy="27" r="6" />
    </svg>
  );
}

function EyeIcon() {
  return (
    <svg width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
      <circle cx="12" cy="12" r="3" />
    </svg>
  );
}

function BulbIcon() {
  return (
    <svg width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-primary shrink-0">
      <path d="M9 18h6M10 22h4" />
      <path d="M12 2a7 7 0 00-4 12.7V17h8v-2.3A7 7 0 0012 2z" />
    </svg>
  );
}

function DiceIcon() {
  return (
    <svg width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-primary shrink-0">
      <rect x="3" y="3" width="18" height="18" rx="2" />
      <circle cx="9" cy="9" r="0.5" fill="currentColor" />
      <circle cx="15" cy="9" r="0.5" fill="currentColor" />
      <circle cx="9" cy="15" r="0.5" fill="currentColor" />
      <circle cx="15" cy="15" r="0.5" fill="currentColor" />
      <circle cx="12" cy="12" r="0.5" fill="currentColor" />
    </svg>
  );
}

/* ─── Form Card wrapper ─── */

function FormCard({
  icon,
  title,
  desc,
  children,
}: {
  icon: React.ReactNode;
  title: string;
  desc: string;
  children: React.ReactNode;
}) {
  return (
    <div className="rounded-2xl border border-border bg-white overflow-hidden">
      {/* header */}
      <div className="flex gap-3.5 items-start border-b border-border px-6 py-5 sm:px-7">
        <SectionIcon>{icon}</SectionIcon>
        <div className="min-w-0">
          <h2 className="text-[17px] font-bold tracking-tight text-text-dark font-heading">
            {title}
          </h2>
          <p className="text-[13px] text-text-muted font-card leading-relaxed mt-0.5">
            {desc}
          </p>
        </div>
      </div>

      {/* body */}
      <div className="flex flex-col gap-5 px-6 py-6 sm:px-7">{children}</div>
    </div>
  );
}

/* ─── Info note ─── */

function InfoNote({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex gap-2.5 rounded-xl border border-primary/12 bg-primary-light p-4 text-[12.5px] leading-[20px] text-info-blue font-card">
      <BulbIcon />
      <div className="min-w-0 flex-1">{children}</div>
    </div>
  );
}

/* ─── Live Preview card ─── */

function LivePreviewCard({
  title,
  description,
  target,
}: {
  title: string;
  description: string;
  target: string;
}) {
  return (
    <div className="rounded-2xl border border-border bg-white overflow-hidden">
      {/* Blue header */}
      <div className="relative overflow-hidden bg-primary px-5 pt-5 pb-5">
        <div className="absolute -right-12 -top-12 h-[180px] w-[180px] rounded-full bg-white/[0.06]" />
        <div className="flex items-center gap-1 text-[10px] font-bold uppercase tracking-[1px] text-white/70 mb-2">
          <svg width="13" height="13" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5" className="opacity-70">
            <path d="M12 2a7 7 0 00-4 12.7V17h8v-2.3A7 7 0 0012 2z" strokeLinecap="round" />
          </svg>
          Impact Pool · Public
        </div>
        <h3 className="text-lg font-bold text-white font-heading truncate">
          {title || "Your pool title..."}
        </h3>
        <p className="text-xs text-white/65 mt-1 truncate font-card">
          {description || "Add a description above"}
        </p>
      </div>

      {/* Body */}
      <div className="px-5 py-4 space-y-3">
        {/* Progress */}
        <div className="h-1.5 w-full rounded-full bg-border" />
        <div className="flex items-center justify-between text-[11px] text-text-muted font-card">
          <span>₦0 raised</span>
          <span>0%</span>
        </div>

        {/* Stats row */}
        <div className="flex gap-2.5">
          <div className="flex-1 rounded-xl bg-bg-page p-3">
            <p className="text-[10px] font-semibold uppercase tracking-[0.8px] text-text-muted font-card">
              Target
            </p>
            <p className="mt-1 text-[15px] font-bold text-text-dark font-heading">
              {target ? `₦${Number(target).toLocaleString()}` : "₦—"}
            </p>
          </div>
          <div className="flex-1 rounded-xl bg-bg-page p-3">
            <p className="text-[10px] font-semibold uppercase tracking-[0.8px] text-text-muted font-card">
              Approvers
            </p>
            <p className="mt-1 text-[15px] font-bold text-text-dark font-heading">
              3 of 5
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ─── Main Component ─── */

export default function CreateImpactPoolForm() {
  const router = useRouter();
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [isUploading, setIsUploading] = useState(false);
  const [evidenceFiles, setEvidenceFiles] = useState<FileWithPreview[]>([]);

  const [form, setForm] = useState({
    title: "",
    problem: "",
    moneyUsage: "",
    location: "",
    beneficiaries: "",
    fundingTarget: "",
    deadline: "",
    suggestedContribution: "",
    approvers: "3 of 5 randomly selected contributors",
    referenceLink: "",
  });

  const update = useCallback(
    (field: keyof typeof form) =>
      (
        e: React.ChangeEvent<
          HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
        >
      ) =>
        setForm((prev) => ({ ...prev, [field]: e.target.value })),
    []
  );

  const handleCancel = () => router.push("/");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    try {
      setIsUploading(true);
      
      const uploadedUrls: string[] = [];
      
      // Upload evidence files to Supabase Storage
      if (evidenceFiles.length > 0) {
        for (const file of evidenceFiles) {
          const fileExt = file.name.split('.').pop();
          const fileName = `${Math.random().toString(36).substring(2, 15)}_${Date.now()}.${fileExt}`;
          const filePath = `${fileName}`;
          
          const { error: uploadError } = await supabaseStorageClient.storage
            .from('pool-evidence')
            .upload(filePath, file);
            
          if (uploadError) {
            console.error("Upload error:", uploadError);
            throw new Error(`Failed to upload ${file.name}`);
          }
          
          const { data } = supabaseStorageClient.storage
            .from('pool-evidence')
            .getPublicUrl(filePath);
            
          uploadedUrls.push(data.publicUrl);
        }
      }
      
      // Submit to API
      const response = await fetch("/api/pools", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...form,
          evidenceUrls: uploadedUrls,
          type: "impact",
          approversCount: form.approvers,
        }),
      });

      if (!response.ok) {
        const data = await response.json();
        throw new Error(data.message || "Failed to create pool");
      }
      
      setShowSuccessModal(true);
    } catch (error) {
      console.error("Error submitting form:", error);
      alert(error instanceof Error ? error.message : "An error occurred while submitting.");
    } finally {
      setIsUploading(false);
    }
  };

  /* ─── shared input classes ─── */
  const inputCls =
    "w-full rounded-[10px] border border-border bg-white px-4 py-3 text-sm text-text-dark placeholder:text-placeholder font-card outline-none transition-all focus:border-primary focus:ring-2 focus:ring-primary/20";
  const textareaCls = `${inputCls} min-h-[90px] resize-y`;

  return (
    <form onSubmit={handleSubmit} className="pb-12">
      {/* ── Topbar ── */}
      <div className="sticky top-0 z-10 flex items-center justify-between border-b border-border bg-white/95 backdrop-blur-sm px-4 py-3 sm:px-6 -mx-4 sm:-mx-6 lg:-mx-8 lg:px-8 mb-6">
        <div className="flex items-center gap-3">
          <button
            type="button"
            onClick={handleCancel}
            className="flex items-center justify-center rounded-lg border border-border px-3.5 py-2 text-[13px] font-semibold text-text-muted transition-colors hover:bg-gray-50 font-card"
          >
            ←
          </button>
          <h1 className="text-base font-bold text-text-dark font-heading">
            Create Impact Pool
          </h1>
        </div>
        <button
          type="submit"
          className="rounded-full bg-primary px-5 py-2 text-xs font-semibold text-white transition-all hover:bg-primary-dark shadow-[0_8px_20px_rgba(27,79,216,0.26)] font-card"
        >
          Preview
        </button>
      </div>

      <div className="flex flex-col xl:flex-row gap-8">
        {/* ── Left: Form ── */}
        <div className="flex-1 min-w-0 space-y-6">
          {/* Vetting info */}
          <InfoNote>
            <p className="font-bold mb-1.5">💡 How Vetting works</p>
            <div className="space-y-2 text-[12.5px]">
              {[
                "You submit your pool with cause details and supporting evidence",
                "PoolFi reviews within 24–48 hours",
                "Approved pools go live on the explore feed",
                "Withdrawals require community multi-sig approval",
              ].map((step, i) => (
                <div key={i} className="flex items-center gap-2.5">
                  <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary text-[13px] font-bold text-white font-card">
                    {i + 1}
                  </span>
                  <span>{step}</span>
                </div>
              ))}
            </div>
          </InfoNote>

          {/* STEP 1: Pool Basics */}
          <FormCard
            icon={<ChecklistIcon />}
            title="Pool Basics"
            desc="Tell us what this pool is for. Contributors will see these details when they open your link."
          >
            <div>
              <FormLabel htmlFor="pool-title">Pool Title</FormLabel>
              <input
                id="pool-title"
                type="text"
                value={form.title}
                onChange={update("title")}
                placeholder="e.g. clean water borehole for oguta community"
                className={`${inputCls} mt-2`}
              />
            </div>

            <div>
              <FormLabel htmlFor="pool-problem">Describe a problem</FormLabel>
              <textarea
                id="pool-problem"
                value={form.problem}
                onChange={update("problem")}
                placeholder="What problem are you solving? who does it affect? Be specific- contributors need to understand why this matters"
                className={`${textareaCls} mt-2`}
              />
            </div>

            <div>
              <FormLabel htmlFor="pool-money">
                How will the money be used?
              </FormLabel>
              <textarea
                id="pool-money"
                value={form.moneyUsage}
                onChange={update("moneyUsage")}
                placeholder="Break down how funds will be spent. e.g 400k - go for borehole drilling"
                className={`${textareaCls} mt-2`}
              />
            </div>

            <div>
              <FormLabel htmlFor="pool-location">Location/community</FormLabel>
              <input
                id="pool-location"
                type="text"
                value={form.location}
                onChange={update("location")}
                placeholder="e.g. oguta, imo state, Nigeria"
                className={`${inputCls} mt-2`}
              />
            </div>

            <div>
              <FormLabel htmlFor="pool-beneficiaries">Who benefits?</FormLabel>
              <input
                id="pool-beneficiaries"
                type="text"
                value={form.beneficiaries}
                onChange={update("beneficiaries")}
                placeholder="e.g. 3000+ residents of oguta community"
                className={`${inputCls} mt-2`}
              />
            </div>
          </FormCard>

          {/* STEP 2: Funding Details */}
          <FormCard
            icon={<MoneyIcon />}
            title="Funding Details"
            desc="Set your target and timeline. Contributions are open to everyone."
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div>
                <FormLabel htmlFor="pool-target">Funding Target (₦)</FormLabel>
                <div className="mt-2 flex rounded-[10px] border border-border overflow-hidden focus-within:border-primary focus-within:ring-2 focus-within:ring-primary/20 transition-all">
                  <span className="flex items-center border-r border-border bg-bg-page px-3.5 text-sm font-semibold text-text-muted font-card">
                    ₦
                  </span>
                  <input
                    id="pool-target"
                    type="text"
                    inputMode="numeric"
                    value={form.fundingTarget}
                    onChange={update("fundingTarget")}
                    placeholder="400,000"
                    className="flex-1 border-0 bg-white px-3.5 py-3 text-sm text-text-dark placeholder:text-placeholder font-card outline-none"
                  />
                </div>
              </div>

              <div>
                <FormLabel htmlFor="pool-deadline">Deadline</FormLabel>
                <input
                  id="pool-deadline"
                  type="date"
                  value={form.deadline}
                  onChange={update("deadline")}
                  className={`${inputCls} mt-2`}
                />
              </div>
            </div>

            <div>
              <FormLabel htmlFor="pool-contribution" optional>
                Suggested Contribution (₦)
              </FormLabel>
              <div className="mt-2 flex rounded-[10px] border border-border overflow-hidden focus-within:border-primary focus-within:ring-2 focus-within:ring-primary/20 transition-all">
                <span className="flex items-center border-r border-border bg-bg-page px-3.5 text-sm font-semibold text-text-muted font-card">
                  ₦
                </span>
                <input
                  id="pool-contribution"
                  type="text"
                  inputMode="numeric"
                  value={form.suggestedContribution}
                  onChange={update("suggestedContribution")}
                  placeholder="e.g 2,000 - contributors can give any amount"
                  className="flex-1 border-0 bg-white px-3.5 py-3 text-sm text-text-dark placeholder:text-placeholder font-card outline-none"
                />
              </div>
            </div>
          </FormCard>

          {/* STEP 3: Withdrawal Governance */}
          <FormCard
            icon={<GovernanceIcon />}
            title="Withdrawal Governance"
            desc="Impact pools use community multi-sig for all withdrawals."
          >
            <InfoNote>
              <p className="font-bold mb-1.5">
                How Multi-Sig Works on PoolFi
              </p>
              <p className="mb-3">
                When you request a withdrawal, PoolFi randomly selects
                contributors from your pool to review and approve the request.
                You cannot choose who approves — this prevents bias and ensures
                genuine community oversight.
              </p>
              <div className="flex items-start gap-2">
                <DiceIcon />
                <p className="font-bold">
                  Approvers are randomly selected from contributors — never
                  hand-picked by the creator
                </p>
              </div>
            </InfoNote>

            <div>
              <FormLabel htmlFor="pool-approvers">
                Approvers Required per Withdrawal
              </FormLabel>
              <select
                id="pool-approvers"
                value={form.approvers}
                onChange={update("approvers")}
                className={`${inputCls} mt-2 appearance-auto`}
              >
                <option>3 of 5 randomly selected contributors</option>
                <option>2 of 3 randomly selected contributors</option>
                <option>4 of 7 randomly selected contributors</option>
                <option>5 of 9 randomly selected contributors</option>
              </select>
            </div>
          </FormCard>

          {/* STEP 4: Supporting Evidence */}
          <FormCard
            icon={<EvidenceIcon />}
            title="Supporting Evidence"
            desc="Verified pools get more contributions. Upload proof of the problem — photos, documents, or links."
          >
            {/* Drop zone */}
            <FileUploadDropzone 
              onFilesChange={setEvidenceFiles}
              maxFiles={5}
              maxSizeMB={5}
            />

            <div>
              <FormLabel htmlFor="pool-reference" optional>
                Reference Link
              </FormLabel>
              <input
                id="pool-reference"
                type="url"
                value={form.referenceLink}
                onChange={update("referenceLink")}
                placeholder="e.g news article, community letter, social media posts"
                className={`${inputCls} mt-2`}
              />
            </div>
          </FormCard>

          {/* ── Form actions ── */}
          <div className="flex flex-col-reverse sm:flex-row gap-3 pt-2">
            <button
              type="button"
              onClick={handleCancel}
              className="flex-1 sm:flex-initial sm:w-[220px] rounded-[10px] border border-border bg-white py-3.5 text-sm font-semibold text-text-muted transition-colors hover:bg-gray-50 font-card"
            >
              Cancel
            </button>
            <button
              type="submit"
              disabled={isUploading}
              className={`flex-1 rounded-[10px] bg-primary py-3.5 text-sm font-semibold text-white transition-all shadow-[0_8px_20px_rgba(27,79,216,0.22)] font-card ${
                isUploading ? "opacity-70 cursor-not-allowed" : "hover:bg-primary-dark"
              }`}
            >
              {isUploading ? "Uploading..." : "Submit for Review →"}
            </button>
          </div>
        </div>

        {/* ── Right: Live Preview (desktop only) ── */}
        <div className="hidden xl:block w-[340px] shrink-0">
          <div className="sticky top-[80px] space-y-3">
            {/* Label */}
            <div className="flex items-center gap-1.5">
              <EyeIcon />
              <span className="text-[13px] font-bold text-text-dark font-card">
                Live Preview
              </span>
              <span className="text-[11px] text-text-muted font-card">
                What contributors see
              </span>
            </div>

            <LivePreviewCard
              title={form.title}
              description={form.problem}
              target={form.fundingTarget}
            />

            <InfoNote>
              After submission, PoolFi reviews your pool within 24–48 hours.
              Approved pools appear on the explore feed and can be shared
              publicly.
            </InfoNote>
          </div>
        </div>
      </div>

      {showSuccessModal && (
        <SuccessModal onClose={() => setShowSuccessModal(false)} />
      )}
    </form>
  );
}
