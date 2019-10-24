import React from "react"
import { Section } from "react-scroll-section";
import styled from "styled-components";
import Lien from '../utils/lien'

const Dn = styled.a`
    color: #08081b;
    font-size: 16px;
    font-weight: bold;
    text-decoration: underline;   
`;

const Titre = styled.h2`
    text-align: center;
`

const Contact = () => (
    <Section id="contact">
        <Titre>Contact Me</Titre>
        <p>I currently work as Developer in the company called <Dn rel="noopener noreferrer" href="https://dntech.tech" target="_blank">Dn-Tech</Dn> in Guinea, where we build several Web and Mobile app for Compagnies and Government.</p>
        <p>If you would like to contact me you can reach me at:</p>
        <Lien social={true}/>
    </Section>
)

export default Contact