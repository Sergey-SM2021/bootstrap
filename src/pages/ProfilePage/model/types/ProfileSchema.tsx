import { City, Country, Currency } from "shared/const/common"

export interface Profile {
  name: string
  lastname: string
  age: number
  city: City
  nikname: string
  country: Country
  avatar: string
  currency: Currency
}

export interface ProfileSchema {
  data: {
    profile: Profile;
    editedProfile: Profile
  };
  isLoading?: boolean
  error: string
  readOnly: boolean
  profileValidateErrors: []
}

export enum ProfileErrors {
  AgeError = "AgeError",
  NameError = "NameError",
  LastNameError = "LastNameError",
  CityError = "CityError",
  NikNameError = "NikNameError",
  CountryError = "CountryError",
  AvatarError = "AvatarError",
  CurrencyError = "CurrencyError",
  ServerError = "ServerError"
}