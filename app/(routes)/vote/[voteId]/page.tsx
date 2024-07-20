'use client'

import RegisterCandidate from "@/components/register-as-candidate"
import { Button } from "@/components/ui/button"
import { useParams } from 'next/navigation'
import { useContract, useContractRead } from "@thirdweb-dev/react";
import { CONTRACT_ABI, CONTRACT_ADDRESS } from "@/lib/constants";
import { Skeleton } from "@/components/ui/skeleton";

export default function Vote() {
    const params = useParams();
    const id = params.voteId;

    // get poll details
    const { contract, isLoading: contractLoading, error: contractError } = useContract(
        CONTRACT_ADDRESS,
        CONTRACT_ABI,
    );
    const { data: pollData, isLoading: pollLoading, error: pollError } = useContractRead(
        contract,
        "getPollDetails",
        [id],
    );
    const { data: candidatesData, isLoading: candidatesLoading, error: candidatesError } = useContractRead(
        contract,
        "getAllCandidates",
        [id],
    );

    // Format poll data
    const pollTitle = pollData ? pollData[0] : '';
    const pollImage = pollData ? pollData[1] : '';
    const totalVotes = pollData ? parseInt(pollData[3].hex, 16) : 0;

    console.log({ pollTitle, pollImage, totalVotes })

    // Format candidates data
    const candidates = candidatesData ? candidatesData.map((candidate: any[]) => ({
        address: candidate[0],
        name: candidate[1],
        image: candidate[2],
        voteCount: parseInt(candidate[4].hex, 16),
        approved: candidate[3],
    })) : [];

    return (
        <div className="flex flex-col min-h-dvh">
            <main className="flex-1 py-12 px-6 container mx-auto">
                <div className="mb-12 bg-card rounded-lg shadow-md p-6 flex items-center justify-between">
                    <div>
                        <h2 className="text-xl font-bold mb-4">Total Votes</h2>
                        {pollLoading ? (
                            <Skeleton className="h-10 w-32" />
                        ) : (
                            <div className="text-4xl font-bold">{totalVotes}</div>
                        )}
                    </div>
                    <RegisterCandidate />
                </div>

                <div className="mb-12 bg-card rounded-lg shadow-md p-6">
                    <div className="flex items-center gap-4">
                        {pollLoading ? (
                            <Skeleton className="h-32 w-32 rounded-full" />
                        ) : (
                            <img src={pollImage} alt={pollTitle} className="h-32 w-32 rounded-full" />
                        )}
                        <div>
                            <h2 className="text-2xl font-bold">
                                {pollLoading ? <Skeleton className="h-8 w-64" /> : pollTitle}
                            </h2>
                        </div>
                    </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {candidatesLoading ? (
                        Array.from({ length: 6 }).map((_, index) => (
                            <Skeleton key={index} className="h-64 w-full rounded-lg" />
                        ))
                    ) : (
                        candidates.map((candidate: any, index: any) => (
                            <div
                                key={index}
                                className={`bg-card rounded-lg shadow-md p-6 space-y-4 ${candidate.approved ? 'border-green-500' : 'border-red-500'} border-2`}
                            >
                                <h2 className="text-xl font-bold">{candidate.name}</h2>
                                <img src={candidate.image} alt={candidate.name} className="h-32 w-full object-cover rounded" />
                                <div className="flex items-center justify-between">
                                    <span className="text-lg font-medium">Vote Count: {candidate.voteCount}</span>
                                    <Button disabled={!candidate.approved} className={`${candidate.approved ? 'bg-green-500 hover:bg-green-700' : 'bg-red-500 cursor-not-allowed'}`}>
                                        {candidate.approved ? 'Vote' : 'Pending Approval'}
                                    </Button>
                                </div>
                            </div>
                        ))
                    )}
                </div>
            </main>
        </div>
    )
}
