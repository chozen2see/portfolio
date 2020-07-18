import styled from 'styled-components';

export const LayoutWrapper = styled.div`
    padding: 4rem;
    max-width: 1200px;
    margin: 0 auto;
    background-color: #eee;
`;

export const FooterWrapper = styled.footer`
    margin: 1rem 0;
    div {
      margin: .5rem 0;
      a {
        color: #bf959f;
        font-weight: bolder;
        text-decoration: none;
        transition: opacity 150ms ease;
        &:hover, &:focus {
          opacity: 0.7;
        }
      }
    }
`;

// grid container - use export const for named export
export const GridContainer = styled.div` 
    display: grid;
    grid-template-columns: 1fr;
    gap: 1rem;
    @media screen and (min-width: 768px) {
      grid-template-columns: 1fr 1fr 1fr;
      gap: 1.5rem; 
    }

    img {
      width: 100%;
    }
`;

// pull quote
export const PullQuote = styled.div`
    padding: 4rem 0;
    // text-align: center;
    blockquote {
      font-size: 2rem;
      margin: 2rem 0 1rem;
      line-height: 1.1em;
      letter-spacing: .8px;
      p {
        margin: 0;
      }
      @media screen and (min-width: 768px) {
        font-size: 5rem;
        max-width: 800px;
        margin: 2rem auto 1rem;
      }
    }
    h6 { 
      text-align: center;
      margin-top: 0;
      @media screen and (min-width: 768px) {
        font-size: 1.4rem;
        font-weight: 500;
      }
    }
`;

export const Project = styled.div`
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2); /* this adds the "card" effect */
  padding: 16px;
  background-color: #f1f1f1;
`;
