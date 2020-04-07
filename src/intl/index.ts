import coursesDe from './courses-de';

const messages: {[language: string]: any} = {
  de: {
    'menu.contact': 'Kontakt',
    'menu.courses': 'Klassen',
    'menu.home': 'Startseite',
    'menu.projects': 'Projekte',
    'menu.resume': 'Lebenslauf',

    'resume.linkedin': 'Sie können mich auch {profileLink} finden',
    'resume.linkedin-profile': 'auf LinkedIn',
    'resume.my-resume-is-available': 'Mein Lebenslauf ist an diesen Links verfügbar:',
    'resume.my-resume.de-en': 'Im deutschen Stil, auf Englisch',
    'resume.my-resume.en': 'Im amerikanischen Stil, auf Englisch',

    'fall': 'Herbst',
    'spring': 'Frühling',
    'summer-1': 'Sommer 1',
    'summer-2-and-fall': 'Sommer 2 und Herbst',

    ...coursesDe,

    'projects.mips-vim': 'MIPS Syntax-Highlighting für Vim',
    'projects.my-github-page': 'meiner Seite von GitHub',
    'projects.overview': 'Ich habe an mehreren persönlichen Projekten gearbeitet.  Sie können einige auf {myGithubPage} finden.  Einige meiner Favoriten sind hier:',
    'projects.personal-website': 'Persönliche Website',

    'contact.how-to-reach': 'Sie können mir unter {email} schreiben',
  },
};

export default messages;
