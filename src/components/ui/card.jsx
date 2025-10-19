export function Card({ children, className = "" }) {
  return (
    <div
      className={`rounded-2xl border border-[#C0C5CC]/60 
      bg-gradient-to-br from-[#101D3A] to-[#1B2D57]
      shadow-[0_8px_24px_rgba(0,0,0,0.25)]
      backdrop-blur-md p-6 text-[#E8ECF4]
      ${className}`}
    >
      {children}
    </div>
  );
}

export function CardContent({ children, className = "" }) {
  return (
    <div className={`p-3 leading-relaxed text-[15px] ${className}`}>
      {children}
    </div>
  );
}
