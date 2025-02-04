import React from 'react'

function StartGame({ toggle }) {
    return (
        <div className='flex justify-evenly items-center mt-28'>
            <div>
                <img src="/images/dices.png" alt="" />
            </div>
            <div>
                <h1 className='cursor-none uppercase font-extrabold text-8xl text-white'>Dice game</h1>
                <button onClick={toggle} className='bg-white mt-10 ml-52 px-7 py-4 cursor-pointer border-black border-2 rounded-2xl hover:bg-transparent hover:text-white active:bg-black'>Play</button>
            </div>
        </div>
    )
}

export default StartGame

