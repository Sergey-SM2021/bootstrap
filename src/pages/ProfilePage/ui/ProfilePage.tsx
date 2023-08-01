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
import { niknameSelector } from "../model/selectors/nikNameSelector/nikNameSelector"
import { citySelector } from "../model/selectors/CitySelector/CitySelector"
import { countrySelector } from "../model/selectors/CountrySelector/countrySelector"
import { currencySelector } from "../model/selectors/CurrencySelector/CurrencySelector"

const ProfilePage = () => {
	const name = useSelector(nameSelector)
	const error = useSelector(errorSelector)
	const isLoading = useSelector(isLoadingSelector)
	const lastname = useSelector(lastnameSelector)
	const readOnly = useSelector(readOnlySelector)
	const avatar = useSelector(AvatarSelector)
	const nikname = useSelector(niknameSelector)
	const city = useSelector(citySelector)

	const country = useSelector(countrySelector)
	const currancy = useSelector(currencySelector)

	const dispatch = useAppDispatch()

	useEffect(() => {
		dispatch(getProfile(13))
	}, [dispatch])

	const handlerChange = useCallback(
		(data: Partial<Profile>) => {
			dispatch(editProfile(data))
		},
		[dispatch]
	)

	return (
		<AsyncComponent reducer={ProfileReducer} reducerName="profile">
			<div className={style.profile}>
				<ProfileHeader />
				<ProfileCard
					age={12}
					avatar={avatar}
					city={city}
					country={country}
					currancy={currancy}
					lastname={lastname}
					name={name}
					nikname={nikname}
					handlerCange={handlerChange}
					error={error}
					isLoading={isLoading}
					readOnly={readOnly}
				/>
			</div>
		</AsyncComponent>
	)
}

export default ProfilePage
