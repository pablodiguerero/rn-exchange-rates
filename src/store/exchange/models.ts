import { HttpStatus, ICurrency } from "../../types";

export interface IExcangeState {
  currencies?: ICurrency[];
  currenciesLoadingStatus?: HttpStatus;
  currentRate?: number;
  currentRateLoadingStatus?: HttpStatus;
  symbolLeft?: string;
  symbolRight?: string;
}