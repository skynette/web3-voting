'use client'

import { useState } from 'react';
import { Sheet, SheetTrigger, SheetContent, SheetHeader, SheetTitle, SheetDescription, SheetFooter } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { CONTRACT_ABI, CONTRACT_ADDRESS } from "@/lib/constants";
import { useContract, useContractWrite } from '@thirdweb-dev/react';
import toast from 'react-hot-toast';
import { Popover, PopoverTrigger, PopoverContent } from '@/components/ui/popover';
import { Calendar } from '@/components/ui/calendar';
import { CalendarDaysIcon } from 'lucide-react';

export default function CreatePoll() {
    const [name, setName] = useState('');
    const [imageUrl, setImageUrl] = useState('');
    const [startTime, setStartTime] = useState<Date | undefined>(new Date())
    const [endTime, setEndTime] = useState<Date | undefined>(new Date())

    const { contract } = useContract(CONTRACT_ADDRESS, CONTRACT_ABI);
    const { mutateAsync: createPoll } = useContractWrite(contract, "createPoll");

    const handleSubmit = async () => {
        console.log({ startTime, endTime, })
        if (!startTime || !endTime) {
            toast.error("Please select both start and end times");
            return;
        }

        console.log("time", startTime.getTime())

        const notification = toast.loading("Creating poll...");

        try {
            await createPoll({
                args: [name, imageUrl, Math.floor(startTime.getTime() / 1000), Math.floor(endTime.getTime() / 1000)],
            });

            toast.success("Poll created successfully", { id: notification });
        } catch (err) {
            toast.error("Something went wrong", { id: notification });
        }
    };

    return (
        <Sheet>
            <SheetTrigger asChild>
                <Button variant="outline" className='mt-4 mr-8 float-end'>Create Poll</Button>
            </SheetTrigger>
            <SheetContent className='min-w-[50%]'>
                <SheetHeader>
                    <SheetTitle>Create Poll</SheetTitle>
                    <SheetDescription>Fill in the details to create a new poll for the web3 voting app.</SheetDescription>
                </SheetHeader>
                <div className="grid gap-6 py-6">
                    <div className="grid gap-2">
                        <Label htmlFor="name">Poll Name</Label>
                        <Input
                            id="name"
                            placeholder="Enter the poll name"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                        />
                    </div>
                    <div className="grid gap-2">
                        <Label htmlFor="imageUrl">Image URL</Label>
                        <Input
                            id="imageUrl"
                            placeholder="Enter a link to the poll image"
                            value={imageUrl}
                            onChange={(e) => setImageUrl(e.target.value)}
                        />
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                        <div className="space-y-2">
                            <Label htmlFor="start-date">Start Date</Label>
                            <Popover>
                                <PopoverTrigger asChild>
                                    <Button variant="outline" className="w-full justify-start font-normal">
                                        <CalendarDaysIcon className="mr-2 h-4 w-4" />
                                        <span>{startTime ? startTime.toLocaleString() : "Select start date"}</span>
                                    </Button>
                                </PopoverTrigger>
                                <PopoverContent className="w-auto p-0" align="start">
                                    <Calendar
                                        mode="single"
                                        selected={startTime}
                                        onSelect={setStartTime}
                                    />
                                </PopoverContent>
                            </Popover>
                        </div>
                        <div className="space-y-2">
                            <Label htmlFor="end-date">End Date</Label>
                            <Popover>
                                <PopoverTrigger asChild>
                                    <Button variant="outline" className="w-full justify-start font-normal">
                                        <CalendarDaysIcon className="mr-2 h-4 w-4" />
                                        <span>{endTime ? endTime.toLocaleString() : "Select end date"}</span>
                                    </Button>
                                </PopoverTrigger>
                                <PopoverContent className="w-auto p-0" align="start">
                                    <Calendar
                                        mode="single"
                                        selected={endTime}
                                        onSelect={setEndTime}
                                    />
                                </PopoverContent>
                            </Popover>
                        </div>
                    </div>
                </div>
                <SheetFooter>
                    <Button
                        type="button"
                        className="w-full"
                        onClick={handleSubmit}
                    >
                        Create Poll
                    </Button>
                </SheetFooter>
            </SheetContent>
        </Sheet>
    );
}
