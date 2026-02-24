export default function SectionDivider({ className = "" }: { className?: string }) {
  return (
    <div className={`flex items-center gap-4 my-2 ${className}`}>
      <div className="flex-1 h-px" style={{ background: "linear-gradient(90deg, transparent, rgba(212,175,55,0.2))" }} />
      <span className="text-sm" style={{ color: "var(--gold)" }}>✦</span>
      <div className="flex-1 h-px" style={{ background: "linear-gradient(90deg, rgba(212,175,55,0.2), transparent)" }} />
    </div>
  );
}
