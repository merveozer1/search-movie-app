import styled from 'styled-components';

export const Box = styled.div`
  padding: auto;
  background: black;
  position: end;
  bottom: 0;
  width: 100%;
  
  
   
 
`;
   
export const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    max-width: 1000px;
    margin: 0 auto;
    /* background: red; */
`
   
export const Column = styled.div`
  display: flex;
  flex-direction: column;
  text-align: left;
  margin-left: auto;
`;
   
export const Row = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, 
                         minmax(185px, 1fr));
  grid-gap: 20px;
   
  @media (max-width: 1000px) {
    grid-template-columns: repeat(auto-fill, 
                           minmax(200px, 1fr));
  }
`;
   
export const FooterLink = styled.a`
  color: #fff;
  margin-bottom: 20px;
  font-size: 18px;
  text-decoration: none;
   
  &:hover {
      color: orange;
      transition: 200ms ease-in;
  }
`;
   
export const Heading = styled.p`
  font-size: 22px;
  color: grey;
  margin-bottom: 20px;
  font-weight: bold;
`;