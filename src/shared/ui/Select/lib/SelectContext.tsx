import { createContext } from "react"

export interface StateType {
  label: string;
  value: string;
}

interface SelectContextType {
  active: StateType;
  handlerChange: (state: StateType) => void;
}

export const SelectContext = createContext<SelectContextType>({
	active: { label: "", value: "" },
	handlerChange: () => {},
})
