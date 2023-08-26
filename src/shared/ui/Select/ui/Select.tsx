import { useTranslation } from "react-i18next"
import { Option } from "./Option/Option"
import { Select } from "./Select/Select"

interface SelectStorybookProps {
  disable: boolean;
}

export const SelectStorybook = ({ disable = true }: SelectStorybookProps) => {
	const { t } = useTranslation()
	return (
		<Select
			value={{ label: "uuu", value: "7878" }}
			disabled={disable}
			onChange={() => {}}
		>
			<Option value="01">{t("Москва")}</Option>
			<Option value="02">{t("Киров")}</Option>
			<Option value="03">{t("Владимир")}</Option>
		</Select>
	)
}
