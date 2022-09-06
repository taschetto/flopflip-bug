import { render, screen } from "@testing-library/react";
import { FeatureFlagsProvider } from "./FeatureFlagsProvider";
import App from "./App";

test("renders learn react link", () => {
  render(
    <FeatureFlagsProvider>
      <App />
    </FeatureFlagsProvider>
  );

  screen.debug();
});
