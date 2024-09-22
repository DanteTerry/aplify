import Image from "next/image";

function AuthWrapper({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex h-screen w-full items-center justify-center bg-gradient-to-r from-blue-400 to-blue-600 p-4 dark:bg-gradient-to-r dark:from-blue-800 dark:to-blue-900">
      <div className="grid w-full max-w-6xl grid-cols-1 gap-x-6 rounded-xl bg-[#FAF9F6] p-4 dark:bg-gray-900 md:grid-cols-2 md:p-6">
        <div className="flex-grow px-2 md:px-10">{children}</div>
        <div className="hidden h-full w-full flex-col justify-center gap-3 rounded-xl bg-[#4353EF] p-4 text-white dark:bg-[#2D3A91] md:flex md:p-6">
          <h4 className="text-xl font-bold leading-tight md:text-2xl md:leading-snug">
            Take control of your job applications
          </h4>
          <p className="text-base">
            Track, manage, and organize your job hunt effortlessly with Aplify.
            <br className="hidden md:block" /> Sign up now to get started!
          </p>
          <div className="mt-4 self-center">
            <Image
              width={450}
              height={450}
              alt="project management"
              className="h-auto max-w-full"
              src={"/images/pm.png"}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default AuthWrapper;
