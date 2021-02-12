import styled from "styled-components";

const SignInWrapper = styled.div`
  padding: 20px;
  position: relative;
  overflow: hidden;
  border: 1px solid gray;
  width: 500px;
  margin: 0 auto;
  background-color: #efefef;

  .pageTitle {
    margin-bottom: 20px;
    text-align: center;
  }
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
    box-shadow: 1px 1px 7px 0px rgba(140, 140, 140, 0.75);
  }
  .formBtn:hover,
  .formBtn:focus {
    background-color: green;
  }
`;

export default SignInWrapper;
