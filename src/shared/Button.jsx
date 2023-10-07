import React from 'react'
import PropType from "prop-types"

function Button({ children, version, type, isDisabled }) {
    return (
        <button type={type} disabled={isDisabled} className={`btn btn-${version}`}>
            {children}
        </button>
    )
}

Button.defaultProps = {
    version: "primary",
    type: "button",
    isDisabled: false,
}

Button.prototype = {
    children: PropType.node.isRequired,
    version: PropType.string,
    type: PropType.string,
    isDisabled: PropType.bool,
}

export default Button
