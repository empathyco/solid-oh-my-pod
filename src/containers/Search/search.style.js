import styled from "styled-components";

export const SearchWrapper = styled.div`
  .logos{
  
      animation-duration: 4s;
      animation-delay: 0.5s;
      animation-name: slide;
      animation-timing-function: cubic-bezier(0.42, -0.49, 0, 2.5);
      
      
      
      @keyframes slide {
      from {
      margin-top:10em;
      
      opacity: 0.01;
      
      
      }
      
      to {
      margin-top: 0em;
      
      opacity: 1;
       
      }
      }
}


    heigth: 100%;
    margin-top: -4em;
    padding: 2em;
    display:flex;
   
  background-image: url('/img/greyshape.svg');
  background-repeat: no-repeat; 
  background-position: 50% 50%; 
  width: 100%;
  vertical-align:middle;
   
   
 
   
     .logos{
   display: grid;
  grid-gap: 1rem;   
  }
    @media (min-width: 800px) {
  .logos { grid-template-columns: repeat(3, 1fr); }
   
  }
  
   @media (max-width: 800px) {
    background: url('/img/greyshapevertical.svg') 0 0 no-repeat;  
    background-size: 100%;
     background-position: 50% 50%; 
    width: 100%;
    vertical-align:middle;

   
  }
  
  
   
 header{
 padding-top:10em;
 margin-top:10em !important;
 }
 
 p{
      font-family: "Montserrat", sans-serif !important;
      }
      
 button img
 { 
  width: 75%;
 }

 `;

export const GirlSearch = styled.div`
  
 img {
    width: 100%;
}
  vertical-align:middle;
   `;

export const BoySearch = styled.div`
   img {
    width: 100%;
}
  
  
  vertical-align:middle;
   `;
