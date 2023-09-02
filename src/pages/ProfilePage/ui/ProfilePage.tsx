import { ProfileCard } from "entity/profile"
import {
	ProfileReducer,
	editProfile,
} from "pages/ProfilePage/model/slice/profileSlice/profileSlice"
import { AsyncComponent } from "shared/lib/AsyncComponent/AsyncComponent"
import { lastnameSelector } from "../model/selectors/LastNameSelector/LastNameSelector"
import { nameSelector } from "../model/selectors/nameSelector/NameSelector"
import { useSelector } from "react-redux"
import { useAppDispatch } from "shared/lib/hooks/useAppDispatch"
import { useCallback, useEffect } from "react"
import { getProfile } from "../model/services/getProfile/getProfile"
import { ProfileHeader } from "./ProfileHeader/ProfileHeader"
import style from "./ProfilePage.module.scss"
import { errorSelector } from "../model/selectors/ErrorSelector/ErrorSelector"
import { isLoadingSelector } from "../model/selectors/isLoadingSelector/isLoadingSelector"
import { readOnlySelector } from "../model/selectors/readOnlySelector/readOnlySelector"
import { Profile } from "../model/types/ProfileSchema"
import { AvatarSelector } from "../model/selectors/AvatarSelector/AvatarSelector"
import { nicknameSelector } from "../model/selectors/nikNameSelector/nikNameSelector"
import { citySelector } from "../model/selectors/CitySelector/CitySelector"
import { countrySelector } from "../model/selectors/CountrySelector/countrySelector"
import { currencySelector } from "../model/selectors/CurrencySelector/CurrencySelector"
import { useTranslation } from "react-i18next"
import { ageSelector } from "../model/selectors/ageSelector/ageSelector"
import { useParams } from "react-router-dom"
import { getUser } from "entity/user/model/selector/getUserSelector"
import { Layout } from "shared/ui/Layout/Layout"
import { Flex } from "shared/ui/Flex/Flex"

const ProfilePage = () => {
	const { t } = useTranslation()
	const name = useSelector(nameSelector)
	const error = useSelector(errorSelector)
	const isLoading = useSelector(isLoadingSelector)
	const lastname = useSelector(lastnameSelector)
	const readOnly = useSelector(readOnlySelector)
	const avatar = useSelector(AvatarSelector)
	const nickname = useSelector(nicknameSelector)
	const city = useSelector(citySelector)
	const age = useSelector(ageSelector)
	const userId = useSelector(getUser)?.id

	const country = useSelector(countrySelector)
	const currency = useSelector(currencySelector)

	const dispatch = useAppDispatch()
	const id = useParams().id

	useEffect(() => {
		if (__PROJECT__ === "frontend") {
			if (id) {
				dispatch(getProfile(Number(id)))
			}
		}
	}, [dispatch, id])

	const handlerChange = useCallback(
		(data: Partial<Profile>) => {
			dispatch(editProfile(data))
		},
		[dispatch]
	)

	return (
		<AsyncComponent reducer={ProfileReducer} reducerName="profile">
			<Layout>
				<Flex direction="column" gap={16}>
					{Number(userId) === Number(id) ? <ProfileHeader /> : null}
					<ProfileCard
						age={age}
						avatar={avatar}
						city={city}
						country={country}
						currency={currency}
						lastname={lastname}
						name={name}
						nickname={nickname}
						handlerCange={handlerChange}
						error={t(error)}
						isLoading={isLoading}
						readOnly={readOnly}
					/>
				</Flex>
			</Layout>
		</AsyncComponent>
	)
}

export default ProfilePage
