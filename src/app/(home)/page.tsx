import { ModeToggle } from "@/components/mode-toggle";

export default function Home() {
  return (
    <div className="w-full h-full p-4">
      <h1> Hey, its working! </h1>
      <ModeToggle />

      <div className="bg-zinc-100 dark:bg-zinc-800">
        <strong> testando </strong>
      </div>
    </div>
  );
}
