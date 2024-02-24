import AboutMe from '@/components/page/home/about-me/aboutMe';
import Greeting from '@/components/page/home/greeting';
import Main from '@/components/page/home/main';
import Projects from '@/components/page/home/projects';

export default function Home({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined };
}) {
  return (
    <Main>
      <Greeting />
      <Projects />
      <AboutMe searchParams={searchParams} />
    </Main>
  );
}
