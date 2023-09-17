import { ProfileCard } from "entity/profile"
import { ProfilePageSelectors } from "pages/ProfilePage"
import { getProfile } from "pages/ProfilePage"
import { actions } from "pages/ProfilePage"
import { Profile } from "pages/ProfilePage"
import { memo, useCallback, useEffect } from "react"
import { useSelector } from "react-redux"
import { useParams } from "react-router-dom"
import { useAppDispatch } from "shared/lib/hooks/useAppDispatch"

export const ProfileContent = memo(() => {
	const profile = useSelector(ProfilePageSelectors.selectProfile)
	const error = useSelector(ProfilePageSelectors.selectError)
	const ReadOnly = useSelector(ProfilePageSelectors.selectReadOnly)

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
			dispatch(actions.editProfile(data))
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
