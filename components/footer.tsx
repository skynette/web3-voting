import Link from 'next/link'
import React from 'react'

const Footer = () => {
    return (
        <footer className="bg-muted p-6 md:py-12 w-full">
            <div className="container max-w-7xl grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-8 text-sm mx-auto">
                <div className="grid gap-1">
                    <h3 className="font-semibold">Company</h3>
                    <Link href="#" prefetch={false}>
                        About Us
                    </Link>
                    <Link href="#" prefetch={false}>
                        Our Team
                    </Link>
                    <Link href="#" prefetch={false}>
                        Careers
                    </Link>
                    <Link href="#" prefetch={false}>
                        News
                    </Link>
                </div>
                <div className="grid gap-1">
                    <h3 className="font-semibold">Product</h3>
                    <Link href="#" prefetch={false}>
                        Features
                    </Link>
                    <Link href="#" prefetch={false}>
                        Pricing
                    </Link>
                    <Link href="#" prefetch={false}>
                        Integrations
                    </Link>
                    <Link href="#" prefetch={false}>
                        Roadmap
                    </Link>
                </div>
                <div className="grid gap-1">
                    <h3 className="font-semibold">Resources</h3>
                    <Link href="#" prefetch={false}>
                        Documentation
                    </Link>
                    <Link href="#" prefetch={false}>
                        Blog
                    </Link>
                    <Link href="#" prefetch={false}>
                        Community
                    </Link>
                    <Link href="#" prefetch={false}>
                        Support
                    </Link>
                </div>
                <div className="grid gap-1">
                    <h3 className="font-semibold">Legal</h3>
                    <Link href="#" prefetch={false}>
                        Privacy Policy
                    </Link>
                    <Link href="#" prefetch={false}>
                        Terms of Service
                    </Link>
                    <Link href="#" prefetch={false}>
                        Cookie Policy
                    </Link>
                    <Link href="#" prefetch={false}>
                        Compliance
                    </Link>
                </div>
                <div className="grid gap-1">
                    <h3 className="font-semibold">Contact</h3>
                    <Link href="#" prefetch={false}>
                        Sales
                    </Link>
                    <Link href="#" prefetch={false}>
                        Support
                    </Link>
                    <Link href="#" prefetch={false}>
                        Partnerships
                    </Link>
                    <Link href="#" prefetch={false}>
                        Press
                    </Link>
                </div>
            </div>
        </footer>
    )
}

export default Footer