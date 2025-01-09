/* eslint-disable*/
import React, { useEffect } from 'react'
import { useRouter } from 'next/router'
import { motion } from 'framer-motion'
import Image from 'next/image'
import { useRef } from 'react'
import Head from 'next/head'
import clsx from 'clsx'
import dynamic from 'next/dynamic'

import { Button } from '@/components/Button'
import { Card } from '@/components/Card'
import { Container } from '@/components/Container'

import image2 from '@/images/photos/Zoho.jpg'
import image3 from '@/images/photos/Group photo.jpg'
import image4 from '@/images/photos/Mentor.jpg'
import image5 from '@/images/photos/abc photo.jpg'
import logoZenlipa from '@/images/logos/zenlipa.png'
import logoYellowCard from '@/images/logos/YellowCard.jpeg'
import { formatDate } from '@/lib/formatDate'

const SocialLinks = dynamic(() => import('@/components/SocialLinks'), { ssr: false })

const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 }
}

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
}

function Article({ article }) {
  return (
    <Card as="article">
      <Card.Title href={`/articles/${article.slug}`}>
        {article.title}
      </Card.Title>
      <Card.Eyebrow as="time" dateTime={article.date} decorate>
        {formatDate(article.date)}
      </Card.Eyebrow>
      <Card.Description>{article.description}</Card.Description>
      <Card.Cta>Read article</Card.Cta>
    </Card>
  )
}

function MailIcon(props) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}
    >
      <path
        d="M2.75 7.75a3 3 0 0 1 3-3h12.5a3 3 0 0 1 3 3v8.5a3 3 0 0 1-3 3H5.75a3 3 0 0 1-3-3v-8.5Z"
        className="fill-zinc-100 stroke-zinc-400 dark:fill-zinc-100/10 dark:stroke-zinc-500"
      />
      <path
        d="m4 6 6.024 5.479a2.915 2.915 0 0 0 3.952 0L20 6"
        className="stroke-zinc-400 dark:stroke-zinc-500"
      />
    </svg>
  )
}

function BriefcaseIcon(props) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}
    >
      <path
        d="M2.75 9.75a3 3 0 0 1 3-3h12.5a3 3 0 0 1 3 3v8.5a3 3 0 0 1-3 3H5.75a3 3 0 0 1-3-3v-8.5Z"
        className="fill-zinc-100 stroke-zinc-400 dark:fill-zinc-100/10 dark:stroke-zinc-500"
      />
      <path
        d="M3 14.25h6.249c.484 0 .952-.002 1.316.319l.777.682a.996.996 0 0 0 1.316 0l.777-.682c.364-.32.832-.319 1.316-.319H21M8.75 6.5V4.75a2 2 0 0 1 2-2h2.5a2 2 0 0 1 2 2V6.5"
        className="stroke-zinc-400 dark:stroke-zinc-500"
      />
    </svg>
  )
}

