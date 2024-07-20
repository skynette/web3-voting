'use client'

import { useState } from 'react';
import { Sheet, SheetTrigger, SheetContent, SheetHeader, SheetTitle, SheetDescription, SheetFooter } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { SmartContract } from '@thirdweb-dev/sdk';
import { ethers } from 'ethers';
import { useContractWrite } from '@thirdweb-dev/react';
import toast from 'react-hot-toast';

interface RegisterCandidateProps {
    pollId: number
    contract?: SmartContract<ethers.BaseContract>
}

export default function RegisterCandidate({ pollId, contract }: RegisterCandidateProps) {
    const [name, setName] = useState('');
    const [imageUrl, setImageUrl] = useState('');

    const { mutateAsync: register } = useContractWrite(contract, "registerAsCandidate")

    const handleSubmit = async () => {
        const notification = toast.loading("Registering")

        try {
            await register({
                args: [pollId, name, imageUrl],
            })

            toast.success("Register success", { id: notification })
        }
        catch (err) {
            toast.error("something went wrong", { id: notification })
        }
    };

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
                        <Input
                            id="name"
                            placeholder="Enter your name"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                        />
                    </div>
                    <div className="grid gap-2">
                        <Label htmlFor="imageUrl">Image URL</Label>
                        <Input
                            id="imageUrl"
                            placeholder="Enter a link to your image"
                            value={imageUrl}
                            onChange={(e) => setImageUrl(e.target.value)}
                        />
                    </div>
                </div>
                <SheetFooter>
                    <Button
                        type="button"
                        className="w-full"
                        onClick={handleSubmit}
                    >
                        Submit Candidacy
                    </Button>
                </SheetFooter>
            </SheetContent>
        </Sheet>
    );
}
