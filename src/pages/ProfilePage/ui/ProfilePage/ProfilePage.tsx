import { ProfileReducer } from "pages/ProfilePage/model/slice/profileSlice/profileSlice"
import { AsyncComponent } from "shared/lib/AsyncComponent/AsyncComponent"
import { Flex } from "shared/ui/Flex/Flex"
import { ProfileHeader } from "../ProfileHeader/ProfileHeader"
import { Layout } from "shared/ui/Layout/Layout"
import { useSelector } from "react-redux"
import { isMyProfile } from "../../model/selectors/isMyProfile"
import { Navigate, useParams } from "react-router-dom"
import { ProfileContent } from "../ProfileContent/ProfileContent"
import { GetRouter } from "shared/const/router"

const ProfilePage = () => {
	const ProfileId = useParams().id
	
	const isMy = useSelector(isMyProfile(Number(ProfileId)))

	if (!ProfileId) {
		return <Navigate to={GetRouter.Home()} />
	}

	return (
		<AsyncComponent reducer={ProfileReducer} reducerName="profile">
			<Layout>
				<Flex direction="column" gap={16}>
					{isMy ? <ProfileHeader /> : null}
					<ProfileContent />
				</Flex>
			</Layout>
		</AsyncComponent>
	)
}

export default ProfilePage
