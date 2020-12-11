import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getAllUsers } from '../store/actions/users';
import { GoogleMap, withScriptjs, withGoogleMap, Marker, InfoWindow } from "react-google-maps";
import mapStyles from "./mapStyles";
import { useHistory } from 'react-router-dom';

const { REACT_APP_GOOGLE_KEY } = process.env;

const Map = () => {
  const [selectedUser, setSelectedUser] = useState(null);
  const dispatch = useDispatch();
  const users = useSelector(state => state.users);
  const history = useHistory();

  useEffect(() => {
    (async () => {
      await dispatch(getAllUsers())
    })()
  }, [])

  return (
    <GoogleMap
      defaultZoom={10}
      defaultCenter={{ lat: 47.606209, lng: -122.332069 }}
      defaultOptions={{ styles: mapStyles }}
    >
      {users.map(user => {
        if (user.location[0]) {
          return(
            <Marker
              key={user.username}
              position={{
                lat: parseFloat(user.location[0].lat),
                lng: parseFloat(user.location[0].lng)
              }}
              onClick={() => setSelectedUser(user)}
              icon={{
                url: `${user.profile_image_url}`,
                scaledSize: new window.google.maps.Size(25, 25)
              }}
            />
          )
        }
      })}

      {selectedUser && (
        <InfoWindow
          position={{
            lat: parseFloat(selectedUser.location[0].lat),
            lng: parseFloat(selectedUser.location[0].lng)
          }}
          onCloseClick={() => setSelectedUser(null)}
        >
          <div className="info-window" onClick={() => history.push(`/users/${selectedUser.id}`)}>
            <h2>{selectedUser.username}</h2>
          </div>
        </InfoWindow>
      )}
    </GoogleMap>
  );
}

const WrappedMap = withScriptjs(withGoogleMap(Map));

export default function MapContainer({ users }) {
  return (
    <div className="map">
      <WrappedMap
        googleMapURL={`https://maps.googleapis.com/maps/api/js?v=3.exp&
        libraries=geometry,drawing,places&key=${REACT_APP_GOOGLE_KEY}`}
        loadingElement={<div style={{ height: "100%" }} />}
        containerElement={<div style={{ height: "100%" }} />}
        mapElement={<div style={{ height: "100%" }} />}
      />
    </div>
  )
}
