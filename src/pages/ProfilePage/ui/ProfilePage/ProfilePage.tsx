import { ProfileCard } from "entity/profile"
import {
	ProfileReducer,
	editProfile,
} from "pages/ProfilePage/model/slice/profileSlice/profileSlice"
import { AsyncComponent } from "shared/lib/AsyncComponent/AsyncComponent"
import { useSelector } from "react-redux"
import { useAppDispatch } from "shared/lib/hooks/useAppDispatch"
import { useCallback, useEffect } from "react"
import { useTranslation } from "react-i18next"
import { useParams } from "react-router-dom"
import { getUser } from "entity/user/model/selector/getUserSelector"
import { Layout } from "shared/ui/Layout/Layout"
import { Flex } from "shared/ui/Flex/Flex"
import { nameSelector } from "pages/ProfilePage/model/selectors/nameSelector/NameSelector"
import { errorSelector } from "pages/ProfilePage/model/selectors/ErrorSelector/ErrorSelector"
import { isLoadingSelector } from "pages/ProfilePage/model/selectors/isLoadingSelector/isLoadingSelector"
import { lastnameSelector } from "pages/ProfilePage/model/selectors/LastNameSelector/LastNameSelector"
import { readOnlySelector } from "pages/ProfilePage/model/selectors/readOnlySelector/readOnlySelector"
import { AvatarSelector } from "pages/ProfilePage/model/selectors/AvatarSelector/AvatarSelector"
import { nicknameSelector } from "pages/ProfilePage/model/selectors/nikNameSelector/nikNameSelector"
import { citySelector } from "pages/ProfilePage/model/selectors/CitySelector/CitySelector"
import { ageSelector } from "pages/ProfilePage/model/selectors/ageSelector/ageSelector"
import { countrySelector } from "pages/ProfilePage/model/selectors/CountrySelector/countrySelector"
import { currencySelector } from "pages/ProfilePage/model/selectors/CurrencySelector/CurrencySelector"
import { getProfile } from "pages/ProfilePage/model/services/getProfile/getProfile"
import { Profile } from "pages/ProfilePage/model/types/ProfileSchema"
import { ProfileHeader } from "../ProfileHeader/ProfileHeader"

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
