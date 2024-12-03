import { FeaturedProjectType } from '@/lib/types';
import { blurImageURL } from '@/lib/utils/config';
import { cn } from '@/lib/utils/helper';

import { Icon } from '@iconify/react';
import { motion, MotionProps } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

interface Props extends FeaturedProjectType, MotionProps {
  align?: 'left' | 'right';
}

const SkillIcon = ({ src, name, className, onClick }: any) => {
  return (
    <div
      onClick={onClick}
      className={cn(
        `relative grid text-2xl rounded-full shadow-md bg-bg-secondary dark:shadow-xl h-14 w-14 sm:h-16 sm:w-16 place-items-center group`,
        className
      )}
    >
      <Icon icon={src} width="32" height="32" />
      <div className="absolute invisible px-2 py-1 text-sm text-white capitalize duration-200 rounded opacity-0 w-max group-hover:opacity-100 group-hover:visible -top-8 bg-slate-900/75 dark:bg-slate-700/90 dark:text-slate-100">
        {name}
        <svg
          className="absolute left-0 w-full h-2 text-slate-900/75 dark:text-slate-700/90 top-full"
          x="0px"
          y="0px"
          viewBox="0 0 255 255"
          xmlSpace="preserve"
        >
          <polygon className="fill-current" points="0,0 127.5,127.5 255,0" />
        </svg>
      </div>
    </div>
  );
};

