import PropTypes from "prop-types"
import React from "react"
import { FaGithub, FaGlobeAfrica } from 'react-icons/fa';
import Tooltip from './tooltip'

const Project = ({d}) => (
    <>
        <div className="project-box">
            <h2 className="project-title">{d.name}</h2>
            <img src={d.img} alt={d.name} className="work-img" />
            <div className="details-text">je suis le text de description du projet je suis le text de description du projet je suis le text de description du projet je suis le text de description du projet</div>
            <div className="p-links">
                {
                    d.github != '' &&
                    <Tooltip text='GitHub'>
                        <a href={d.github} rel="noopener noreferrer" target="_blank">
                            <div className="p-link"><FaGithub /></div>
                        </a>
                    </Tooltip>
                }
                {
                    d.site != '' &&
                    <Tooltip text='Web Site'>
                        <a href={d.site} rel="noopener noreferrer" target="_blank">
                            <div className="p-link"><FaGlobeAfrica /></div>
                        </a>
                    </Tooltip>
                }
            </div>
            <div className="nom-entreprise">{d.entreprise}</div>
        </div>
    </>
)

Project.propTypes = {
    d: PropTypes.object,
}

Project.defaultProps = {
    d: {},
}

export default Project