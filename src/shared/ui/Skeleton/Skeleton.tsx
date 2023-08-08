import { CSSProperties } from "react"
import { classNames } from "shared/lib/helpers/classNames/classNames"
import clx from "./Skeleton.module.scss"

interface SkeletonProps {
  className?: string;
  width?: string | number;
  height?: string | number;
  radius?: string;
}

export const Skeleton = (props: SkeletonProps) => {
	const { className = "", height, radius, width } = props

	const style: CSSProperties = {
		height: height,
		borderRadius: radius,
		width: width,
	}

	return (
		<div style={style} className={classNames(clx.Skeleton, {}, [className])}>
      Skeleton
		</div>
	)
}
