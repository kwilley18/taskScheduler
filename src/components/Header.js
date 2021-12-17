import React from 'react'
import Button from './Button'
import PropTypes from 'prop-types'

const Header = ({title, onAdd, showAdd}) => { // place props in function

    
    return (
        <header>
            <h1>{title}</h1>
            <Button color={ showAdd ? 'red' : 'green'} text={showAdd ? 'Close' : 'Add'} onClick={onAdd}/> 
        </header>
    )
}

Header.propTypes = {
    title: PropTypes.string.isRequired,

}
export default Header
