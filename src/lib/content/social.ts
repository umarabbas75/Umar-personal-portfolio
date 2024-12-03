import { socialLinks } from '@/lib/content/portfolio';
import { SocialSectionType } from '@/lib/types/sections';

export const socialSection: SocialSectionType = {
  socialLinks: [
    {
      icon: 'lucide:linkedin',
      url: socialLinks.linkedin,
    },
    {
      icon: 'tabler:brand-github',
      url: socialLinks.github,
    },
    {
      icon: 'ic:baseline-whatsapp',
      url: socialLinks.whatsapp,
    },
    {
      icon: 'mdi:gmail',
      url: socialLinks.gmail,
    },
  ],
};
