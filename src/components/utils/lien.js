import React from "react"
import { FaFacebook, FaGithub, FaEnvelope, FaFreeCodeCamp, FaMobileAlt } from 'react-icons/fa';
import Tooltip from './tooltip'

const Lien = ({social}) => (
    <div className="contacts">
        <Tooltip text='GitHub'>
            <a href="https://github.com/Zakui" rel="noopener noreferrer" target="_blank">
                <div className="elem"><FaGithub /></div>
            </a>
        </Tooltip>
        <Tooltip text='Free Code Camp'>
            <a href="https://www.freecodecamp.org/zakui" rel="noopener noreferrer" id="profile-link" target="_blank">
                <div className="elem"><FaFreeCodeCamp /></div>
            </a>
        </Tooltip>
        {
            social && 
            <Tooltip text='Facebook'>
                <a href="https://www.facebook.com/zakuijules" rel="noopener noreferrer" target="_blank">
                    <div className="elem"><FaFacebook /></div>
                </a>
            </Tooltip>
        }
        <Tooltip text='Email'>
            <a href="mailto:zakuijules@gmail.com" rel="noopener noreferrer" target="_blank">
                <div className="elem"><FaEnvelope /></div>
            </a>
        </Tooltip>
        {
            social &&
            <Tooltip text='Phone'>
                <a href="tel:+224628181298" rel="noopener noreferrer" target="_blank">
                    <div className="elem"><FaMobileAlt /></div>
                </a>
            </Tooltip>
        }
    </div>
)

export default Lien