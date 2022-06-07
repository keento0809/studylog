import * as React from "react";
import * as ReactDom from "react-dom/client";
import { Wrapper, Status } from "@googlemaps/react-wrapper";
import useDeepCompareEffect from "use-deep-compare-effect";
import { createCustomEqual } from "fast-equals";
import { isLatLngLiteral } from "@googlemaps/typescript-guards";
// import { useContext } from "react";
import { StudyLogObjFinal, locationObj } from "../../models/Model";
// import StudyLogsContext from "../../contexts/studyLogs-context";
import Layout from "../../layouts/Layout";
import axios from "axios";

const render = (status: Status) => {
  return <h1>{status}</h1>;
};

// test geocoding
// axios
//   .get(
//     `https://maps.googleapis.com/maps/api/geocode/json?latlng=49.27866863675678,-123.10972452163696&key=${process.env.REACT_APP_GOOGLE_API_KEY_GEOCODING}`
//   )
//   .then((res) => {
//     if (res.data.status !== "OK") throw new Error("Request failed.");
//   })
//   .catch((err) => console.log(err.message));

const MapTry: React.VFC = () => {
  // declare useState
  const [clicks, setClicks] = React.useState<google.maps.LatLng[]>([]);
  const [zoom, setZoom] = React.useState(12); // initial zoom
  const [center, setCenter] = React.useState<google.maps.LatLngLiteral>({
    lat: 49.2846717,
    lng: -123.1200546,
  });
  const [locationData, setLocationData] = React.useState<locationObj[]>([]);
  const [isLoading, setIsLoading] = React.useState(false);
  const [error, setError] = React.useState(null);

  // declare useContext
  // const studyLogsCtx = useContext(StudyLogsContext);

  // declare useRef
  const locationInputRef = React.useRef<HTMLInputElement>(null);

  const getStudyLocations = async () => {
    setIsLoading(true);
    setError(null);
    try {
      const response = await fetch(
        "https://studylog-8e387-default-rtdb.firebaseio.com/studylogs.json"
      );
      if (!response.ok) throw new Error("Request Failed.");
      const data = await response.json();
      console.log(data);

      const loadedLocations: locationObj[] = [];

      for (const key in data) {
        loadedLocations.push({
          lat: data[key].location.lat,
          lng: data[key].location.lng,
        });
      }
      console.log(loadedLocations);
      setLocationData(loadedLocations);
    } catch (err: any) {
      setError(err.message);
      console.log(err.message);
    }
    setIsLoading(false);
  };

  const onClick = (e: google.maps.MapMouseEvent) => {
    // avoid directly mutating state

    // I need to store lat and lng below
    console.log(e.latLng!.toJSON().lat, e.latLng!.toJSON().lng);
    setClicks([...clicks, e.latLng!]);
  };

  const onIdle = (m: google.maps.Map) => {
    console.log("onIdle");
    setZoom(m.getZoom()!);
    setCenter(m.getCenter()!.toJSON());
  };

  const form = (
    <div
      style={{
        padding: "1rem",
        flexBasis: "250px",
        height: "100%",
        overflow: "auto",
      }}
    >
      <label className="block pl-4 dark:text-slate-100" htmlFor="zoom">
        Zoom
      </label>
      <input
        className="w-3/5 mr-auto px-4 py-2 mb-4 text-gray-700 bg-white border rounded-full sm:mx-2 dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-emerald-500 dark:focus:border-emerald-500 focus:outline-none focus:ring focus:ring-emerald-500 focus:ring-opacity-40"
        type="number"
        id="zoom"
        name="zoom"
        value={zoom}
        onChange={(event) => setZoom(Number(event.target.value))}
      />
      <br />
      <label className="block pl-4 dark:text-slate-100" htmlFor="lat">
        Latitude
      </label>
      <input
        className="w-3/5 mr-auto px-4 py-2 mb-4 text-gray-700 bg-white border rounded-full sm:mx-2 dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-emerald-500 dark:focus:border-emerald-500 focus:outline-none focus:ring focus:ring-emerald-500 focus:ring-opacity-40"
        type="number"
        id="lat"
        name="lat"
        value={center.lat}
        onChange={(event) =>
          setCenter({ ...center, lat: Number(event.target.value) })
        }
      />
      <br />
      <label className="block pl-4 dark:text-slate-100" htmlFor="lng">
        Longitude
      </label>
      <input
        className="w-3/5 mr-auto px-4 py-2 mb-4 text-gray-700 bg-white border rounded-full sm:mx-2 dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-emerald-500 dark:focus:border-emerald-500 focus:outline-none focus:ring focus:ring-emerald-500 focus:ring-opacity-40"
        type="number"
        id="lng"
        name="lng"
        value={center.lng}
        onChange={(event) =>
          setCenter({ ...center, lng: Number(event.target.value) })
        }
      />
      <h3>{clicks.length === 0 ? "Click on map to add markers" : "Clicks"}</h3>
      {clicks.map((latLng, i) => (
        <pre key={i}>{JSON.stringify(latLng.toJSON(), null, 2)}</pre>
      ))}
      <button
        onClick={() => setClicks([])}
        className="w-1/3 px-4 py-3 ml-3 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-200 transform bg-emerald-400 rounded-full sm:mx-2 hover:bg-emerald-500 focus:outline-none focus:bg-emerald-500"
      >
        Clear
      </button>
    </div>
  );

  const handleSearchAddress = (e: React.FormEvent) => {
    e.preventDefault();
    const enteredLocation = locationInputRef.current!.value;
    const GOOGLE_API_KEY = process.env.REACT_APP_GOOGLE_API_KEY;

    axios
      .get(
        `https://maps.googleapis.com/maps/api/geocode/json?address=${encodeURI(
          enteredLocation
        )}&key=${GOOGLE_API_KEY}`
      )
      .then((res) => {
        if (res.data.status !== "OK") throw new Error("Request Failed.");
        const result = res.data.results[0].geometry.location;
        // result contains lat and lng
        setCenter(result);
      })
      .catch((error) => console.log(error.message));
  };

  React.useEffect(() => {
    getStudyLocations();
  }, []);

  return (
    <div>
      <Layout>
        <Wrapper apiKey={process.env.REACT_APP_GOOGLE_API_KEY!} render={render}>
          <div className="py-8">
            {/* need to add Map component here */}
            <div className="pb-3 text-center">
              <h1 className="text-3xl font-semibold text-gray-800 dark:text-gray-100">
                Location
              </h1>
            </div>
            <div className="mx-auto pt-3">
              <div className="mx-auto md:w-2/3 lg:max-w-screen-md text-center">
                <p className="pb-3">
                  All locations you've ever studied are shown.
                </p>
                <Map
                  center={center}
                  onClick={onClick}
                  onIdle={onIdle}
                  zoom={zoom}
                  style={{
                    width: "100%",
                    height: "400px",
                    borderRadius: "8px",
                  }}
                >
                  {clicks.map((latLng, i) => (
                    <Marker key={i} position={latLng} />
                  ))}
                  {/* test */}
                  {locationData.map((location: locationObj, i) => (
                    <Marker
                      key={i}
                      position={
                        new google.maps.LatLng(location.lat, location.lng)
                      }
                    />
                  ))}
                </Map>
                {/* {form} */}
              </div>
            </div>
          </div>
        </Wrapper>
        {/* I'll delete this */}
      </Layout>
    </div>
  );
};

