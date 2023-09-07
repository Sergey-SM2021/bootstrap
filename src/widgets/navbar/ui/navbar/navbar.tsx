import { memo } from "react"
import { StoreSchema } from "app/providers/ReduxProvider/config/StoreSchema"
import { Auth } from "../auth/Auth"
import { useSelector } from "react-redux"
import { NotAuth } from "../notAuth/NotAuth"

export const Navbar = memo(() => {
	const selector = useSelector((state: StoreSchema) => state.user.authData)

	if (selector) {
		return <Auth />
	}

	return <NotAuth />
})
