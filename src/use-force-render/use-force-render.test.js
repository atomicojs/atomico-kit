import { createHooks } from "atomico/test-hooks";
import { useForceRender } from "./use-force-render.js";

it("useForceRender", (done) => {
  const hooks = createHooks(done);

  hooks.load(() => {
    const forceRender = useForceRender();
    forceRender();
  });
});
