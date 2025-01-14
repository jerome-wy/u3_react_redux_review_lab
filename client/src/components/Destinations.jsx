import React, { useEffect } from 'react';
import { connect } from 'react-redux';
// import { Link } from 'react-router-dom';
import { LoadDestinations } from '../store/actions/DestinationActions';

const mapStateToProps = ({ destinationState, reviewState }) => {
	return { destinationState, reviewState };
};

const mapDispatchToProps = (dispatch) => {
	return {
		getDestinations: () => dispatch(LoadDestinations()),
	};
};

const Destinations = (props) => {
	useEffect(() => {
		props.getDestinations();
	}, []);

	console.log(props);

	return (
		<div className='Destinations'>
			Hello from Destinations!
			{props.destinationState.destinations.map((destination) => (
				<div
					key={destination._id}
					onClick={() => props.history.push(`/destinations/${destination.id}`)}>
					<h2>Destination: {destination.destination}</h2>

					<div className='destionation-div-item'>City: {destination.city}</div>
					<div className='destionation-div-item'>
						State: {destination.state}
					</div>
					<div className='destionation-div-item'>
						Country: {destination.country}
					</div>
					<div className='destionation-div-item'>
						Description: {destination.content}
					</div>
				</div>
			))}
		</div>
	);
};

export default connect(mapStateToProps, mapDispatchToProps)(Destinations);
