
import styled from 'styled-components'

const NumberSelector = ({ setError, error, selectedNumber, setSelectedNumber }) => {
    const arrNumber = [1, 2, 3, 4, 5, 6];
    const numberSelectorHandler = (value) => {
        setSelectedNumber(value);
        setError("");
    };
    return (
        <>
            <p className='error text-red-800 font-bold'>{error}</p>
            <div className='flex gap-6'>

                <p className='text-lg font-bold'>Select Number</p>

                {arrNumber.map((value, i) => (                  //map function
                    <Box
                        isSelected={value === selectedNumber}
                        key={i}
                        onClick={() => numberSelectorHandler(value)}> {value}
                    </Box>
                ))
                }


            </div >



        </>
    )
}

export default NumberSelector



const Box = styled.div`
height: 72px;
width: 72px;
border: 1px solid black;
display: grid;
place-items: center;
font-size: 24px;
font-weight: 700;
cursor: pointer;
border-radius: 25%;
background-color: ${(props) => (props.isSelected ? "black" : "white")};
color: ${(props) => (!props.isSelected ? "black" : "white")};
`;
