import { Button } from "@/components/ui/button"

export default function Vote() {
    return (
        <div className="flex flex-col min-h-dvh">
            <main className="flex-1 py-12 px-6 container mx-auto">
                <div className="mb-12 bg-card rounded-lg shadow-md p-6">
                    <h2 className="text-xl font-bold mb-4">Total Votes</h2>
                    <div className="text-4xl font-bold">323</div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    <div className="bg-card rounded-lg shadow-md p-6 space-y-4">
                        <h2 className="text-xl font-bold">Option 1</h2>
                        <p className="text-muted-foreground">This is a brief description of the first voting option.</p>
                        <div className="flex items-center justify-between">
                            <span className="text-lg font-medium">Vote Count: 123</span>
                            <Button>Vote</Button>
                        </div>
                    </div>
                    <div className="bg-card rounded-lg shadow-md p-6 space-y-4">
                        <h2 className="text-xl font-bold">Option 2</h2>
                        <p className="text-muted-foreground">This is a brief description of the second voting option.</p>
                        <div className="flex items-center justify-between">
                            <span className="text-lg font-medium">Vote Count: 87</span>
                            <Button>Vote</Button>
                        </div>
                    </div>
                    <div className="bg-card rounded-lg shadow-md p-6 space-y-4">
                        <h2 className="text-xl font-bold">Option 3</h2>
                        <p className="text-muted-foreground">This is a brief description of the third voting option.</p>
                        <div className="flex items-center justify-between">
                            <span className="text-lg font-medium">Vote Count: 54</span>
                            <Button>Vote</Button>
                        </div>
                    </div>
                    <div className="bg-card rounded-lg shadow-md p-6 space-y-4">
                        <h2 className="text-xl font-bold">Option 4</h2>
                        <p className="text-muted-foreground">This is a brief description of the fourth voting option.</p>
                        <div className="flex items-center justify-between">
                            <span className="text-lg font-medium">Vote Count: 32</span>
                            <Button>Vote</Button>
                        </div>
                    </div>
                    <div className="bg-card rounded-lg shadow-md p-6 space-y-4">
                        <h2 className="text-xl font-bold">Option 5</h2>
                        <p className="text-muted-foreground">This is a brief description of the fifth voting option.</p>
                        <div className="flex items-center justify-between">
                            <span className="text-lg font-medium">Vote Count: 19</span>
                            <Button>Vote</Button>
                        </div>
                    </div>
                    <div className="bg-card rounded-lg shadow-md p-6 space-y-4">
                        <h2 className="text-xl font-bold">Option 6</h2>
                        <p className="text-muted-foreground">This is a brief description of the sixth voting option.</p>
                        <div className="flex items-center justify-between">
                            <span className="text-lg font-medium">Vote Count: 8</span>
                            <Button>Vote</Button>
                        </div>
                    </div>
                </div>

            </main>
        </div>
    )
}