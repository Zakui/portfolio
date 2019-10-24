import PropTypes from "prop-types"
import React from "react"
import Tippy from '@tippy.js/react';
import 'tippy.js/dist/tippy.css';

const Tooltip = ({text, children}) => (
    <Tippy content={text} interactive={true} arrow={false}>
        {children}
    </Tippy>
)

Tooltip.propTypes = {
    children: PropTypes.any,
    text: PropTypes.string,
}

Tooltip.defaultProps = {
    text: '',
}

export default Tooltip