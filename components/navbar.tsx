'use client'

import { MountainIcon } from 'lucide-react'
import React, { useState } from 'react'
import { Button } from './ui/button'
import { useMetamask, useAddress, useDisconnect, useWallet } from '@thirdweb-dev/react'
import { Link as ScrollLink } from 'react-scroll'

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
            <a href="#" className="flex items-center gap-2">
                <MountainIcon className="w-6 h-6" />
                <span className="font-semibold text-lg">Web3 Voting</span>
            </a>
            <nav className="hidden md:flex items-center gap-6">
                <ScrollLink
                    to="polls"
                    smooth={true}
                    duration={500}
                    className="cursor-pointer text-muted-foreground hover:text-foreground"
                >
                    Polls
                </ScrollLink>
                <ScrollLink
                    to="works"
                    smooth={true}
                    duration={500}
                    className="cursor-pointer text-muted-foreground hover:text-foreground"
                >
                    How it Works
                </ScrollLink>
                <ScrollLink
                    to="about"
                    smooth={true}
                    duration={500}
                    className="cursor-pointer text-muted-foreground hover:text-foreground"
                >
                    About
                </ScrollLink>
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
