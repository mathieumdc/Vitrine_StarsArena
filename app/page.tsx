import Hero from "@/components/Hero";
import About from "@/components/About";
import Partner from "@/components/Partner";
import Contact from "@/components/Contact";
import { FloatingNav } from "@/components/ui/FloatingNav";
import { navItems } from "@/data";

export const dynamic = "force-dynamic";
export default function Home() {
  return (
    <main className="relative bg-black-100 flex justify-center items-center flex-col mx-auto sm:px-10 px-5">
      <div className="max-w-7xl w-full">
        <FloatingNav navItems={navItems} />
        <Hero />
        <div className="relative z-20">
          <About />
          <Partner />
          <Contact />
        </div>
      </div>
    </main>
  );
}