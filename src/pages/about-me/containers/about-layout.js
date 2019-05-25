import React, { Component, Fragment } from 'react'

import HeaderAbout from '../components/header-about'
import GridAbout from '../components/grid-about'
import Carousel from '../../../widgets/components/carousel'

import Certificates from '../../../json/certificates.json'
import DataHobbie from '../../../json/hobbies.json'
import DataStudies from '../../../json/studies.json'

export default class AboutLayout extends Component {
	state = {
		start: 1,
		end: 5
	}
	titleHobbies = 'Mis Hobbies'
	titleStudies = 'Mis Estudios'
	render(){
		return(
			<Fragment>
				<HeaderAbout />
				<GridAbout data={DataHobbie} title={this.titleHobbies} />
				<GridAbout data={DataStudies} title={this.titleStudies} />
				<Carousel data={Certificates} start={this.state.start} end={this.state.end} />
			</Fragment>
		)
	}
}
