import styled from "styled-components";

const ContactFormWrapper = styled.div`
  padding: 20px 0;
  width: 100%;
  background-color: #efefef;
  .formLabel {
    font-weight: 700;
    display: block;
    margin-bottom: 10px;
  }
  .formInput {
    display: block;
    width: 100%;
    padding: 5px;
  }
  .formBtn {
    padding: 5px 15px;
    border: 1px solid gray;
    border-radius: 5px;
    background-color: orange;
  }
  .formBtn:hover,
  .formBtn:focus {
    background-color: green;
  }
`;

export default ContactFormWrapper;
