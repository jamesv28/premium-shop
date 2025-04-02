"use client";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useActionState } from "react";
import { signInDefaultValues } from "@/lib/globals";
import { Button } from "@/components/ui/button";
import { useFormStatus } from "react-dom";
import Link from "next/link";
import { signInWithCredentials } from "@/lib/actions/user.actions";

const CredentialsSigninForm = () => {
  const [data, action] = useActionState(signInWithCredentials, {
    success: false,
    message: "",
  });

  const SignInButton = () => {
    const { pending } = useFormStatus();
    return (
      <Button disabled={pending} className="w-full bg-violet-700 text-white">
        {pending ? "Signing In..." : "Sign In"}
      </Button>
    );
  };
  return (
    <form action={action}>
      <div className="mb-6">
        <Label htmlFor="email">Email</Label>
        <Input
          id="email"
          name="email"
          type="email"
          className="mb-2 mt-2"
          required
          autoComplete="email"
          defaultValue={signInDefaultValues.email}
        />
      </div>
      <div className="mb-6">
        <Label htmlFor="password">Password</Label>
        <Input
          id="password"
          name="password"
          type="password"
          required
          className="mb-2 mt-2"
          autoComplete="password"
          defaultValue={signInDefaultValues.password}
        />
      </div>
      <div>
        <SignInButton />
        {data && !data.success && (
          <div className="text-center text-red-700">{data.message}</div>
        )}
        <div className="text-sm text-center text-forward-muted-foreground">
          Don&apos;t have an account?
          <Link href="/sign-up" target="_self" className="link">
            Sign Up here.
          </Link>
        </div>
      </div>
    </form>
  );
};

export default CredentialsSigninForm;
