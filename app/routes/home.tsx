import type { Route } from "./+types/home";
import { Welcome } from "../components/welcome/welcome";
import { getLocation } from '@firebasegen/default-connector';

async function fetchLocations() {
  try {
    const result = await getLocation();
    const locations = result.data?.location;

    if (locations) {
      console.log('Locations:', locations);
    }
  } catch (error) {
    console.error('Error fetching locations:', error);
  }
}

fetchLocations();

export function meta({}: Route.MetaArgs) {
  return [
    { title: "New React Router App" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export default function Home() {
  return <Welcome />;
}