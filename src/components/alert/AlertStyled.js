import styled from "styled-components";

const AlertBox = styled.div`
  padding: 15px;
  position: absolute;
  top: 20px;
  right: 40px;
  background-color: red;
  max-width: 350px;

  .alertText {
    font-size: 20px;
  }
`;

export default AlertBox;
