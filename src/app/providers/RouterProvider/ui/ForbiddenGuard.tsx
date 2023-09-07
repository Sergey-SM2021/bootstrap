import { Role } from "entity/user/model/const/user"
import { getUserRole } from "entity/user/model/selector/getUser"
import { PropsWithChildren } from "react"
import { useSelector } from "react-redux"
import { Navigate } from "react-router-dom"
import { RouterPaths } from "shared/config/routerConfig/RouterConfig"

interface ForbiddenGuardProps extends PropsWithChildren {
  role: Role[];
}

export const ForbiddenGuard = ({ children, role }: ForbiddenGuardProps) => {
	const userRole = useSelector(getUserRole)
	const isForbidden = role.includes(userRole)

	return (
		<>{isForbidden ? children : <Navigate to={RouterPaths.forbidden} />}</>
	)
}
