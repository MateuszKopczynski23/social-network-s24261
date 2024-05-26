import { NextPage } from 'next';
import Link from 'next/link';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

const RegisterPage: NextPage = () => {
  return (
    <div className="mx-auto grid w-[350px] gap-6">
      <div className="grid gap-2 text-center">
        <h1 className="text-3xl font-bold">Register</h1>
        <p className="text-balance text-muted-foreground">
          Enter your details below to create an account
        </p>
      </div>
      <div className="grid gap-4">
        <div className="grid gap-2">
          <Label htmlFor="name">Name</Label>
          <Input
            id="name"
            type="text"
            required
          />
        </div>
        <div className="grid gap-2">
          <Label htmlFor="email">Email</Label>
          <Input
            id="email"
            type="email"
            required
          />
        </div>
        <div className="grid gap-4 sm:grid-cols-2">
          <div className="grid gap-2">
            <div className="flex items-center">
              <Label htmlFor="password">Password</Label>
            </div>
            <Input
              id="password"
              type="password"
              required
            />
          </div>
          <div className="grid gap-2">
            <div className="flex items-center">
              <Label htmlFor="confirm_password">Confirm password</Label>
            </div>
            <Input
              id="confirm_password"
              type="password"
              required
            />
          </div>
        </div>
        <Button
          type="submit"
          className="w-full"
        >
          Sign up
        </Button>
      </div>
      <div className="mt-4 text-center text-sm">
        Already have an account?{' '}
        <Link
          href="/login"
          className="underline"
        >
          Sign in
        </Link>
      </div>
    </div>
  );
};

export default RegisterPage;
