import React, { Fragment, useState } from 'react'
import { NavLink } from 'react-router-dom';
import './styles/menu.css'

const Menu = props => {
	const [check, setCheck] = useState(false)
	return(
		<Fragment>
			<input className="InputHamburger" id="navbar" type='checkbox' checked={check} onChange={ () => setCheck(!check) } />
		    <label htmlFor="navbar" className="LabelHamburger">
		        <div className='menu'>
		            <span className='hamburger'></span>
		        </div>
		    </label>

		    <ul className="ListMenu">
		        <li className="ListHrefMenu">
		        	<button className="MenuButton" onClick={ () => setCheck(false) }>
			        	<NavLink  exact to="/" activeClassName="is-selected" className="HrefMenu">
			        		Inicio
			        	</NavLink>
		        	</button>
		        </li>
		        <li className="ListHrefMenu">
		        	<button className="MenuButton" onClick={ () => setCheck(false) }>
			        	<NavLink  exact to="/yo" activeClassName="is-selected" className="HrefMenu">
			        		Sobre Mí
			        	</NavLink>
		        	</button>
		        </li>
		        
		    </ul>	 
		</Fragment>
	)
}

export default Menu