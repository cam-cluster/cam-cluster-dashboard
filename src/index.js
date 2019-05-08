import React from 'react';
import ReactDOM from 'react-dom';
import { Provider as ReduxProvider } from 'react-redux';
import { ApiProvider } from '@fresh-data/react-provider';
import camClusterApi from './cam-cluster-api';
import App from './components/App';
import createStore from './store';
import reducer from './store/reducer';

const store = createStore( reducer );

const AppRoot = () => {
	return (
		<ReduxProvider store={ store }>
			<ApiProvider apiName="cam-cluster-api" apiSpec={ camClusterApi }>
				<App />
			</ApiProvider>
		</ReduxProvider>
	);
};

ReactDOM.render(<AppRoot store={ store } />, document.getElementById('root'));