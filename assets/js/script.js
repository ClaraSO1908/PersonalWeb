document.addEventListener("DOMContentLoaded", function () {

  let language = 'es';

  const translations = {
    en: {
      /**
       * HOME
       */
      title: "Clara Sacedón Ortega",
      subtitle: "Passionate",
      dynamicText: ["Computer Engineer", "developer"],
      languageEN: "English",
      languageES: "Spanish",
      navbar1: "Home",
      navbar2: "About me",
      navbar3: "Resume",
      navbar4: "Contact",
  
      /**
       * ABOUT ME
       */
  
      //About me
      about: "About Me",
      moreAboutMe: "More about me",
      engineering: "COMPUTER ENGINEERING",
      about1: "I'm in the last year of Computer Engineering. I'm looking for a work for getting experience in professional informatic and social relations environments.",
      city: "Native City:",
      residence: "Residence:",
      studies: "Studies:",
      typeStudies: "Technical Engineering",
      about2: "I have always been very curious about the world of computing, especially web development. Since I was little, I was already exploring all tools that I knew for making my presentations more original.",
      
      //Skills
      skills: "Skills",
  
      //Interests
      interests: "Interests",
      i1: "E-commerce",
      i2: "Project management",
      i3: "Multimedia",
      i4: "Web Development",
      i5: "Computer Forensics",
      i6: "Data analytics",
      i7: "Cybersecurity",
      i8: "Artificial Intelligence & Machine Learning",
  
      //Phrases
      phrases: "Motivational phrases",
      f1: "It's more important to increase your income than to reduce your expenses. It's more important to grow up your spirit and not cut your dreams.",
      f2: "If you don't fail, you're not even trying. Take risks and reach your true potential.",
      f3: "Energy and persistence conquer all things.",
      f4: "It's hard to beat a person who never gives up.",
      f5: "Satisfaction lies in the effort, not in the attainment, full effort is full victory.",
      f6: "You are better off trying something and having it not work and learning from that than not doing anything at all.",
      f7: "If your business is not on the Internet, then your business will be out of business.",
      p1: "Inventor & Business owner",
      p2: "Project",
      p3: "Inventor, Scientist & Politician",
      p4: "Baseball player",
      p5: "Lawyer, Politician & Activist",
      p6: "CEO of Meta",
      p7: "Business Magnate & Co-founder of Microsoft",
  
      /**
       *  RESUME
       */
      resumeTitle: "Resume",
  
      //Summary
      resume: "Professional profile",
      r1: "I'm a student in the last year of Computer Engineering. I feel like learning a lot. Project management and e-commerce really appeal to me.",
  
      //Education
      education: "Education",
      e1: "High school degree",
      e2: "Nuestra Señora del Carmen School, Madrid",
      e3: "Scientist high school degree with Psychology and Technology of the Information and Communication like optionals subjects.",
      e4: "Computer Engineering",
      e5: "2019-Present",
      e6: "Escuela Superior de Informática, University of Castilla-La Mancha, Ciudad Real",
      e7: "Focus on Information Technology.",
  
      //Courses
      courses: "Additional training",
      c1: "Basic training in the Environment",
      c2: "Prevention of violent behavior",
      c3: "Food handling",
      c4: "Fight against energy poverty",
      c5: "Basic training in Gender Equality",
      c6: "Climate Change: Humanitarian Consequences",
      cruzRoja: "Spanish Red Cross",
  
      //Licences and certifications
      certiications: "Licences and certifications",
      ce1: "Leisure monitor and free time",
      ce2: "Professional Workshop 'Activities and Games in Special Education'",
      divDinamica: "Divulgación dinámica S.L.",
  
      //Volunteerings
      volunteering: "Volunteerings",
      v1: "Nuestra Señora del Carmen School",
      v2: "Helps in the management and organization of different solidarity campaigns and extracurricular activities.",
      v3: "Caritas Spain",
      v4: "Volunteer in the fight against poverty.",
      v5: "2019-Present",
      v6: "Volunteer in the Environment.",
      v7: "Cruz Roja Española Juventud",
      v8: "2020-Present",
      v9: "Solidarity campaigns and childhood.",
      v10: "2022-Present",
      v11: "Ciudad Real Environment Reference.",
  
      //Languages
      language: "Language Skills",
      l1: "B1 English Level",
      l2: "University of Cambridge",
  
      //Other
      others: "Additional Information",
      o1: "Driving licence type B",
  
      //Buttom
      downBtn: "Download currículum",
  
      /**
       * CONTACT
       */
      contactTitle: "Contact",
      contact: "Contact me",
      co1: "Addresses",
      co2: "Madrid or Ciudad Real",
      co3: "Social Networks",
      co4: "Email",
      co5: "Call me",
      co6: "Loading",
      co7: "Your message has been sent. Thank you!",
      sendBtn: "Send message",
      name: "Name",
      email: "Email",
      subject: "Subject",
      message: "Message"
    },
    es: {
      /**
       * PRINCIPAL
       */
      title: "Clara Sacedón Ortega",
      subtitle: "Apasionada",
      dynamicText: ["Ingeniera Informática", "desarrolladora"],
      languageEN: "Inglés",
      languageES: "Español",
      navbar1: "Principal",
      navbar2: "Conóceme",
      navbar3: "Formación",
      navbar4: "Contacto",
  
      /**
       * CONOCEME
       */
  
      //Sobre mi
      about: "Conóceme",
      moreAboutMe: "Más sobre mi",
      engineering: "INGENIERA INFORMÁTICA",
      about1: "Estudiante de último año de la carrera de Ingeniería Informática. En busca de un puesto para adquirir experiencia en los entornos profesionales de la informática y relaciones sociales.",
      city: "Ciudad Natal:",
      residence: "Lugar de residencia:",
      studies: "Estudios:",
      typeStudies: "Ingeniería técnica",
      about2: "Siempre he sentido mucha curiosidad por el mundo de la informática, sobre todo del desarrollo web. Desde pequeña ya exploraba todas las herramientas que estaban a mi alcance para poder hacer presentaciones originales.",
      
      //Habilidades
      skills: "Habilidades",
  
      //Intereses
      interests: "Intereses",
      i1: "Comercio Electrónico",
      i2: "Gestión de proyectos",
      i3: "Multimedia",
      i4: "Desarrollo Web",
      i5: "Peritaje informático",
      i6: "Análisis de datos",
      i7: "Ciberseguridad",
      i8: "Inteligencia artificial y Machine Learning",
  
      //Frases
      phrases: "Frases motivadoras",
      f1: "Es más importante aumentar tus ingresos que reducir tus gastos. Es más importante hacer crecer tu espíritu y no cortar tus sueños.",
      f2: "Si no fallas, ni siquiera lo estás intentando. Arriésgate y alcanza tu verdadero potencial.",
      f3: "La energía y la persistencia conquistan todas las cosas.",
      f4: "Es difícil vencer a quien nunca se rinde.",
      f5: "La satisfacción radica en el esfuerzo, no en el logro. El esfuerzo total es la victoria total.",
      f6: "Es mejor intentar algo que no funcione y aprender de ello, que no hacer nada.",
      f7: "Si tu negocio no está en Internet, tu negocio no existe.",
      p1: "Inventor & Empresario",
      p2: "Project",
      p3: "Inventor, Científico & Político",
      p4: "Jugador de béisbol",
      p5: "Abogado, Político & Activista",
      p6: "CEO de Meta",
      p7: "Magnate empresarial & Cofundador de Microsoft",
  
      /**
       *  RESUMEN
       */
      resumeTitle: "Formación",
  
      //Resumen
      resume: "Resumen",
      r1: "Estudiante de último curso de Ingeniería Informática con muchas ganas de aprender. Muy interesada en comercio electrónico y gestión de proyectos.",
  
      //Educacion
      education: "Educación",
      e1: "Bachillerato LOMCE",
      e2: "Colegio Nuestra Señora del Carmen, Madrid",
      e3: "Bachillerato de ciencias con psicología y tecnologías de la información y la comunicación como optativas",
      e4: "Ingeniería Informática",
      e5: "2019-Actualidad",
      e6: "Escuela Superior de Informática, Universidad de Castilla-La Mancha, Ciudad Real",
      e7: "Especialidad Tecnologías de la Información",
  
      //Cursos
      courses: "Cursos",
      c1: "Formación básica en Medio Ambiente",
      c2: "Prevención de conductas violentas",
      c3: "Manipulación de alimentos",
      c4: "Lucha contra la pobreza energética",
      c5: "Formación básica en Igualdad de Género",
      c6: "Cambio Climático: Consecuencias Humanitarias",
      cruzRoja: "Cruz Roja Española",
  
      //Licencias y Certificaciones
      certiications: "Licencias y certificaciones",
      ce1: "Monitor de ocio y tiempo libre",
      ce2: "Taller Profesional 'Actividades y Juegos en Educación Especial'",
      divDinamica: "Divulgación dinámica S.L.",
  
      //Voluntariados
      volunteering: "Voluntariados",
      v1: "Colegio Nuestra Señora del Carmen",
      v2: "Ayuda en la gestión y organización de diferentes campañas solidarias y actividades extraescolares",
      v3: "Cáritas Española",
      v4: "Personal voluntario en lucha contra la pobreza",
      v5: "2019-Actualidad",
      v6: "Personal voluntario en Medio Ambiente",
      v7: "Cruz Roja Española Juventud",
      v8: "2020-Actualidad",
      v9: "Campañas solidarias e infancia",
      v10: "2022-Actualidad",
      v11: "Referente Medio Ambiente Ciudad Real",
  
      //Idiomas
      language: "Idiomas",
      l1: "Inglés B1",
      l2: "Universidad de Cambridge",
  
      //Otros datos
      others: "Otros datos de interés",
      o1: "Carnet de conducir tipo B",
  
      //Buttom
      downBtn: "Descargar currículum",
  
      /**
       * CONTACTO
       */
      contactTitle: "Contacto",
      contact: "Contacta conmigo",
      co1: "Direcciones",
      co2: "Madrid o Ciudad Real",
      co3: "Redes Sociales",
      co4: "Correo electrónico",
      co5: "Llámame",
      co6: "Cargando",
      co7: "Tu mensaje ha sido enviado. ¡Muchas gracias!",
      sendBtn: "Enviar mensaje",
      name: "Nombre",
      email: "Correo electrónico",
      subject: "Asunto",
      message: "Mensaje"
    }
  };

  const dynamicText = document.getElementById("dynamic-text");
  const staticText = document.getElementById("static-text");

  const phrases = document.getElementById("dynamic-text");
  let index = 0;

  function typePhrase() {
    const phrase = phrases[index];
    let charIndex = 0;
    const interval = setInterval(function () {
      dynamicText.textContent += phrase[charIndex];
      charIndex++;
      if (charIndex === phrase.length) {
        clearInterval(interval);
        setTimeout(erasePhrase, 2000);
      }
    }, 85);
  }

  function erasePhrase() {
    const phrases = translations[language].dynamicText;
    if (!phrases || phrases.length === 0) {
      return;
    }
    
    const phrase = phrases[index];
    let charIndex = phrase.length;
    const interval = setInterval(function () {
      dynamicText.textContent = phrase.substring(0, charIndex);
      charIndex--;
      if (charIndex === -1) {
        clearInterval(interval);
        index = (index + 1) % phrases.length;
        setTimeout(typePhrase, 1000);
      }
    }, 85);
  }

  setTimeout(typePhrase, 500)

  async function typeRandomPhrase() {
    const phrases = translations[language].dynamicText;
    const phraseIndex = Math.floor(Math.random() * phrases.length);
    const phrase = phrases[phraseIndex];
  
    await erasePhrase(phrase);
  }  
  
  function changeLanguage(lang) {
    language = lang;
    const elements = document.querySelectorAll("[data-translate]");
    elements.forEach((element) => {
      const key = element.getAttribute("data-translate");
      if (element.tagName === "INPUT" || element.tagName === "TEXTAREA") {
        element.placeholder = translations[lang][key] || "";
      } else {
        element.textContent = translations[lang][key] || "";
      }
    });

    typeRandomPhrase();
  }

  const selectLanguage = document.getElementById("selectLanguage");
  selectLanguage.addEventListener("change", function () {
    const selectedLang = selectLanguage.value;
    changeLanguage(selectedLang);
  });

  const initialLang = selectLanguage.value;
  changeLanguage(initialLang);
});
