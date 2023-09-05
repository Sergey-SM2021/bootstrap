import { MyListbox } from "shared/ui/listbox/ui/Listbox"

interface CityType {
  id: number;
  name: string;
}

interface CityProps {
  onChange: (value: CityType) => void;
  value: CityType;
  citys: CityType[];
}

export const City = (props: CityProps) => {
	const { citys, onChange, value } = props
	return <MyListbox items={citys} onSelect={onChange} value={value} />
}
