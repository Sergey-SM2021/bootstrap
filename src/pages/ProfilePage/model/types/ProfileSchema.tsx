import { City, Country, Currency } from "shared/const/common"

export interface Profile {
  name: string;
  lastname: string;
  age: number;
  city: City;
  nikname: string;
  country: Country;
  avatar: string;
  currancy: Currency;
}

export interface ProfileSchema {
  data: {
    profile: Profile;
    editedProfile: Profile
  };
  isLoading?: boolean;
  error: string;
  readOnly: boolean;
}
