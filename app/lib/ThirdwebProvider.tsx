'use client'

import { ThirdwebProvider } from "@thirdweb-dev/react";
import { OpSepoliaTestnet } from "@thirdweb-dev/chains";
import Next13ProgressBar from 'next13-progressbar';

export default function ProvideThirdweb({ children }: { children: React.ReactNode }) {

    return (
        <ThirdwebProvider
            activeChain={OpSepoliaTestnet}
            clientId={process.env.NEXT_PUBLIC_CLIENT_ID}
        >
            {children}
            <Next13ProgressBar height="4px" color="#005f8f" options={{ showSpinner: false }} showOnShallow />
        </ThirdwebProvider>
    );
}
