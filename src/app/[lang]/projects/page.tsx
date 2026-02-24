import { SupportedLanguage } from '@/app/supportedLanguage';
import { Card } from '@/components/Card';
import { staticLangs } from '@/utils/staticLangs';
import { Metadata } from 'next';

export async function generateStaticParams() {
  return staticLangs();
}

const titleByLanguage = {
  en: 'Alex Figl-Brick: Projects',
  de: 'Alex Figl-Brick: Projekte',
};

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: SupportedLanguage }>;
}): Promise<Metadata> {
  const { lang } = await params;
  return {
    title: titleByLanguage[lang],
  };
}

export default async function ProjectsPage(props: PageProps<'/[lang]/projects'>) {
  const { lang: langStr } = await props.params;
  const lang = langStr as SupportedLanguage;

  return (
    <div className="flex flex-col gap-4">
      <KotlinTsModeCard lang={lang} />

      <LilypondSimpleTsCard lang={lang} />

      <MipsCard lang={lang} />
    </div>
  );
}

function KotlinTsModeCard({ lang }: { lang: SupportedLanguage }): React.ReactElement {
  switch (lang) {
    case 'en':
      return (
        <Card
          title={
            <h2>
              <code>kotlin-ts-mode</code> for Emacs
            </h2>
          }
        >
          <p>
            <a href="https://gitlab.com/bricka/emacs-kotlin-ts-mode">GitLab Link</a>
          </p>

          <p>
            This is by far my most successful project. It uses the awesome{' '}
            <a href="https://tree-sitter.github.io/tree-sitter/">tree-sitter</a> integration in
            Emacs to provide a nice editing environment for Kotlin.
          </p>
        </Card>
      );
    case 'de':
      return (
        <Card
          title={
            <h2>
              <code>kotlin-ts-mode</code> für Emacs
            </h2>
          }
        >
          <p>
            <a href="https://gitlab.com/bricka/emacs-kotlin-ts-mode">GitLab Link</a>
          </p>

          <p>
            Das ist mit Abstand mein erfolgreichstes Projekt. Ich habe die tolle{' '}
            <a href="https://tree-sitter.github.io/tree-sitter/">tree-sitter</a> Integration in
            Emacs, um eine schönes Arbeitumfeld für Kotlin zu entwickeln.
          </p>
        </Card>
      );
  }
}

function LilypondSimpleTsCard({ lang }: { lang: SupportedLanguage }): React.ReactElement {
  switch (lang) {
    case 'en':
      return (
        <Card title="Utilities for simplified LilyPond files">
          <ul className="list-inside">
            <li>
              <a href="https://gitlab.com/bricka/tree-sitter-lilypond-simple">
                GitLab Link for grammar
              </a>
            </li>
            <li>
              <a href="https://gitlab.com/bricka/emacs-lilypond-simple-ts-mode">
                GitLab Link for Emacs support
              </a>
            </li>
          </ul>

          <p>
            I play banjo as a hobby (if you&apos;re interested, I am currently focusing on the Irish
            Tenor Banjo, but I also play clawhammer on the American five-string banjo), and was
            interested in having my sheet music digitally. I turned to{' '}
            <a href="https://lilypond.org/">LilyPond</a> as a language for transcribing music, but I
            found some editor support lacking. In particular, the language is not context-free, and
            because it is so flexible, it&apos;s quite difficult to parse. There is an attempt to
            write a <code>tree-sitter</code> grammar for it, but the grammar is so generic that it
            is difficult to use as an editor plugin.
          </p>

          <p>
            This project is an attempt to only support &quot;common&quot; things in LilyPond, and as
            a result to place some restrictions on how it is to be parsed. As a result, I have been
            able to write a very easy-to-use parser and Emacs support.
          </p>
        </Card>
      );
    case 'de':
      return (
        <Card title="Werkzeuge for einfachere LilyPond Dateien">
          <ul className="list-inside">
            <li>
              <a href="https://gitlab.com/bricka/tree-sitter-lilypond-simple">
                GitLab Link für Grammatik
              </a>
            </li>
            <li>
              <a href="https://gitlab.com/bricka/emacs-lilypond-simple-ts-mode">
                GitLab Link für Emacs Integration
              </a>
            </li>
          </ul>

          <p>
            Ich spiele Banjo als Hobby (falls du Interesse hast, ich fokusiere zur Zeit auf das
            irische Tenorbanjo, habe aber in der Vergangenheit auch Clawhammer auf dem
            amerikanischen fünfsaitigen Banjo gespielt), und wollte meine Noten digital auf dem
            Laptop haben. Ich habe dafür <a href="https://lilypond.org/">LilyPond</a> benutzt, aber
            ich habe gedacht, man könnte interessantere Integrationen und Werkzeuge bauen. Das ist
            aber ganz schwierig, weil die Sprache eigentlisch ganz schwierig zum parsen ist. Es gibt
            ein Projekt darum, eine <code>tree-sitter</code> Grammatik zu schreiben, aber sie ist so
            generisch, dass es eigentlich ganz schwierig ist, damit Werkzeuge zu bauen.
          </p>

          <p>
            Dieses Projekt ist ein Versuch, nur &quot;häufige&quot; Dinge in LilyPond zu
            unterstützen, und damit nicht alles verstehen zu müssen. Damit habe ich ein Parser
            entwickelt, das ganz einfach zum nutzen ist, und darauf eine Emacs Integration gebaut.
          </p>
        </Card>
      );
  }
}

function MipsCard({ lang }: { lang: SupportedLanguage }): React.ReactNode {
  switch (lang) {
    case 'en':
      return (
        <Card title="MIPS Syntax Highlighting for Vim">
          <p>
            <a href="https://www.vim.org/scripts/script.php?script_id=2045">Link to script</a>
          </p>

          <p>
            Long before I switched to using Emacs, I used Vim. Back in my university days, I did a
            bit of work with <a href="https://en.wikipedia.org/wiki/MIPS_architecture">MIPS</a> and
            wrote some syntax highlighting support for it. I believe it&apos;s been forked by others
            and made much better in the meantime, but it was one of my first projects.
          </p>
        </Card>
      );
    case 'de':
      return (
        <Card title="MIPS Syntax Highlighting für Vim">
          <p>
            <a href="https://www.vim.org/scripts/script.php?script_id=2045">Link zum Script</a>
          </p>

          <p>
            Lang bevor ich mit Emacs angefangen habe, habe ich Vim benutzt. Damals, als ich in der
            Uni war, habe ich ein bisschen mit{' '}
            <a href="https://de.wikipedia.org/wiki/MIPS-Architektur">MIPS</a> gearbeitet und habe
            ein Syntax-Highlighting dafür geschrieben. Inzwischen, soweit ich weiß, haben andere
            Leute es weiterentwickelt, aber es war eins meiner ersten Projekte.
          </p>
        </Card>
      );
  }
}
