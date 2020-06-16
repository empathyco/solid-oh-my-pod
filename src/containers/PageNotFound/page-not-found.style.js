import styled from 'styled-components';

/**
 * A styled-component for the 404 Page layout
 */
export const PageNotFoundWrapper = styled.section`
  display: block;
  align: center;
  
  .notcontent{
  display:flex;
  justify-content: center;
 
   animation-duration: 3.5s;
   animation-name: bop;
       @keyframes bop {
      from {       
      opacity: 0.001;  
      }
      
      to {    
      opacity: 0.01;       
      }
      }
  }
 
 
 
 background-image: url('/img/greyshape.svg');
  background-repeat: no-repeat; 
  background-position: 50% 50%; 
  width: 100%;
  vertical-align:middle;
  background-attachment: fixed;
 
   
`;
export const OhmyPodlogo = styled.section`
  display: flex;
    margin:auto;
    justify-content: center;
 img{
 padding:5px;
height: 400px;
}

img{
      animation-duration: 2s;
       animation-name: slide;
       animation-timing-function: cubic-bezier(0.42, -0.49, 0, 2.5);
       animation-delay: 0.75s;

      
      
      @keyframes slide {
      from {
      margin-top:-20em;
      
      opacity: 0.01;
      
      
      }
      
      to {
      margin-top: 0em;
      
      opacity: 1; 
      }
      }
 }

   
`;

/**
 * A styled-component for the 404 Page content section
 */
export const PageNotFoundContent = styled.div`
    align-items: center;
     display: inline-block;
    
    h3
    {
    font-family: Montserrat-SemiBold, sans-serif;
    text-transform: uppercase;
    text-align: center;
    font-size: initial
    }
    .redirect{
    font-size: 1em;
    display: inline-block ;
    text-align: center;
    font-family: Montserrat-SemiBold, sans-serif;
    
    background-color: #243d48 !important;
    color: white !important; 
     
    border-radius: 2.5em !important;
     text-transform: uppercase;
    
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: normal;
    text-align: center;
    padding: 0.5em  2.5em;
    
     &:link {
    text-decoration: none;
    color: white;
  }
  &:visited {
    text-decoration: none;
    color: white;
  }
  &:hover {
    text-decoration: none;
    color: white;
  }
  &:active {
    text-decoration: none;
    color: white;
  }
     }
  
`;


export const OhGirl = styled.section`
  line-height: 0;
   margin: 0px 15px;
   img{
         animation-delay: 0.001s;

  
 width:100%;

 }
    `;

export const MyBoy = styled.section`
 
  line-height: 0;

   margin: 0px 15px;
img{
  width:100%;
      animation-delay: 0.3s;

 }
    `;

export const PodGirl = styled.section`
  line-height: 0;
   margin: 0px 15px;

 img{
  width:100%;
  animation-delay: 0.75s;

 }
  
  
    `;
