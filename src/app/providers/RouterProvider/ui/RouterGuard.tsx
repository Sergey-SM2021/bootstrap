import { getUser } from "entity/user/model/selector/getUser"
import { PropsWithChildren } from "react"
import { useSelector } from "react-redux"
import { Navigate } from "react-router-dom"
import { GetRouter } from "shared/const/router"

type RouteGuardProps = PropsWithChildren

export const RouteGuard = ({children}:RouteGuardProps) => {
	const isAuth = useSelector(getUser)

	return <>{isAuth ? children : <Navigate replace to={GetRouter.Home()} />}</>
}