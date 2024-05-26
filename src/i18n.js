// src/i18n.js
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      en: {
        translation: {
          home: "Home",
          portfolio: "Portfolio",
          contact: "Contact",
          connect_with_me: "Connect with me",
          my_resume: "My resume",
          introduction: "I'm Mauricio Basalo, frontend developer based in Uruguay.",
          description: "I am a frontend developer from Uruguay with 2 years of experience as a freelancer frontend developer looking for new opportunities.",
          get_in_touch: "Get in touch",
          lets_talk: "Let's talk",
          available: "I'm currently available to take on new projects, so feel free to send me a message about what you have on mind. You can contact anytime.",
          your_name: "Your Name",
          enter_your_name: "Enter your name",
          your_email: "Your Email",
          enter_your_email: "Enter your email",
          your_message: "Write your message here",
          enter_your_message: "Enter your message",
          submit_now: "Submit now",
          my_latest_work: "My latest work",
          show_more: "Show More",
          show_less: "Show Less"
        }
      },
      es: {
        translation: {
          home: "Inicio",
          portfolio: "Portafolio",
          contact: "Contacto",
          connect_with_me: "Conéctate conmigo",
          my_resume: "Mi currículum",
          introduction: "Soy Mauricio Basalo, desarrollador frontend en Uruguay.",
          description: "Soy un desarrollador frontend de Uruguay con 2 años de experiencia como freelancer buscando nuevas oportunidades.",
          get_in_touch: "Ponte en contacto",
          lets_talk: "Hablemos",
          available: "Actualmente estoy disponible para nuevos proyectos, así que no dudes en enviarme un mensaje sobre lo que tienes en mente.",
          your_name: "Tu Nombre",
          enter_your_name: "Ingresa tu nombre",
          your_email: "Tu Email",
          enter_your_email: "Ingresa tu email",
          your_message: "Escribe tu mensaje aquí",
          enter_your_message: "Ingresa tu mensaje",
          submit_now: "Enviar ahora",
          my_latest_work: "Mi último trabajo",
          show_more: "Mostrar más",
          show_less: "Mostrar menos"
        }
      }
    },
    fallbackLng: "en",
    interpolation: {
      escapeValue: false // React ya escapa los valores por defecto
    }
  });

export default i18n;
