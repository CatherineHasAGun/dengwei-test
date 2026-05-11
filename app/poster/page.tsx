import { Header } from "@/components/Header";
import { PosterPageContent } from "@/components/PosterPageContent";

export default function PosterPage() {
  return (
    <main className="min-h-screen pb-10">
      <Header />
      <div className="mx-auto w-full max-w-[480px] px-5">
        <PosterPageContent />
      </div>
    </main>
  );
}
