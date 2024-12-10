/*Eslint-disable*/
import Link from 'next/link'
import { 
  TwitterIcon, 
  InstagramIcon, 
  GitHubIcon, 
  LinkedInIcon 
} from '@/components/SocialIcons'

const platformNameMap = {
    TwitterIcon: 'Twitter',
    InstagramIcon: 'Instagram',
    GitHubIcon: 'GitHub',
    LinkedInIcon: 'LinkedIn'
  }

// Define color schemes and custom animations for each platform
const platformConfig = {
  Twitter: {
    color: 'text-[#1DA1F2]',
    hoverColor: 'hover:text-[#1DA1F2]',
    animationDelay: 'animate-[bounce_1s_ease-in-out_infinite]',
    customDelay: '--delay-0'
  },
  Instagram: {
    color: 'text-[#E1306C]',
    hoverColor: 'hover:text-[#E1306C]',
    animationDelay: 'animate-[bounce_1.2s_ease-in-out_infinite]',
    customDelay: '--delay-1'
  },
  GitHub: {
    color: 'text-[#333] dark:text-white',
    hoverColor: 'hover:text-black dark:hover:text-gray-200',
    animationDelay: 'animate-[bounce_1.4s_ease-in-out_infinite]',
    customDelay: '--delay-2'
  },
  LinkedIn: {
    color: 'text-[#0077B5]',
    hoverColor: 'hover:text-[#0077B5]',
    animationDelay: 'animate-[bounce_1.6s_ease-in-out_infinite]',
    customDelay: '--delay-3'
  }
}

function SocialLink({ href, icon: Icon, ...props }) {
  // Determine the platform name from the icon
  const platformName = platformNameMap[Icon.name] || 'Unknown';
  const config = platformConfig[platformName] || {};
  
 
  return (
    <Link
      href={href}
      className={`
        group relative
        ${config.color || 'text-zinc-500'} 
        ${config.hoverColor || 'hover:text-zinc-600'}
        ${config.animationDelay || 'animate-bounce'}
        transition-all 
        duration-300 
        ease-in-out 
        hover:scale-110 
        hover:animate-none 
        focus:outline-none 
        focus:ring-2 
        focus:ring-offset-2 
        focus:ring-opacity-50
        dark:text-zinc-400 
        dark:hover:text-zinc-300
      `}
      style={{
        animationDelay: 'calc(0.3s * var(--delay))',
        animationFillMode: 'both'
      }}
      {...props}
    >
      <Icon className="h-6 w-6 transition-transform group-hover:rotate-6" />
      <span 
        className="absolute inset-0 bg-gradient-to-r from-transparent to-current opacity-0 group-hover:opacity-10 pointer-events-none"
      />
    </Link>
  )
}

function SocialLink({ href, icon: Icon, ...props }) {
    return (
      <Link 
        href={href} 
        className="group -m-1 p-1 transition-all duration-300 hover:scale-110"
      >
        <Icon 
          className="
            h-6 w-6 
            fill-zinc-500 
            transition 
            group-hover:fill-zinc-600 
            dark:fill-zinc-400 
            dark:group-hover:fill-zinc-300
            group-hover:animate-bounce
          " 
        />
      </Link>
    )
  }
  
  function SocialLinks() {
    return (
      <div className="mt-6 flex gap-6">
        <SocialLink
          href="https://twitter.com/vinzvinci"
          aria-label="Follow on Twitter"
          icon={TwitterIcon}
        />
        <SocialLink
          href="https://www.instagram.com/vinzvinci/"
          aria-label="Follow on Instagram"
          icon={InstagramIcon}
        />
        <SocialLink
          href="https://github.com/vinzvinci"
          aria-label="Follow on GitHub"
          icon={GitHubIcon}
        />
        <SocialLink
          href="https://www.linkedin.com/in/vinzvinci/"
          aria-label="Follow on LinkedIn"
          icon={LinkedInIcon}
        />
      </div>
    )
  }
  
  export default SocialLinks