import { Spinner } from "shared/ui/spinner"
import style from "./PageLoader.module.scss"
import { Flex } from "shared/ui/Flex/Flex"

export const PageLoader = () => {
	return (
		<Flex justify="center" align="center" className={style.pageLoader}>
			<Spinner />
		</Flex>
	)
}
