import React from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
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

const platformConfig = {
  Twitter: {
    color: 'text-[#1DA1F2]',
    hoverColor: 'hover:text-[#1DA1F2]',
    animationDelay: 0,
  },
  Instagram: {
    color: 'text-[#E1306C]',
    hoverColor: 'hover:text-[#E1306C]',
    animationDelay: 0.1,
  },
  GitHub: {
    color: 'text-[#333] dark:text-white',
    hoverColor: 'hover:text-black dark:hover:text-gray-200',
    animationDelay: 0.2,
  },
  LinkedIn: {
    color: 'text-[#0077B5]',
    hoverColor: 'hover:text-[#0077B5]',
    animationDelay: 0.3,
  }
}

function SocialLink({ href, icon: Icon, ...props }) {
  const platformName = platformNameMap[Icon.name] || 'Unknown';
  const config = platformConfig[platformName] || {};
  
  return (
    <motion.div
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ 
        duration: 0.3, 
        delay: config.animationDelay,
        type: "spring",
        stiffness: 300
      }}
    >
      <Link
        href={href}
        className={`
          group relative
          ${config.color || 'text-zinc-500'} 
          ${config.hoverColor || 'hover:text-zinc-600'}
          transition-all 
          duration-300 
          ease-in-out 
          focus:outline-none 
          focus:ring-2 
          focus:ring-offset-2 
          focus:ring-opacity-50
          dark:text-zinc-400 
          dark:hover:text-zinc-300
        `}
        {...props}
      >
        <Icon className="h-6 w-6 transition-transform group-hover:rotate-6" />
        <span 
          className="absolute inset-0 bg-gradient-to-r from-transparent to-current opacity-0 group-hover:opacity-10 pointer-events-none"
        />
      </Link>
    </motion.div>
  )
}

export default function SocialLinks() {
  return (
    <motion.div 
      className="mt-6 flex gap-6"
      initial="hidden"
      animate="visible"
      variants={{
        hidden: { opacity: 0 },
        visible: { 
          opacity: 1,
          transition: { 
            staggerChildren: 0.1,
            delayChildren: 0.3
          }
        }
      }}
    >
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
    </motion.div>
  )
}
