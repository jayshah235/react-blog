import { lazy } from "react";

export const WhatIsReact = lazy(() => import("../components/what-is-react"));
export const MagicalReact = lazy(() => import("../components/magical-react"));
export const ClassToFunc = lazy(() =>
  import("../components/class-to-function")
);
export const ReactUpdates = lazy(() => import("../components/react-19"));
export const CompareFrameworks = lazy(() =>
  import("../components/compare-frameworks")
);
