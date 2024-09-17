import Image from "next/image";

function Home() {
  return (
    <div className="flex h-screen w-full items-center justify-center">
      <div className="flex gap-5">
        <Image src={"/icons/logo.png"} width={50} height={0} alt="logo" />
        <h1 className="text-3xl">Welcome to Aplify 👋</h1>
      </div>
    </div>
  );
}
export default Home;
