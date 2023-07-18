import { Modal } from "shared/ui/Modal/Modal"
import { Form } from "../form/form"
import { memo } from "react"

interface LoginModalProps {
	isOpen: boolean
	onClose: VoidFunction
}

export const LoginModal = memo((props: LoginModalProps) => {
	return <Modal {...props}>
		<Form />
	</Modal>
})

LoginModal.displayName = "LoginModal"