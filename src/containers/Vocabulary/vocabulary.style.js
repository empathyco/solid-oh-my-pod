import styled from 'styled-components';

export const VocabularyWrapper = styled.section`
  width: 100%;
  background: #f4f4f4;;
   padding: 50px 0;
   font-family: "Montserrat", sans-serif !important;


  h3 {
    color: #666666;
    span {
      font-weight: bold;
      font-family: "Montserrat", sans-serif !important;

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
   font-family: "Montserrat", sans-serif !important;

    text-align: center;

  h1 {
    text-transform: uppercase;
    text-align: center;
    font-size: 1rem;
    color: #666666;
    font-family: "Montserrat", sans-serif !important;

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
