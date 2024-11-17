import { GithubIcon, LinkedinIcon, MailIcon } from 'lucide-react';

const SocialLinks = () => {
  const links = [
    { icon: GithubIcon, href: 'https://github.com/joshua-utter', label: 'GitHub' },
    { icon: LinkedinIcon, href: 'https://www.linkedin.com/in/joshua-utter-1266bb33/', label: 'LinkedIn' },
    { icon: MailIcon, href: 'mailto:joshua.utter+ghubio@gmail.com', label: 'Email' }
  ];

  return (
    <div className="flex justify-center gap-6">
      {links.map(({ icon: Icon, href, label }) => (
        <a
          key={label}
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className="group relative"
          aria-label={label}
        >
          <Icon 
            className="w-8 h-8 text-gray-600 transition-all duration-300 transform group-hover:text-blue-500 group-hover:scale-110"
            strokeWidth={1.5}
          />
          <span className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-sm text-gray-600">
            {label}
          </span>
        </a>
      ))}
    </div>
  );
};

export default SocialLinks;