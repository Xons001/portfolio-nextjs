export const translations = {
  en: {
    nav: {
      about: "About",
      projects: "Projects",
      contact: "Contact",
      subtitle: "Full-stack JavaScript developer",
    },
    hero: {
      badge: "Available for frontend and full-stack roles",
      name: "Seán Sáez Fuller",
      title:
        "Full-stack developer building React, Angular, Next.js and Java/Spring Boot products",
      intro:
        "I build web products across frontend, backend, data and deployment. My recent work includes environmental platforms, geospatial viewers, secure file workflows, internal tools and cloud-connected systems.",
      contact: "Contact me",
      projects: "View projects",
      cv: "Download CV",
      cvHref: "/files/CV-Sean-2026-en.pdf",
      cvFile: "CV-Sean-2026-en.pdf",
      stats: [
        ["Focus", "Frontend + full stack"],
        ["Stack", "React, Angular, Java"],
        ["Mindset", "Product + delivery"],
      ],
    },
    about: {
      eyebrow: "About",
      title: "Full-stack developer with a strong frontend and data mindset",
      intro:
        "My professional path combines React, Angular, TypeScript, Java/Spring Boot, Node.js, SQL databases and cloud tooling. I enjoy turning complex operational requirements into interfaces, APIs and deployments that teams can actually use.",
      tabs: {
        skills: {
          title: "Skills",
          eyebrow: "Core stack",
          summary:
            "The technologies I use most comfortably when building interfaces, APIs, data-heavy tools and deployed products.",
          groups: [
            {
              title: "Frontend",
              items: [
                "JavaScript and TypeScript",
                "React and Next.js",
                "Angular and Ionic",
                "HTML, CSS and Tailwind CSS",
                "UX-focused forms and workflows",
              ],
            },
            {
              title: "Backend and data",
              items: [
                "Java and Spring Boot",
                "Node.js and Express",
                "REST APIs and service logic",
                "MySQL, MariaDB and PostgreSQL",
                "Prisma ORM and SQL validation",
              ],
            },
            {
              title: "Delivery and platforms",
              items: [
                "Docker Compose and multi-container apps",
                "Virtual machines and server deployments",
                "GeoServer, Airflow and JasperReports",
                "Azure, AWS and Google Cloud exposure",
                "Jira, Bitbucket and pull-request workflows",
              ],
            },
          ],
        },
        background: {
          title: "Background",
          eyebrow: "Path so far",
          summary:
            "A quick view of the professional experience that shaped the way I work today.",
          items: [
            [
              "Environmental platforms",
              "Current full-stack work on connected applications with React, Spring Boot, SQL databases, GeoServer, Airflow, authentication gateways and Docker-based deployments.",
            ],
            [
              "Secure file workflows",
              "Development and support work with Angular, Ionic, Java/Spring Boot, MySQL and cloud/infrastructure collaboration across Azure, AWS and GCP.",
            ],
            [
              "Internal tools",
              "React, TypeScript, Node.js, Prisma and MySQL tools built to improve operational efficiency and make team processes easier to manage.",
            ],
          ],
        },
        certifications: {
          title: "Certifications",
          eyebrow: "Validated learning",
          summary:
            "Formal and practical learning that supports the experience shown across the portfolio.",
          items: [
            ["React", "React essential, advanced React and component-driven frontend work"],
            ["TypeScript", "Advanced TypeScript for safer frontend and full-stack development"],
            ["Testing", "JavaScript TDD and advanced unit testing"],
          ],
        },
      },
    },
    projects: {
      eyebrow: "Selected work",
      title: "Projects that show how I think and build",
      intro:
        "This selection mixes professional direction and personal initiative. The Pokemon Project is the newest build here: a full-stack data product with its own database, ingestion scripts and user-facing Next.js UI.",
      filters: {
        all: "All",
        web: "Web",
        mobile: "Mobile",
        data: "Data",
      },
      featured: "Featured project",
      source: "Source",
      demo: "Live demo",
      walkthrough: "Walkthrough",
      items: [
        {
          id: 4,
          title: "Pokemon Project",
          description:
            "Full-stack Next.js application that turns Pokemon and competitive data into an interactive product: Pokedex, team tooling, internal API, Prisma models and PostgreSQL ingestion pipelines.",
          image: "/images/projects/pokemon-project.png",
          tag: ["all", "web", "data"],
          stack: ["Next.js", "TypeScript", "Prisma", "PostgreSQL"],
          highlights: [
            "Own data layer fed by PokeAPI, Pokemon Showdown and Smogon sources",
            "Interactive Pokedex, team builder foundations and API documentation",
            "Cloud-ready architecture with migrations, ingest scripts and environment strategy",
          ],
          gitUrl: "https://github.com/Xons001/pokemon-project",
          previewUrl: "https://pokemon-project-six-gamma.vercel.app",
          featured: true,
        },
        {
          id: 1,
          title: "FutLab",
          description:
            "Final degree project for Android focused on structuring a mobile experience around football data, training information and practical app flows.",
          image: "/images/projects/1.png",
          tag: ["all", "mobile"],
          stack: ["Java", "Android Studio", "XML", "PostgreSQL"],
          highlights: [
            "Mobile UI built with native Android layouts",
            "Backend and data persistence work using Java and PostgreSQL",
            "Includes a recorded walkthrough for quick review",
          ],
          gitUrl: "https://github.com/Xons001/FutLabBaseDeDatos/wiki",
          videoCameraUrl: "https://youtu.be/lLxp1wpQjjY",
        },
        {
          id: 2,
          title: "GuideWorld",
          description:
            "ASP.NET and C# learning project centered on structuring a content-driven web app and practicing backend-first development patterns.",
          image: "/images/projects/2.png",
          tag: ["all", "web"],
          stack: ["ASP.NET", "C#", "Web"],
          highlights: [
            "Good example of working outside the JavaScript ecosystem",
            "Focus on routing, page structure and CRUD-style flows",
            "Useful project for showing backend adaptability",
          ],
          gitUrl: "https://github.com/Xons001/GuideWorld",
          videoCameraUrl: "https://youtu.be/xAjAZZTRL3A",
        },
        {
          id: 3,
          title: "Monsters Rolodex",
          description:
            "Frontend project built during advanced React training, focused on component composition, state handling and the fundamentals of a polished client-side experience.",
          image: "/images/projects/3.png",
          tag: ["all", "web"],
          stack: ["React", "JavaScript", "CSS"],
          highlights: [
            "Component-driven UI with reusable patterns",
            "Hands-on practice with state management and filtering logic",
            "Clear example of frontend fundamentals executed cleanly",
          ],
          gitUrl: "https://github.com/Xons001/monsters-rolodex",
        },
      ],
    },
    contact: {
      eyebrow: "Contact",
      title: "Let's build something useful",
      intro:
        "If you are hiring, want to collaborate, or just want to talk about frontend, product and JavaScript, send me a message and I'll get back to you as soon as I can.",
      labels: {
        name: "Your name",
        email: "Email",
        company: "Company or team",
        subject: "Subject",
        message: "Message",
      },
      placeholders: {
        name: "Jane Doe",
        email: "jane@example.com",
        company: "Optional",
        subject: "Opportunity, freelance project, quick intro...",
        message: "Tell me a bit about the role, project or idea.",
      },
      sending: "Sending...",
      send: "Send message",
      success: "Message sent successfully. Thanks for reaching out.",
      error: "I could not send the message right now. Please try again later.",
    },
    footer: {
      text: "Built with Next.js and designed to show selected work clearly.",
      rights: "All rights reserved.",
    },
  },
  es: {
    nav: {
      about: "Sobre mí",
      projects: "Proyectos",
      contact: "Contacto",
      subtitle: "Desarrollador JavaScript full stack",
    },
    hero: {
      badge: "Disponible para roles frontend y full stack",
      name: "Seán Sáez Fuller",
      title:
        "Desarrollador full stack con React, Angular, Next.js y Java/Spring Boot",
      intro:
        "Construyo productos web entre frontend, backend, datos y despliegue. Mi experiencia reciente incluye plataformas medioambientales, geovisores, flujos seguros de archivos, herramientas internas y sistemas conectados a cloud.",
      contact: "Contactar",
      projects: "Ver proyectos",
      cv: "Descargar CV",
      cvHref: "/files/CV-Sean-2026-esp.pdf",
      cvFile: "CV-Sean-2026-esp.pdf",
      stats: [
        ["Foco", "Frontend + full stack"],
        ["Stack", "React, Angular, Java"],
        ["Mentalidad", "Producto + entrega"],
      ],
    },
    about: {
      eyebrow: "Sobre mí",
      title: "Full stack con base fuerte en frontend, datos y producto",
      intro:
        "Mi trayectoria combina React, Angular, TypeScript, Java/Spring Boot, Node.js, bases de datos SQL y herramientas cloud. Me gusta convertir requisitos operativos complejos en interfaces, APIs y despliegues que los equipos pueden usar de verdad.",
      tabs: {
        skills: {
          title: "Habilidades",
          eyebrow: "Stack principal",
          summary:
            "Tecnologías con las que trabajo para construir interfaces, APIs, herramientas con datos y productos desplegados.",
          groups: [
            {
              title: "Frontend",
              items: [
                "JavaScript y TypeScript",
                "React y Next.js",
                "Angular e Ionic",
                "HTML, CSS y Tailwind CSS",
                "Formularios y flujos con foco UX",
              ],
            },
            {
              title: "Backend y datos",
              items: [
                "Java y Spring Boot",
                "Node.js y Express",
                "APIs REST y lógica de servicio",
                "MySQL, MariaDB y PostgreSQL",
                "Prisma ORM y validaciones SQL",
              ],
            },
            {
              title: "Entrega y plataformas",
              items: [
                "Docker Compose y apps multi-contenedor",
                "Máquinas virtuales y despliegues en servidor",
                "GeoServer, Airflow y JasperReports",
                "Experiencia con Azure, AWS y Google Cloud",
                "Jira, Bitbucket y flujos con pull requests",
              ],
            },
          ],
        },
        background: {
          title: "Trayectoria",
          eyebrow: "Camino profesional",
          summary:
            "Una vista breve de las experiencias que han definido cómo trabajo hoy.",
          items: [
            [
              "Plataformas medioambientales",
              "Trabajo full stack actual sobre aplicaciones conectadas con React, Spring Boot, bases SQL, GeoServer, Airflow, gateways de autenticación y despliegues con Docker.",
            ],
            [
              "Flujos seguros de archivos",
              "Desarrollo y soporte con Angular, Ionic, Java/Spring Boot, MySQL y colaboración en cloud e infraestructura con Azure, AWS y GCP.",
            ],
            [
              "Herramientas internas",
              "Herramientas con React, TypeScript, Node.js, Prisma y MySQL para mejorar eficiencia operativa y facilitar procesos de equipo.",
            ],
          ],
        },
        certifications: {
          title: "Certificaciones",
          eyebrow: "Aprendizaje validado",
          summary:
            "Formación formal y práctica que acompaña la experiencia que se ve en el porfolio.",
          items: [
            ["React", "React esencial, React avanzado y frontend por componentes"],
            ["TypeScript", "TypeScript avanzado para desarrollo frontend y full stack"],
            ["Testing", "TDD en JavaScript y pruebas unitarias avanzadas"],
          ],
        },
      },
    },
    projects: {
      eyebrow: "Trabajo seleccionado",
      title: "Proyectos que muestran cómo pienso y construyo",
      intro:
        "Esta selección mezcla trayectoria profesional e iniciativa personal. Pokemon Project es el proyecto más reciente: un producto full stack de datos con base propia, scripts de ingesta y UI en Next.js.",
      filters: {
        all: "Todo",
        web: "Web",
        mobile: "Mobile",
        data: "Datos",
      },
      featured: "Proyecto destacado",
      source: "Código",
      demo: "Demo",
      walkthrough: "Vídeo",
      items: [
        {
          id: 4,
          title: "Pokemon Project",
          description:
            "Aplicación full stack en Next.js que convierte datos de Pokemon y competitivo en un producto interactivo: Pokédex, herramientas para equipos, API interna, modelos Prisma e ingestas a PostgreSQL.",
          image: "/images/projects/pokemon-project.png",
          tag: ["all", "web", "data"],
          stack: ["Next.js", "TypeScript", "Prisma", "PostgreSQL"],
          highlights: [
            "Capa de datos propia alimentada por PokeAPI, Pokemon Showdown y Smogon",
            "Pokédex interactiva, base de team builder y documentación de API",
            "Arquitectura preparada para cloud con migraciones, scripts de ingesta y estrategia de entornos",
          ],
          gitUrl: "https://github.com/Xons001/pokemon-project",
          previewUrl: "https://pokemon-project-six-gamma.vercel.app",
          featured: true,
        },
        {
          id: 1,
          title: "FutLab",
          description:
            "Proyecto final de grado para Android centrado en estructurar una experiencia móvil alrededor de datos de fútbol, entrenamientos y flujos prácticos de app.",
          image: "/images/projects/1.png",
          tag: ["all", "mobile"],
          stack: ["Java", "Android Studio", "XML", "PostgreSQL"],
          highlights: [
            "UI móvil construida con layouts nativos de Android",
            "Trabajo de backend y persistencia con Java y PostgreSQL",
            "Incluye vídeo de recorrido para revisarlo rápidamente",
          ],
          gitUrl: "https://github.com/Xons001/FutLabBaseDeDatos/wiki",
          videoCameraUrl: "https://youtu.be/lLxp1wpQjjY",
        },
        {
          id: 2,
          title: "GuideWorld",
          description:
            "Proyecto de aprendizaje en ASP.NET y C# centrado en estructurar una web con contenido y practicar patrones de desarrollo backend.",
          image: "/images/projects/2.png",
          tag: ["all", "web"],
          stack: ["ASP.NET", "C#", "Web"],
          highlights: [
            "Ejemplo de trabajo fuera del ecosistema JavaScript",
            "Foco en routing, estructura de páginas y flujos tipo CRUD",
            "Proyecto útil para mostrar adaptabilidad backend",
          ],
          gitUrl: "https://github.com/Xons001/GuideWorld",
          videoCameraUrl: "https://youtu.be/xAjAZZTRL3A",
        },
        {
          id: 3,
          title: "Monsters Rolodex",
          description:
            "Proyecto frontend construido durante formación avanzada de React, enfocado en composición de componentes, estado y fundamentos de experiencia cliente.",
          image: "/images/projects/3.png",
          tag: ["all", "web"],
          stack: ["React", "JavaScript", "CSS"],
          highlights: [
            "UI basada en componentes reutilizables",
            "Práctica con estado y lógica de filtrado",
            "Ejemplo claro de fundamentos frontend ejecutados con limpieza",
          ],
          gitUrl: "https://github.com/Xons001/monsters-rolodex",
        },
      ],
    },
    contact: {
      eyebrow: "Contacto",
      title: "Construyamos algo útil",
      intro:
        "Si estás contratando, quieres colaborar o simplemente hablar sobre frontend, producto y JavaScript, escríbeme y responderé lo antes posible.",
      labels: {
        name: "Tu nombre",
        email: "Email",
        company: "Empresa o equipo",
        subject: "Asunto",
        message: "Mensaje",
      },
      placeholders: {
        name: "Jane Doe",
        email: "jane@example.com",
        company: "Opcional",
        subject: "Oportunidad, proyecto freelance, presentación rápida...",
        message: "Cuéntame un poco sobre el rol, proyecto o idea.",
      },
      sending: "Enviando...",
      send: "Enviar mensaje",
      success: "Mensaje enviado correctamente. Gracias por contactar.",
      error: "No he podido enviar el mensaje ahora mismo. Inténtalo más tarde.",
    },
    footer: {
      text: "Construido con Next.js y diseñado para mostrar trabajo seleccionado con claridad.",
      rights: "Todos los derechos reservados.",
    },
  },
};

export const defaultLanguage = "en";
