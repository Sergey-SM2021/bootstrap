import { useDrag } from "@use-gesture/react"
import { a, useSpring, config } from "@react-spring/web"

import styles from "./styles.module.scss"
import { PropsWithChildren, useCallback, useEffect } from "react"

const items = ["save item", "open item", "share item", "delete item", "cancel"]
const height = items.length * 60 + 80

interface openProps {
  canceled?: boolean;
}

interface DrawerProps extends PropsWithChildren {
  isOpen: boolean;
  onClose: VoidFunction;
}

export const Drawer = (props: DrawerProps) => {
	const { isOpen, onClose, children } = props
	const [{ y }, api] = useSpring(() => ({ y: height }))

	const open = useCallback(
		({ canceled }: openProps) => {
			api.start({
				y: 0,
				immediate: false,
				config: canceled ? config.wobbly : config.stiff,
			})
		},
		[api]
	)

	const close = (velocity = 0) => {
		api.start({
			y: height,
			immediate: false,
			config: { ...config.stiff, velocity },
		})
		onClose()
	}

	const bind = useDrag(
		({
			last,
			velocity: [, vy],
			direction: [, dy],
			offset: [, oy],
			cancel,
			canceled,
		}) => {
			if (oy < -70) cancel()
			if (last) {
				oy > height * 0.5 || (vy > 0.5 && dy > 0)
					? close(vy)
					: open({ canceled })
			} else api.start({ y: oy, immediate: true })
		},
		{
			from: () => [0, y.get()],
			filterTaps: true,
			bounds: { top: 0 },
			rubberband: true,
		}
	)

	const display = y.to((py) => (py < height ? "block" : "none"))

	useEffect(() => {
		if (isOpen) {
			open({})
		}
	}, [isOpen, open])

	return (
		<>
			{isOpen ? (
				<a.div onClick={() => close()} className={styles.overlay} />
			) : null}
			<a.div
				className={styles.sheet}
				{...bind()}
				style={{ display, bottom: `calc(-100vh + ${height - 100}px)`, y }}
			>
				{children}
			</a.div>
		</>
	)
}
