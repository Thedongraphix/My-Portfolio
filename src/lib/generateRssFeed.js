import ReactDOMServer from 'react-dom/server'
import { Feed } from 'feed'
import path from 'path'

async function generateRssFeed() {
  try {
    const { mkdir, writeFile } = await import('fs/promises')
    const { getAllArticles } = await import('./getAllArticles')

    const articles = await getAllArticles()
    const siteUrl = process.env.NEXT_PUBLIC_SITE_URL
    const author = {
      name: 'Spencer Sharp',
      email: 'spencer@planetaria.tech',
    }

    const feed = new Feed({
      title: 'My Blog',
      description: 'This is my personal blog',
      id: siteUrl,
      link: siteUrl,
      language: 'en',
      image: `${siteUrl}/favicon.ico`,
      favicon: `${siteUrl}/favicon.ico`,
      copyright: `All rights reserved ${new Date().getFullYear()}, Spencer Sharp`,
      updated: new Date(),
      generator: 'Feed for Node.js',
      feedLinks: {
        rss2: `${siteUrl}/rss/feed.xml`,
        json: `${siteUrl}/rss/feed.json`,
        atom: `${siteUrl}/rss/atom.xml`,
      },
      author,
    })

    articles.forEach((article) => {
      const url = `${siteUrl}/articles/${article.slug}`
      feed.addItem({
        title: article.title,
        id: url,
        link: url,
        description: article.description,
        content: ReactDOMServer.renderToStaticMarkup(article.content),
        author: [author],
        contributor: [author],
        date: new Date(article.date),
      })
    })

    const rssDirectory = path.join(process.cwd(), 'public', 'rss')

    await mkdir(rssDirectory, { recursive: true })
    await writeFile(path.join(rssDirectory, 'feed.xml'), feed.rss2())
    await writeFile(path.join(rssDirectory, 'atom.xml'), feed.atom1())
    await writeFile(path.join(rssDirectory, 'feed.json'), feed.json1())
  } catch (error) {
    console.error('Failed to generate RSS feed:', error)
  }
}

export { generateRssFeed }