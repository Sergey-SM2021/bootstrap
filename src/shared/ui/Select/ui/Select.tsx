import { Option } from "./Option/Option"
import { Select } from "./Select/Select"

interface SelectStorybookProps {
  disable: boolean;
}

export const SelectStorybook = ({ disable = true }: SelectStorybookProps) => {
	return (
		<Select
			disabled={disable}
			onChange={() => {}}
			initialValue={{ label: "label", value: "value" }}
		>
			<Option label="Москва" value="01"></Option>
			<Option label="Киров" value="02"></Option>
			<Option label="Владимир" value="03"></Option>
		</Select>
	)
}
