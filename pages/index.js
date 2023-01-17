import Link from '@/components/Link'
import { PageSEO } from '@/components/SEO'
import Tag from '@/components/Tag'
import siteMetadata from '@/data/siteMetadata'
import { getAllFilesFrontMatter } from '@/lib/mdx'
import formatDate from '@/lib/utils/formatDate'
import NewsletterForm from '@/components/NewsletterForm'
import Logo from '@/data/logo.svg'
import projectsData from '@/data/projectsData'
import Card from '@/components/Card'
import Card2 from '@/components/Card2'
import Image from '@/components/Image'

const MAX_DISPLAY = 5
const MAX_PROJ_DISPLAY = 3
const avatar = '/static/images/avatar.jpg'

export async function getStaticProps() {
  const posts = await getAllFilesFrontMatter('blog')

  return { props: { posts } }
}

export default function Home({ posts }) {
  return (
    <>
      <PageSEO title={siteMetadata.title} description={siteMetadata.description} />
      <div className="">
        <div className="space-y-2 pb-10 pt-3 md:space-y-5 md:pt-10">
          <div className="flex flex-col space-y-4 md:flex-row-reverse">
            <div className="place-content-center items-center pt-2 pb-2 md:w-1/3">
              <div className="flex justify-center">
                <Image
                  src={avatar}
                  alt="avatar"
                  width="115px"
                  height="115px"
                  className="h-20 w-20 rounded-full grayscale filter"
                />
              </div>
              <h2 className="pt-2 text-center text-xl font-bold leading-8 tracking-tight">
                Ashish Kumar
              </h2>
              <hr className="mx-auto mb-2 mt-1 h-px w-16 border-0 bg-gray-400 dark:bg-gray-700"></hr>
              <p className="text-center text-sm text-gray-600 dark:text-gray-300">
                🧰 Builder <span>&#8226;</span> 👨🏽‍💻 Creator <span>&#8226;</span> 📋 Writer
              </p>
            </div>
            <div className="pt-2 pb-2 md:w-2/3 md:pr-2">
              <h2 className="text-3xl font-bold leading-8 tracking-tight md:text-4xl">Hello!</h2>
              <p className="pt-4 text-sm leading-normal text-gray-500 dark:text-gray-400">
                This is a personal website of <i>Ashish Kumar</i>. Builder by nature. Dabbles in new
                technologies. Usually busy helping customers navigate <b>digital</b>, <b>cloud</b>,
                and <b>security</b>.
              </p>
            </div>
          </div>
        </div>

        <h1 className="text-3xl font-bold text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-4xl md:leading-14">
          Projects
        </h1>

        <div className="container py-4">
          <div className="flex flex-wrap">
            {projectsData.slice(0, MAX_PROJ_DISPLAY).map((d) => (
              <Card2 key={d.title} title={d.title} description={d.description} href={d.href} />
            ))}
          </div>
          <div className="flex justify-end text-base font-medium leading-6">
            <Link
              href="/projects"
              className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
              aria-label="all posts"
            >
              All Projects &rarr;
            </Link>
          </div>
        </div>

        <h1 className="divide-y divide-gray-200 text-2xl font-bold text-gray-900 dark:divide-gray-700 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-4xl md:leading-14">
          Blog Posts
        </h1>
        <ul className="divide-y divide-gray-200 dark:divide-gray-700">
          {!posts.length && 'No posts found.'}
          {posts.slice(0, MAX_DISPLAY).map((frontMatter) => {
            const { slug, date, title, summary, tags, images } = frontMatter
            {
              console.log(images)
            }
            return (
              <li key={slug} className="py-6">
                <article>
                  <div className="space-y-2 xl:grid xl:grid-cols-4 xl:items-baseline xl:space-y-0">
                    <dl>
                      <dt className="sr-only">Published on</dt>
                      <dd className="text-base font-medium leading-6 text-gray-500 dark:text-gray-400">
                        <time dateTime={date}>{formatDate(date)}</time>
                      </dd>
                    </dl>
                    <div className="space-y-5 xl:col-span-3">
                      <div className="space-y-6">
                        <div>
                          <h2 className="text-2xl font-bold leading-8 tracking-tight">
                            <Link
                              href={`/blog/${slug}`}
                              className="text-gray-900 dark:text-gray-100"
                            >
                              {title}
                            </Link>
                          </h2>
                          <div className="flex flex-wrap">
                            {tags.map((tag) => (
                              <Tag key={tag} text={tag} />
                            ))}
                          </div>
                        </div>
                        <div className="prose max-w-none text-gray-500 dark:text-gray-400">
                          {summary}
                        </div>
                      </div>
                      <div className="text-base font-medium leading-6">
                        <Link
                          href={`/blog/${slug}`}
                          className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
                          aria-label={`Read "${title}"`}
                        >
                          Read more &rarr;
                        </Link>
                      </div>
                    </div>
                  </div>
                </article>
              </li>
            )
          })}
        </ul>
      </div>
      {posts.length > MAX_DISPLAY && (
        <div className="flex justify-end text-base font-medium leading-6">
          <Link
            href="/blog"
            className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
            aria-label="all posts"
          >
            All Posts &rarr;
          </Link>
        </div>
      )}
      {siteMetadata.newsletter.provider !== '' && (
        <div className="flex items-center justify-center pt-4">
          <NewsletterForm />
        </div>
      )}
    </>
  )
}
