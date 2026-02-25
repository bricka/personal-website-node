import { SupportedLanguage } from '@/app/supportedLanguage';
import { Link } from '@/components/Link';
import { staticLangs } from '@/utils/staticLangs';
import { Metadata } from 'next';

export async function generateStaticParams() {
  return staticLangs();
}

const titleByLanguage = {
  en: 'Alex Figl-Brick: Resume',
  de: 'Alex Figl-Brick: Lebenslauf',
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

export default async function ResumePage(props: PageProps<'/[lang]/resume'>) {
  const { lang } = await props.params;
  switch (lang) {
    case 'de':
      return <ResumePageDe />;
    case 'en':
      return <ResumePageEn />;
  }
}

function ResumePageEn() {
  return (
    <>
      <p>
        <Link href="/resume.pdf">View My Resume</Link>
      </p>
      <p>
        You may also see{' '}
        <Link href="https://www.linkedin.com/in/alex-figl-brick-45406a6/">my LinkedIn profile</Link>
        .
      </p>
    </>
  );
}

function ResumePageDe() {
  return (
    <>
      <p>
        <Link href="/resume.pdf">Mein Lebenslauf ansehen</Link>
      </p>
      <p>
        Vielleicht willst du auch{' '}
        <Link href="https://www.linkedin.com/in/alex-figl-brick-45406a6/">
          mein LinkedIn profile
        </Link>{' '}
        ansehen.
      </p>
    </>
  );
}
