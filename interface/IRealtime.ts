export interface IRealtime {
  data: IData;
  location: ILocation;
}

export interface IData {
  time: Date;
  values: { [key: string]: number };
}

export interface ILocation {
  lat: number;
  lon: number;
  name: string;
  type: string;
}