function ArrowDownIcon(props) {
  return (
    <svg viewBox="0 0 16 16" fill="none" aria-hidden="true" {...props}>
      <path
        d="M4.75 8.75 8 12.25m0 0 3.25-3.5M8 12.25v-8.5"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

function Newsletter() {
  return (
    <motion.form
      action="/thank-you"
      className="rounded-2xl border border-zinc-100 p-6 dark:border-zinc-700/40"
      whileHover={{ scale: 1.02 }}
      transition={{ type: "spring", stiffness: 300 }}
    >
      <h2 className="flex text-sm font-semibold text-zinc-900 dark:text-zinc-100">
        <MailIcon className="h-6 w-6 flex-none" />
        <span className="ml-3">Stay up to date</span>
      </h2>
      <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">
        Get notified when I publish something new, and unsubscribe at any time!
      </p>
      <div className="mt-6 flex">
        <input
          type="email"
          placeholder="Email address"
          aria-label="Email address"
          required
          className="min-w-0 flex-auto appearance-none rounded-md border border-zinc-900/10 bg-white px-3 py-[calc(theme(spacing.2)-1px)] shadow-md shadow-zinc-800/5 placeholder:text-zinc-400 focus:border-teal-500 focus:outline-none focus:ring-4 focus:ring-teal-500/10 dark:border-zinc-700 dark:bg-zinc-700/[0.15] dark:text-zinc-200 dark:placeholder:text-zinc-500 dark:focus:border-teal-400 dark:focus:ring-teal-400/10 sm:text-sm"
        />
        <Button type="submit" className="ml-4 flex-none">
          Join
        </Button>
      </div>
    </motion.form>
  )
}

function Resume() {
  let resume = [
    {
      company: 'Zenlipa',
      title: 'Frontend Lead',
      logo: logoZenlipa,
      start: 'Jan 2024',
      end: 'To present',
    },

    {
      company: 'Yellow Card',
      title: 'Ambassador',
      logo: logoYellowCard,
      start: 'September 2024',
      end: 'To present',
    },
  ]

  return (
    <motion.div 
      className="rounded-2xl border border-zinc-100 p-6 dark:border-zinc-700/40"
      whileHover={{ scale: 1.02 }}
      transition={{ type: "spring", stiffness: 300 }}
    >
      <h2 className="flex text-sm font-semibold text-zinc-900 dark:text-zinc-100">
        <BriefcaseIcon className="h-6 w-6 flex-none" />
        <span className="ml-3">Work</span>
      </h2>
      <ol className="mt-6 space-y-4">
        {resume.map((role, roleIndex) => (
          <li key={roleIndex} className="flex gap-4">
            <div className="relative mt-1 flex h-10 w-10 flex-none items-center justify-center rounded-full shadow-md shadow-zinc-800/5 ring-1 ring-zinc-900/5 dark:border dark:border-zinc-700/50 dark:bg-zinc-800 dark:ring-0">
              <Image 
                src={role.logo} 
                alt="" 
                className={`h-7 w-7 ${role.company === 'Yellow Card' ? 'rounded-full' : ''}`} 
                unoptimized 
              />
            </div>
            <dl className="flex flex-auto flex-wrap gap-x-2">
              <dt className="sr-only">Company</dt>
              <dd className="w-full flex-none text-sm font-medium text-zinc-900 dark:text-zinc-100">
                {role.company}
              </dd>
              <dt className="sr-only">Role</dt>
              <dd className="text-xs text-zinc-500 dark:text-zinc-400">
                {role.title}
              </dd>
              <dt className="sr-only">Date</dt>
              <dd
                className="ml-auto text-xs text-zinc-400 dark:text-zinc-500"
                aria-label={`${role.start} until ${role.end}`}
              >
                <time dateTime={role.start}>{role.start}</time> <span aria-hidden="true">—</span>{' '}
                <time dateTime={role.end}>{role.end}</time>
              </dd>
            </dl>
          </li>
        ))}
      </ol>
      <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
        <Button href="./chris oketch.pdf" variant="secondary" className="group mt-6 w-full">
          Download Resume
          <ArrowDownIcon className="h-4 w-4 stroke-zinc-400 transition group-active:stroke-zinc-600 dark:group-hover:stroke-zinc-50 dark:group-active:stroke-zinc-50" />
        </Button>
      </motion.div>
    </motion.div>
  )
}

const Photos = dynamic(() => Promise.resolve(function Photos() {
  const router = useRouter()
  const scrollRef = useRef(null)
  let rotations = ['rotate-2', '-rotate-2', 'rotate-2', 'rotate-2', '-rotate-2']

  useEffect(() => {
    const scrollContainer = scrollRef.current
    if (!scrollContainer) return
    
    let isDown = false
    let startX
    let scrollLeft

    const handleMouseDown = (e) => {
      isDown = true
      startX = e.pageX - scrollContainer.offsetLeft
      scrollLeft = scrollContainer.scrollLeft
    }

    const handleMouseLeave = () => {
      isDown = false
    }

    const handleMouseUp = () => {
      isDown = false
    }

    const handleMouseMove = (e) => {
      if (!isDown) return
      e.preventDefault()
      const x = e.pageX - scrollContainer.offsetLeft
      const walk = (x - startX) * 2
      scrollContainer.scrollLeft = scrollLeft - walk
    }

    scrollContainer.addEventListener('mousedown', handleMouseDown)
    scrollContainer.addEventListener('mouseleave', handleMouseLeave)
    scrollContainer.addEventListener('mouseup', handleMouseUp)
    scrollContainer.addEventListener('mousemove', handleMouseMove)

    return () => {
      scrollContainer.removeEventListener('mousedown', handleMouseDown)
      scrollContainer.removeEventListener('mouseleave', handleMouseLeave)
      scrollContainer.removeEventListener('mouseup', handleMouseUp)
      scrollContainer.removeEventListener('mousemove', handleMouseMove)
    }
  }, [router])

  return (
    <div className="mt-16 sm:mt-20">
      <div 
        ref={scrollRef}
        className="flex overflow-x-auto scrollbar-hide space-x-4 p-4 sm:justify-center"
      >
        {[image2, image3, image4, image5].map((image, imageIndex) => (
          <motion.div
            key={typeof image === 'string' ? image : image.src}
            className={clsx(
              'relative aspect-[9/10] w-44 flex-none overflow-hidden rounded-xl bg-zinc-100 dark:bg-zinc-800 sm:w-72 sm:rounded-2xl',
              rotations[imageIndex % rotations.length]
            )}
            whileHover={{ scale: 1.05, zIndex: 1 }}
            transition={{ type: "spring", stiffness: 300, damping: 10 }}
          >
            <Image
              src={image}
              alt="Portfolio image"
              sizes="(min-width: 640px) 18rem, 11rem"
              className="absolute inset-0 h-full w-full object-cover"
              priority={imageIndex === 0}
              onError={(e) => console.error('Image load error:', e)}
            />
          </motion.div>
        ))}
      </div>
    </div>
  )
}), { ssr: false })

export default function Home({ articles = [] }) {
  const router = useRouter()
  return (
    <>
      <Head>
        <title>Chris Oketch | Home</title>
        <meta
          name="description"
          content="Hi, I'm Chris, a senior frontend engineer and blockchain developer."
        />
      </Head>
      <Container className="mt-9">
        <motion.div 
          className="max-w-2xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <motion.h1 
            className="text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl"
            variants={fadeInUp}
          >
          Frontend Engineer and Blockchain Developer
          </motion.h1>
          <motion.p 
            className="mt-6 text-base text-zinc-600 dark:text-zinc-400"
            variants={fadeInUp}
          >
            Hi, I'm Chris a seasoned web developer with expertise in both web2 and web3 technologies. 
            Currently, I lead blockchain and web3 initiatives while maintaining a strong foundation in creating secure, user-friendly applications, particularly in the areas of payment systems and platform design. 
          </motion.p>
          <SocialLinks />
        </motion.div>
      </Container>
      <Photos />
      <Container className="mt-24 md:mt-28">
        <motion.div 
          className="mx-auto grid max-w-xl grid-cols-1 gap-y-20 lg:max-w-none lg:grid-cols-2"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <motion.div 
            className="flex flex-col gap-16"
            variants={staggerContainer}
            initial="initial"
            animate="animate"
          >
            {articles.map((article) => (
              <motion.div key={article.slug} variants={fadeInUp}>
                <Article article={article} />
              </motion.div>
            ))}
          </motion.div>
          <div className="space-y-10 lg:pl-16 xl:pl-24">
            <Newsletter />
            <Resume />
          </div>
        </motion.div>
      </Container>
    </>
  )
}

export async function getStaticProps() {
  if (process.env.NODE_ENV === 'production') {
    const {generateRssFeed} = await import('@/lib/generateRssFeed')
    await generateRssFeed()
  }


  const { getAllArticles } = await import('@/lib/getAllArticles')
  const articles = await getAllArticles()
  const slicedArticles = articles.slice(0, 4).map(({ component, ...meta }) => meta)


  return {
    props: {
      articles: slicedArticles,
    },
  }
}