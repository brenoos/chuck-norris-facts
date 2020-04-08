import styled from 'styled-components';

export const RootContainer = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const LogoRow = styled.div`
  display: flex;
  flex-direction: row;
  width: 400px;
  justify-content: flex-start;
  align-items: center;

  img {
    height: 100px;
    width: 100px;
  }

  h1 {
    color: #fff;
    margin: 0 auto;
  }
`;
