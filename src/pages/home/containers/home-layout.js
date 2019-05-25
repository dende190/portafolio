import React, { Component, Fragment } from 'react'

import HeaderHome from '../components/header-home'
import Projects from '../components/projects'
import Why from '../components/why.js'

import ListProject from '../../../json/project.json'
import ListProgramming from '../../../json/programming.json'
import ListCertificates from '../../../json/certificates.json'
import ListWhyReasons from '../../../json/why.json'

export default class HomeLayout extends Component {
	state = {
		button_frontend: false,
		button_backend: false,
		button_rotate: '',
	}
	handleClickInfoProject = event => {
		this.setState({
			button_frontend: false,
			button_backend: false,
			button_rotate: ''
		})
	}
	handleClickFrontendProject = event => {
		this.setState({
			button_frontend: !this.state.button_frontend,
			button_backend: false
		})
		if(!this.state.button_frontend){
			this.setState({
				button_rotate: 'RotateFront',
			})
		}else{
			this.setState({
				button_rotate: '',
			})
		}
	}
	handleClickBackendProject = event => {
		this.setState({
			button_backend: !this.state.button_backend,
			button_frontend: false
		})
		if(!this.state.button_backend){
			this.setState({
				button_rotate: 'RotateBack',
			})
		}else{
			this.setState({
				button_rotate: '',
			})
		}
	}
	render(){
		return(
			<Fragment>
				<HeaderHome />
				<Projects 
					listProject={ListProject} 
					handleClickFrontendProject={this.handleClickFrontendProject} 
					handleClickBackendProject={this.handleClickBackendProject} 
					handleClickInfoProject={this.handleClickInfoProject}
					button_frontend={this.state.button_frontend} 
					button_backend={this.state.button_backend}
					button_rotate={this.state.button_rotate}
				/>
				<Why 
					listProgramming={ListProgramming} 
					listCertificates={ListCertificates}
					listWhyReasons={ListWhyReasons}
				/>
			</Fragment>
		)
	}
}

