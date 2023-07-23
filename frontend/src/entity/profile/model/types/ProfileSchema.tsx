import { City } from "shared/const/common"

export interface ProfileSchema {
  data?: {
    fio: string;
    age: number;
    balance: number;
    avatar: string;
    city: City;
    shop: any[];
  };
  isLoading?: boolean;
  error: string;
  readonly: boolean
}
