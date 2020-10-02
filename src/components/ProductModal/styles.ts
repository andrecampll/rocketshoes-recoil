import styled from 'styled-components';
import { darken, lighten } from 'polished';

export const Container = styled.div`
  padding: 5%;
  display: flex;
  justify-content: space-between;

  img {
    width: 360px;
  }

  aside {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 356px;

    div {
      h1 {
        font-size: 20px;
      }

      h2 {
        font-size: 25px;
        font-weight: 500;
        margin-top: 10px;
      }
    }

    button {
      width: 100%;
      height: 15%;
      background: #7159c1;
      color: #fff;
      border: 0;
      border-radius: 4px;
      overflow: hidden;
      position: relative;

      display: flex;
      align-items: center;
      transition: 180ms ease-in-out;

      &:hover {
        background: ${lighten(0.04, '#7159c1')};
      }

      &:active {
        background: ${darken(0.04, '#7159c1')};
      }

      > div:first-child {
        display: flex;
        align-items: center;
        padding: 18px;
        background: rgba(0, 0, 0, 0.1);
        position: absolute;

        @media (max-width: 680px) {
          position: initial;
        }

        @media (max-width: 490px) {
          position: absolute;
        }

        @media (max-width: 360px) {
          position: initial;
        }

        svg {
          margin: 0 5px;
        }
      }

      > span:nth-child(2) {
        padding: 12px;
        flex: 1;
        text-align: center;
        font-weight: bold;
      }
    }
  }
`;
