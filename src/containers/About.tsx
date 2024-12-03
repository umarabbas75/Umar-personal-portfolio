'use client';
import { aboutSection } from '@/lib/content/about';
import { author } from '@/lib/content/portfolio';
import { getId } from '@/lib/utils/helper';

import { AuthorImage, Link, ListItem, Wrapper } from '@/components';

import { getSectionAnimation } from '@/styles/animations';

import { useEffect, useState } from 'react';

const About = () => {
  const { title, img, list } = aboutSection;
  // To avoid hydration error
  const [domLoaded, setDomLoaded] = useState(false);

  useEffect(() => {
    setDomLoaded(true);
  }, []);

  return domLoaded ? (
    <Wrapper id="about" {...getSectionAnimation}>
      <h2 className="heading-secondary">{title}</h2>
      <main className="flex flex-col items-center gap-16 lg:items-start lg:flex-row">
        <div className="space-y-4 lg:w-3/5">
          <p>
            Hi, my name is Umar Abbas, Senior Frontend React Developer. Graduated from 
            <Link
              href="https://nust.edu.pk/"
              target="_blank"
              className="text-accent ml-2"
            >
              NUST, EME
            </Link>
            .<br /> I'm a passionate Frontend Developer with a knack for creating scalable and maintainable web and mobile applications, while also delving into backend technologies to deliver full-stack solutions.
          </p>
          <p>
          Fast-forward to today, I’ve had the privilege of working with dynamic teams at companies like  
           <Link
              href="https://www.linkedin.com/company/xenexmedia/posts/?feedView=all"
              target="_blank"
              className="text-accent mx-1"
            >
              Xenex Media
            </Link>
             and 
             <Link
              href="https://www.linkedin.com/company/xiots/posts/?feedView=all"
              target="_blank"
              className="text-accent mx-1"
            >
              Xiots
            </Link>
             , building enterprise-level projects such as  <Link
              href="https://www.holo.com.au/"
              target="_blank"
              className="text-accent mx-1"
            >
              Holo
            </Link> and 
            
            
            <Link
              href="https://www.iclerk.io/"
              target="_blank"
              className="text-accent mx-1"
            >
              iClerk
            </Link>
            . My expertise also extends to crafting engaging user experiences through advanced animations using GSAP.
          </p>
          
          {/* <p>
            My main focus these days is learning mobile development and finding
            a decent job.
          </p> */}

          {list && (
            <>
              <p>{list.title}</p>
              <ul className="grid w-2/3 grid-cols-2 gap-1 text-sm">
                {list.items.map((item) => (
                  <ListItem key={getId()}>{item}</ListItem>
                ))}
              </ul>
            </>
          )}
        </div>
        <AuthorImage src={img} alt={author.name} />
      </main>
    </Wrapper>
  ) : (
    <></>
  );
};

export default About;