interface MapProps extends google.maps.MapOptions {
  style: { [key: string]: string };
  onClick?: (e: google.maps.MapMouseEvent) => void;
  onIdle?: (map: google.maps.Map) => void;
  // test
  children?: React.ReactNode;
}

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

  useDeepCompareEffectForMaps(() => {
    if (map) {
      map.setOptions(options);
    }
  }, [map, options]);

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

const Marker: React.FC<google.maps.MarkerOptions> = (options) => {
  const [marker, setMarker] = React.useState<google.maps.Marker>();

  React.useEffect(() => {
    if (!marker) {
      setMarker(new google.maps.Marker());
    }
    // remove marker from map on unmount
    return () => {
      if (marker) {
        marker.setMap(null);
      }
    };
  }, [marker]);

  React.useEffect(() => {
    if (marker) {
      marker.setOptions(options);
    }
  }, [marker, options]);

  return null;
};

const deepCompareEqualsForMaps = createCustomEqual(
  (deepEqual) => (a: any, b: any) => {
    if (
      isLatLngLiteral(a) ||
      a instanceof google.maps.LatLng ||
      isLatLngLiteral(b) ||
      b instanceof google.maps.LatLng
    ) {
      return new google.maps.LatLng(a).equals(new google.maps.LatLng(b));
    }
    return deepEqual(a, b);
  }
);

function useDeepCompareMemoize(value: any) {
  const ref = React.useRef();

  if (!deepCompareEqualsForMaps(value, ref.current)) {
    ref.current = value;
  }

  return ref.current;
}

function useDeepCompareEffectForMaps(
  callback: React.EffectCallback,
  dependencies: any[]
) {
  React.useEffect(callback, dependencies.map(useDeepCompareMemoize));
}

export default MapTry;
