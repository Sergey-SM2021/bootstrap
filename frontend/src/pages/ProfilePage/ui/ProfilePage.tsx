import { ProfileCard } from "entity/profile"
import { ProfileReducer } from "entity/profile/model/slice/profileSlice"
import { AsyncComponent } from "shared/lib/AsyncComponent/AsyncComponent"

const ProfilePage = () => {
	return (
		<AsyncComponent reducer={ProfileReducer} reducerName="profile">
			<ProfileCard />
		</AsyncComponent>
	)
}

export default ProfilePage
