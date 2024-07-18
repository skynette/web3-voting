import React from 'react'
import { Button } from './ui/button'

const Hero = () => {
    return (
        <section className="bg-muted py-12 md:py-20 lg:py-24">
            <div className="container mx-auto px-4 md:px-6">
                <div className="grid md:grid-cols-2 gap-8 items-center">
                    <div className="space-y-4">
                        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight">
                            Vote on the Future of Web3
                        </h1>
                        <p className="text-muted-foreground md:text-lg">
                            Participate in our community-driven voting events and help shape the direction of our web3 project.
                        </p>
                        <Button>Participate Now</Button>
                    </div>
                    <div className="hidden md:block">
                        <img src="https://images.unsplash.com/photo-1597700331582-aab3614b3c0c?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" width={600} height={400} alt="Hero" className="rounded-xl" />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Hero