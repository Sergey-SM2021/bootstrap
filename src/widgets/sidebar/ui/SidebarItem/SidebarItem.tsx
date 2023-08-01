import { AppLink } from "shared/ui/appLink"
import clx from "./SidebarItem.module.scss"
import { memo } from "react"
import { useSelector } from "react-redux"
import { getUser } from "entity/user/model/selector/getUserSelector"

interface SidebarItemProps {
  path: string;
  rolledUp: boolean;
  text: string;
  Icon: React.FC;
  priv: boolean
}

export const SidebarItem = memo((props: SidebarItemProps) => {
	const { path, rolledUp, Icon, text, priv } = props

	const isAuth = useSelector(getUser)

	if (!isAuth && priv) {
		return null
	}

	return (
		<div key={path}>
			<AppLink to={path} className={clx.link}>
				{!rolledUp ? <div>{text}</div> : null}
				{/* @ts-ignore */}
				<Icon className={clx.icon} />
			</AppLink>
		</div>
	)
})