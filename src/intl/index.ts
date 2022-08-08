import coursesDe from './courses-de';

const messages: {[language: string]: {[key: string]: string }} = {
  de: {
    'menu.contact': 'Kontakt',
    'menu.courses': 'Klassen',
    'menu.home': 'Startseite',
    'menu.projects': 'Projekte',
    'menu.resume': 'Lebenslauf',

    'resume.linkedin': 'Sie können mich auch {profileLink} finden',
    'resume.linkedin-profile': 'auf LinkedIn',
    'resume.my-resume-is-available': 'Bitte finden Sie hier mein Lebenslauf:',
    'resume.my-resume': 'Mein Lebenslauf',

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
