import { useRouteData } from 'solid-app-router';
export default function User() {
  const user = useRouteData();
  return <h1>{user().name}</h1>;
}