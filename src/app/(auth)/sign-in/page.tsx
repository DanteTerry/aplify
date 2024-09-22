import Link from "next/link";
import AuthWrapper from "../_components/AuthWrapper";
import Image from "next/image";
import CardWrapper from "../_components/CardWrapper";
import LoginForm from "../_components/LoginForm";

function SignInPage() {
  return (
    <AuthWrapper>
      <Link href={"/"}>
        <Image src="/icons/logo.png" alt="logo" height={40} width={40} />
      </Link>
      <CardWrapper
        secondLabel="Enter your credentials to access your account."
        showSocial
        backButtonHref="/sign-up"
        backButtonLabel="Don't have an account? Sign up here."
        headerLabel="Welcome back to Aplify"
      >
        <LoginForm />
      </CardWrapper>
    </AuthWrapper>
  );
}

export default SignInPage;
