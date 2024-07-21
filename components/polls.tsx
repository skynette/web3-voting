'use client'
import React from 'react';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';
import { Card, CardContent } from './ui/card';
import { buttonVariants } from './ui/button';
import { useContract, useContractRead } from "@thirdweb-dev/react";
import { CONTRACT_ABI, CONTRACT_ADDRESS } from "@/lib/constants";
import { ethers } from 'ethers';
import { Skeleton } from './ui/skeleton';
import Link from 'next/link';
import { cn } from '@/lib/utils';

const Polls = () => {
    const { contract, isLoading: contractLoading, error: contractError } = useContract(
        CONTRACT_ADDRESS,
        CONTRACT_ABI,
    );
    const { data: pollsData, isLoading, error } = useContractRead(
        contract,
        "getAllPolls",
        [],
    );

    const formattedPolls = pollsData?.map((poll: any) => ({
        name: poll[0],
        imageUrl: poll[1],
        active: poll[2],
        startTime: new Date(ethers.BigNumber.from(poll[3]).toNumber() * 1000),
        endTime: new Date(ethers.BigNumber.from(poll[4]).toNumber() * 1000),
        candidates: poll[5],
        winner: poll[6],
        highestVotes: ethers.BigNumber.from(poll[7]).toNumber(),
        totalVotes: ethers.BigNumber.from(poll[8]).toNumber(),
    }));

    return (
        <section className="py-12 md:py-20 lg:py-24" id="polls">
            <div className="container mx-auto px-4 md:px-6">
                <div className="flex items-center justify-between mb-8">
                    <h2 className="text-2xl md:text-3xl font-bold">Upcoming Polls</h2>
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
                    {isLoading ? (
                        Array.from({ length: 8 }).map((_, index) => (
                            <Skeleton key={index} className="w-full h-64" />
                        ))
                    ) : (
                        formattedPolls.map((poll: any, index: any) => (
                            <Card key={index}>
                                <img src={poll.imageUrl || "https://plus.unsplash.com/premium_photo-1681400678259-255b10890b08?q=80&w=2079&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"} width={400} height={250} alt="Event Thumbnail" className="rounded-t-lg" />
                                <CardContent className="p-4 space-y-2">
                                    <h3 className="text-lg font-semibold">{poll.name}</h3>
                                    <p
                                        className={`${poll.active ? 'bg-green-600 text-white' : 'text-white bg-red-500'
                                            } text-muted-foreground bg-primary w-fit p-2`}
                                    >
                                        {poll.active ? 'Active' : 'Inactive'}
                                    </p>

                                    <p className="text-muted-foreground">
                                         Starts: {poll.startTime.toLocaleString()} - Ends: {poll.endTime.toLocaleString()}
                                    </p>
                                    <Link href={`/vote/${index + 1}`} className={cn(buttonVariants({ variant: 'default' }), "w-full")}>Participate</Link>
                                </CardContent>
                            </Card>
                        ))
                    )}
                </div>
            </div>
        </section>
    );
}

export default Polls;