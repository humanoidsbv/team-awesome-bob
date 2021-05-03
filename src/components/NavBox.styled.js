import styled from "styled-components"

export const NavBox = styled.nav`
    
    position: fixed;
    z-index: -100;
    background-color: #4f88ef;
    width: 100vw;
    height: 100vh;
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    justify-content: flex-start;
    align-content: center;

    > p {
        width: 50vw;
        margin: 15px;
        padding: 5px;
        font-size: 24px;
        text-align: center;
        color: white;
        :first-child{
            margin-top: 100px;
        }
        :hover{
            background-color: rgba(15, 100, 200, 0.4);
            border-radius: 4px;
        }
    }
`;