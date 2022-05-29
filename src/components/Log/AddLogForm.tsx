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
// import Layout from "../../layouts/Layout";

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
            return React.cloneElement(child, { map });
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

  // original
  const GOOGLE_API_KEY = process.env.REACT_APP_GOOGLE_API_KEY_GEOCODING;
  var google = window.google;

  // testing
  // const defaultMap = new google.maps.Map(
  //   document.getElementById("defaultMap")!,
  //   {
  //     center: { lat: 10, lng: 10 },
  //     zoom: 8,
  //   }
  // );

  function handleSearchAddress(event: React.FormEvent) {
    event.preventDefault();

    const enteredInput = locationInputRef.current!.value;
    axios
      .get(
        `https://maps.googleapis.com/maps/api/geocode/json?address=${encodeURI(
          enteredInput
        )}&key=${GOOGLE_API_KEY}`
      )
      .then((res) => {
        if (res.data.status !== "OK") {
          throw new Error("Request failed.");
        }
        const locationInfo = res.data.results[0].geometry.location;
        console.log(locationInfo);
        setLocationInfoState(locationInfo);
        const map = new google.maps.Map(document.getElementById("mapping")!, {
          center: locationInfo,
          zoom: 15,
        });
        new google.maps.Marker({ position: locationInfo, map: map });
      })
      .catch((error) => {
        alert(error.message);
        console.log(error);
      });
  }

  function handleSubmitLog(event: React.FormEvent) {
    event.preventDefault();
    const enteredHour = hourInputRef.current?.value;
    const enteredCost = costInputRef.current?.value;
    const enteredSummary = summaryInputRef.current?.value;
    const enteredDate = DateInputRef.current!.value;
    const enteredLocationInfo = locationInfoState;

    // validate date
    if (enteredDate > newDate || enteredDate === "") {
      alert("Invalid date input.");
      return;
    }

    // validate other inputs
    if (enteredHour === "" || enteredCost === "" || enteredSummary === "") {
      alert("Invalid input");
      return;
    }
    // original
    // const studyLog: StudyLogObj = {
    const studyLog: StudyLogObjFinal = {
      date: enteredDate,
      hour: enteredHour!,
      cost: enteredCost!,
      summary: enteredSummary!,
      location: enteredLocationInfo!,
    };

    // test
    studyLogsCtx.updateStudyLogsData(studyLog);

    const sendRequest = async () => {
      const res = await fetch(
        "https://studylog-8e387-default-rtdb.firebaseio.com/studylogs.json",
        {
          method: "POST",
          body: JSON.stringify(studyLog),
        }
      );
      if (!res.ok) throw new Error();
      const data = await res.json();
      console.log(data);

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

    // original code
    // newDate = `${month}/${day}/${year}`;
    newDate = `${year}-${month < 10 ? "0" : ""}${month}-${
      day < 10 ? "0" : ""
    }${day}`;
  }, []);

  // regarding Maps Javascript API
  const [clicks, setClicks] = React.useState<google.maps.LatLng[]>([]);
  const [zoom, setZoom] = React.useState(12);
  const [center, setCenter] = React.useState<google.maps.LatLngLiteral>({
    lat: 49.2846717,
    lng: -123.1200546,
  });

  return (
    <Fragment>
      <Wrapper
        apiKey={process.env.REACT_APP_GOOGLE_API_KEY_FOR_HOME!}
        render={render}
      >
        <form
          className="bg-white py-8 dark:bg-gray-800 lg:basis-1/2 xl:basis-2/5"
          onSubmit={handleSubmitLog}
        >
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-3xl lg:text-2xl font-semibold text-gray-800 dark:text-gray-100">
              Add New Log
            </h1>
            <div
              // action=""
              className="googleMap-search pt-6 md:w-4/6 lg:w-full mx-auto md:flex md:flex-row-reverse md:items-center md:justify-center"
              // onSubmit={handleSearchAddress}
            >
              <div className="w-full my-4 md:mb-0 rounded-lg flex items-center justify-center">
                <Map
                  center={center}
                  zoom={zoom}
                  style={{
                    width: "100%",
                    height: "200px",
                    borderRadius: "8px",
                  }}
                >
                  {/* {clicks.map((latLug, i) => (
                  <Marker key={i} position={latLug} />
                ))} */}
                </Map>
              </div>
              <div className="md:basis-2/4">
                <input
                  ref={locationInputRef}
                  className="w-3/5 md:w-4/5 mr-auto px-4 py-2 text-gray-700 bg-white border rounded-full sm:mx-2 dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-emerald-500 dark:focus:border-emerald-500 focus:outline-none focus:ring focus:ring-emerald-500 focus:ring-opacity-40"
                  type="text"
                  placeholder="Search Location"
                />
                <button
                  onClick={handleSearchAddress}
                  className="w-1/3 md:w-4/5 px-4 py-3 md:mt-4 ml-3 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-200 transform bg-emerald-400 rounded-full sm:mx-2 hover:bg-emerald-500 focus:outline-none focus:bg-emerald-500 dark:bg-emerald-500"
                >
                  Search
                </button>
              </div>
              {/* Reversed the order */}
            </div>

            <div className="md:flex md:items-center md:justify-center">
              <div className="flex flex-col mt-6 space-y-3 sm:space-y-0 sm:justify-center sm:-mx-2">
                <div className="flex flex-col items-start">
                  <label
                    htmlFor=""
                    className="block pl-4 dark:text-emerald-300"
                  >
                    Date *
                  </label>
                  <input
                    ref={DateInputRef}
                    // onChange={handleCheckDate}
                    type="date"
                    className="w-6/12 mr-auto px-4 py-2 text-gray-700 bg-white border rounded-full sm:mx-2 dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-emerald-500 dark:focus:border-emerald-500 focus:outline-none focus:ring focus:ring-emerald-500 focus:ring-opacity-40"
                    placeholder="Hour"
                  />
                </div>
                <div className="flex flex-row items-start md:justify-center">
                  <div className="flex flex-col items-start">
                    <label
                      htmlFor=""
                      className="block pl-4 dark:text-emerald-300"
                    >
                      Hour *
                    </label>
                    <input
                      ref={hourInputRef}
                      type="text"
                      className="w-4/5 mr-auto px-4 py-2 text-gray-700 bg-white border rounded-full sm:mx-2 dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-emerald-500 dark:focus:border-emerald-500 focus:outline-none focus:ring focus:ring-emerald-500 focus:ring-opacity-40"
                      placeholder="Hour"
                    />
                  </div>
                  <div className="flex flex-col items-start">
                    <label
                      htmlFor=""
                      className="block pl-4 dark:text-emerald-300"
                    >
                      Cost *
                    </label>
                    <input
                      ref={costInputRef}
                      type="text"
                      className="w-fll mx-auto px-4 py-2 text-gray-700 bg-white border rounded-full sm:mx-2 dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-emerald-500 dark:focus:border-emerald-500 focus:outline-none focus:ring focus:ring-emerald-500 focus:ring-opacity-40"
                      placeholder="$"
                    />
                  </div>
                </div>

                <div className="flex flex-col items-start">
                  <label htmlFor="" className="pl-4 dark:text-emerald-300">
                    Summary *
                  </label>
                  <input
                    ref={summaryInputRef}
                    type="text"
                    className="w-full px-4 py-2 text-gray-700 bg-white border rounded-full sm:mx-2 dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-emerald-500 dark:focus:border-emerald-500 focus:outline-none focus:ring focus:ring-emerald-500 focus:ring-opacity-40"
                    placeholder="Text here"
                  />
                </div>

                <div className="py-4 md:py-7">
                  <button className="w-full md:w-7/12 lg:w-1/2 px-4 py-3 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-200 transform bg-emerald-400 rounded-full sm:mx-2 hover:bg-emerald-500 focus:outline-none focus:bg-emerald-500 dark:bg-emerald-500">
                    ADD
                  </button>
                </div>
              </div>
            </div>
          </div>
        </form>
      </Wrapper>
      {/* {isMapping && (
        <div id="mapping" style={{ width: "100%", height: "200px" }}></div>
      )} */}
    </Fragment>
  );
};

export default AddLogForm;
