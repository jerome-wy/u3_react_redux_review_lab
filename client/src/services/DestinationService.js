import Client from './';

export const GetDestinations = async () => {
	try {
		const res = await Client.get('/destinations');
		return res.data.destinations;
	} catch (error) {
		throw error;
	}
};

export const GetReviews = async () => {
	try {
		const res = await Client.get('/destinations/:destination_id');
		console.log(res);
		return res.data.destinations;
	} catch (error) {
		throw error;
	}
};
