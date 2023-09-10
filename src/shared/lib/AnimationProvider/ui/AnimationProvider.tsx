import {
	PropsWithChildren,
	createContext,
	useEffect,
	useMemo,
	useRef,
	useState,
} from "react"

type GestureType = typeof import("@use-gesture/react");
type SpringType = typeof import("@react-spring/web");

interface AnimationContextProps {
  Gesture?: GestureType | null;
  Spring?: SpringType | null;
  isLoaded: boolean;
}

export const AnimationContext = createContext<AnimationContextProps>({
	Gesture: null,
	Spring: null,
	isLoaded: false,
})

type AnimationProviderProps = PropsWithChildren;

export const AnimationProvider = ({ children }: AnimationProviderProps) => {
	const Gesture = useRef<GestureType>()
	const Spring = useRef<SpringType>()
	const [isLoaded, setIsLoaded] = useState(false)
	
	useEffect(() => {
		Promise.all([
			import("@use-gesture/react"),
			import("@react-spring/web"),
		]).then(([gesture, spring]) => {
			Gesture.current = gesture
			Spring.current = spring
			setIsLoaded(true)
		})
	}, [])
	
	const value = useMemo(
		() => ({
			isLoaded: isLoaded,
			Gesture: Gesture.current,
			Spring: Spring.current,
		}),
		[isLoaded]
	)
	
	return (
		<AnimationContext.Provider value={value}>
			{children}
		</AnimationContext.Provider>
	)
}
