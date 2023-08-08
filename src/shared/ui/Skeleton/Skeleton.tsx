import { CSSProperties } from "react"
import clx from "./Skeleton.module.scss"
import { classNames } from "shared/lib/helpers/classNames/classNames"

interface SkeletonProps {
  className?: string;
  width?: string | number;
  height?: string | number;
  radius?: string | number;
}

export const Skeleton = (props: SkeletonProps) => {
	const {className = "", height, radius, width} = props

	const style:CSSProperties = {
		height, 
		borderRadius:radius, 
		width
	}

	return (
		<div className={classNames(clx.skeleton, {}, [className])} style={style}/>
	)
}
