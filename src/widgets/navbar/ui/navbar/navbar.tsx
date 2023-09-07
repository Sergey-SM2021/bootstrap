import { memo } from "react"
import { StoreSchema } from "app/providers/ReduxProvider/config/StoreSchema"
import { Auth } from "../auth/Auth"
import { useSelector } from "react-redux"
import { NotAuth } from "../notAuth/NotAuth"

export const Navbar = memo(() => {
	const isAuth = useSelector((state: StoreSchema) => state.user.authData?.id)

	if (isAuth) {
		return <Auth />
	}

	return <NotAuth />
})
