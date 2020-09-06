import { css } from 'styled-components';
import { COLORS } from '../../utils/constants'

export default css`
  padding: 4rem;

  .avatar {
    background-image: radial-gradient(circle, #000000d6, white);
    height: 5rem;
    width: 5rem;
    border-radius: 50%;
  }

  ul {
    .doc-info-wrpr {
      display: flex;
      justify-content: space-between;
      .doc-lft-wrpr {
        display: flex;

        .doc-detail {
        display: flex;
        flex-direction: column;
        margin-left: 1.5rem;

          > span {
            line-height: 1.5rem;
          }

          .doc-name {
            color: ${COLORS.BASE_COLOR};
            font-size: 1.8rem;
          }
        }
      }
      

      .doc-preference {
        display: flex;
        flex-direction: column;
        justify-content: center;
        color: ${COLORS.BASE_COLOR};
        margin-right: 3rem;
      }
    }
    
    
    a {
      color: ${COLORS.BASE_COLOR};
    }

    .doc-footer {
      padding: 2rem;
      background: ${COLORS.BACKGROUND_COLOR};
      border-bottom: 1px solid;
      margin: 0.5rem 0 3rem 0;
      color: darkgreen;
    }
  }
`;