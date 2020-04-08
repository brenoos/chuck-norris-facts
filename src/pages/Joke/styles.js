import styled from 'styled-components';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';

export const StyledCard = styled(Card)`
  margin-top: 10px;
  width: 400px;

  p {
    padding: 15px 15px;
    border-bottom: 3px solid #000;
  }

  a {
    text-decoration: none;
  }
`;

export const StyledCardActions = styled(CardActions)`
  display: flex;
  justify-content: space-between;
`;

export const JokeContainer = styled.div`
  padding: 15px;
`;
