import styled from "styled-components";

export const AddButton = styled.button`
  background-color: ${({ theme }) => theme.activeButtonGreen};
  border-radius: 4px;
  border: solid 1px #249533;
  color: white;
  display: block;
  font-family: Proxima Nova;
  font-size: 14px;
  font-weight: 500;
  height: 36px;
  margin-top: 5px;
  outline: 0;
  text-align: center;
  text-align: center;
  margin: 10px auto;
  width: ${(props) => props.width}px;

  transition: background-color 0.3s ease-out;

  > img {
    opacity: 0.8;
    margin-right: 20px;
  }

  :focus {
    border: solid 1px rgba(0, 0, 0, 0.5);
  }
  :disabled {
    background-color: rgba(100, 100, 100);
    border: solid 1px rgba(100, 100, 100);
  }

  display: ${(props) => (props.isVisible ? "block" : "none")};
`;

export const CancelButton = styled(AddButton)`
  background-color: ${({ theme }) => theme.borderGrey};
`;
