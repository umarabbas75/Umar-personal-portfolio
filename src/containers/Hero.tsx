'use client';
import { heroSection } from '@/lib/content/hero';
import { socialSection } from '@/lib/content/social';
import useWindowWidth from '@/lib/hooks/use-window-width';
import { getBreakpointsWidth } from '@/lib/utils/helper';

import { Button, SkillIcon, SocialIcon, Wrapper } from '@/components';

import { slideUp } from '@/styles/animations';

import { motion } from 'framer-motion';

const Hero = () => {
  const { cta, subtitle, title, tagline, description } = heroSection || {};

  const windowWidth = useWindowWidth();
  const md = getBreakpointsWidth('md');
  const DEFAULT_ANIMATION_DELAY = windowWidth <= md ? 0.9 : 1.7;

  const getAnimationDelay = (i: number, increment = 0.15) =>
    DEFAULT_ANIMATION_DELAY + increment * i;
  const { socialLinks } = socialSection;

  return (
    <Wrapper
      id="hero"
      className="flex flex-col justify-center h-full min-h-screen gap-6 mt-12 xs:gap-7 xs:mt-0"
    >
      <motion.p
        variants={slideUp({ delay: getAnimationDelay(0) })}
        initial="hidden"
        animate="show"
        className="font-mono text-sm md:text-base text-accent"
      >
        {subtitle}
      </motion.p>

      <div className="max-w-5xl text-4xl font-bold tracking-tighter md:text-7xl">
        <motion.h1
          variants={slideUp({ delay: getAnimationDelay(1) })}
          initial="hidden"
          animate="show"
          className="text-slate-900 dark:text-slate-200 capitalize mb-2 leading-[1.1]"
        >
          {title}
        </motion.h1>
        <motion.h1
          variants={slideUp({ delay: getAnimationDelay(2) })}
          initial="hidden"
          animate="show"
          className="leading-[1.2]"
        >
          {tagline}{' '}
          <span className="text-lg tracking-wider">with backend expertise</span>
        </motion.h1>
      </div>

      <motion.ul
        variants={slideUp({ delay: getAnimationDelay(3) })}
        initial="hidden"
        animate="show"
        className="leading-[1.2] flex"
      >
        {socialLinks.map(({ icon, url }) => (
          <SocialIcon key={url} icon={icon} url={url} />
        ))}
      </motion.ul>

      <motion.p
        variants={slideUp({ delay: getAnimationDelay(3) })}
        initial="hidden"
        animate="show"
        className="max-w-xl text-base md:text-lg"
      >
        {description}
      </motion.p>

      <div className="flex gap-4">
        <Button
          size="lg"
          type="link"
          variants={slideUp({ delay: getAnimationDelay(5) })}
          initial="hidden"
          animate="show"
          href={cta?.url ?? '#'}
          className="mt-0"
          sameTab={cta?.sameTab}
        >
          {cta?.title}
        </Button>

        <motion.a
          href="https://www.loom.com/share/3c7f3347cae24e02a19bda09acedc4d8"
          target="_blank"
           animate="show"
            initial="hidden"
          variants={slideUp({ delay: getAnimationDelay(5) })}
        >
          <SkillIcon
            src="flat-color-icons:video-call"
            name="Video Introduction"
            className="bg-white cursor-pointer"
          />
        </motion.a>
      </div>
    </Wrapper>
  );
};

export default Hero;
