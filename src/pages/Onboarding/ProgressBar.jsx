export default function ProgressBar({ step }) {
  const widths = ['25%', '75%', '100%'];
  return (
    <div className="mx-7 h-[2px] rounded-full bg-white/5 flex-shrink-0 overflow-hidden">
      <div
        className="h-full rounded-full bg-[#4ade80] transition-all duration-500 ease-in-out"
        style={{ width: widths[step] }}
      />
    </div>
  );
}