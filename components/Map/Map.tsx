import React, {
  LegacyRef,
  useContext,
  useEffect,
  useRef,
  useState,
} from "react";
import MapView, { Callout, Camera, Marker } from "react-native-maps";
import { StyleSheet, Dimensions } from "react-native";
import * as S from "./MapStyle";
import * as Location from "expo-location";
import { MapContext, Services } from "../../context/MapContext";
import { AntDesign } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

const Maker = ({ mapRef, service }: any) => {
  useEffect(() => {
    if (service.zoom) {
      mapRef?.current?.getCamera().then((cam: Camera) => {
        cam.zoom += 2;
        mapRef?.current?.animateCamera(cam);
      });
    }
  }, []);
  const navigation = useNavigation();

  return (
    <Marker
      key={service.id}
      calloutAnchor={{
        x: 0.3,
        y: 0,
      }}
      style={{ paddingTop: 20 }}
      coordinate={
        {
          latitude: service.latitude,
          longitude: service.longitude,
          latitudeDelta: 2,
          longitudeDelta: 3,
        } as any
      }
    >
      <S.StarContainer>
        <AntDesign name="star" size={15} color="#f2ff00" />
        <S.StarCount>4.9</S.StarCount>
      </S.StarContainer>

      {service?.uri && (
        <S.Image borderRadius={200} source={service.uri} resizeMode="cover" />
      )}

      <Callout
        tooltip
        onPress={() =>
          navigation?.navigate("ServiceDetails" as any, {
            service,
            title: service.type,
          })
        }
      >
        <S.CalloutContainer>
          <S.Name>{service?.name}</S.Name>
          <S.CalloutText>{service?.description}</S.CalloutText>
        </S.CalloutContainer>
      </Callout>
    </Marker>
  );
};
export const Map = (props: any) => {
  const [coords, setcoords] = useState({
    latitude: 0,
    longitude: 0,
    longitudeDelta: 0.02,
    latitudeDelta: 0.22,
  });
  Location.installWebGeolocationPolyfill();
  useEffect(() => {
    setcoords({
      ...coords,
      latitude: -30.035980526777674,
      longitude: -51.21612208220116,
    });
    // navigator.geolocation.getCurrentPosition(
    //   ({ coords: { longitude, latitude } }) => {
    //     //setcoords({ ...coords, longitude, latitude });
    //     setcoords({
    //       ...coords,
    //       latitude: -30.035980526777674,
    //       longitude: -51.21612208220116,
    //     });
    //   },
    //   () => {},
    //   {
    //     timeout: 2000,
    //     enableHighAccuracy: true,
    //     maximumAge: 1000,
    //   }
    // );
  }, []);
  const { latitude, longitude, longitudeDelta, latitudeDelta } = coords;
  const { services } = useContext(MapContext);
  const map: LegacyRef<MapView> = useRef(null);
  return (
    <S.Container>
      <MapView
        style={styles.map}
        ref={map}
        showsUserLocation
        loadingEnabled
        region={{
          latitude,
          longitude,
          longitudeDelta,
          latitudeDelta,
        }}
      >
        {services.map((service: Services) => (
          <Maker mapRef={map} service={service} key={service.id} {...props} />
        ))}
      </MapView>
    </S.Container>
  );
};

const styles = StyleSheet.create({
  map: {
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").height,
  },
});
