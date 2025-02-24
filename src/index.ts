import { App, Plugin } from "vue";
import * as components from "./components/index";

export * from "./components/index";
export * from "@/utils/Select";
export * from "@/hooks/useRefDebounced";
export * from "@/shared/constants";
export * from "@/shared/types";

export const VortexUI: Plugin = {
  install(app: App) {
    Object.entries(components).forEach(([name, component]) => {
      app.component(name, component);
    });
  },
};
