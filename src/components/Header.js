import {NavLink} from 'react-router-dom'



function Header() {
    return(
        <div className='links'>
        <nav>
        <NavLink  className={({ isActive }) => (isActive ? 'active' : 'inactive')} to="/" >Home</NavLink>
        <NavLink activeStyle={{ color:'white' }} to="/about">About</NavLink>
        <NavLink activeStyle={{ color:'white' }} to="/ingredients">Ingredients</NavLink>
        </nav>
      </div>
    )
}

export default Header