function DarkModeProvider({ children }: { children: React.ReactNode }) {
  return <div className="h-full w-full dark:bg-[#0A0A0A]">{children}</div>;
}
export default DarkModeProvider;
