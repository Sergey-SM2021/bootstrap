import { useTranslation } from "react-i18next"
import { Option } from "./Option/Option"
import { Select } from "./Select/Select"
import { useState } from "react"

interface SelectStorybookProps {
  disable: boolean;
  placeholder?: string;
}

export const SelectStorybook = ({ disable = true, placeholder }: SelectStorybookProps) => {
	const { t } = useTranslation()
	const [value, setValue] = useState<string>("")
	const handlerChange = (newValue: string) => {
		setValue(newValue)
	}
	return (
		<Select value={value} disabled={disable} onChange={handlerChange} placeholder={placeholder}>
			<Option value="01">{t("Москва")}</Option>
			<Option value="02">{t("Киров")}</Option>
			<Option value="03">{t("Владимир")}</Option>
		</Select>
	)
}
