'use client'
import React from 'react';
import { signIn } from 'next-auth/react';
import { Button } from '../ui/button';
import { DiscordLogoIcon } from '@radix-ui/react-icons';

const SignInButton = () => (
  <Button onClick={() => signIn('discord')}>
    <DiscordLogoIcon width={20} height={20} />&nbsp;&nbsp;Sign in
  </Button>
);

export default SignInButton;
