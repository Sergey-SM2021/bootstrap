import { AppLink } from "shared/ui/appLink"
import clx from "./SidebarItem.module.scss"
import { memo } from "react"

interface SidebarItemProps {
  path: string;
  rolledUp: boolean;
  text: string;
  Icon: React.FC;
}

export const SidebarItem = memo((props: SidebarItemProps) => {
	const { path, rolledUp, Icon, text } = props
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

SidebarItem.displayName = "Sidebar Item"