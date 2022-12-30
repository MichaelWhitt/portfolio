import {NavLink} from 'react-router-dom'

const Nav = () => {


    const activeStyle = {
        background: 'cyan',
        fontSize: 20
    }

    const inacitveStyle =  {
        background: 'orange'
    }

    const getStyle = ({isActive}) => {
        return isActive ? activeStyle : inacitveStyle
    }

    return(
        <div id='nav'>
            <NavLink to='/' style={isActive => getStyle(isActive)}>
                Landing
            </NavLink>
            <NavLink to='/projects' style={isActive => getStyle(isActive)}>
                Projects
            </NavLink>
            <NavLink to='/about' style={isActive => getStyle(isActive)}>
                About
            </NavLink>
            <NavLink to='/contact' style={isActive => getStyle(isActive)}>
                Contact
            </NavLink>
        </div>
    )
}
export default Nav