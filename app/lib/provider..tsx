// 'use client'

// import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
// import { WagmiProvider } from 'wagmi';

// import { getDefaultConfig, RainbowKitProvider, } from '@rainbow-me/rainbowkit';
// import { mainnet, polygon, optimism, arbitrum, base, sepolia } from 'wagmi/chains';
// import { http, createConfig } from 'wagmi'

// import '@rainbow-me/rainbowkit/styles.css';


// const config = getDefaultConfig({
//     appName: 'My RainbowKit App',
//     projectId: 'YOUR_PROJECT_ID',
//     chains: [sepolia],
//     ssr: true, // If your dApp uses server side rendering (SSR)
//     transports: {
//         [mainnet.id]: http(),
//     },
// });

// export default function Providers({ children }: { children: React.ReactNode }) {
//     const queryClient = new QueryClient();

//     return (
//         <WagmiProvider config={config}>
//             <QueryClientProvider client={queryClient}>
//                 <RainbowKitProvider>
//                     {children}
//                 </RainbowKitProvider>
//             </QueryClientProvider>
//         </WagmiProvider>
//     );
// }