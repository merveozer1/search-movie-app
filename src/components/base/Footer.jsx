import React from "react";
import { FiTwitter} from "react-icons/fi"
import { SiThemoviedatabase } from "react-icons/si"
import { FiYoutube} from "react-icons/fi"
import {  AiOutlineLinkedin} from "react-icons/ai"
import { FiGithub } from "react-icons/fi"

import {
  Box,
  Container,
  Row,
  Column,
  FooterLink,
  Heading,
} from "./FooterStyles";
  
const Footer = () => {
  
  return (
    <Box  className="p-5 border border-warning">
    
      <Container>
        <Row>
         
    <h1 className="tmdb my-3 text-light"> <SiThemoviedatabase/></h1> 
          <Column>
            <Heading>Contact</Heading>
            <FooterLink href="/contact">Contact Me</FooterLink>
            
          </Column>
          <Column>
            <Heading>Social Media</Heading>
            <FooterLink href="#">
              <i className="fab fa-facebook-f">
                <span style={{ marginLeft: "10px" }}>
                  <FiGithub/> <AiOutlineLinkedin/>  <FiTwitter/>   <FiYoutube/>
                </span>
              </i>
            </FooterLink>
           
          </Column>
        </Row>
      </Container>
    </Box>
  );
};
export default Footer;