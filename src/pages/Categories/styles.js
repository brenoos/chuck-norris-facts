import styled from 'styled-components';
import Paper from '@material-ui/core/Paper';
import CircularProgress from '@material-ui/core/CircularProgress';

export const StyledPaper = styled(Paper).attrs({ elevation: 10 })`
  margin-top: 10px;
  width: 400px;
  height: 400px;

  p {
    padding: 15px 15px;
    border-bottom: 3px solid #000;
  }

  ul {
    list-style: none;
    height: 84%;
    overflow-x: auto;

    a {
      text-decoration: none;
      color: #7b1fa2;
    }

    li {
      padding: 15px 15px;
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
      cursor: pointer;
      font-weight: bold;

      border-bottom: 1px solid #eee;
    }
  }
`;

export const StyledCircularProgress = styled(CircularProgress)`
  margin: 30px 180px;
`;
