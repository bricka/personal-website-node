function SkillCard({ title, children }: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="border rounded-md p-4">
      <header className="text-lg text-center">{title}</header>
      {children}
    </div>
  )
}

function SkillList({ children }: { children: React.ReactNode; }) {
  return (
    <ul className="list-inside list-disc">
      {children}
    </ul>
  )
}

export default function Home() {
  return (
    <>
      <p>My name is Alex Figl-Brick, and I am a professional full-stack software developer in Munich, Germany. I enjoy creating tools and software that solve user needs in a satisfying way. I have been developing software for over 20 years, and have worked in companies big and small, as a developer, team lead, and manager.</p>

      <p> In my ideal working mode, I work closely with people who understand the users to understand a problem in the business or in the existing software, and we work together to determine a solution that solves the problem with the right amount of development effort.</p>

      <p>I speak fluent English and German, and basic Japanese and Spanish, and have experience working with colleagues across many cultures and countries.</p>

      <header className="mt-4 text-xl">My Skills</header>

      <div className="mt-2 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <SkillCard title="Programming Languages">
          <SkillList>
            <li>Java, Kotlin, Scala</li>
            <li>JavaScript, TypeScript</li>
            <li>Rust</li>
            <li>SQL</li>
            <li>PHP</li>
            <li>HTML, CSS</li>
          </SkillList>
        </SkillCard>

        <SkillCard title="Backend Frameworks">
          <SkillList>
            <li>Spring, Spring Boot</li>
            <li>Next.js, NestJS, Express</li>
            <li>Laravel</li>
          </SkillList>
        </SkillCard>

        <SkillCard title="Frontend Frameworks">
          <SkillList>
            <li>React</li>
            <li>Next.js</li>
            <li>Angular</li>
          </SkillList>
        </SkillCard>

        <SkillCard title="Databases">
          <SkillList>
            <li>Postgres</li>
            <li>Oracle</li>
            <li>MongoDB</li>
          </SkillList>
        </SkillCard>

        <SkillCard title="Testing">
          <SkillList>
            <li>JUnit, Kotest</li>
            <li>Jest, Cypress, Playwright</li>
          </SkillList>
        </SkillCard>

        <SkillCard title="Operations">
          <SkillList>
            <li>Linux administration</li>
            <li>Docker</li>
            <li>Kubernetes</li>
            <li>Amazon Web Services</li>
          </SkillList>
        </SkillCard>
      </div>
    </>
  );
}
