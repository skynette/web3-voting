'use client'

import RegisterCandidate from "@/components/register-as-candidate"
import { Button } from "@/components/ui/button"
import { useParams } from 'next/navigation'
import { useContract, useContractRead, useAddress, useContractWrite } from "@thirdweb-dev/react";
import { CONTRACT_ABI, CONTRACT_ADDRESS } from "@/lib/constants";
import { Skeleton } from "@/components/ui/skeleton";
import { useState, useEffect } from "react";
import { ethers } from "ethers";
import toast from 'react-hot-toast';

export default function Vote() {
    const params = useParams();
    const id = params.voteId;
    const address = useAddress();

    const owner = process.env.NEXT_PUBLIC_CONTRACT_OWNER;
    const [isAdmin, setIsAdmin] = useState(false);

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
    console.log({ pollData })
    const { data: candidatesData, isLoading: candidatesLoading, error: candidatesError } = useContractRead(
        contract,
        "getAllCandidates",
        [id],
    );
    const { mutateAsync: approveCandidateMutate } = useContractWrite(contract, "approveCandidate")
    const { mutateAsync: voteCandidate } = useContractWrite(contract, "vote")
    const { mutateAsync: activatePollMutate } = useContractWrite(contract, "activatePoll")

    useEffect(() => {
        if (address === owner) {
            setIsAdmin(true);
        }
    }, [address]);

    const totalVotes = !pollLoading ? ethers.BigNumber.from(pollData?.totalVotes?._hex).toString() : 0

    // Function to approve a candidate
    const approveCandidate = async (address: string) => {
        const notification = toast.loading("Approving candidate")

        try {
            await approveCandidateMutate({
                args: [Number(id), address],
            })

            toast.success("Approval success", { id: notification })
        }
        catch (err) {
            toast.error("something went wrong", { id: notification })
        }
    }

    // Function to vote for a candidate
    const vote = async (address: string) => {
        const notification = toast.loading("Casting Vote")

        try {
            await voteCandidate({
                args: [Number(id), address],
            })

            toast.success("Voted successfully", { id: notification })
        }
        catch (err) {
            toast.error("something went wrong", { id: notification })
        }
    }

    // Function to start the poll
    const activatePoll = async () => {
        const notification = toast.loading("Starting Poll")

        try {
            await activatePollMutate({
                args: [Number(id)],
            })

            toast.success("Poll started successfully", { id: notification })
        }
        catch (err) {
            toast.error("something went wrong", { id: notification })
        }
    }

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
                    <RegisterCandidate pollId={Number(id)} contract={contract} />
                </div>

                <div className="mb-12 bg-card rounded-lg shadow-md p-6">
                    <div className="flex items-center gap-4">
                        {pollLoading ? (
                            <Skeleton className="h-32 w-32 rounded-full" />
                        ) : (
                            <img src={pollData?.imageUrl} alt={pollData?.title} className="h-32 w-32 rounded-full" />
                        )}
                        <div>
                            <h2 className="text-2xl font-bold">
                                {pollLoading ? <Skeleton className="h-8 w-64" /> : pollData?.name}
                            </h2>
                            <p>{pollLoading ? <Skeleton className="h-4 w-64" /> : `Start Time: ${new Date(pollData?.startTime * 1000).toLocaleString()}`}</p>
                            <p>{pollLoading ? <Skeleton className="h-4 w-64" /> : `End Time: ${new Date(pollData?.endTime * 1000).toLocaleString()}`}</p>
                            {isAdmin && !pollData?.active && (
                                <Button onClick={activatePoll} className="bg-blue-500 hover:bg-blue-700 mt-4">
                                    Start Poll
                                </Button>
                            )}
                        </div>
                    </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {candidatesLoading ? (
                        Array.from({ length: 6 }).map((_, index) => (
                            <Skeleton key={index} className="h-64 w-full rounded-lg" />
                        ))
                    ) : (
                        candidatesData.map((candidate: any, index: number) => (
                            <div
                                key={index}
                                className={`bg-card rounded-lg shadow-md p-6 space-y-4 ${candidate.approved ? 'border-green-500' : 'border-red-500'} border-2`}
                            >
                                <h2 className="text-xl font-bold">{candidate.name}</h2>
                                <img src={candidate.imageUrl} alt={candidate.name} className="h-32 w-full object-cover rounded" />
                                <div className="flex items-center justify-between">
                                    <span className="text-lg font-medium">Vote Count: {ethers.BigNumber.from(candidate.votesReceived._hex).toString()}</span>
                                    <div className="flex-col md:flex-row gap-2 space-x-4 space-y-4">
                                        <Button disabled={!candidate.approved} onClick={() => vote(candidate.candidateAddress)} className={`${candidate.approved ? 'bg-green-500 hover:bg-green-700' : 'bg-red-500 cursor-not-allowed'}`}>
                                            {candidate.approved ? 'Vote' : 'Pending Approval'}
                                        </Button>
                                        {isAdmin && !candidate.approved && (
                                            <Button onClick={() => approveCandidate(candidate.candidateAddress)} className="bg-blue-500 hover:bg-blue-700">
                                                Approve
                                            </Button>
                                        )}
                                    </div>
                                </div>
                            </div>
                        ))
                    )}
                </div>
            </main>
        </div>
    )
}
