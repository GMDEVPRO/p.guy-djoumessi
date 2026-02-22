document.addEventListener("DOMContentLoaded", function () {

const translations = {
    pt: {
        menuHome: "HOME",
        menuSobre: "SOBRE",
        menuProjetos: "PROJETOS",
        menuContato: "CONTATO",
        homeTitulo: "OLA, SOU GUY.D",
        homeTexto: "Tenho foco em construir interfaces modernas, responsivas e intuitivas,além de desenvolver APIs e integrações eficientes com bancos de dados prezo por código limpo.",
        botaoContato: "CONTATO",
        sobreTitulo: "SOBRE MIM",
        sobreTexto: "Tenho facilidade para aprender novas tecnologias e me adaptar a diferentes contextos de projeto.Meu objetivo é evoluir profissionalmente, contribuir ativamente para o crescimento da equipe e entregar soluções que gerem impacto positivo para usuários e empresas",
        tituloProjetos: "PROJETOS.",
        tituloContato: "CONTATO.",
        botaoEnviar: "ENVIAR"
    },
    en: {
        menuHome: "HOME",
        menuSobre: "ABOUT",
        menuProjetos: "PROJECTS",
        menuContato: "CONTACT",
        homeTitulo: "HELLO, I'M GUY.D",
        homeTexto: "I focus on building modern, responsive, and intuitive interfaces,as well as developing efficient APIs and database integrations, prioritizing clean code.",
        botaoContato: "CONTACT",
        sobreTitulo: "ABOUT ME",
        sobreTexto: "I easily learn new technologies and adapt to different project contexts.My goal is to grow professionally, actively contribute to the team's development, and deliver solutions that create a positive impact for users and companies",
        tituloProjetos: "PROJECTS.",
        tituloContato: "CONTACT.",
        botaoEnviar: "SEND"
    },
    fr: {
        menuHome: "ACCUEIL",
        menuSobre: "À PROPOS",
        menuProjetos: "PROJETS",
        menuContato: "CONTACT",
        homeTitulo: "BONJOUR, JE SUIS GUY.D",
        homeTexto: "Je me concentre sur la création d'interfaces modernes, réactives et intuitives,ainsi que sur le développement d'API et d'intégrations de bases de données efficaces, en privilégiant un code propre.",
        botaoContato: "CONTACT",
        sobreTitulo: "À PROPOS DE MOI",
        sobreTexto: "J'apprends facilement de nouvelles technologies et je m'adapte à différents contextes de projet.Mon objectif est de progresser professionnellement, de contribuer activement au développement de l'équipe et de fournir des solutions qui ont un impact positif pour les utilisateurs et les entreprises",
        tituloProjetos: "PROJETS.",
        tituloContato: "CONTACT.",
        botaoEnviar: "ENVOYER"
    }
};

const selector = document.querySelector(".language-selector");
const selected = document.querySelector(".selected");
const options = document.querySelectorAll(".options div");

// 🔥 Função que troca idioma
function changeLanguage(lang) {

    console.log("Idioma trocado para:", lang); 

    const elements = document.querySelectorAll("[data-i18n]");

    elements.forEach((element) => {
    const key = element.getAttribute("data-i18n");

    if (translations[lang] && translations[lang][key]) {
        element.textContent = translations[lang][key];
    } else {
        console.warn(`Tradução ausente: ${lang} -> ${key}`);
    }
    });

    // salva no navegador
    localStorage.setItem("language", lang);
}

// clique no seletor
selector.addEventListener("click", () => {
    selector.classList.toggle("active");
});

// clique nas opções
options.forEach(option => {
    option.addEventListener("click", () => {

        const lang = option.getAttribute("data-lang");

        selected.innerHTML = option.innerHTML;

        changeLanguage(lang);

        selector.classList.remove("active");
    });
});

// 🔥 Ao carregar página mantém idioma salvo
const savedLang = localStorage.getItem("language") || "pt";
changeLanguage(savedLang);

});

