import styled from "@emotion/styled";
import { colours } from "@/styles/colours";
import { mediaQueries } from "@/styles/mediaQueries";

const { mobileOnly, largeUp } = mediaQueries.device;

const {
  alabaster,
  white,
  grayNurse,
  red,
  blue,
  greyLine,
  separatorColor,
  boulder,
  black,
} = colours;

export const ColorPaletteStyles = styled.div`
  .container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    min-height: 100vh;
    background-color: ${black};
    color: ${white};
    padding: 1.25rem;
  }

  .title {
    font-size: 1.875rem;
    font-weight: bold;
    margin-bottom: 1.25rem;
  }

  .button {
    padding: 1rem 2rem;
    background-color: ${blue};
    border-radius: 0.5rem;
    margin-bottom: 4rem;
    border: none;
    color: ${white};
    cursor: pointer;
    transition: transform 0.2s;

    &:hover {
      transform: scale(1.1);
    }

    &:active {
      transform: scale(0.9);
    }
  }

  .palette-grid {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 1rem;

    @media ${largeUp} {
      grid-template-columns: repeat(4, 1fr);
    }
  }

  .color-box {
    width: 9rem;
    height: 9rem;
    border-radius: 50px;
    border: 1px solid ${greyLine};
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: transform 0.2s;
    font-weight: bold;
    &:hover {
      transform: scale(1.05);
    }
  }
`;
