'use client'

import { ThirdwebProvider } from "@thirdweb-dev/react";
import { OpSepoliaTestnet } from "@thirdweb-dev/chains";
import Next13ProgressBar from 'next13-progressbar';
import { Toaster } from 'react-hot-toast';
export default function ProvideThirdweb({ children }: { children: React.ReactNode }) {

    return (
        <ThirdwebProvider
            activeChain={OpSepoliaTestnet}
            clientId={process.env.NEXT_PUBLIC_CLIENT_ID}
        >
            <Toaster/>
            {children}
            <Next13ProgressBar height="4px" color="#005f8f" options={{ showSpinner: false }} showOnShallow />
        </ThirdwebProvider>
    );
}
