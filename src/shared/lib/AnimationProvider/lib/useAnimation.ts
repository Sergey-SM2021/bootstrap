import { useContext } from "react"
import { AnimationContext } from "../ui/AnimationProvider"

export const useAnimation = () => {
	const {isLoaded, Gesture, Spring} = useContext(AnimationContext)
	return {isLoaded, Gesture, Spring} 
}