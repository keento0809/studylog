import React from "react";
import Autocomplete from "react-google-autocomplete";

const AutoComplete = () => {
  const GOOGLE_API_KEY = process.env.REACT_APP_GOOGLE_API_KEY;

  return (
    <div>
      <h2>Let's autocomplete!</h2>
      <Autocomplete
        apiKey={GOOGLE_API_KEY}
        style={{ width: "90%" }}
        onPlaceSelected={(place: any) => {
          console.log(place);
        }}
        options={{ types: ["(cities)"] }}
      />
    </div>
  );
};

export default AutoComplete;
