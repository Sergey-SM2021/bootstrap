import { createContext } from "react"

interface SelectContextType {
  label: string
  value: string;
  handlerChange: (value: string, label:string) => void;
}

export const SelectContext = createContext<SelectContextType>({
	label:"",
	value: "",
	handlerChange: () => {},
})
