import styled from 'styled-components'

export const FormSC = styled.section`
  margin: 0 auto;
  width: 80%;
  form {
    margin: 0 auto;
    /* border: 1px solid red; */
    width: 80%;
    div {
      width: 100%;
      margin-top: 4px;
      input {
        width: 100%;
        height: 50px;
        border-radius: 5px;
        padding-left: 2rem;

        ::placeholder {
          font-size: 1rem;
          color: rgb(0, 0, 0, 0.6);
          font-weight: bold;
        }
      }
    }
    button {
      margin-top: 1rem;
      background: #ffbd2b;
      width: 100%;
      height: 50px;
      border-radius: 8px;
      font-size: 1rem;
      font-weight: bold;
      transition: 0.2s;
      cursor: pointer;
      :hover {
        transform: scale(1.1);
      }
    }
  }
`
