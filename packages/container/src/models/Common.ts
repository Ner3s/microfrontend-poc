import { LazyExoticComponent, ReactElement } from "react";

export interface IRoutes {
  path: string;
  element: LazyExoticComponent<() => ReactElement<unknown>> | ReactElement;
  private?: boolean;
}
