import Link from 'next/link';

export default function ResumePage() {
  return (
    <>
      <p>
        <Link href="/resume.pdf">View My Resume</Link>
      </p>
      <p>
           You may also see <Link href="https://www.linkedin.com/in/alex-figl-brick-45406a6/">my LinkedIn profile</Link>.
      </p>
    </>
    );
}
