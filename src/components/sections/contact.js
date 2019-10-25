import React from "react"
import { Section } from "react-scroll-section";
import Lien from '../utils/lien'


const Contact = () => (
    <Section id="contact">
        <h2 className="text-title">Contact Me</h2>
        <p>I currently work as Developer in the company called <a className="dn-link" rel="noopener noreferrer" href="https://dntech.tech" target="_blank">Dn-Tech</a> in Guinea, where we build several Web and Mobile app for Compagnies and Government.</p>
        <p>If you would like to contact me you can reach me at:</p>
        <Lien social={true}/>
    </Section>
)

export default Contact