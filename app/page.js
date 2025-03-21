import About from "@/Components/AboutMe/Aboutme";
import Contact from "@/Components/ContactMe/ContactMe";
import Features from "@/Components/Features/Features";
import Main from "@/Components/Main/Main";
import Nav from "@/Components/Nav/Nav";
import Projects from "@/Components/Projects/Projects";
import Services from "@/Components/Services/Services";
import Skills from "@/Components/Skills/Skills";

export default function Home() {
  
  return (
    <section>
      <Nav></Nav>
      <Main></Main>
      <Services></Services>
      <About></About>
      <Skills></Skills>
      <Projects></Projects>
      <Features></Features>
      <Contact></Contact>
    </section> 
    
  );
}
