import { SECOND } from '@fresh-data/framework';

// All traffic is expected to be local, so these numbers should be low.
const DEFAULT_REQ = { timeout: 5 * SECOND, freshness: 60 * SECOND };

export const getCameras =
	( getResource, requireResource ) =>
	( requirement = DEFAULT_REQ ) =>
{
	const cameras = requireResource( requirement, 'cameras' ).data;
	return cameras || {};
}