export type HttpStatus = "pending" | "fulfilled" | "rejected";
export type calculationDirection = 'ltr' | 'rtl';

interface ICurrencyImage {
  thumb: string;
  small: string;
  large: string;
}

export interface ICurrency {
  id: string;
  symbol: string;
  name: string;
  image: ICurrencyImage;
}
