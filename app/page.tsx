import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "@/components/ui/select"
import { Card, CardContent } from "@/components/ui/card"
import { CheckIcon, MountainIcon, VoteIcon, WalletIcon } from "lucide-react"

export default function Home() {
  return (
    <div className="flex flex-col min-h-[100dvh]">
      <main className="flex-1">
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
                <img src="/placeholder.svg" width={600} height={400} alt="Hero" className="rounded-xl" />
              </div>
            </div>
          </div>
        </section>
        <section className="py-12 md:py-20 lg:py-24" id="events">
          <div className="container mx-auto px-4 md:px-6">
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-2xl md:text-3xl font-bold">Upcoming Events</h2>
              <div className="flex items-center gap-4">
                <Select>
                  <SelectTrigger className="w-[180px]">
                    <SelectValue placeholder="Filter by" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All</SelectItem>
                    <SelectItem value="category1">Category 1</SelectItem>
                    <SelectItem value="category2">Category 2</SelectItem>
                    <SelectItem value="category3">Category 3</SelectItem>
                  </SelectContent>
                </Select>
                <Select>
                  <SelectTrigger className="w-[180px]">
                    <SelectValue placeholder="Sort by" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="newest">Newest</SelectItem>
                    <SelectItem value="oldest">Oldest</SelectItem>
                    <SelectItem value="popular">Most Popular</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              <Card>
                <img src="/placeholder.svg" width={400} height={250} alt="Event Thumbnail" className="rounded-t-lg" />
                <CardContent className="p-4 space-y-2">
                  <h3 className="text-lg font-semibold">Event Title</h3>
                  <p className="text-muted-foreground">A brief description of the event goes here.</p>
                  <Button className="w-full">Vote</Button>
                </CardContent>
              </Card>
              <Card>
                <img src="/placeholder.svg" width={400} height={250} alt="Event Thumbnail" className="rounded-t-lg" />
                <CardContent className="p-4 space-y-2">
                  <h3 className="text-lg font-semibold">Event Title</h3>
                  <p className="text-muted-foreground">A brief description of the event goes here.</p>
                  <Button className="w-full">Vote</Button>
                </CardContent>
              </Card>
              <Card>
                <img src="/placeholder.svg" width={400} height={250} alt="Event Thumbnail" className="rounded-t-lg" />
                <CardContent className="p-4 space-y-2">
                  <h3 className="text-lg font-semibold">Event Title</h3>
                  <p className="text-muted-foreground">A brief description of the event goes here.</p>
                  <Button className="w-full">Vote</Button>
                </CardContent>
              </Card>
              <Card>
                <img src="/placeholder.svg" width={400} height={250} alt="Event Thumbnail" className="rounded-t-lg" />
                <CardContent className="p-4 space-y-2">
                  <h3 className="text-lg font-semibold">Event Title</h3>
                  <p className="text-muted-foreground">A brief description of the event goes here.</p>
                  <Button className="w-full">Vote</Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
        <section className="bg-muted py-12 md:py-20 lg:py-24">
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
                <img src="/placeholder.svg" width={600} height={400} alt="How to Vote" className="rounded-xl" />
              </div>
            </div>
          </div>
        </section>
        <section className="py-12 md:py-20 lg:py-24">
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
                <img src="/placeholder.svg" width={600} height={400} alt="About" className="rounded-xl" />
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}
