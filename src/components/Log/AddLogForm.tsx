import axios from "axios";
import React, {
  useRef,
  useState,
  useEffect,
  Fragment,
  useContext,
} from "react";
import StudyLogsContext from "../../contexts/studyLogs-context";
import {
  PropsSetIsAlert,
  StudyLogObjFinal,
  locationObj,
  MapProps,
} from "../../models/Model";
import { Status, Wrapper } from "@googlemaps/react-wrapper";
import { createCustomEqual } from "fast-equals";
import { isLatLngLiteral } from "@googlemaps/typescript-guards";
import Autocomplete from "react-google-autocomplete";
import FilledButton from "../UI/Button/FilledButton";
import { doc, setDoc } from "firebase/firestore";
import { db } from "../../pages/Main";
import { auth } from "../../pages/Main";

const render = (status: Status) => {
  return <h1>{status}</h1>;
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

// Map
const Map: React.FC<MapProps> = ({
  onClick,
  onIdle,
  children,
  style,
  ...options
}) => {
  // declare useRef
  const ref = React.useRef<HTMLDivElement>(null);
  // declare useState
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
            return React.cloneElement(child, {});
          }
        })}
      </div>
    </>
  );
};
// Marker
const Marker: React.FC<google.maps.MarkerOptions> = (options) => {
  const [marker, setMarker] = React.useState<google.maps.Marker>();
  React.useEffect(() => {
    if (!marker) {
      setMarker(new google.maps.Marker());
    }
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

const AddLogForm = ({ setIsAlert }: PropsSetIsAlert) => {
  // declare useContext
  const studyLogsCtx = useContext(StudyLogsContext);
  // declare useRef
  const locationInputRef = useRef<HTMLInputElement>(null);
  const DateInputRef = useRef<HTMLInputElement>(null);
  const hourInputRef = useRef<HTMLInputElement>(null);
  const costInputRef = useRef<HTMLInputElement>(null);
  const summaryInputRef = useRef<HTMLInputElement>(null);

  const [isMapping, setIsMapping] = useState(false);
  const [locationInfoState, setLocationInfoState] = useState<locationObj>();

  const currentUserId = auth.currentUser?.uid;
  const GOOGLE_API_KEY_FOR_AUTOCOMPLETE = process.env.REACT_APP_GOOGLE_API_KEY;
  function handleSubmitLog(event: React.FormEvent) {
    event.preventDefault();
    const enteredHour = hourInputRef.current?.value;
    const enteredCost = costInputRef.current?.value;
    const enteredSummary = summaryInputRef.current?.value;
    const enteredDate = DateInputRef.current!.value;
    const enteredLocationInfo = locationInfoState;

    if (enteredDate > newDate || enteredDate === "") {
      alert("Invalid date input.");
      return;
    }
    if (enteredHour === "" || enteredCost === "" || enteredSummary === "") {
      alert("Invalid input");
      return;
    }

    const studyLog: StudyLogObjFinal = {
      date: enteredDate,
      hour: enteredHour!,
      cost: enteredCost!,
      summary: enteredSummary!,
      location: addressLatLng!,
      userId: currentUserId!,
    };
    studyLogsCtx.updateStudyLogsData(studyLog);

    const sendRequest = async () => {
      try {
        await setDoc(doc(db, "logs", `${studyLog.date}`), studyLog);
      } catch (error: any) {
        console.log(error.message);
      }
      hourInputRef.current!.value = "";
      costInputRef.current!.value = "";
      summaryInputRef.current!.value = "";
      setIsAlert(true);
      window.setTimeout(() => setIsAlert(false), 1000);
    };
    sendRequest();
  }
  let newDate: string;
  useEffect(() => {
    const today = new Date();
    const year = today.getFullYear();
    const month = today.getMonth() + 1;
    const day = today.getDate();

    newDate = `${year}-${month < 10 ? "0" : ""}${month}-${
      day < 10 ? "0" : ""
    }${day}`;
  }, []);
  const [mapHeight, setMapHeight] = useState("200px");
  const [addressLatLng, setAddressLatLng] = React.useState<locationObj>();
  const [zoom, setZoom] = React.useState(12);
  const [center, setCenter] = React.useState<google.maps.LatLngLiteral>({
    lat: 49.2846717,
    lng: -123.1200546,
  });
  let currentLocation;
  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        const pos = {
          lat: position.coords.latitude,
          lng: position.coords.longitude,
        };
        currentLocation = pos;
        setCenter({
          lat: pos.lat,
          lng: pos.lng,
        });
      });
    }
    if (window.innerWidth > 1280) setMapHeight("350px");
  }, []);
  function handleClick(e: google.maps.MapMouseEvent) {
    setAddressLatLng({
      lat: e.latLng!.toJSON().lat,
      lng: e.latLng!.toJSON().lng,
    });
  }
  return (
    <Fragment>
      <Wrapper apiKey={process.env.REACT_APP_GOOGLE_API_KEY!} render={render}>
        <div className="bg-white py-8 dark:bg-gray-800 lg:basis-1/2 xl:basis-10/12">
          <div className="max-w-3xl mx-auto text-center">
            <div className="map-containerです">
              <h1 className="text-xl lg:text-lg tracking-tighter font-semibold text-gray-800 dark:text-gray-100">
                Add New Log
              </h1>
              <div className="pt-6 xl:pt-2">
                <span className="dark:text-gray-100 text-sm">
                  Click the spot where you studied on the map
                </span>
              </div>
              <div className="googleMap-search md:w-10/12 lg:w-full mx-auto md:flex md:flex-row md:items-center md:justify-center">
                <div className="w-full md:w-1/2 xl:min-w-454 my-4 md:mb-0 rounded-lg flex items-center justify-center">
                  <Map
                    onClick={handleClick}
                    center={center}
                    zoom={zoom}
                    style={{
                      width: "100%",
                      height: mapHeight,
                      borderRadius: "8px",
                    }}
                  ></Map>
                </div>
                <div className="md:basis-2/4 flex flex-col flex-wrap items-start">
                  <div className="">
                    <label
                      htmlFor=""
                      className="block pl-8 text-sm dark:text-emerald-300"
                    >
                      Location*
                    </label>
                  </div>
                  <div className="">
                    <Autocomplete
                      apiKey={GOOGLE_API_KEY_FOR_AUTOCOMPLETE}
                      className="w-3/5 md:w-4/5 mr-auto px-4 py-2 text-sm text-gray-700 bg-white border rounded-full sm:mx-2 dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-emerald-500 dark:focus:border-emerald-500 focus:outline-none focus:ring focus:ring-emerald-500 focus:ring-opacity-40"
                      onPlaceSelected={(place: any) => {
                        setCenter({
                          lat: place.geometry.location.lat(),
                          lng: place.geometry.location.lng(),
                        });
                      }}
                    />
                    <button className="w-1/3 md:w-4/5 px-3 py-2 md:mt-4 ml-3 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-200 transform bg-emerald-400 rounded-full sm:mx-2 hover:bg-emerald-500 focus:outline-none focus:bg-emerald-500 dark:bg-emerald-500">
                      Search
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="md:flex md:items-center md:justify-center xl:justify-start">
              <div className="flex flex-col xl:flex-row flex-wrap mt-6 space-y-3 sm:space-y-0 sm:justify-center xl:justify-start sm:-mx-2">
                <div className="flex flex-col flex-wrap items-start">
                  <label
                    htmlFor=""
                    className="block pl-4 text-sm dark:text-emerald-300"
                  >
                    Date *
                  </label>
                  <input
                    ref={DateInputRef}
                    type="date"
                    className="w-6/12 xl:min-w-180 mr-auto px-4 py-2 text-sm text-gray-700 bg-white border rounded-full sm:mx-2 dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-emerald-500 dark:focus:border-emerald-500 focus:outline-none focus:ring focus:ring-emerald-500 focus:ring-opacity-40"
                    placeholder="Hour"
                  />
                </div>
                <div className="flex flex-row items-start md:justify-center xl:basis-2/3 xl:justify-evenly">
                  <div className="flex flex-col items-start">
                    <label
                      htmlFor=""
                      className="block pl-4 text-sm dark:text-emerald-300"
                    >
                      Hour *
                    </label>
                    <input
                      ref={hourInputRef}
                      type="text"
                      className="w-4/5 xl:w-full mr-auto px-4 py-2 text-sm text-gray-700 bg-white border rounded-full sm:mx-2 dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-emerald-500 dark:focus:border-emerald-500 focus:outline-none focus:ring focus:ring-emerald-500 focus:ring-opacity-40"
                      placeholder="Hour"
                    />
                  </div>
                  <div className="flex flex-col items-start">
                    <label
                      htmlFor=""
                      className="block pl-4 text-sm dark:text-emerald-300"
                    >
                      Cost *
                    </label>
                    <input
                      ref={costInputRef}
                      type="text"
                      className="w-full mx-auto px-4 py-2 text-sm text-gray-700 bg-white border rounded-full sm:mx-2 dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-emerald-500 dark:focus:border-emerald-500 focus:outline-none focus:ring focus:ring-emerald-500 focus:ring-opacity-40"
                      placeholder="$"
                    />
                  </div>
                </div>

                <div className="flex flex-col items-start xl:pt-2 xl:min-w-454">
                  <label
                    htmlFor=""
                    className="pl-4 text-sm dark:text-emerald-300"
                  >
                    Summary *
                  </label>
                  <input
                    ref={summaryInputRef}
                    type="text"
                    className="w-full px-4 py-2 text-gray-700 text-sm bg-white border rounded-full sm:mx-2 dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-emerald-500 dark:focus:border-emerald-500 focus:outline-none focus:ring focus:ring-emerald-500 focus:ring-opacity-40"
                    placeholder="Text here"
                  />
                </div>

                <div
                  className="py-4 md:py-7 xl:pt-7.5 xl:ml-8 min-w-180"
                  onClick={handleSubmitLog}
                >
                  <FilledButton />
                </div>
              </div>
            </div>
          </div>
        </div>
      </Wrapper>
    </Fragment>
  );
};

export default AddLogForm;
