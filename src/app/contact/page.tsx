import { Top } from "@/components/top";
import ContactForm from "./contact";

export default function Contact() {
    return (
      <section id='contact' className="scroll-mt-24 mt-24">
        <Top topbar={{width: "w-32", children: "📬 Contact" }}>Let's talk!</Top>
        <ContactForm/>
      </section>
    )
  }