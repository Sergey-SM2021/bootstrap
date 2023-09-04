import { ProfileCard } from "entity/profile"
import {
	ProfileReducer,
	editProfile,
} from "pages/ProfilePage/model/slice/profileSlice/profileSlice"
import { AsyncComponent } from "shared/lib/AsyncComponent/AsyncComponent"
import { useSelector } from "react-redux"
import { useAppDispatch } from "shared/lib/hooks/useAppDispatch"
import { useCallback, useEffect } from "react"
import { useParams } from "react-router-dom"
import { getUser } from "entity/user/model/selector/getUserSelector"
import { Layout } from "shared/ui/Layout/Layout"
import { Flex } from "shared/ui/Flex/Flex"
import { getProfile } from "../../model/services/getProfile/getProfile"
import { Profile } from "../../model/types/ProfileSchema"
import { ProfileHeader } from "../ProfileHeader/ProfileHeader"
import {
	selectError,
	selectProfile,
	selectReadOnly,
} from "pages/ProfilePage/model/selectors/ProfilePageSelectors"

const ProfilePage = () => {
	const userId = useSelector(getUser)?.id
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
		<AsyncComponent reducer={ProfileReducer} reducerName="profile">
			<Layout>
				<Flex direction="column" gap={16}>
					{Number(userId) === Number(id) ? <ProfileHeader /> : null}
					<ProfileCard
						profile={profile}
						error={error}
						isLoading
						handlerCange={handlerChange}
						readOnly={ReadOnly}
					/>
				</Flex>
			</Layout>
		</AsyncComponent>
	)
}

export default ProfilePage
