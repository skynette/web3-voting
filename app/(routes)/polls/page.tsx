import CreatePoll from '@/components/create-poll'
import Polls from '@/components/polls'
import React from 'react'

const PollsPage = () => {
    return (
        <>
            <CreatePoll />
            <Polls />
        </>
    )
}

export default PollsPage