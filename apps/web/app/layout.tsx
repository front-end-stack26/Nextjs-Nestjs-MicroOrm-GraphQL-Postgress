'use client';

import React from 'react';
import { ApolloProvider } from '@apollo/client/react';
import { client } from '../lib/apolloClient';
import Navbar from './components/Navbar';
import '@radix-ui/themes/styles.css';
import { Theme } from '@radix-ui/themes';
import "./globals.css";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html>
      <body>
        <ApolloProvider client={client}>
          <Navbar />
          <Theme appearance="light" accentColor="blue" radius="large">
            {children}
          </Theme>
        </ApolloProvider>
      </body>
    </html>
  )
}