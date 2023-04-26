export enum BOOKING_TYPES {
  FLIGHT = "passagem aérea",
  HOTEL = "hotel",
  PACKAGE = "pacote",
}

export type IBookingType =
  | BOOKING_TYPES.FLIGHT
  | BOOKING_TYPES.HOTEL
  | BOOKING_TYPES.PACKAGE;

export interface IDestination {
  id: number;
  name: string;
  description: string;
  image: any;
  bookingType: IBookingType;
  discountValue: number;
  coupomName: string;
  coupomDescription?: string;
}
