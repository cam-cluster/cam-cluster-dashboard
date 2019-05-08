import React from 'react';
import { Heading, Pane, Tablist, Tab } from 'evergreen-ui';
import PreviewPanel from './PreviewPanel';
import RecordPanel from './RecordPanel';

class App extends React.Component {
  constructor() {
    super( ...arguments );
    this.state = { mode: 'preview' };
  }

  render() {
    const { mode } = this.state;

    return (
      <Pane margin={0}>
         <Pane display="flex" margin={0} padding={16} background="tint2">
          <Pane ex={1} alignItems="center" display="flex">
            <Heading size={600}>Pi Cam Cluster</Heading>
          </Pane>
         </Pane>
         <Pane margin={0} paddingTop={16}>
          <Tablist>
            <Tab
              id="preview"
              isSelected={ mode === 'preview' }
              onSelect={ () => this.setState( { mode: 'preview' } ) }
              paddingLeft={16}
              paddingRight={16}
             >
              Preview
             </Tab>
            <Tab
              id="record"
              isSelected={ mode === 'record' }
              onSelect={ () => this.setState( { mode: 'record' } ) }
              padding={16}
             >
              Record
             </Tab>
          </Tablist>
         </Pane>
         { mode === 'preview' && <PreviewPanel /> }
         { mode === 'record' && <RecordPanel /> }
      </Pane>
    );
  }
}

export default App;