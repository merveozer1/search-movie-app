import styled from "styled-components";


const styledButton = styled.button `
  background-color: ${(props) =>
    props.variant === "outline" ? "white" : "goldenrod"};
  color: ${(props) => (props.variant === "outline" ? "goldenrod" : "white")};
  &:hover {
    color: whitesmoke;
  }
margin:10px; 
padding:5px`
;

export default styledButton ;