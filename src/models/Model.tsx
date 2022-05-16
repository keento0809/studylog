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

export interface PropsLogList {
  sortedStudyLogs: StudyLogObj[];
}

export interface StudyLogsContextInterface {
  studyLogsData: StudyLogObj[];
  totalStudyHours: number;
  totalAmountCosts: number;
  setInitialStudyLogs: (logs: StudyLogObj[]) => void;
  updateStudyLogsData: (log: StudyLogObj) => void;
  countTotalStudyHours: (log: StudyLogObj) => void;
  countTotalAmountCosts: (log: StudyLogObj) => void;
}

export interface IsHome {
  isHome: boolean;
}

export interface InnerWidthValue {}
