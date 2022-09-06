import "./App.css";

import {
  useFlagVariation,
  useAdapterStatus,
  useFeatureToggle,
} from "@flopflip/react-broadcast";

import {
  DASHBOARD_SANITY_CHECK,
  DASHBOARD_COLOR,
} from "./FeatureFlagsProvider";

function App() {
  const { isConfigured } = useAdapterStatus();

  const dashboardSanityCheck = useFeatureToggle(DASHBOARD_SANITY_CHECK);
  const dashboardColor = useFlagVariation(DASHBOARD_COLOR);

  console.log({
    flags: {
      dashboardSanityCheck,
      dashboardColor,
    },
    adapter: {
      isConfigured,
    },
  });

  return (
    <div className="App">
      <header className="App-header">
        <h1
          style={{
            color: dashboardColor,
          }}
        >
          Hello, World!
        </h1>
        <br />
        <strong>dashboard-sanity-check</strong> is{" "}
        <strong>
          {dashboardSanityCheck ? "🟢 ENABLED 🟢" : "🔴 DISABLED 🔴"}
        </strong>
      </header>
    </div>
  );
}

export default App;
