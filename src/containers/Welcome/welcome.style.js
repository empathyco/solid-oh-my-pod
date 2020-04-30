import styled from 'styled-components';

export const WelcomeWrapper = styled.section`
  width: 100%;
  background:  #f4f4f4;
  padding: 0px 0;
  a{
    color:#53b9c9 !important;
   }
  h3 {
    color: #243d48;
   
    
    span {
      font-weight: bold;
    }
    a {
      font-size: 1.9rem;
    }
  }
`;

export const WelcomeCard = styled.div`
  background-color: #fff;
  margin: 30px auto;

  //Overriding the style guide card flexbox settings
  max-width: 80% !important;
  flex-direction: row !important;
  padding: 50px 0 !important; //temporary fix to a style guide bug

font-family: Montserrat;
  font-size: 50px;
  font-weight: 300;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.22;
  letter-spacing: normal;

  a {
    text-decoration: none;
    &:hover {
      text-decoration: underline;
    }
  }
  
`;

export const WelcomeCardTop = styled.div`
  background-color: #fff;
  margin: 0px;
  border: none;

  //Overriding the style guide card flexbox settings
  max-width: 100% !important;
  flex-direction: row !important;
  padding: 15px 0 !important; //temporary fix to a style guide bug

font-family: Montserrat;
  font-size: 50px;
  font-weight: 300;
  font-stretch: normal;
  font-style: normal;
  line-height: 1;
  letter-spacing: normal;

  a {
    text-decoration: none;
    &:hover {
      text-decoration: underline;
    }
  }
  
  img{
  vertical-align: bottom !important;
  align: left;
  
  }
   h3{
    font-family: Montserrat, sans-serif;
    font-size: 50px;
    font-weight: 300;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.22;
    letter-spacing: normal;
    margin-left: 10px;
     
   }
`;


export const ImageWrapper = styled.div`
  display: block;
  justify-content: left;
  vertical-align: bottom !important;
  align: left;
  align-items: left;
   button {
    margin-right: 20px;
  }
`;

export const ImageContainer = styled.div`
  background-image: ${({ image }) => (image ? `url(${image})` : '#e7d6ff')};
  background-size: cover;
  border-radius: 50%;
  width: 128px;
  height: 128px;
`;

export const WelcomeDetail = styled.div`
  padding: 1rem 3.5rem;

  p,
  li {
    color: #666666;
  }
  ul {
    list-style: disc;
    margin: 0 18px;
  }
`;

export const WelcomeName = styled.span`
  overflow-wrap: break-word;
  word-break: break-word;
`;
