import clx from "./Overlay.module.scss"

interface OverlayProps {
  onClose: VoidFunction;
}

export const Overlay = ({ onClose }: OverlayProps) => {
	return <div className={clx.overlay} onClick={onClose} />
}
