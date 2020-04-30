import styled from 'styled-components';

export const VocabularyWrapper = styled.section`
  width: 100%;
  background: rgb(250,182,193);
  background: linear-gradient(30deg, rgba(250,182,193,0.92) 0%, rgba(191,255,251,0.93) 71%);
  background-repeat: repeat;
  padding: 50px 0;

  h3 {
    color: #666666;
    span {
      font-weight: bold;
    }
    a {
      font-size: 1.9rem;
    }
  }
`;

export const VocabularyCard = styled.div`
  background-color: #fff;
  margin: 30px auto;

  //Overriding the style guide card flexbox settings
  max-width: 80% !important;
  flex-direction: row !important;
  padding: 50px 0 !important; //temporary fix to a style guide bug

  align-items: center;

  a {
    text-decoration: none;
    &:hover {
      text-decoration: underline;
    }
  }

  button {
    margin-left: 8px;
  }
`;

export const VocabularyItem = styled.section`
  width: 100%;
   
  padding: 50px 0;
   text-align: center;

  h1 {
    text-transform: uppercase;
    text-align: center;
    font-size: 1rem;
    color: #666666;
    span {
      font-weight: bold;
    }
   
  }
   p,
  li {
    color: #666666;
  }
  ul {
    list-style: disc;
    margin: 0 18px;
  }
`;
