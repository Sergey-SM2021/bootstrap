import { AnimationProvider, useAnimation } from "shared/lib/AnimationProvider"
import { Drawer, DrawerProps } from "../Drawer/Drawer"
import { memo } from "react"
import { Spinner } from "shared/ui/spinner"

type DrawerBuilder = Omit<DrawerProps, "Gesture" | "Spring">;

export const DrawerBuilder = memo((props: DrawerBuilder) => {
	return (
		<AnimationProvider>
			<DrawerBuilderInner {...props} />
		</AnimationProvider>
	)
})

const DrawerBuilderInner = memo((props: DrawerBuilder) => {
	const { isLoaded, Gesture, Spring } = useAnimation()

	if (isLoaded && Gesture && Spring) {
		return <Drawer {...props} Gesture={Gesture} Spring={Spring} />
	}

	return (
		<div>
			<Spinner />
		</div>
	)
})
