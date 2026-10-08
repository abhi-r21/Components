import { TiltCard } from "@/Components/tilt-card";


export default function Page() {
  return (
    <main className="grid min-h-screen place-items-center p-6">
      <TiltCard
        className="w-full max-w-xl"
        image="/images/Travel.jpg"
        imageAlt="Travel-Image"
        heading="Heading 1"
        subheading="Sub heading or Heading 2"
        description="Your description goes here."
      />
    </main>
  );
};