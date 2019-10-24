import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import { Section } from "react-scroll-section";
import styled from "styled-components";
import Project from '../utils/project'
import Tooltip from '../utils/tooltip'

const Titre = styled.h2`
    text-align: center;
`

const Work = ({data}) => {
    const dataImages = useStaticQuery(graphql`
        query getImages {
            allImageSharp(filter: {fluid: {originalName: {regex: "/Complex School of Lambandji.png|Barack Obama University.png|eHealth Africa.png|Guinea  Ministry Of Budget.png|Data and Network Technology.png/"}}}) {
            edges {
                node {
                    fluid {
                        ...GatsbyImageSharpFluid,
                        originalName
                    }
                }
            }
            }
        }
    `)
    return (
        <Section id="projects-container">
            <Titre>Work</Titre>
            <p className="details-work"> Over four years, I’ve had the pleasure to work with these really great 
                people and companies on some really amazing projects.
            </p>
            <ul class="logos-flex-container">
                {
                    dataImages.allImageSharp.edges.map(img_elem=>(
                        <li class="logos-flex-item">
                            <Tooltip text={`${img_elem.node.fluid.originalName.split('.')[0]}`}>
                                <span>
                                    <Img fluid={img_elem.node.fluid} />
                                </span>
                            </Tooltip>
                        </li>
                    ))
                }
            </ul>
            <div className="projects">
            {
                data.map(d=>(
                <Project d={d.node} key={d.node.id} />
                ))
            }
            </div>
        </Section>
    )
}


Work.propTypes = {
    data: PropTypes.array,
}

Work.defaultProps = {
    data: [],
}

export default Work