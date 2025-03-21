export interface Timeline {
  timelines: Timelines;
  location: Location;
}

export interface Location {
  lat: number;
  lon: number;
  name: string;
  type: string;
}

export interface Timelines {
  hourly: Hourly[];
}

export interface Hourly {
  time: Date;
  values: { [key: string]: number | null };
}
