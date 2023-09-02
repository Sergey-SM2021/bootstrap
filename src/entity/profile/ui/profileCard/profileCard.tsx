import { Text } from "shared/ui/Text/Text"
import style from "./profileCard.module.scss"
import { Input } from "shared/ui/Input/Input"
import { useTranslation } from "react-i18next"
import {
	Profile,
	ProfileSchema,
} from "pages/ProfilePage/model/types/ProfileSchema"
import { Spinner } from "shared/ui/spinner"
import { Avatar } from "shared/ui/avatar/avatar"
import { Option, Select } from "shared/ui/Select"
import { City } from "entity/City"
import { classNames } from "shared/lib/helpers/classNames/classNames"
import { Citys } from "entity/City/model/types/CitySchema"
import { Flex } from "shared/ui/Flex/Flex"

type profileType = Omit<ProfileSchema, "data" | "profileValidateErrors"> &
  Profile;

interface ProfileCardProps extends profileType {
  handlerCange: (value: Partial<Profile>) => void;
}

export const ProfileCard = (props: ProfileCardProps) => {
	const {
		error,
		isLoading,
		readOnly,
		handlerCange,
		age,
		avatar,
		city,
		country,
		currency,
		lastname,
		name,
		nickname,
	} = props

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
				<Avatar className={style.avatar} src={avatar} />
				<div className={style.item}>
					<Text>{t("name")}</Text>
					<Input readOnly={readOnly} value={name} onChange={handlerCangeName} />
				</div>
				<div className={style.item}>
					<Text>{t("lastname")}</Text>
					<Input
						readOnly={readOnly}
						value={lastname}
						onChange={handlerCangeLastName}
					/>
				</div>
				<div className={style.item}>
					<Text>{t("nickname")}</Text>
					<Input
						readOnly={readOnly}
						value={nickname}
						onChange={handlerChangenickname}
					/>
				</div>
				<div className={style.item}>
					<Text>{t("age")}</Text>
					<Input
						readOnly={readOnly}
						value={age.toString()}
						onChange={handlerCangeAge}
					/>
				</div>
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
				<div className={style.item}>
					<Text>{t("currency")}</Text>
					<Select
						disabled={readOnly}
						onChange={handlerChangeCity}
						value={currency}
					>
						<Option value="Доллар США">{t("Доллар США")}</Option>
						<Option value="Россий рубль">{t("Россий рубль")}</Option>
						<Option value="Японская иена">{t("Японская иена")}</Option>
					</Select>
				</div>
				<div className={style.item}>
					<Text>{t("city")}</Text>
					<City onChange={handlerChangeCity} value={city} disabled={readOnly} />
				</div>
				<div className={style.item}>
					<Text>{t("avatar")}</Text>
					<Input
						readOnly={readOnly}
						value={avatar}
						onChange={handlerChangeAvatar}
					/>
				</div>
			</div>
		</div>
	)
}
