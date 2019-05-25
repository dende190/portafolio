import React from 'react'

import Project from './each-project'

import './styles/list-projects.css'

const Prueba = props => (
	<div className="ContainerListProjects">
		<div className="GridListProjects">
			{
				props.data.map( item => {
					return <Project key={item.id} id={item.id} {...item} handleOpenProject={props.handleOpenProject} />
				})
			}
		</div>
	</div>
)

export default Prueba