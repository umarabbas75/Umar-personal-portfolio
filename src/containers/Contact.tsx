import { contactSection } from '@/lib/content/contact';
import { socialSection } from '@/lib/content/social';

import { Button, SocialIcon, Wrapper } from '@/components';

import { getSectionAnimation } from '@/styles/animations';

const Contact = () => {
  const { subtitle, title, paragraphs, link } = contactSection;
  const { socialLinks } = socialSection;

  return (
    <Wrapper
      id="contact"
      className="max-w-xl mx-auto text-center  !py-16 md:!py-24 mb-20 md:mb-32"
      {...getSectionAnimation}
    >
      <p className="mb-3 font-mono text-sm capitalize text-accent">
        {subtitle}
      </p>
      <h2 className="heading-secondary !mb-5">{title}</h2>

      {paragraphs.map((paragraph, i) => (
        <p key={i}>{paragraph}</p>
      ))}

<ul
          className="leading-[1.2] flex justify-center"
        >
          {socialLinks?.map(({ icon, url }) => (
        <SocialIcon key={url} icon={icon} url={url} />
      ))}
        </ul>

      <Button type="link" size="lg" href={link} center className="mt-12">
        Say Hello
      </Button>
    </Wrapper>
  );
};

export default Contact;
