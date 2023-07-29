import { PropsWithChildren } from "react"
import { RenderWithRouter } from "./renderWithRouter"
import { RenderWithTranslation } from "./renderWithTranslation"
import { ReduxProvider } from "app/providers/ReduxProvider"
import { StoreSchema } from "app/providers/ReduxProvider/config/StoreSchema"

interface ComponentRenderProps extends PropsWithChildren {
  route: string;
  initialStore?: DeepPartial<StoreSchema>
}

export const ComponentRender = ({ children, route, initialStore }: ComponentRenderProps) => (
	<RenderWithRouter route={route}>
		<RenderWithTranslation>
			<ReduxProvider initialStore={initialStore}>
				{children}
			</ReduxProvider>
		</RenderWithTranslation>
	</RenderWithRouter>
)
