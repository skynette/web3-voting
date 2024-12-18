import React from 'react'

const About = () => {
    return (
        <section className="py-12 md:py-20 lg:py-24" id="about">
            <div className="container mx-auto px-4 md:px-6">
                <h2 className="text-2xl md:text-3xl font-bold mb-8">About</h2>
                <div className="grid md:grid-cols-2 gap-8">
                    <div>
                        <p className="text-muted-foreground md:text-lg">
                            Web3 Voting is a community-driven platform that allows users to participate in the decision-making
                            process of our web3 project. By voting on various proposals, you can help shape the future of our
                            project and contribute to its growth.
                        </p>
                        <p className="text-muted-foreground md:text-lg mt-4">
                            Our mission is to create a transparent and inclusive governance model that empowers our community to
                            have a direct say in the direction of our project. We believe that by leveraging the power of
                            blockchain technology, we can build a more decentralized and democratic ecosystem.
                        </p>
                    </div>
                    <div className="hidden md:block">
                        <img src="https://images.unsplash.com/photo-1599579524220-8e32e6e602d0?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" width={600} height={400} alt="About" className="rounded-xl" />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About