import styled from "styled-components"

export const NavBox = styled.nav`
    
    align-items: center;
    background-image: linear-gradient(to bottom, #4f88ef, white 300%);
    display: flex;
    flex-direction: column;
    height: 100vh;
    justify-content: flex-start;
    margin:auto;
    overflow: scroll;
    position: fixed;
    transform: ${props => props.isOpen ? "translateY(0%)" : "translateY(-100%)"};
    transition: transform ${props => props.isOpen ? "0.2s ease-out" : "0.1s ease-in"};
    width: 100vw;
    z-index: 0;

    > p {
        color: white;
        font-size: 24px;
        margin: 15px;
        padding: 5px;
        text-align: center;
        width: 50vw;
        :first-child{
            margin-top: 100px;
        }
        :hover{
            background-color: rgba(15, 100, 200, 0.4);
            border-radius: 4px;
        }
    }
`;