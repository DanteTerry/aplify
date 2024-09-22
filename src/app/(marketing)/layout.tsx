import Navbar from "@/components/ui/ux/Navbar";

function layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="h-full w-full">
      <Navbar />
      {children}
    </div>
  );
}
export default layout;
