import React, { useState } from 'react';

export const LocationsContext = React.createContext();

export default function LocationsProvider(props) {
  const [savedLocations, setSavedLocations] = useState([]);
  const [activeLocation, setActiveLocation] = useState('');

  const state = { savedLocations, setSavedLocations, activeLocation, setActiveLocation };
  console.log('___in context state __', state);

  return <LocationsContext.Provider value={state}>{props.children}</LocationsContext.Provider>;
}
