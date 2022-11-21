export interface IAccount {
  Id: number,
  Name: string,
  LastName: string,
  Email: string,
  Password: string,
  Type: string,

}

export interface ICountries {

  name: {
    common: string,
    official: string,

  };
  cca3: string,
  capital: string,
  flags: {
    png: string,
    svg: string
  },
  region: string,
  subregion: string,
  languages: [],
  currencies: [],
  timezones: string,
  borders: [],
  area: string;
  maps: {
    googleMaps: string,
    openStreetMaps: string
  },
  latlng: [],
  population: string
}



