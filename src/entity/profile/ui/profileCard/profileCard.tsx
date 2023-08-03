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
import { City } from "shared/const/common"
import { classNames } from "shared/lib/helpers/classNames/classNames"

type profileType = Omit<ProfileSchema, "data" | "profileValidateErrors"> & Profile;

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
		nikname,
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
		handlerCange({ city: value as City })
	}

	const handlerChangeAvatar = (value: string) => {
		handlerCange({ avatar: value })
	}

	const handlerChangeNikname = (value: string) => {
		handlerCange({ nikname: value })
	}

	console.log(city)
	

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
		<div className={classNames(style.profileCard, {[style.edit] : !readOnly})}>
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
					<Text>{t("nikname")}</Text>
					<Input
						readOnly={readOnly}
						value={nikname}
						onChange={handlerChangeNikname}
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
						initialValue={{ label: country, value: country }}
					>
						<Option label="Россия" value="Россия"></Option>
						<Option label="Монголия" value="Монголия"></Option>
						<Option label="Канада" value="Канада"></Option>
					</Select>
				</div>
				<div className={style.item}>
					<Text>{t("currency")}</Text>
					<Select
						disabled={readOnly}
						onChange={handlerChangeCity}
						initialValue={{ label: currency, value: currency }}
					>
						<Option label="Доллар США" value="Доллар США"></Option>
						<Option label="Россий рубль" value="Россий рубль"></Option>
						<Option label="Японская иена" value="Японская иена"></Option>
					</Select>
				</div>
				<div className={style.item}>
					<Text>{t("city")}</Text>
					<Select
						disabled={readOnly}
						onChange={handlerChangeCity}
						initialValue={{ label: city, value: city }}
					>
						<Option label="Москва" value="Москва"></Option>
						<Option label="Тбилиси" value="Тбилиси"></Option>
						<Option label="Токио" value="Токио"></Option>
					</Select>
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
