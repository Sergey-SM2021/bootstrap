import { Text } from "shared/ui/Text/Text"
import style from "./profileCard.module.scss"
import { Input } from "shared/ui/Input/Input"
import { AppButton, AppButtonTheme } from "shared/ui/appButton"

interface ProfileCardProps {}

export const ProfileCard = ({}: ProfileCardProps) => {
	return (
		<div className={style.profileCard}>
			<div className={style.header}>
				<Text>Profile</Text>
				<AppButton theme={AppButtonTheme.primary} onClick={() => {}}>
          Edit
				</AppButton>
			</div>
			<div className={style.body}>
				<div className={style.item}>
					<Text>Имя</Text>
					<Input value="" onChange={() => {}} />
				</div>
				<div className={style.item}>
					<Text>Фамилия</Text>
					<Input value="" onChange={() => {}} />
				</div>
			</div>
		</div>
	)
}
