import { PropsWithChildren } from "react"
import { RenderWithRouter } from "./renderWithRouter"
import { RenderWithTranslation } from "./renderWithTranslation"

interface ComponentRenderProps extends PropsWithChildren {
  route: string;
}

export const ComponentRender = ({ children, route }: ComponentRenderProps) => (
	<RenderWithRouter route={route}>
		<RenderWithTranslation>{children}</RenderWithTranslation>
	</RenderWithRouter>
)
