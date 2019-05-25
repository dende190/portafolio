import React, { Component, Fragment } from 'react'

import Modal from '../../../widgets/components/modal-project.js';
import ListProjects from '../components/list-projects'

import DataProjects from '../../../json/project.json'

export default class ProjectsLayout extends Component{
	state = {
		openModalProject: false
	}
	handleCloseProject = event => {
		this.setState({
			openModalProject: false
		})
	}
	handleOpenProject = event => {
		this.setState({
			openModalProject: true
		})
	}
	render(){
		return(
			<Fragment>
				<ListProjects data={DataProjects} handleOpenProject={this.handleOpenProject}  />
				<Modal openModalProject={this.state.openModalProject} handleCloseProject={this.handleCloseProject} >
					<h1>Prueba</h1>
				</Modal>
			</Fragment>
		)
	}
}