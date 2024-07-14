'use client'

import { useAccount, useEnsName } from 'wagmi'

export default function Home() {
  const { address } = useAccount()
  
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      Everything works fam
    </main>
  );
}
