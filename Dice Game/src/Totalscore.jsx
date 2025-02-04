import React from 'react'
const Totalscore = ({ score }) => {
    return (
        <div className='ml-14 max-w-[90px]'>
            <h1 className='font-bold text-9xl text-center'>{score}</h1>
            <p className='font-bold text-center'>Total Score</p>
        </div>
    )
}

export default Totalscore
