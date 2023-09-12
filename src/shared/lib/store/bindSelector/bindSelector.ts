import { StoreSchema } from "app/providers/ReduxProvider/config/StoreSchema"
import { useSelector } from "react-redux"

type SelectorType<T> = (State: StoreSchema) => T;

/**
 *
 * @param selector - The selector
 * @returns - [The selector wrapped the hook], selector directly
 */

export function bindSelector<T>(selector: SelectorType<T>) {
	const useSelectorHook = () => {
		return useSelector(selector)
	}

	return [useSelectorHook, selector]
}
