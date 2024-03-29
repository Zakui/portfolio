import React from "react";
import { SectionLink } from "react-scroll-section";
import styled from "styled-components";

const Item = styled.li`
    color: #08081b;
    font-size: 22px;
    cursor: pointer;
    padding-bottom: 3px;
    border-bottom: 3px solid${props =>
        props.selected ? "#08081b" : "transparent"};
    
`;

const MenuItem = ({ section, children }) => (
  <SectionLink section={section}>
    {link => (
      <Item onClick={link.onClick} selected={link.isSelected}>
        {children}
      </Item>
    )}
  </SectionLink>
);

export { MenuItem as Item };