import { Container } from "@/components/container";
import clsx from "clsx";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <Container className="bg-base-200 my-4 rounded-md min-w-[18rem]">
      {children}
    </Container>
  );
}
