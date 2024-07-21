'use client'

import { MountainIcon } from 'lucide-react'
import React, { useState } from 'react'
import { Button } from './ui/button'
import { useMetamask, useAddress, useDisconnect, useWallet } from '@thirdweb-dev/react'
import { Link as ScrollLink } from 'react-scroll'
import Link from 'next/link'

const Navbar = () => {
    const connectWallet = useMetamask()
    const address = useAddress();
    const disconnect = useDisconnect();

    return (
        <header className="bg-background border-b px-4 md:px-6 py-4 flex items-center justify-between">
            <a href="/" className="flex items-center gap-2">
                <MountainIcon className="w-6 h-6" />
                <span className="font-semibold text-lg">Web3 Voting</span>
            </a>
            <nav className="hidden md:flex items-center gap-6">
                <Link
                    prefetch={false}
                    href="/polls"
                    className="cursor-pointer text-muted-foreground hover:text-foreground"
                >
                    Polls
                </Link>
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
                <Button onClick={() => disconnect()}>{address.substring(0, 4)}*****{address.substring(address.length - 4, address.length)}</Button>
            ) : (
                <Button onClick={() => connectWallet()}>Connect Wallet</Button>
            )}
        </header>
    )
}

export default Navbar
