import { Text } from "shared/ui/Text/Text"
import style from "./profileCard.module.scss"
import { Input } from "shared/ui/Input/Input"
import { useTranslation } from "react-i18next"
import { Spinner } from "shared/ui/spinner"
import { Avatar } from "shared/ui/avatar/avatar"
import { Option, Select } from "shared/ui/Select"
import { City } from "entity/City"
import { classNames } from "shared/lib/helpers/classNames/classNames"
import { Citys } from "entity/City/model/types/CitySchema"
import { memo } from "react"
import { Profile } from "pages/ProfilePage/model/types/ProfileSchema"

interface ProfileCardProps {
  profile: Partial<Profile>;
  readOnly: boolean;
  error: string;
  isLoading: boolean;
  handlerCange: (value: Partial<Profile>) => void;
}

export const ProfileCard = memo((props: ProfileCardProps) => {
	const { error, isLoading, readOnly, handlerCange, profile } = props

	const { age, avatar, city, country, currency, lastname, name, nickname } =
    profile

	const { t } = useTranslation()

	const handlerCangeName = (value: string) => {
		handlerCange({ name: value })
	}

	const handlerCangeLastName = (value: string) => {
		handlerCange({ lastname: value })
	}

	const handlerCangeAge = (value: string) => {
		handlerCange({ age: Number(value) })
	}

	const handlerChangeCity = (value: string) => {
		handlerCange({ city: value as Citys })
	}

	const handlerChangeAvatar = (value: string) => {
		handlerCange({ avatar: value })
	}

	const handlerChangenickname = (value: string) => {
		handlerCange({ nickname: value })
	}

	if (isLoading) {
		return (
			<div className={style.profileCard}>
				<Spinner />
			</div>
		)
	}

	if (error) {
		return (
			<div className={style.profileCard}>
				<Text>{error}</Text>
			</div>
		)
	}

	return (
		<div className={classNames(style.profileCard, { [style.edit]: !readOnly })}>
			<div className={style.body}>
				{avatar ? <Avatar className={style.avatar} src={avatar} /> : null}
				{name ? (
					<div className={style.item}>
						<Text>{t("name")}</Text>
						<Input
							readOnly={readOnly}
							value={name}
							onChange={handlerCangeName}
						/>
					</div>
				) : null}
				{lastname ? (
					<div className={style.item}>
						<Text>{t("lastname")}</Text>
						<Input
							readOnly={readOnly}
							value={lastname}
							onChange={handlerCangeLastName}
						/>
					</div>
				) : null}
				{nickname ? (
					<div className={style.item}>
						<Text>{t("nickname")}</Text>
						<Input
							readOnly={readOnly}
							value={nickname}
							onChange={handlerChangenickname}
						/>
					</div>
				) : null}
				{age ? (
					<div className={style.item}>
						<Text>{t("age")}</Text>
						<Input
							readOnly={readOnly}
							value={age.toString()}
							onChange={handlerCangeAge}
						/>
					</div>
				) : null}
				{country ? (
					<div className={style.item}>
						<Text>{t("country")}</Text>
						<Select
							disabled={readOnly}
							onChange={handlerChangeCity}
							value={country}
						>
							<Option value="Россия">{t("Россия")}</Option>
							<Option value="Монголия">{t("Монголия")}</Option>
							<Option value="Канада">{t("Канада")}</Option>
						</Select>
					</div>
				) : null}
				{currency ? (
					<div className={style.item}>
						<Text>{t("currency")}</Text>
						<Select
							disabled={readOnly}
							onChange={handlerChangeCity}
							value={currency}
						>
							<Option value="USD">{t("Доллар США")}</Option>
							<Option value="Россий рубль">{t("Россий рубль")}</Option>
							<Option value="Японская иена">{t("Японская иена")}</Option>
						</Select>
					</div>
				) : null}
				{city ? (
					<div className={style.item}>
						<Text>{t("city")}</Text>
						<City value={{ id: 1, name: "" }} citys={[]} onChange={() => {}} />
					</div>
				) : null}
				{avatar ? (
					<div className={style.item}>
						<Text>{t("avatar")}</Text>
						<Input
							readOnly={readOnly}
							value={avatar}
							onChange={handlerChangeAvatar}
						/>
					</div>
				) : null}
			</div>
		</div>
	)
})
