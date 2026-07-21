import { cn } from "@/lib/utils";

export function Textarea({
  className,
  ...props
}: React.TextareaHTMLAttributes<HTMLTextAreaElement>) {
  return (
    <textarea
      className={cn(
        "flex min-h-[60px] w-full rounded-lg border border-slate-700 bg-[#0B0F19] px-3 py-2 text-sm text-slate-200 transition-colors placeholder:text-slate-600 focus:outline-none focus:border-ring disabled:cursor-not-allowed disabled:opacity-50",
        className
      )}
      {...props}
    />
  );
}