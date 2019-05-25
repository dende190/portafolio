import React, { Fragment } from 'react'

import DataAbout from './data-about'

import './styles/grid-about.css'

const GridAbout = props => (
	<Fragment>
		<h1 className="TextCenter">{props.title}</h1>
		<div className="ContainerGridAbout">
			{
				props.data.map( item => {
					return <DataAbout key={item.id} {...item} id={item.id} />
				})
			}
		</div>
	</Fragment>
)

export default GridAbout