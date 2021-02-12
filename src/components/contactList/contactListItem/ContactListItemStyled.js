import styled from "styled-components";

const ContactLi = styled.li`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 5px 15px;
  border-bottom: 1px solid green;

  .contactListName {
    font-weight: 700;
    margin-right: 5px;
  }
  .contactListNumber {
    margin-right: 10px;
  }
  .contactListBtn {
    padding: 5px 15px;
    border: 1px solid gray;
    border-radius: 5px;
    background-color: orange;
  }
  .contactListBtn:hover,
  .contactListBtn:focus {
    background-color: green;
  }
`;

export default ContactLi;
