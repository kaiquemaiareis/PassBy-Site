import React from "react";
import styled from "styled-components";

const StyledFooter = styled.footer`
  background-color: #e5e5e5;
  padding: 20px 0;
  text-align: center;
`;

const CopyrightText = styled.p`
  color: #000;
`;

const Footer = () => {
  return (
    <StyledFooter>
      <div className="container">
        <CopyrightText>
          &copy; {new Date().getFullYear()} PassBy. Todos os direitos
          reservados.
        </CopyrightText>
      </div>
    </StyledFooter>
  );
};

export default Footer;