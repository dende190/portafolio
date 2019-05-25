import React, { Fragment } from 'react'
import { Link } from 'react-router-dom'
import WebStatic from '../../../../images/others/web_static.png'
import Project from '../components/project'

import './styles/projects.css'

const Projects = props => (
	<Fragment>
		<div className="TitleProjects">
			<h3>Mis Proyectos</h3>
		</div>
		<div>
			<div className="ContainerButtonsProject">
				<button className="ButtonProject" onClick={props.handleClickFrontendProject}>👈 Frontend</button>
				<button className="ButtonProject" onClick={props.handleClickInfoProject}>🖖🏽 Info</button>
				<button className="ButtonProject" onClick={props.handleClickBackendProject}>👉 Backend</button>
			</div>
			<div className="ContentProjects">
				{
					props.listProject.map( product => (
						<Project 
							key={`projects_${product.id}`} {...product} 
							id={product.id} 
							button_frontend={props.button_frontend} 
							button_backend={props.button_backend}
							button_rotate={props.button_rotate}
						/>
					))
				}
			</div>
		</div>
	</Fragment>
)

export default Projects