import { Role } from "entity/user"
import { getUserRole } from "entity/user"
import { PropsWithChildren } from "react"
import { useSelector } from "react-redux"
import { Navigate } from "react-router-dom"
import { GetRouter } from "shared/const/router"

interface ForbiddenGuardProps extends PropsWithChildren {
  role: Role[];
}

export const ForbiddenGuard = ({ children, role }: ForbiddenGuardProps) => {
	const userRole = useSelector(getUserRole)
	const isForbidden = role.includes(userRole)

	return (
		<>{isForbidden ? children : <Navigate to={GetRouter.Forbidden()} />}</>
	)
}
