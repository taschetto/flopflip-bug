import memoryAdapter from "@flopflip/memory-adapter";
import { ConfigureFlopFlip } from "@flopflip/react-broadcast";

export const DASHBOARD_SANITY_CHECK = "dashboardSanityCheck";
export const DASHBOARD_COLOR = "dashboardColor";

const flags = {
  [DASHBOARD_SANITY_CHECK]: true,
  [DASHBOARD_COLOR]: "#FFCC00",
};

export const FeatureFlagsProvider = ({ children }) => {
  return (
    <ConfigureFlopFlip
      adapter={memoryAdapter}
      adapterArgs={{}}
      defaultFlags={flags}
    >
      {children}
    </ConfigureFlopFlip>
  );
};
