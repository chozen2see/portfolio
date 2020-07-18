// styled component - creates component and injects css into it
import styled from 'styled-components';


// H levels
// must start w uppercase letter
export const HeaderOne = styled.h1`
  font-size: 1.5rem;
  text-align: left;
  @media screen and (min-width: 768px) {
    font-size: 2rem;
    text-align: right;
  }
`;

export const HeaderTwo = styled.h2`
  font-size: ${props => props.larger ? '3rem' : '1.6rem'};
  text-align: ${props => props.align ? props.align : 'initial'};
  margin: 3rem 0;
  @media screen and (min-width: 768px) {
    font-size: ${props => props.larger ? '5rem' : '2.6rem'};
  }
`;

export const HeaderThree = styled.h3`
  font-size: 1.2rem;
  text-align: center;
  @media screen and (min-width: 768px) {
    font-size: 1.3rem;
  }

  a {
    color: #bf959f;
    font-weight: bolder;
    // text-decoration: none;
    transition: opacity 150ms ease;
    &:hover, &:focus {
      opacity: 0.7;
    }
  }
`;

export const SmallFlex = styled.small`
  display: flex;
  justify-content: center;
  > div {
    margin: .5rem;
    padding: 5px;
    background-color: #bf959f;
    font-weight: bold;
  }
`;

// export const BannerImage = styled(HeaderTwo)``;

export const BannerImage = styled.div`
  margin: 2rem 0;
  img {
    width: 100%;
  }
`;

export const ParagraphBase = styled.div`
  font-size: 1.2em;
  line-height: 1.8em;
  @media screen and (min-width: 768px) {
    font-size: 1.5em;
    line-height: 2.1em;
    max-width: 800px;
    margin: 15px auto;
  }
`;

