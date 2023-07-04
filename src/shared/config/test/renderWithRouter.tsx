import { PropsWithChildren } from "react"
import { MemoryRouter } from "react-router-dom"

interface RenderWithRouterProps extends PropsWithChildren {
  route: string;
}

export const RenderWithRouter = ({
	children,
	route,
}: RenderWithRouterProps) => (
	<MemoryRouter initialEntries={[route]}>{children}</MemoryRouter>
)
