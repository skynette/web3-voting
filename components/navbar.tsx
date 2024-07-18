'use client'

import { MountainIcon } from 'lucide-react'
import Link from 'next/link'
import React, { useState } from 'react'
import { Button } from './ui/button'
import { useMetamask, useAddress, useDisconnect, useWallet } from '@thirdweb-dev/react'

const Navbar = () => {
    const connectWallet = useMetamask()
    const address = useAddress();
    const disconnect = useDisconnect();
    const walletInstance = useWallet();

    const [isVerified, setIsVerified] = useState(false);

    const signMessage = () => walletInstance?.signMessage("I am the owner of the wallet")
    const verifyStatus = async (signature: string, address: string) => {
        const res = await walletInstance?.verifySignature("I am the owner of the wallet", signature, address)
        console.log({ res })
        return res
    }

    const handleVerify = async () => {
        const msg = await signMessage();
        const res = await verifyStatus(msg ?? '', address!);
        if (res) {
            setIsVerified(true);
        }
    }

    return (
        <header className="bg-background border-b px-4 md:px-6 py-4 flex items-center justify-between">
            <Link href="#" className="flex items-center gap-2" prefetch={false}>
                <MountainIcon className="w-6 h-6" />
                <span className="font-semibold text-lg">Web3 Voting</span>
            </Link>
            <nav className="hidden md:flex items-center gap-6">
                <Link href="#events" className="text-muted-foreground hover:text-foreground" prefetch={false}>
                    Events
                </Link>
                <Link href="#" className="text-muted-foreground hover:text-foreground" prefetch={false}>
                    How it Works
                </Link>
                <Link href="#" className="text-muted-foreground hover:text-foreground" prefetch={false}>
                    About
                </Link>
            </nav>
            {address ? (
                isVerified ? (
                    <Button onClick={() => disconnect()}>{address.substring(0, 4)}*****{address.substring(address.length - 4, address.length)}</Button>
                ) : (
                    <Button onClick={handleVerify}>Verify</Button>
                )
            ) : (
                <Button onClick={() => connectWallet()}>Connect Wallet</Button>
            )}
        </header>
    )
}

export default Navbar
