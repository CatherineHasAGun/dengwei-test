import { Header } from "@/components/Header";
import { ResultPageContent } from "@/components/ResultPageContent";

export default function ResultPage() {
  return (
    <main className="min-h-screen pb-10">
      <Header />
      <div className="mx-auto w-full max-w-[480px] px-5">
        <ResultPageContent />
      </div>
    </main>
  );
}
