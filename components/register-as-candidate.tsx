import { Sheet, SheetTrigger, SheetContent, SheetHeader, SheetTitle, SheetDescription, SheetFooter } from "@/components/ui/sheet"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Slider } from "@/components/ui/slider"

export default function RegisterCandidate() {
    return (
        <Sheet>
            <SheetTrigger asChild>
                <Button variant="outline">Register as Candidate</Button>
            </SheetTrigger>
            <SheetContent>
                <SheetHeader>
                    <SheetTitle>Candidate Registration</SheetTitle>
                    <SheetDescription>Register as a candidate for the upcoming web3 voting app.</SheetDescription>
                </SheetHeader>
                <div className="grid gap-6 py-6">
                    <div className="grid gap-2">
                        <Label htmlFor="name">Name</Label>
                        <Input id="name" placeholder="Enter your name" />
                    </div>
                    <div className="grid gap-2">
                        <Label htmlFor="bio">Bio</Label>
                        <Textarea id="bio" placeholder="Briefly introduce yourself" rows={3} />
                    </div>
                    <div className="grid gap-2">
                        <Label htmlFor="website">Website/Portfolio</Label>
                        <Input id="website" placeholder="Enter a link to your website or portfolio" />
                    </div>
                    <div className="grid gap-2">
                        <Label htmlFor="experience">Experience Level</Label>
                        <Slider
                            id="experience"
                            min={1}
                            max={5}
                            step={1}
                            defaultValue={[3]}
                            aria-label="Experience Level"
                            className="[&_[role=slider]]:h-3 [&_[role=slider]]:w-full [&_[role=slider]]:rounded-full [&_[role=slider]]:bg-primary [&_[role=thumb]]:h-6 [&_[role=thumb]]:w-6 [&_[role=thumb]]:rounded-full [&_[role=thumb]]:bg-primary-foreground [&_[role=thumb]]:shadow-md"
                        />
                    </div>
                </div>
                <SheetFooter>
                    <Button type="submit" className="w-full">
                        Submit Candidacy
                    </Button>
                </SheetFooter>
            </SheetContent>
        </Sheet>
    )
}