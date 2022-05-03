import * as React from "react";
import * as ReactDom from "react-dom/client";
import { Wrapper, Status } from "@googlemaps/react-wrapper";
import useDeepCompareEffect from "use-deep-compare-effect";
import { createCustomEqual } from "fast-equals";
import { isLatLngLiteral } from "@googlemaps/typescript-guards";
import Layout from "../../layouts/Layout";

const render = (status: Status) => {
  return <h1>{status}</h1>;
};

interface MapProps extends google.maps.MapOptions {
  style: { [key: string]: string };
  onClick?: (e: google.maps.MapMouseEvent) => void;
  onIdle?: (map: google.maps.Map) => void;
  children?: React.ReactNode;
}

let map: google.maps.Map;

const Map: React.FC<MapProps> = ({
  onClick,
  onIdle,
  children,
  style,
  ...options
}) => {
  const ref = React.useRef<HTMLDivElement>(null);
  const [map, setMap] = React.useState<google.maps.Map>();

  React.useEffect(() => {
    if (ref.current && !map) {
      setMap(new window.google.maps.Map(ref.current, {}));
    }
  }, [ref, map]);

  //   useDeepCompareEffectForMaps(() => {
  //     if (map) {
  //       map.setOptions(options);
  //     }
  //   }, [map, options]);

  React.useEffect(() => {
    if (map) {
      ["click", "idle"].forEach((eventName) =>
        google.maps.event.clearListeners(map, eventName)
      );

      if (onClick) {
        map.addListener("click", onClick);
      }

      if (onIdle) {
        map.addListener("idle", () => onIdle(map));
      }
    }
  }, [map, onClick, onIdle]);

  return (
    <>
      <div ref={ref} style={style}>
        {React.Children.map(children, (child) => {
          if (React.isValidElement(child)) {
            return React.cloneElement(child, { map });
          }
        })}
      </div>
    </>
  );
};

const FirstMap = () => {
  const [clicks, setClicks] = React.useState<google.maps.LatLng[]>([]);
  const [zoom, setZoom] = React.useState();
  const [center, setCenter] = React.useState<google.maps.LatLngLiteral>({
    lat: 49.2846717,
    lng: -123.1200546,
  });

  return (
    <Layout>
      <Wrapper apiKey={process.env.REACT_APP_GOOGLE_API_KEY!} render={render}>
        <Map
          center={center}
          //   onClick={onClick}
          //   onIdle={onIdle}
          zoom={zoom}
          // style={{ flexGrow: "1", height: "100%" }}
          style={{ width: "100%", height: "200px" }}
        >
          {/* {clicks.map((latLng, i) => (
            <Marker key={i} position={latLng} />
          ))} */}
        </Map>
      </Wrapper>
    </Layout>
  );
};

export default FirstMap;
