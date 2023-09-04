import { Country, Currency } from "shared/const/common"
import { Citys } from "entity/City/model/types/CitySchema"

export interface Profile {
  name: string;
  lastname: string;
  age: number;
  city: Citys;
  nickname: string;
  country: Country;
  avatar: string;
  currency: Currency;
  id?: number;
}

export interface ProfileSchema {
  profile: Profile;
  editedProfile: Profile;
  isLoading?: boolean;
  error: string;
  readOnly: boolean;
  profileValidateErrors: [];
}

export enum ProfileErrors {
  AgeError = "AgeError",
  NameError = "NameError",
  LastNameError = "LastNameError",
  CityError = "CityError",
  nicknameError = "nicknameError",
  CountryError = "CountryError",
  AvatarError = "AvatarError",
  CurrencyError = "CurrencyError",
  ServerError = "ServerError",
}
