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

export interface PropsSetIsAlert {
  setIsAlert: (value: boolean) => void;
}

export interface PropsIsAlert {
  isAlert: boolean;
}
