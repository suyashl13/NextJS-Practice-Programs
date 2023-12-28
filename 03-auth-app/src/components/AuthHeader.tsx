'use client';
import { signIn, signOut } from '@/actions';
import { Avatar, Button, NavbarItem, Popover, PopoverContent, PopoverTrigger, Spinner } from '@nextui-org/react';
import { useSession } from 'next-auth/react';
import React from 'react'

export default function AuthHeader() {
  const session = useSession();

  let authContent: React.ReactNode;

  if (session.status === 'loading') {
    return <Spinner/>
  } else if (session?.data?.user) {
    authContent = (
      <NavbarItem>
        <Popover>
          <PopoverTrigger>
            <Avatar src={session.data.user.image!} />
          </PopoverTrigger>
          <PopoverContent>
            <div className="p-4">
              <form action={signOut}>
                <Button type="submit" variant="flat" color="primary">
                  Sign Out
                </Button>
              </form>
            </div>
          </PopoverContent>
        </Popover>
      </NavbarItem>
    );
  } else {
    authContent = (
      <>
        <NavbarItem>
          <form action={signIn}>
            <Button type="submit" variant="bordered" color="primary">
              Sign In
            </Button>
          </form>
        </NavbarItem>
        <NavbarItem>
          <Button type="submit" variant="flat" color="primary">
            Sign Up
          </Button>
        </NavbarItem>
      </>
    );
  }

  return authContent;
}
