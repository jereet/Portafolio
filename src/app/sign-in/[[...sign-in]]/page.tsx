import { SignIn } from "@clerk/nextjs";

export const instant = false;

export default function SignInPage() {
  return (
    <div className="flex min-h-screen items-center justify-center px-4 py-24">
      <SignIn />
    </div>
  );
}