const FeaturedProject = ({
  img,
  name,
  url,
  repo,
  description,
  tasks,
  tags,
  privateUrl,
  videoDemoLink,
  screenshots,
  codeDemoLink,
  align = 'left',
  ...rest
}: Props) => {
  return (
    <>
      <motion.div
        className={cn(
          'relative hidden lg:block  min-h-[280px] sm:min-h-[360px] h-full overflow-hidden lg:overflow-visible rounded-lg lg:rounded-xl shadow-lg lg:shadow-none text-center lg:text-right',
          align === 'left' && 'lg:text-left'
        )}
        {...rest}
      >
        <div
          className={cn(
            'w-full lg:max-w-[60%] absolute inset-0 h-full -z-20 lg:z-0 lg:object-contain rounded overflow-hidden shadow-2xl group',

            align === 'left' && 'ml-auto'
          )}
        >
        
            <Image
              src={img}
              alt={name}
              width={720}
              height={480}
              className="object-cover w-full h-full transition-transform duration-200 group-hover:scale-105"
              placeholder="blur"
              blurDataURL={blurImageURL}
            />
          

          <Link
            href={`${url}`}
            target="_blank"
            className="absolute inset-0 z-10 block bg-transparent"
          />
        </div>
        <div
          className={cn(
            'lg:max-w-[45%] space-y-2 lg:space-y-5 w-full h-full p-5 lg:p-0',
            'absolute lg:top-1/2 lg:-translate-y-1/2 lg:right-0',
            'lg:h-auto left-0 lg:left-auto top-0 right-auto lg:bg-none lg:text-inherit',
            'flex flex-col justify-end',
            'bg-gradient-to-t from-black/80 group-hover:from-accent group-focus:from-accent',
            align === 'left' && 'lg:left-0'
          )}
        >
          <div>
            {/* <div className="font-mono hidden lg:block text-accent capitalize text-xs lg:mb-2.5">
              featured project
            </div> */}
            <h2 className="heading-tertiary !text-white lg:!text-dark-2 !font-semibold lg:!font-normal !normal-case">
              <a
                href={url}
                className="block duration-200 hover:text-accent"
                target="_blank"
              >
                {name}
              </a>
            </h2>
          </div>

          <div className="rounded-sm lg:bg-bg-secondary lg:shadow-lg lg:p-5">
            <div
              className={cn(
                'lg:max-w-sm text-dark-1 lg:text-inherit text-sm lg:text-base',
                align === 'right' && 'ml-auto'
              )}
            >
              <p className="text-dark-1">{description}</p>
              <div className="hidden my-3 font-mono text-xs capitalize lg:block text-accent lg:my-2 lg:mt-3">
                tasks / achievements
              </div>
              <div className="hidden text-base lg:block lg:text-sm">
                {tasks}
              </div>

              <div className='flex gap-4 mt-4'>
            {url &&  <Link href={`${url}`} target="_blank">
                <SkillIcon
                  src="flat-color-icons:right-up"
                  name="Public url"
                  className="bg-white cursor-pointer"
                />
              </Link> }
            {privateUrl &&  <Link href={`${privateUrl}`} target="_blank">
                <SkillIcon
                  src="flat-color-icons:privacy"
                  name="Private url"
                  className="bg-white cursor-pointer"
                />
              </Link>}

            
             {videoDemoLink &&  <a href={videoDemoLink} target='_blank'>
              <SkillIcon
                  src="flat-color-icons:video-call"
                  name="Video Demo"
                  className="bg-white cursor-pointer"
                  
                />
              </a>}

              {codeDemoLink &&  <a href={codeDemoLink} target='_blank'>
              <SkillIcon
                  src="flat-color-icons:command-line"
                  name="Code Demo"
                  className="bg-white cursor-pointer"
                  
                />
              </a>}
             

            
             {screenshots &&   <SkillIcon
                  src="flat-color-icons:image-file"
                  name="Screenshot Demo"
                  className="bg-white cursor-pointer"
                />}


             
              </div>
            
            </div>
          </div>

          <p
            className={cn(
              'font-mono text-[10px] text-accent lg:text-accent lg:text-xs justify-center capitalize flex flex-wrap gap-2 lg:gap-x-5 items-center lg:justify-end',
              align === 'left' && 'lg:justify-start'
            )}
          >
            {tags.map((tag) => (
              <span key={tag.replaceAll(' ', '')}>{tag}</span>
            ))}
          </p>

          {repo && (
            <div
              className={cn(
                'flex lg:justify-end items-center gap-3',
                align === 'left' && 'lg:justify-start'
              )}
            >
              <a
                href={repo}
                className="block duration-200 hover:text-accent"
                target="_blank"
              >
                <Icon icon="tabler:brand-github" width={22} height={22} />
              </a>
              <a
                href={url}
                className="block duration-200 hover:text-accent"
                target="_blank"
              >
                <Icon icon="ci:external-link" width={24} height={24} />
              </a>
            </div>
          )}
        </div>
      </motion.div>

      {/* For mobile */}
      <motion.div
        className={cn(
          'relative lg:hidden min-h-[300px] h-full rounded-xl shadow-lg lg:shadow-none text-center'
        )}
        {...rest}
      >
        {/* Image Header */}
        <header className={cn('w-full')}>
          <Image
            src={img}
            alt={name}
            width={720}
            height={480}
            className="object-cover w-full h-full transition-transform duration-200 group-hover:scale-105"
            placeholder="blur"
            blurDataURL={blurImageURL}
          />
          <Link
            href={`${url}`}
            target="_blank"
            className="absolute inset-0 z-10 block bg-transparent"
          />
        </header>

        <div className={cn('bg-bg-secondary p-5 space-y-2')}>
          <div>
            {/* <div className="font-mono text-accent capitalize text-xs lg:mb-2.5">
              featured project
            </div> */}
            <h2 className="heading-tertiary !text-white !font-semibold !normal-case">
              <a
                href={url}
                className="block duration-200 hover:text-accent"
                target="_blank"
              >
                {name}
              </a>
            </h2>
          </div>

          <div className={cn('text-dark-1 space-y-2 text-sm')}>
            <p className="text-base text-dark-1">{description}</p>
            <div className="hidden my-3 font-mono text-xs capitalize lg:block text-accent lg:my-2 lg:mt-3">
              tasks / achievements
            </div>
            <div className="mb-2 space-y-1">
              {tasks?.split(',').map((task) => (
                <div key={task.slice(0, 10)}>{task}</div>
              ))}
            </div>
          </div>

          <p
            className={cn(
              'font-mono text-[10px] text-accent lg:text-accent lg:text-xs justify-center capitalize flex flex-wrap gap-2 lg:gap-x-5 items-center lg:justify-end',
              align === 'left' && 'lg:justify-start'
            )}
          >
            {tags.map((tag) => (
              <span key={tag.replaceAll(' ', '')}>{tag}</span>
            ))}
          </p>

          {repo && (
            <div
              className={cn(
                'flex lg:justify-end items-center gap-3',
                align === 'left' && 'lg:justify-start'
              )}
            >
              <a
                href={repo}
                className="block duration-200 hover:text-accent"
                target="_blank"
              >
                <Icon icon="tabler:brand-github" width={22} height={22} />
              </a>
              <a
                href={url}
                className="block duration-200 hover:text-accent"
                target="_blank"
              >
                <Icon icon="ci:external-link" width={24} height={24} />
              </a>
            </div>
          )}
        </div>
      </motion.div>
    </>
  );
};

export default FeaturedProject;
