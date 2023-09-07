import { ProfileCard } from "entity/profile"
import {
	selectError,
	selectProfile,
	selectReadOnly,
} from "pages/ProfilePage/model/selectors/ProfilePageSelectors"
import { getProfile } from "pages/ProfilePage/model/services/getProfile/getProfile"
import { editProfile } from "pages/ProfilePage/model/slice/profileSlice/profileSlice"
import { Profile } from "pages/ProfilePage/model/types/ProfileSchema"
import { memo, useCallback, useEffect } from "react"
import { useSelector } from "react-redux"
import { useParams } from "react-router-dom"
import { useAppDispatch } from "shared/lib/hooks/useAppDispatch"

export const ProfileContent = memo(() => {
	const profile = useSelector(selectProfile)
	const error = useSelector(selectError)
	const ReadOnly = useSelector(selectReadOnly)

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
		<ProfileCard
			profile={profile}
			error={error}
			isLoading={false}
			handlerCange={handlerChange}
			readOnly={ReadOnly}
		/>
	)
})
