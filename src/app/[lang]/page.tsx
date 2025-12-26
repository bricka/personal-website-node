import { Card } from '@/components/Card';
import { SupportedLanguage } from '../supportedLanguage';

function SkillList({ children }: { children: React.ReactNode }) {
  return <ul className="list-inside list-disc">{children}</ul>;
}

const cardTitles = {
  en: {
    programmingLanguages: 'Programming Languages',
    databases: 'Databases',
  },
  de: {
    programmingLanguages: 'Programmiersprachen',
    databases: 'Datenbanken',
  },
};

export default async function HomePage(props: PageProps<'/[lang]'>) {
  const { lang: langStr } = await props.params;
  const lang = langStr as SupportedLanguage;

  return (
    <>
      {introText(lang)}

      <header className="mt-4 text-xl">{mySkillsText(lang)}</header>

      <div className="mt-2 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <Card centerTitle={true} title={cardTitles[lang].programmingLanguages}>
          <SkillList>
            <li>Java, Kotlin, Scala</li>
            <li>JavaScript, TypeScript</li>
            <li>Rust</li>
            <li>SQL</li>
            <li>PHP</li>
            <li>HTML, CSS</li>
          </SkillList>
        </Card>

        <Card centerTitle={true} title="Backend Frameworks">
          <SkillList>
            <li>Spring, Spring Boot</li>
            <li>Next.js, NestJS, Express</li>
            <li>Laravel</li>
          </SkillList>
        </Card>

        <Card centerTitle={true} title="Frontend Frameworks">
          <SkillList>
            <li>React</li>
            <li>Next.js</li>
            <li>Angular</li>
            <li>Vue</li>
          </SkillList>
        </Card>

        <Card centerTitle={true} title={cardTitles[lang].databases}>
          <SkillList>
            <li>Postgres</li>
            <li>Oracle</li>
            <li>MongoDB</li>
          </SkillList>
        </Card>

        <Card centerTitle={true} title="Testing">
          <SkillList>
            <li>JUnit, Kotest</li>
            <li>Jest, Cypress, Vitest, Playwright</li>
          </SkillList>
        </Card>

        <Card centerTitle={true} title="Operations">
          <SkillList>
            <li>Linux administration</li>
            <li>Docker</li>
            <li>Kubernetes</li>
            <li>Amazon Web Services</li>
          </SkillList>
        </Card>
      </div>
    </>
  );
}

function introText(lang: SupportedLanguage): React.ReactNode {
  switch (lang) {
    case 'en':
      return <HomePageEn />;
    case 'de':
      return <HomePageDe />;
  }
}

function mySkillsText(lang: SupportedLanguage): string {
  switch (lang) {
    case 'en':
      return 'My Skills';
    case 'de':
      return 'Mein Können';
  }
}

function HomePageEn() {
  return (
    <>
      <p>
        My name is Alex Figl-Brick, and I am a professional full-stack software developer in Munich,
        Germany. I enjoy creating tools and software that solve user needs in a satisfying way. I
        have been developing software for over 20 years, and have worked in companies big and small,
        as a developer, team lead, and manager.
      </p>

      <p>
        In my ideal working mode, I work closely with people who understand the users to understand
        a problem in the business or in the existing software, and we work together to determine a
        solution that solves the problem with the right amount of development effort.
      </p>

      <p>
        I speak fluent English and German, and basic Spanish and Japanese, and have experience
        working with colleagues across many cultures and countries.
      </p>
    </>
  );
}

function HomePageDe() {
  return (
    <>
      <p>
        Mein Name ist Alex Figl-Brick, und ich bin professioneller Softwareentwickler in München.
        Ich genieße es sehr, interessante Werkzeuge und Software herzustellen, die Nutzerbedürfnisse
        gut lösen können. Ich entwickle seit über 20 Jahre Software und habe bei großen sowie
        kleinen Firmen gearbeitet. Ich war schon mal Softwareentwickler, Team-Lead, und Chef.
      </p>

      <p>
        Am Liebsten arbeite ich eng zusammen mit Leuten, die die Nutzerprobleme gut verstehen, egal
        ob diese Probleme technisch oder eher geschäftlich sind. Dann arbeiten wir zusammen, eine
        tolle Lösung zu finden, die auch von der Entwicklungsarbeit passt.
      </p>

      <p>
        Ich spreche fließend Deutsch und Englisch, und habe auch Spanisch und Japanisch gelernt. Ich
        habe mit Kollegen aus unterschiedlichen Kulturen und Ländern gearbeitet, und finde es immer
        interessant, neue Leute und Kulturen kennenzulernen.
      </p>
    </>
  );
}
