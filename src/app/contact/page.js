"use client"; 
import { motion } from "motion/react"

export default function ContactPage() {
    const contactItems = [
     {
        "text": "GitHub",
        "linkRel": "GitHub_Link",
        "linkHref": "https://github.com/ronkaotw",
        "linkAction": "GET"
      },
      {
        "text": "Linkedin",
        "linkRel": "LinkedinIn_Link",
        "linkHref": "https://www.linkedin.com/in/ronkaotw",
        "linkAction": "GET"
      },
      {
        "text": "Email",
        "linkRel": "Email_Link",
        "linkHref": "mailto:contact@ronkao.tw",
        "linkAction": "GET"
      }
    ];
    return (
    <motion.section initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} className="section-container text-center">

        <div className="w-[500px] rounded-3xl flex-col-center gap-6 p-6">
          <h2 className="text-2xl">聯絡我</h2>

           {contactItems.map((contact, index) => (
          <a
            href={contact.linkHref}
            rel={contact.linkRel}
            target="_blank"
            className="w-full py-2 bg-gray-600 rounded hover:bg-gray-700 transition-colors text-white text-lg" key={index}
          >
            {contact.text}
          </a>
         ))}
      </div>
    </motion.section>
    );
}
