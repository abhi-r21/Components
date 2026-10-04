import { Container } from "@/Components/container";
import { Hero } from "@/Components/hero";
import { UpComing } from "@/Components/Up-Coming";

export default function Page() {
  return <div className="relative w-full scrollbar-none flex-1 items-center justify-center bg-white text-black dark:bg-neutral-950">
    <Container>
      <UpComing/>
    </Container>;
    </div>
};