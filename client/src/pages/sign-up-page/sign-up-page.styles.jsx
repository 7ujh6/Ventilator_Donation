import styled from 'styled-components';

export const SignUpPageContainer = styled.div`
  width: 850px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin: 30px 425px;

  @media screen and (max-width: 800px) {
    margin-top: 30px;
    margin-bottom: 30px;
    margin-right: 0px;
    margin-left: 10px;
  }
`;