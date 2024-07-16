import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"

export default function Login() {
    return (
        <div className="flex flex-col min-h-dvh container mx-auto">
            <section className="w-full py-12 md:py-24 lg:py-32">
                <div className="container px-4 md:px-6 space-y-10 xl:space-y-16">
                    <div className="grid max-w-[1300px] mx-auto gap-4 px-4 sm:px-6 md:px-10 md:grid-cols-2 md:gap-16">
                        <div>
                            <h1 className="lg:leading-tighter text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl xl:text-[3.4rem] 2xl:text-[3.75rem]">
                                Secure and Transparent Voting
                            </h1>
                            <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                                Our web3 voting application empowers you to participate in secure and transparent decision-making
                                processes.
                            </p>
                        </div>
                        <div className="flex flex-col items-start space-y-4">
                            <Card className="w-full max-w-md">
                                <CardHeader className="space-y-1">
                                    <CardTitle className="text-2xl">Login</CardTitle>
                                    <CardDescription>Enter your email or username and password to access your account.</CardDescription>
                                </CardHeader>
                                <CardContent className="space-y-4">
                                    <div className="space-y-2">
                                        <Label htmlFor="email">Email or Username</Label>
                                        <Input id="email" type="text" placeholder="example@domain.com" required />
                                    </div>
                                    <div className="space-y-2">
                                        <Label htmlFor="password">Password</Label>
                                        <Input id="password" type="password" required />
                                    </div>
                                    <Link href="#" className="text-xs text-muted-foreground hover:underline" prefetch={false}>
                                        Forgot password?
                                    </Link>
                                </CardContent>
                                <CardFooter>
                                    <Button className="w-full">Sign in</Button>
                                </CardFooter>
                            </Card>
                            {/* <Card className="w-full max-w-md">
                                <CardHeader className="space-y-1">
                                    <CardTitle className="text-2xl">Create an account</CardTitle>
                                    <CardDescription>Enter your details to register for the application.</CardDescription>
                                </CardHeader>
                                <CardContent className="space-y-4">
                                    <div className="space-y-2">
                                        <Label htmlFor="name">Name</Label>
                                        <Input id="name" type="text" placeholder="John Doe" required />
                                    </div>
                                    <div className="space-y-2">
                                        <Label htmlFor="email">Email</Label>
                                        <Input id="email" type="email" placeholder="example@domain.com" required />
                                    </div>
                                    <div className="space-y-2">
                                        <Label htmlFor="password">Password</Label>
                                        <Input id="password" type="password" required />
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <Checkbox id="terms" required />
                                        <Label htmlFor="terms" className="text-sm">
                                            I agree to the{" "}
                                            <Link href="#" className="text-primary hover:underline" prefetch={false}>
                                                Terms of Service
                                            </Link>
                                            and{" "}
                                            <Link href="#" className="text-primary hover:underline" prefetch={false}>
                                                Privacy Policy
                                            </Link>
                                        </Label>
                                    </div>
                                </CardContent>
                                <CardFooter>
                                    <Button className="w-full">Create account</Button>
                                </CardFooter>
                            </Card> */}
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}