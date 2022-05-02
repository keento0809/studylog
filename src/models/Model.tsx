import { ReactNode } from "react";

export interface PropsChildren {
  children?: ReactNode;
}

export interface GoogleGeocodingRes {
  results: { geometry: { location: { lat: number; lng: number } } };
  status: "OK" | "ZERO_RESULTS";
}

export interface StudyLogObj {
  hour: string;
  cost: string;
  summary: string;
}
