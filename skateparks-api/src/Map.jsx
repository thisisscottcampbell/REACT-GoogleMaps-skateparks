import React, { useState } from 'react';
import {
	GoogleMap,
	withScriptjs,
	withGoogleMap,
	InfoWindow,
	Marker,
} from 'react-google-maps';
import parksData from './data/park_list';

const Map = () => {
	const [selectedPark, setPark] = useState(undefined);

	const Parks = parksData.parks.map((park) => (
		<Marker
			key={park.PARK_ID}
			position={{
				lat: park.coordinates[1],
				lng: park.coordinates[0],
			}}
			name={park.Name}
			details={park.details}
			onClick={() => {
				setPark(park);
			}}
		/>
	));
	return (
		<GoogleMap
			defaultZoom={10}
			defaultCenter={{ lat: 45.421532, lng: -75.697189 }}
		>
			{Parks}
			{selectedPark && (
				<InfoWindow
					position={{
						lat: selectedPark.coordinates[1],
						lng: selectedPark.coordinates[0],
					}}
				>
					<>
						<div>
							<p>{selectedPark.details}</p>
							<h3>{selectedPark.Name}</h3>
						</div>
					</>
				</InfoWindow>
			)}
		</GoogleMap>
	);
};

export const WrappedMap = withScriptjs(withGoogleMap(Map));
