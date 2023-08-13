import style from "./avatar.module.scss"
import { classNames } from "shared/lib/helpers/classNames/classNames"

interface AvatarProps {
  src: string;
  size?: "sm" | "md" | "xs";
  className?: string;
}

export const Avatar = (props: AvatarProps) => {
	const { src, size = "md", className = "" } = props

	let avatarSize
	if (size === "md") {
		avatarSize = 150
	} else if (size === "sm") {
		avatarSize = 100
	} else {
		avatarSize = 75
	}

	return (
		<img
			style={{ width: avatarSize, height: avatarSize }}
			src={src}
			alt="avatar"
			className={classNames(style.avatar, {}, [className])}
		/>
	)
}
