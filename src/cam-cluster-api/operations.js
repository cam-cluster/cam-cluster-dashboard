const BASE_URL = `${ window.location.origin }/api/`;

function readCameras( resourceNames, fetch = window.fetch, base_url = BASE_URL ) {
	const filteredNames = resourceNames.filter( name => 'cameras' === name );

	return filteredNames.map( async resourceName => {
		const url = base_url + resourceName;

		try {
			const response = await fetch( url );
			const cameras = await response.json();
			return { cameras: { data: cameras } };
		} catch ( error ) {
			return { cameras: { error: error.message } };
		}
	} );
}

export default {
	read: ( resourceNames ) => {
		return [
			...readCameras( resourceNames ),
		];
	}
};