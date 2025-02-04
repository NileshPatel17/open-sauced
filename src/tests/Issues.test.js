import React from "react";
import Issues from "../containers/Issues";
import "@testing-library/jest-dom/extend-expect";
import {render, cleanup} from "@testing-library/react";
import {axe, toHaveNoViolations} from "jest-axe";
expect.extend(toHaveNoViolations);

import {data} from "./mocks";

test("container component should have no violations", async () => {
  const {container} = render(<Issues owner={data.user} />);
  const results = await axe(container);
  expect(results).toHaveNoViolations();

  cleanup();
});

test("renders loading when there is no owner", () => {
  const {container} = render(<Issues />);
  expect(container.firstChild).toHaveTextContent("...Loading");
});
