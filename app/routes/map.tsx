import type { Route } from "./+types/map";
import { Map } from "../components/map/map";
import Login from "../components/login";
import Register from "../components/register";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "New React Router App" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export default function Map2() {
  return (
    <>
      <Map />
      <Login />
      <Register />
    </>
  );
}
