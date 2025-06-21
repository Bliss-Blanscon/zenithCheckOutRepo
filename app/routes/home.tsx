import type { Route } from "./+types/Home";
import { AuthProvider } from "~/Context/AuthContext";
import Test from "~/components/home/test";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "DE BLISS" },
    { name: "description", content: "Welcome to De Bliss!" },
  ];
}

export default function Home() {
  return (
    <AuthProvider>
      <Test />
    </AuthProvider>
  );
}
