import ProjectCard from '../../util/projectCard';

const Projects = () => {
  return (
    <div
      id='project'
      className='z-10 min-h-dvh max-h-dvh h-dvh md:container flex-col pt-8 pb-8 md:pt-10 md:pb-10 w-full gap-6 snap-center'
    >
      <h1 className='text-4xl font-bold pl-10 md:pl-0'>Projects</h1>
      <div className='flex h-full overflow-x-scroll snap-x snap-mandatory'>
        <div className='flex md:w-full flex-row-reverse gap-4 md:gap-2 w-[600%] px-12 md:px-0'>
          <ProjectCard
            src='bg-prd'
            title='Engineering Design'
            year='2023'
          >
            Design a prototype of a glider aircraft in a team of 5 and won 5th
            place
          </ProjectCard>
          <ProjectCard
            src='bg-pemira-2'
            className='hover:bg-pemira-1'
            title='PEMIRA KM ITB'
            year='2024'
          >
            Design and develop a website for the election of the K3M and MWA-WM
          </ProjectCard>
          <ProjectCard
            src='bg-oskm'
            title='IT OSKM ITB'
            year='June 2023'
          >
            Participate in the IT OSKM ITB as a committee member and become the
            best committee
          </ProjectCard>
          <ProjectCard
            src='bg-moka'
            title='MOKA Garut'
            year='Nov - 2023'
          >
            Participate in the Mojang Jajaka Garut and become the Jajaka Calakan
          </ProjectCard>
          <ProjectCard
            src='bg-krai'
            title='KRAI Internship'
            year='August - 2023'
          >
            Build a Robot in internship at ITB ABU Robotics Team
          </ProjectCard>
          <ProjectCard
            src='bg-flywheel'
            title='Flywheel'
            year='May - 2023'
            isLast
          >
            Construct a motor utilizing magnets levitation technology in aim of
            augmenting efficiency as an experiment for Scientific Writing
            report.
          </ProjectCard>
        </div>
      </div>
    </div>
  );
};

export default Projects;
