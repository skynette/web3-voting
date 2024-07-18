'use client'

import { ThirdwebProvider } from "@thirdweb-dev/react";
import { OpSepoliaTestnet } from "@thirdweb-dev/chains";

export default function ProvideThirdweb({ children }: { children: React.ReactNode }) {

    return (
        <ThirdwebProvider
            activeChain={OpSepoliaTestnet}
            clientId={process.env.NEXT_PUBLIC_CLIENT_ID}
        >
            {children}
        </ThirdwebProvider>
    );
}
