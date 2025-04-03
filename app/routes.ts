import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
    // This is the main entry point for your routes
    index("routes/home.tsx"),
    route("map", "routes/map.tsx")
] satisfies RouteConfig;