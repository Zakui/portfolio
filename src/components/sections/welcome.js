import PropTypes from "prop-types"
import React from "react"
import TextLoop from "react-text-loop"
import { Section } from "react-scroll-section";
import Lien from '../utils/lien';

const Welcome = ({title}) => (
    <Section id="welcome-section">
        <div className="me">
            <h1>Hello, I'm <span className="j-letter">{title}</span></h1>
            <div>a 
                <TextLoop springConfig={{ stiffness: 50, interval: 9000, damping: 20 }}>
                    <span className="loop-text"> Developer </span>
                    <span className="loop-text"> Designer </span>
                </TextLoop>
             from Guinea</div>

             <div className="contact-me">
                <Lien social={false}/>
             </div>
        </div>
        <div className="speak">
            <h2>I Speak</h2>
            <p>French, English, Javascript (NodeJS, React, Angular, a bit of VueJS,...), JAVA, SAP, PHP(WordPress, Drupal, Laravel,...), Python (Django), Ruby (Ruby on Rails), Somes Data Collection with KoBoToolbox, Mapping with QGIS,...</p>
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