import { memo } from "react"
import { Auth } from "../auth/Auth"
import { useSelector } from "react-redux"
import { NotAuth } from "../notAuth/NotAuth"
import { getUser } from "entity/user/model/selector/getUserSelector"

export const Navbar = memo(() => {
	const isAuth = useSelector(getUser)

	if (isAuth) {
		return <Auth />
	}

	return <NotAuth />
})
