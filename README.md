# Web3Voting: A Web3 Powered Voting DApp

## Overview

The web3Voting is a decentralized application (DApp) built on the Optimism blockchain. It facilitates secure, transparent, and tamper-proof voting processes by leveraging smart contracts. The application enables the creation of polls, registration and approval of candidates, casting of votes, and determining the poll winner based on votes received.

## Table of Contents

1.  [Features](#features)
2.  [Smart Contract Structure](#smart-contract-structure)
3.  [Functions](#functions)
4.  [Events](#events)
5.  [Modifiers](#modifiers)
6.  [Usage](#usage)
7.  [Deployment](#deployment)

## Features

-   **Poll Creation**: Admins can create polls with specific names, images, start times, and end times.
-   **Candidate Registration**: Users can register as candidates for specific polls.
-   **Candidate Approval**: Admins can approve registered candidates.
-   **Voting**: Users can vote for approved candidates in active polls.
-   **Poll Activation/Deactivation**: Admins can activate or deactivate polls.
-   **Results**: The contract calculates and stores the poll winner based on the highest votes received.
-   **Transparency**: All poll details, candidate details, and results can be retrieved for transparency.

## Smart Contract Structure

### Data Structures

1.  **Poll**: Represents a poll with various attributes like name, image URL, status, timings, candidates, voting data, and winner details.
2.  **PollDetails**: Represents a simplified version of Poll for returning poll information.
3.  **Candidate**: Represents a candidate with attributes like address, name, image URL, approval status, and votes received.

### State Variables

-   **owner**: The address of the contract owner.
-   **pollCount**: The total number of polls created.
-   **polls**: A mapping from poll IDs to Poll structures.
-   **registeredCandidates**: A mapping to track registered candidates.
-   **pollCandidates**: A nested mapping from poll IDs to candidate addresses and Candidate structures.
-   **allCandidates**: A mapping from poll IDs to an array of all candidate addresses for each poll.

## Functions

### Poll Management

-   **`createPoll`**: Creates a new poll with a name, image URL, start time, and end time. Only the owner can call this function.
-   **`activatePoll`**: Activates a specific poll, making it active for voting. Only the owner can call this function.
-   **`deactivatePoll`**: Deactivates a specific poll. Only the owner can call this function.
-   **`endPoll`**: Ends a specific poll, marking it as inactive and recording the winner. Only the owner can call this function.

### Candidate Management

-   **`registerAsCandidate`**: Allows users to register as candidates for a specific poll.
-   **`approveCandidate`**: Approves a registered candidate for a specific poll. Only the owner can call this function.

### Voting

-   **`vote`**: Casts a vote for an approved candidate in an active poll.

### View Functions

-   **`getPollCandidates`**: Returns all approved candidates for a specific poll.
-   **`getAllCandidates`**: Returns all candidates (approved and unapproved) for a specific poll.
-   **`getPollDetails`**: Returns the details of a specific poll.
-   **`getCandidateVotes`**: Returns the number of votes received by a specific candidate in a specific poll.
-   **`getPollResults`**: Returns the winner and highest votes of a specific poll.
-   **`getAllPolls`**: Returns details of all polls.

## Events

-   **`PollCreated`**: Emitted when a new poll is created.
-   **`CandidateRegistered`**: Emitted when a candidate registers for a poll.
-   **`CandidateApproved`**: Emitted when a candidate is approved.
-   **`VoteCasted`**: Emitted when a vote is cast.
-   **`PollEnded`**: Emitted when a poll ends.
-   **`PollActivated`**: Emitted when a poll is activated.
-   **`PollDeactivated`**: Emitted when a poll is deactivated.

## Modifiers

-   **`onlyOwner`**: Restricts access to the contract owner.
-   **`pollExists`**: Ensures that a poll exists before executing a function.

## Usage

1.  **Deploy the contract**: The contract owner deploys the contract.
2.  **Create a poll**: The contract owner creates a new poll using the `createPoll` function.
3.  **Register as a candidate**: Users register themselves as candidates for the poll using the `registerAsCandidate` function.
4.  **Approve candidates**: The contract owner approves registered candidates using the `approveCandidate` function.
5.  **Activate the poll**: The contract owner activates the poll using the `activatePoll` function.
6.  **Cast votes**: Users cast their votes for approved candidates using the `vote` function.
7.  **End the poll**: The contract owner ends the poll using the `endPoll` function.
8.  **View results**: Anyone can view the results using the `getPollResults` function.

## Frontend Integration

### Prerequisites

Ensure you have the following dependencies installed in your project:

-   [Next.js](https://nextjs.org/)
-   [thirdweb](https://thirdweb.com/)
-   ethers
-   [react-hot-toast](https://react-hot-toast.com/)

### Polls Page

The Polls page displays a list of all the polls. Users can filter and sort polls, and navigate to the voting page for each poll.

### Voting Page

The Voting page allows users to view poll details, register as a candidate, approve candidates (if they are the admin), and vote for candidates.

## Deployment

To deploy the contract, use the following steps:

1.  **Compile the contract**: Use a Solidity compiler to compile the contract.
2.  **Deploy the contract**: Deploy the compiled contract on the Ethereum blockchain using a tool like Remix, Truffle, or Hardhat.
3.  **Interact with the contract**: Use a web3 library like Web3.js or Ethers.js to interact with the deployed contract through its functions.