import React from 'react' 

import './icons.css'

const Icon = props =>{
	const {
		size,
		color
	} = props

	return (
		<svg
	      fill={color}
	      height={size}
	      width={size}
	      viewBox="0 0 500 500"
	      className="Icon"
	    >
	    	{props.children}
	    </svg>
	)
}

export default Icon