import { Modal } from "shared/ui/Modal/Modal"
import { memo, Suspense } from "react"
import { FormAsync } from "../form/form.async"
import { Spinner } from "shared/ui/spinner"

interface LoginModalProps {
  isOpen: boolean;
  onClose: VoidFunction;
}

export const LoginModal = memo((props: LoginModalProps) => {
	if (!props.isOpen) {
		return null
	}
	return (
		<Modal {...props}>
			<Suspense fallback={<Spinner />}>
				<FormAsync onSuccess={props.onClose} />
			</Suspense>
		</Modal>
	)
})

LoginModal.displayName = "LoginModal"
