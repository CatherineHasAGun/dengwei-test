import { Header } from "@/components/Header";
import { TestFlow } from "@/components/TestFlow";

export default function TestPage() {
  return (
    <main className="min-h-screen pb-10">
      <Header />
      <div className="mx-auto w-full max-w-[480px] px-5">
        <TestFlow />
      </div>
    </main>
  );
}
