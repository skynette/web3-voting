import Polls from "@/components/polls"
import Hero from "@/components/hero"
import Works from "@/components/works"
import About from "@/components/about"

export default function Home() {
    return (
        <div className="flex flex-col min-h-[100dvh]">
            <main className="flex-1">
                <Hero />
                <About />
                <Polls />
                <Works />
            </main>
        </div>
    )
}
