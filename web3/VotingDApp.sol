// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract VotingDApp {
    struct Poll {
        string name;
        string imageUrl;
        bool active;
        uint256 startTime;
        uint256 endTime;
        address[] candidates;
        mapping(address => bool) hasVoted;
        mapping(address => uint256) votes;
        address winner;
        uint256 highestVotes;
        uint256 totalVotes;
    }

    struct PollDetails {
        string name;
        string imageUrl;
        bool active;
        uint256 startTime;
        uint256 endTime;
        address[] candidates;
        address winner;
        uint256 highestVotes;
        uint256 totalVotes;
    }

    struct Candidate {
        address candidateAddress;
        string name;
        string imageUrl;
        bool approved;
        uint256 votesReceived;
    }

    address public owner;
    uint256 public pollCount;
    mapping(uint256 => Poll) public polls;
    mapping(address => bool) public registeredCandidates;
    mapping(uint256 => mapping(address => Candidate)) public pollCandidates;
    mapping(uint256 => address[]) public allCandidates; // Store all candidates per poll

    modifier onlyOwner() {
        require(msg.sender == owner, "Not authorized");
        _;
    }

    modifier pollExists(uint256 pollId) {
        require(pollId > 0 && pollId <= pollCount, "Poll does not exist");
        _;
    }

    event PollCreated(uint256 pollId, string name, string imageUrl, uint256 startTime, uint256 endTime);
    event CandidateRegistered(uint256 pollId, address candidate, string name, string imageUrl);
    event CandidateApproved(uint256 pollId, address candidate);
    event VoteCasted(uint256 pollId, address voter, address candidate);
    event PollEnded(uint256 pollId, address winner);
    event PollActivated(uint256 pollId);
    event PollDeactivated(uint256 pollId);

    constructor() {
        owner = msg.sender;
    }

    function createPoll(string memory name, string memory imageUrl, uint256 startTime, uint256 endTime) public onlyOwner {
        require(startTime < endTime, "Invalid poll duration");

        pollCount++;
        Poll storage poll = polls[pollCount];
        poll.name = name;
        poll.imageUrl = imageUrl;
        poll.active = false;
        poll.startTime = startTime;
        poll.endTime = endTime;

        emit PollCreated(pollCount, name, imageUrl, startTime, endTime);
    }

    function registerAsCandidate(uint256 pollId, string memory candidateName, string memory imageUrl) public pollExists(pollId) {
        require(polls[pollId].active, "Poll is not active");
        require(!isCandidateNameTaken(pollId, candidateName), "Candidate name already taken");

        pollCandidates[pollId][msg.sender] = Candidate({
            candidateAddress: msg.sender,
            name: candidateName,
            imageUrl: imageUrl,
            approved: false,
            votesReceived: 0
        });

        allCandidates[pollId].push(msg.sender); // Add to all candidates list

        emit CandidateRegistered(pollId, msg.sender, candidateName, imageUrl);
    }

    function approveCandidate(uint256 pollId, address candidate) public onlyOwner pollExists(pollId) {
        require(pollCandidates[pollId][candidate].candidateAddress == candidate, "Candidate not registered");

        pollCandidates[pollId][candidate].approved = true;
        polls[pollId].candidates.push(candidate);

        emit CandidateApproved(pollId, candidate);
    }

    function vote(uint256 pollId, address candidate) public {
        Poll storage poll = polls[pollId];
        require(poll.active, "Poll is not active");
        require(!poll.hasVoted[msg.sender], "Already voted");
        require(pollCandidates[pollId][candidate].approved, "Candidate not approved");

        poll.hasVoted[msg.sender] = true;
        poll.votes[candidate]++;
        poll.totalVotes++;
        pollCandidates[pollId][candidate].votesReceived++;

        if (poll.votes[candidate] > poll.highestVotes) {
            poll.highestVotes = poll.votes[candidate];
            poll.winner = candidate;
        }

        emit VoteCasted(pollId, msg.sender, candidate);
    }

    function endPoll(uint256 pollId) public onlyOwner pollExists(pollId) {
        require(polls[pollId].active, "Poll is not active");

        polls[pollId].active = false;

        emit PollEnded(pollId, polls[pollId].winner);
    }

    function activatePoll(uint256 pollId) public onlyOwner pollExists(pollId) {
        require(!polls[pollId].active, "Poll is already active");

        polls[pollId].active = true;

        emit PollActivated(pollId);
    }

    function deactivatePoll(uint256 pollId) public onlyOwner pollExists(pollId) {
        require(polls[pollId].active, "Poll is not active");

        polls[pollId].active = false;

        emit PollDeactivated(pollId);
    }

    function isCandidate(uint256 pollId, address candidate) internal view returns (bool) {
        return pollCandidates[pollId][candidate].approved;
    }

    function isCandidateNameTaken(uint256 pollId, string memory candidateName) internal view returns (bool) {
        uint256 candidateCount = allCandidates[pollId].length;
        for (uint256 i = 0; i < candidateCount; i++) {
            if (keccak256(abi.encodePacked(pollCandidates[pollId][allCandidates[pollId][i]].name)) == keccak256(abi.encodePacked(candidateName))) {
                return true;
            }
        }
        return false;
    }

    function getPollCandidates(uint256 pollId) public view returns (Candidate[] memory) {
        Poll storage poll = polls[pollId];
        uint256 candidateCount = poll.candidates.length;
        Candidate[] memory candidates = new Candidate[](candidateCount);
        for (uint256 i = 0; i < candidateCount; i++) {
            candidates[i] = pollCandidates[pollId][poll.candidates[i]];
        }
        return candidates;
    }

    function getAllCandidates(uint256 pollId) public view returns (Candidate[] memory) {
        uint256 candidateCount = allCandidates[pollId].length;
        Candidate[] memory candidates = new Candidate[](candidateCount);
        for (uint256 i = 0; i < candidateCount; i++) {
            candidates[i] = pollCandidates[pollId][allCandidates[pollId][i]];
        }
        return candidates;
    }

    function getPollDetails(uint256 pollId) public view returns (string memory name, string memory imageUrl, bool active, uint256 startTime, uint256 endTime, uint256 totalVotes) {
        require(pollId > 0 && pollId <= pollCount, "Poll does not exist");
        Poll storage poll = polls[pollId];
        return (poll.name, poll.imageUrl, poll.active, poll.startTime, poll.endTime, poll.totalVotes);
    }

    function getCandidateVotes(uint256 pollId, address candidate) public view returns (uint256 votesReceived) {
        require(pollId > 0 && pollId <= pollCount, "Poll does not exist");
        require(pollCandidates[pollId][candidate].candidateAddress == candidate, "Candidate not registered for this poll");
        return pollCandidates[pollId][candidate].votesReceived;
    }

    function getPollResults(uint256 pollId) public view returns (address winner, uint256 highestVotes) {
        require(!polls[pollId].active, "Poll is still active");
        Poll storage poll = polls[pollId];
        return (poll.winner, poll.highestVotes);
    }

    function getAllPolls() public view returns (PollDetails[] memory) {
        PollDetails[] memory allPolls = new PollDetails[](pollCount);
        for (uint256 i = 1; i <= pollCount; i++) {
            Poll storage poll = polls[i];
            allPolls[i - 1] = PollDetails({
                name: poll.name,
                imageUrl: poll.imageUrl,
                active: poll.active,
                startTime: poll.startTime,
                endTime: poll.endTime,
                candidates: poll.candidates,
                winner: poll.winner,
                highestVotes: poll.highestVotes,
                totalVotes: poll.totalVotes
            });
        }
        return allPolls;
    }
}
