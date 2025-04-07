// filepath: /home/eliott/DEV/slack/app/router.tsx
import { createBrowserRouter, createMemoryRouter } from "react-router-dom";
import routes from "./routes";

const isServer = typeof window === "undefined";

const router = isServer
  ? createMemoryRouter(routes)
  : createBrowserRouter(routes);

export default router;