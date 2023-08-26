import { Option, Select } from "shared/ui/Select"
import { SelectProviderProps } from "shared/ui/Select/ui/Select/Select"
import { Citys } from "../model/types/CitySchema"

const citys = [Citys.Delhi, Citys.Moscow, Citys.Shanghai, Citys.Tokyo]

export const City = (props: SelectProviderProps) => {
	return (
		<Select {...props}>
			{citys.map((city) => (
				<Option value={city} key={city} >{city}</Option>
			))}
		</Select>
	)
}
