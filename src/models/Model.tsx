import { ReactNode } from "react";

export interface PropsChildren {
  children?: ReactNode;
}

export interface PropsChildrenWithLabel {
  children?: ReactNode;
  label: string;
}

export interface PropsForHomeCard {
  children?: ReactNode;
  label: string;
  isHome: boolean;
}

export interface GoogleGeocodingRes {
  results: { geometry: { location: { lat: number; lng: number } } };
  status: "OK" | "ZERO_RESULTS";
}

export interface StudyLogObj {
  date: string;
  hour: string;
  cost: string;
  summary: string;
}

export interface locationObj {
  lat: number;
  lng: number;
}

export interface StudyLogObjFinal {
  date: string;
  hour: string;
  cost: string;
  summary: string;
  location: locationObj;
  userId: string;
}

export interface StudyLogObjWithIsHome {
  date: string;
  hour: string;
  cost: string;
  summary: string;
  isHome: boolean;
}

export interface CostDataObj {
  date: string;
  value: string;
}

export interface HourDataObj {
  date: string;
  value: number;
}

export interface PropsSetIsAlert {
  setIsAlert: (value: boolean) => void;
}

export interface PropsIsAlert {
  isAlert: boolean;
}

export interface DataObj {
  date: string;
  value: number;
}

export interface lightModeValue {
  isLightMode: boolean;
  toggleMode: () => void;
}

export interface AuthValue {
  isLoggedIn: boolean;
  authLogin: () => void;
  authLogout: () => void;
}

export interface PropsLogList {
  sortedStudyLogs: StudyLogObj[];
}

export interface StudyLogsContextInterface {
  studyLogsData: StudyLogObjFinal[];
  totalStudyHours: number;
  totalAmountCosts: number;
  setInitialStudyLogs: (logs: StudyLogObjFinal[]) => void;
  updateStudyLogsData: (log: StudyLogObjFinal) => void;
  countTotalStudyHours: (log: StudyLogObjFinal) => void;
  countTotalAmountCosts: (log: StudyLogObjFinal) => void;
}

export interface IsHome {
  isHome: boolean;
}

export interface MapProps extends google.maps.MapOptions {
  style: { [key: string]: string };
  onClick?: (e: google.maps.MapMouseEvent) => void;
  onIdle?: (map: google.maps.Map) => void;
  // test
  children?: React.ReactNode;
}
