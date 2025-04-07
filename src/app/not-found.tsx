import { Button } from '@/components/buttons'
import Link from 'next/link'

const notFound = () => {
  return (
    <div className="flex flex-col mt-8 lg:mt-0 lg:flex-row lg:justify-between items-center h-screen px-4 xl:px-0 max-w-[1232px] mx-auto">
      <div className="lg:max-w-[604px]">
        <h1 className="text-4xl lg:text-[90px] font-bold lg:leading-[96px]">
          Something went wrong
        </h1>
        <p className="text-text-secondary dark:text-dark-text-secondary text-lg font-medium my-3">
          Let’s figure out what’s going on together
        </p>
        <p className="text-text-secondary dark:text-dark-text-secondary text-sm mb-8 lg:max-w-[394px]">
          Usually, this could be caused by a network error, try refreshing your
          network and reloading the page
        </p>
        <Button type="button">
          <Link href="/dashboard">Go home</Link>
        </Button>
      </div>
    </div>
  )
}

export default notFound