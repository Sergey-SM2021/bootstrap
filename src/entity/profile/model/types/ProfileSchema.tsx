import { City } from "shared/const/common"

export interface ProfileSchema {
  data?: {
    name: string;
    lastname: string;
    city: City
  };
  isLoading?: boolean;
  error: string;
  readOnly: boolean
}
