export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex min-h-screen bg-[#005AE2] p-2">
      {children}
    </div>
  );
}
