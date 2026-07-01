import { briefcaseIconley, briefcaseIconLight } from '@/app/assets/assets';

import SectionHeading from '../SectionHeading';
import ExperienceItem from './experience-item';

export default function MyExperience() {
  return (
    <div
      className='relative flex h-min w-full flex-none flex-col flex-nowrap items-start justify-start gap-[30px] overflow-visible'
      aria-label='My experience '
    >
      <div className='relative h-auto w-full flex-none'>
        <SectionHeading
          darkImage={briefcaseIconley}
          lightImage={briefcaseIconLight}
          title='Experience & Projects'
          description="A timeline of my professional background, academic journey, and the hands-on engineering projects I'm building to solve real-world problems."
        />
      </div>
      <ExperienceItem />
    </div>
  );
}
