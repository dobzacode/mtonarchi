import { cn } from '@/lib/utils';
import { EmblaOptionsType } from 'embla-carousel';
import Image from 'next/image';
import EmblaCarousel from '../ui/div/carousel/embla-carousel';
import H3 from '../ui/text/h3';
import P from '../ui/text/p';
import { Project } from './project-card';

interface DetailCardProps {
  project: Project;
}

export default function DetailCard({ project }: DetailCardProps) {
  const OPTIONS: EmblaOptionsType = { dragFree: true, loop: true, active: true };
  const SLIDE_COUNT = 9;
  const SLIDES = Array.from(Array(SLIDE_COUNT).keys());

  return (
    <section
      className={cn(
        'relative z-20  mx-auto -mb-medium w-full overflow-hidden border-y border-primary90 border-opacity-10 bg-primary1 text-primary99 laptop:max-w-[1000px]'
      )}
    >
      <H3
        className=" max-mobile-large:sub-heading relative left-small  top-large font-['Distortion_Dos_Analogue'] text-primary90 mobile-large:leading-[1.625rem]   "
        textType={'heading'}
      >
        {project.project_name}
      </H3>
       x
      <div className=" flex w-full flex-col gap-sub-large bg-primary1 py-sub-large tablet:px-medium">
        <P className="relative flex flex-wrap justify-between gap-small px-small tablet:px-0 laptop:px-medium">
          <span className="heading tracking-normal">BUDGET</span>
          <span className="flex w-full flex-wrap items-center justify-between gap-extra-small pr-small mobile-large:gap-medium tablet:w-4/6 tablet:gap-medium laptop:w-3/5 laptop:pr-medium">
            <strong
              className={cn(
                ' before:z-20 before:bg-primary10 before:delay-[2s] before:duration-medium '
              )}
            >
              <span className="body relative z-30 leading-body">
                RENOVATION {project.information.renovation}K
              </span>
            </strong>
            <strong
              className={cn(
                ' relative before:z-20 before:rotate-[-1deg] before:bg-primary10 before:delay-[2.2s] before:duration-medium'
              )}
            >
              <span className="body  relative z-30 leading-body ">
                HONORAIRES {project.information.honoraires}K
              </span>
            </strong>
            <strong
              className={cn(
                ' relative before:z-20 before:rotate-[3deg] before:bg-primary10 before:delay-[2.4s] before:duration-medium'
              )}
            >
              <span className="body relative z-30 leading-body">
                {project.information.dimension} M²{' '}
              </span>
            </strong>
          </span>
        </P>
        <div className=" flex flex-wrap-reverse justify-around gap-medium tablet:flex-nowrap tablet:gap-small">
          <P textType={'body'} className="px-small tracking-normal tablet:w-2/3 tablet:px-0">
            {project.information.description}
            {project.information.description}
            {project.information.description}
          </P>
          <div className="relative h-[25rem] w-full overflow-hidden tablet:w-[34.375rem] tablet:rounded-extra-small">
            <Image
              src={'/assets/architecture_interieurs/INTERIEUR/schema.jpg'}
              alt={`${project.project_name} schéma`}
              fill
              className="object-cover"
            ></Image>
          </div>
        </div>
      </div>
      <div className=" flex w-full bg-primary1">
        <div className="w-full">
          <EmblaCarousel
            imageArr={[
              '/assets/architecture_interieurs/INTERIEUR/gallery/picture1.jpg',
              '/assets/architecture_interieurs/INTERIEUR/gallery/picture1.jpg',
              '/assets/architecture_interieurs/INTERIEUR/gallery/picture2.jpg',
              '/assets/architecture_interieurs/INTERIEUR/gallery/picture1.jpg',
              '/assets/architecture_interieurs/INTERIEUR/gallery/picture2.jpg',
              '/assets/architecture_interieurs/INTERIEUR/gallery/picture1.jpg',
              '/assets/architecture_interieurs/INTERIEUR/gallery/picture1.jpg',
              '/assets/architecture_interieurs/INTERIEUR/gallery/picture2.jpg',
              '/assets/architecture_interieurs/INTERIEUR/gallery/picture1.jpg',
              '/assets/architecture_interieurs/INTERIEUR/gallery/picture2.jpg'
            ]}
            slides={SLIDES}
            options={OPTIONS}
          />
        </div>
      </div>
    </section>
  );
}
