
import Nav from "../components/nav";
import AboutMe from "../components/aboutMe";
import Technologies from "../components/technologies";
import Experience from "../components/experience";
import Footer from "../components/footer";
import Education from "../components/education";
import CTA from "../components/cta";
import ContactFrom from "../components/contactForm";
import Chatbot from "../components/chatbot";




export default function Home() {
  return (
    <main className="flex flex-col items-center w-full min-h-screen pb-0 gap-16">
      <Nav />
      <AboutMe />
      <Experience />
      <Education />
      <Technologies />
      <CTA />
      <ContactFrom />
      <Chatbot />
      <Footer />
    </main>
  );
}
