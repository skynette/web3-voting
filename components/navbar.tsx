import { MountainIcon } from 'lucide-react'
import Link from 'next/link'
import React from 'react'
import { Button } from './ui/button'

const Navbar = () => {
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
            <Button>Connect Wallet</Button>
        </header>
    )
}

export default Navbar