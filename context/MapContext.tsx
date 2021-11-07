import { createContext, useState, useContext } from "react";
import React from "react";
export type Services = {
  type?: string;
  uri?: string;
  description?: string;
  name?: string;
  id?: string;
  latitude: number;
  longitude: number;
  zoom?: boolean;
  pricing?: string;
  coverImage?: string;
};
export type MapContextData = {
  services: Services[];
  isSearching: boolean;
  setIsSearching: React.Dispatch<React.SetStateAction<boolean>>;
  setServices: React.Dispatch<React.SetStateAction<never[] | Services[]>>;
};
export const MapContext = createContext<MapContextData>({} as MapContextData);
export const MapProvider: React.FC = ({ children }) => {
  const [services, setServices] = useState<never[] | Services[]>([]);
  const [isSearching, setIsSearching] = useState(false);
  return (
    <MapContext.Provider
      value={{ services, setServices, isSearching, setIsSearching }}
    >
      {children}
    </MapContext.Provider>
  );
};
export const useMap = () => {
  const context = useContext(MapContext);

  if (!context) {
    throw new Error("MapContext must be used within an MapProvider.");
  }
  return context;
};
