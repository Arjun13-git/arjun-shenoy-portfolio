import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";

export default function Home() {
  return (
    <>
      <Navbar />

      <main className="pt-16">
        <section className="flex min-h-screen items-center justify-center">
          <h1 className="text-6xl font-bold">
            Neural Horizon 🌊
          </h1>
        </section>
      </main>

      <Footer />
    </>
  );
}