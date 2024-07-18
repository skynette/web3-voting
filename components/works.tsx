import { CheckIcon, VoteIcon, WalletIcon } from 'lucide-react'
import React from 'react'

const Works = () => {
    return (
        <section className="bg-muted py-12 md:py-20 lg:py-24" id="works">
            <div className="container mx-auto px-4 md:px-6">
                <div className="grid md:grid-cols-2 gap-8">
                    <div>
                        <h2 className="text-2xl md:text-3xl font-bold mb-4">How to Vote</h2>
                        <div className="space-y-4">
                            <div className="flex items-start gap-4">
                                <WalletIcon className="w-8 h-8 text-primary" />
                                <div>
                                    <h3 className="text-lg font-semibold">Connect Your Wallet</h3>
                                    <p className="text-muted-foreground">
                                        Connect your web3 wallet to participate in the voting process.
                                    </p>
                                </div>
                            </div>
                            <div className="flex items-start gap-4">
                                <VoteIcon className="w-8 h-8 text-primary" />
                                <div>
                                    <h3 className="text-lg font-semibold">Cast Your Vote</h3>
                                    <p className="text-muted-foreground">
                                        Review the event details and cast your vote using your connected wallet.
                                    </p>
                                </div>
                            </div>
                            <div className="flex items-start gap-4">
                                <CheckIcon className="w-8 h-8 text-primary" />
                                <div>
                                    <h3 className="text-lg font-semibold">Confirm Your Vote</h3>
                                    <p className="text-muted-foreground">
                                        Confirm your vote on the blockchain to make your voice heard.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="hidden md:block">
                        <img src="https://plus.unsplash.com/premium_photo-1708938893183-ef7b1362c33b?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" width={600} height={400} alt="How to Vote" className="rounded-xl" />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Works