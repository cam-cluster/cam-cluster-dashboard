import React from 'react';
import { Code, Heading, Pane } from 'evergreen-ui';
import { withApiClient } from '@fresh-data/react-provider';

function PreviewPanel( { cameras } ) {
	return (
		<Pane padding={16} background="tint1" flex="1">
			<Heading>
				Cameras
			</Heading>
			<Code>
				{ JSON.stringify( cameras ) }
			</Code>
		</Pane>
	);
}

function mapSelectorsToProps( selectors ) {
	const cameras = selectors.getCameras();

	return {
		cameras,
	}
}

export default withApiClient( { mapSelectorsToProps } )( PreviewPanel );