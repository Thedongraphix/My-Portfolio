export default function About() {
  return (
    <>
      <Head>
        <title>[Your Name] | About</title>
        <meta
          name="description"
          content="I’m [Your Name], a passionate developer skilled in web2 and web3 technologies, specializing in payment systems and blockchain solutions."
        />
      </Head>
      <Container className="mt-16 sm:mt-32">
        <div className="grid grid-cols-1 gap-y-16 lg:grid-cols-2 lg:grid-rows-[auto_1fr] lg:gap-y-12">
          <div className="lg:pl-20">
            <div className="max-w-xs px-2.5 lg:max-w-none">
              <Image
                src={portraitImage}
                alt="Your Portrait"
                sizes="(min-width: 1024px) 32rem, 20rem"
                className="aspect-square rotate-3 rounded-2xl bg-zinc-100 object-cover dark:bg-zinc-800"
              />
            </div>
          </div>
          <div className="lg:order-first lg:row-span-2">
            <h1 className="text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl">
              I’m [Your Name], Web2 & Web3 Developer.
            </h1>
            <div className="mt-6 space-y-7 text-base text-zinc-600 dark:text-zinc-400">
              <p>
                Hello! 👋
              </p>
              <p>
                My name is [Your Name]. I am an experienced developer with expertise in building payment systems, blockchain solutions, and scalable applications. As the current web3 and blockchain lead, I have been at the forefront of designing secure and efficient systems that bridge traditional web2 services and decentralized web3 technologies.
              </p>
              <p>
                Over the years, I have honed my skills in integrating payment gateways like MPesa and creating platforms that streamline user journeys, including education and financial systems. My passion for technology drives me to constantly explore innovative solutions and mentor aspiring developers in the community.
              </p>
              <p>
                I look forward to continuing my journey in the tech industry and building solutions that impact lives globally.
              </p>
            </div>
          </div>
          <div className="lg:pl-20">
            <ul role="list">
              <SocialLink href="https://twitter.com/Thedongraphix" icon={TwitterIcon}>
                Follow on Twitter
              </SocialLink>
              <SocialLink href="https://github.com/Thedongraphix" icon={GitHubIcon} className="mt-4">
                Follow on GitHub
              </SocialLink>
              <SocialLink href="https://www.linkedin.com/in/[YourLinkedInProfile]" icon={LinkedInIcon} className="mt-4">
                Connect on LinkedIn
              </SocialLink>
              <SocialLink
                href="mailto:[YourEmailAddress]"
                icon={MailIcon}
                className="mt-8 border-t border-zinc-100 pt-8 dark:border-zinc-700/40"
              >
                [YourEmailAddress]
              </SocialLink>
            </ul>
          </div>
        </div>
      </Container>
    </>
  );
}
