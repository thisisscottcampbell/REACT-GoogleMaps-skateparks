import React from 'react';
import { WrappedMap } from './Map';

const App = () => {
	return (
		<div style={{ width: '99%', height: '80vh' }}>
			<WrappedMap
				googleMapURL={`https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=AIzaSyC24ghgY6ptPzDB_zpruwNh2pqEiufLMLo`}
				loadingElement={<div style={{ height: '100%' }} />}
				containerElement={<div style={{ height: '100%' }} />}
				mapElement={<div style={{ height: '100%', width: '100%' }} />}
			/>
		</div>
	);
};

export default App;
