import styled from "styled-components";

export const TimeEntry = styled.div`
    margin: 0 5vw;
    max-width: 90vw;
    background-color: white;
    border-style: solid;
    border-width: 1px;
    border-color: rgba(222, 222, 222, 1);
    border-left-width: 5px;
    border-left-color: #4f88ef;
    display: flex;
    justify-content: space-between;
    align-content: center;
    padding: 2%;

    :last-of-type{
        border-bottom-left-radius: 4px;
        border-bottom-right-radius: 4px;
    }

    :first-of-type{
        border-top-left-radius: 4px;
        border-top-right-radius: 4px;
    }

    
    > p { 
        color: black;
    }

`;