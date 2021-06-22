import React from 'react'
import Button from './Button'
import PropTypes from 'prop-types'

const Header = (props) => {

    const onClick = () => {
        console.log('Click')
    }

    return (
        <header className = 'header'>
            <h1>{props.title}</h1>
            <Button  onClick = {onClick} color = "green"/>
        </header>
    )
}

Header.propTypes = {
    title: PropTypes.string.isRequired,
}

Header.defaultProps = {
    title: 'Task Tracker',
}

export default Header
