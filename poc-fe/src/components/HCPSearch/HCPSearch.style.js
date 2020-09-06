import { css } from 'styled-components';
import { COLORS } from '../../utils/constants'

export default css`
  h2 {
    font-size: 2.5rem;
    margin: 2rem;
    text-align: center;
    font-weight: normal;
  }

  .header {
    display: flex;
    padding: 1rem 4rem;
    justify-content: space-between;
    border-bottom: 1px solid grey;
    align-items: center;
     
    a {
      font-size: 1.5rem;
      color: ${COLORS.BASE_COLOR};
    }
  }

  .src-wrpr {
    display: flex;
    justify-content: center;
    padding: 3rem;
    background-color: rgb(242, 242, 242);

     > input {
       margin: 0;
       border-radius: 0;
      border: 1px solid;
     }

     button {
       padding: 1rem 3.5rem;
     }
  }

`;