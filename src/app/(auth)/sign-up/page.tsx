import Link from "next/link";
import AuthWrapper from "../_components/AuthWrapper";
import CardWrapper from "../_components/CardWrapper";
import Image from "next/image";
import RegisterForm from "../_components/RegisterForm";

function SignUpPage() {
  return (
    <AuthWrapper>
      <div className="w-max">
        <Link href={"/"} className="w-max">
          <Image src="/icons/logo.png" alt="logo" height={40} width={40} />
        </Link>
      </div>
      <CardWrapper
        secondLabel="Create an account and manage your job applications."
        showSocial
        backButtonHref="/sign-in"
        backButtonLabel="Already have an account?"
        headerLabel="Join Aplify Today"
      >
        <RegisterForm />
      </CardWrapper>
    </AuthWrapper>
  );
}
export default SignUpPage;
