import { useRouter } from "next/navigation";

function StatusTag({
  status,
}: {
  status: "Done" | "Pending" | "Waiting";
}) {
  const styles = {
    Done: "bg-success-bg text-success",
    Pending: "bg-[#fff8e1] text-warning", // Using a light yellow/orange
    Waiting: "bg-primary-light text-primary",
  };

  return (
    <span
      className={`px-2.5 py-1 rounded-full text-[10px] font-bold tracking-wide uppercase ${styles[status]}`}
    >
      {status}
    </span>
  );
}

function StepRow({
  title,
  status,
}: {
  title: string;
  status: "Done" | "Pending" | "Waiting";
}) {
  return (
    <div className="flex items-center justify-between rounded-xl bg-bg-page px-4 py-3.5">
      <span className="text-[13px] font-bold text-text-dark font-card">
        {title}
      </span>
      <StatusTag status={status} />
    </div>
  );
}

export default function SuccessModal({
  onClose,
}: {
  onClose?: () => void;
}) {
  const router = useRouter();

  const handleBackToPools = () => {
    if (onClose) onClose();
    router.push("/my-pools");
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-text-dark/40 backdrop-blur-sm px-4">
      <div className="w-full max-w-[560px] rounded-3xl bg-white p-8 sm:p-10 shadow-2xl relative animate-in fade-in zoom-in duration-200">
        <div className="flex flex-col items-center text-center">
          {/* Icon */}
          <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-full bg-primary-light text-primary">
            <svg
              width="24"
              height="24"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z" />
              <polyline points="14 2 14 8 20 8" />
              <line x1="16" y1="13" x2="8" y2="13" />
              <line x1="16" y1="17" x2="8" y2="17" />
              <polyline points="10 9 9 9 8 9" />
            </svg>
          </div>

          {/* Text */}
          <h2 className="mb-2 text-xl font-bold text-text-dark font-heading">
            Submitted for Review
          </h2>
          <p className="mb-8 text-[13.5px] leading-relaxed text-text-muted font-card max-w-[380px]">
            Your impact pool has been submitted. Here&apos;s what happens next while you
            wait
          </p>

          {/* Steps */}
          <div className="w-full space-y-2 mb-8">
            <StepRow title="Pool Successfully Submitted" status="Done" />
            <StepRow title="PoolFi review (24-48 hrs)" status="Pending" />
            <StepRow title="Pool goes live on explore feed" status="Waiting" />
            <StepRow title="Share link sent to your account" status="Waiting" />
          </div>

          {/* Action */}
          <button
            onClick={handleBackToPools}
            className="w-full sm:w-[320px] rounded-[10px] bg-primary py-3.5 text-sm font-semibold text-white transition-all hover:bg-primary-dark shadow-[0_8px_20px_rgba(27,79,216,0.22)] font-card"
          >
            Back to My Pools →
          </button>
        </div>
      </div>
    </div>
  );
}
