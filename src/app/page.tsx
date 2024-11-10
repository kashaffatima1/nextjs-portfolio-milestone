
import Herosection from "./Components/Herosection";
import Education from "./Components/Education";
import Skills from "./Components/Skill";
import ContactForm from "./Components/Contact";
import Footer from "./Components/Footer";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-[#121212]">
    <div className="container mx-auto px-12 py-4">
    <Herosection />
    <Education/>
    <Skills/>
    <ContactForm/>
    <Footer />
      </div>
  </main>
  );
}
