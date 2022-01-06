import React from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import {
	AddDestination,
	CreateDestination,
	RemoveDestination,
	AddReview,
	CreateReview,
	RemoveReview,
} from '../store/actions/DestinationActions';
import NewDestination from '../components/NewDestination';

const mapStateToProps = (state) => {
	return {
		destinationState: state.destinationState,
	};
};

const mapActionsToProps = (dispatch) => {
	return {
		addDestination: (newDestination) =>
			dispatch(AddDestination(newDestination)),
		removeDestination: (index) => dispatch(RemoveDestination(index)),
		createDestination: (formValue) => dispatch(CreateDestination(formValue)),
	};
};

const Home = (props) => {
	console.log(props);
	const handleChange = (e) => {
		props.createDestination(e.target.value);
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		props.addDestination(props.destinationState.newDestination);
	};

	const handleDelete = (e, index) => {
		props.removeDestination(index);
	};

	return (
		<div className='Destinations'>
			Hello from Home
			<NewDestination
				newDestination={props.destinationState.newDestination}
				handleChange={handleChange}
				handleSubmit={handleSubmit}
				handleDelete={handleDelete}
			/>
		</div>
	);
};

export default connect(mapStateToProps, mapActionsToProps)(Home);