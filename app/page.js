
import Nav from "../components/nav";
import AboutMe from "../components/aboutMe";
import Technologies from "../components/technologies";
import Experience from "../components/experience";
import Footer from "../components/footer";
import Education from "../components/education";
import CTA from "../components/cta";
import Chatbot from "../components/chatbot";
import Projects from "../components/projects";


export default function Home() {
  return (
    <main className="flex flex-col items-center min-h-screen pb-0 px-0 overflow-hidden">
      <Nav />
      <AboutMe />
      <Projects />
      <Experience />
      <Education />
      <Technologies />
      <CTA />
      <Chatbot />
      <Footer />
    </main>
  );
}
