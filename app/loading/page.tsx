import { Header } from "@/components/Header";
import { LoadingRedirect } from "@/components/LoadingRedirect";

export default function LoadingPage() {
  return (
    <main className="min-h-screen pb-10">
      <Header />
      <div className="mx-auto w-full max-w-[480px] px-5">
        <LoadingRedirect />
      </div>
    </main>
  );
}
