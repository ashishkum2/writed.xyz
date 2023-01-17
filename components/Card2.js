import Image from './Image'
import Link from './Link'

const Card2 = ({ title, description, imgSrc, href }) => (
  <div className="md p-2 md:w-1/3" style={{ maxWidth: '362px' }}>
    <div
      className={`${imgSrc && 'h-full'
        //   }  ease-in shadow-lg hover:shadow-2xl overflow-hidden rounded-md border-2 border-gray-200 border-opacity-60 dark:border-gray-700`}
        }  ease-in shadow-lg dark:shadow-gray-800 hover:shadow-2xl overflow-hidden rounded-md border-2 border-indigo-600 dark:border-2 dark:border-indigo-700 border-opacity-60`}
    >
      <div className="p-4">
        <h2 className="overflow-hidden mb-3 text-xl font-bold leading-8 tracking-tight">
          {href ? (
            <Link href={href} aria-label={`Link to ${title}`}>
              {title}
            </Link>
          ) : (
            title
          )}
        </h2>
        <p className="overflow-hidden prose mb-3 text-sm max-h-16 max-w-none text-gray-500 dark:text-gray-400">{description}</p>
        {href && (
          <Link
            href={href}
            className="text-base font-medium leading-6 text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
            aria-label={`Link to ${title}`}
          >
            Learn more &rarr;
          </Link>
        )}

      </div>
    </div>
  </div>
)

export default Card2
