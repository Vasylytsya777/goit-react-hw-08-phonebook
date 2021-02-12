import styled from "styled-components";

const LogOutMenuStyled = styled.div`
  right: 20px;
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;

  .logOutMenuText {
    margin-right: 2px;
    font-size: 14px;
    color: orange;
  }
  .logOutMenuBtn {
    padding: 5px 15px;
    border: 1px solid gray;
    border-radius: 5px;
    background-color: orange;
    box-shadow: 1px 1px 7px 0px rgba(140, 140, 140, 0.75);
  }
  .logOutMenuBtn:hover,
  .logOutMenuBtn:focus {
    background-color: green;
  }
`;

export default LogOutMenuStyled;
