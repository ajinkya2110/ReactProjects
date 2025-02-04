import { useState } from 'react'
import NumberSelector from "./NumberSelector";
import RollDice from "./RollDice";
import Totalscore from "./Totalscore";
import Rules from './Rules';

const Gameplay = () => {
    const [score, setScore] = useState(0);
    const [selectedNumber, setSelectedNumber] = useState();
    const [currentDice, setCurrentDice] = useState(1);
    const [error, setError] = useState("");
    const [showRules, setShowRules] = useState(false)

    const generateRandomNumber = (min, max) => {
        return Math.floor(Math.random() * (max - min) + min);
    };

    const rollDice = () => {
        if (!selectedNumber) {
            setError("You have not selected any number")
            return;
        }
        const randomNumber = generateRandomNumber(1, 7);
        setCurrentDice((prev) => randomNumber);


        if (selectedNumber === randomNumber) {
            setScore((prev) => prev + randomNumber);
        }
        else {
            setScore((prev) => prev - 2);
        }
        setSelectedNumber(undefined);
    }

    const resetScore = () => {
        setScore(0);
    };

    return (
        <>
            <main className='flex justify-evenly items-end'>
                <Totalscore score={score} />
                <NumberSelector
                    error={error}
                    setError={setError}
                    selectedNumber={selectedNumber}
                    setSelectedNumber={setSelectedNumber} />
            </main>


            <RollDice currentDice={currentDice}
                rollDice={rollDice} />

            <div className='buttons flex justify-center items-center'>
                <button onClick={resetScore} className='uppercase bg-white mt-1 ml-2 px-5 py-2 cursor-pointer border-black border-2 rounded-xl hover:bg-transparent hover:text-white active:bg-black'>Reset</button>
                <button onClick={() => setShowRules((prev) => !prev)} className='uppercase bg-white mt-1 ml-6 px-5 py-2 cursor-pointer border-black border-2 rounded-xl hover:bg-transparent hover:text-white active:bg-black'>{showRules ? "Hide" : "Show"} rules</button>
            </div>
            {showRules && <Rules />}
        </>
    )
}


export default Gameplay

