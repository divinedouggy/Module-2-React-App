import { NavLink } from 'react-router-dom'



function Header() {
  return (

    <div className='header'>

      <div className='title'>
        {/* <h1>Special Ingredients</h1> */}
      <img src={require("../images/logo.png")} alt="logo"/>
      </div>

      <div className='links'>
        <nav>
          <NavLink className={({ isActive }) => (isActive ? 'active' : 'inactive')} to="/" >Home</NavLink>
          <NavLink activeStyle={{ color: 'white' }} to="/about">About</NavLink>
          <NavLink activeStyle={{ color: 'white' }} to="/ingredients">Ingredients</NavLink>

        </nav>



      </div>
    </div>

  )
}

export default Header