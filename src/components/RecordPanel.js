import React from 'react';
import { Heading, Pane } from 'evergreen-ui';

export default class RecordPanel extends React.Component {
	render() {
		return (
			<Pane padding={16} background="tint1" flex="1">
				<Heading>
					Record
				</Heading>
			</Pane>
		);
	}
}