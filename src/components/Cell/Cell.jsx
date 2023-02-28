import styled from "styled-components";
import { RoughNotation } from "react-rough-notation";

const StyledCell = styled.div`

    display: flex;
    justify-content: center;
    align-items: center;
    padding: 20px;

    background-color: #2D2D6B;
    font-size: 28pt;
    box-shadow: -0px 0px 5px 1px rgba(255,255,255,.5) inset;

    &:hover {
        background-color: #2d2d6bd0;
    }
`;

const StyledRoughNotation = styled(RoughNotation)`

    width: 100%;
    height: 100%;
`


function Cell({value, index, onClick = () => {}}) {

    const handleClick = () => {

        onClick(index);
    }

    return (<StyledCell className="border" onClick={handleClick} >
        {
            value === 'x' && <StyledRoughNotation type="crossed-off" show={true} color="#dc3545" strokeWidth={3}/>
        }
        {
            value === 'o' && <StyledRoughNotation type="circle" show={true} color="#198754" strokeWidth={3}/>
        }
    </StyledCell>);
}

export default Cell;