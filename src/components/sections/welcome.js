import PropTypes from "prop-types"
import React from "react"
import TextLoop from "react-text-loop"
import { Section } from "react-scroll-section";
import styled from "styled-components";
import Lien from '../utils/lien'

const LoopText = styled.span`
    font-size: 3rem;
    font-weight: bold;
    color: #2097ff;
    margin: 0 15px;

    @media (max-width: 839px) {
        margin: 0;
        padding: 0;
    }
    @media (max-width: 375px) {
        font-size: 2rem;
    }
`

const JLetter = styled.span`
    font-size: 3rem;
    text-shadow: 3px 0 0 #def;

    @media (max-width: 375px) {
        font-size: 2rem;
    }
`

const Welcome = ({title}) => (
    <Section id="welcome-section">
        <div className="me">
            <h1>Hello, I'm <JLetter>{title}</JLetter></h1>
            <div>a 
                <TextLoop springConfig={{ stiffness: 50, interval: 9000, damping: 20 }}>
                    <LoopText> Developer </LoopText>
                    <LoopText> Designer </LoopText>
                </TextLoop>
             from Guinea</div>

             <div className="contact-me">
                <Lien social={false}/>
             </div>
        </div>
        <div className="speak">
            <h2>I Speak</h2>
            <p>French, English, Javascript (NodeJS, React, Angular, a bit of VueJS,...), JAVA, PHP(WordPress, Drupal, Laravel,...), Python (Django), Ruby (Ruby on Rails), Somes Data Collection with KoBoToolbox, Mapping with QGIS,...</p>
        </div>
    </Section>
)

Welcome.propTypes = {
    title: PropTypes.string,
}

Welcome.defaultProps = {
    title: ``,
}

export default Welcome