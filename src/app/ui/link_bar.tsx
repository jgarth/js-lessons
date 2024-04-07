import Link from "next/link";

import { ArrowLongRightIcon, ArrowLongLeftIcon } from "@heroicons/react/24/outline";

export default function LinkBar({previousHref, nextHref}) {
  return <>
    <div className="mt-4 flex justify-between">
      <Link key="previous" href={previousHref}>
        <div className="bg-green-500 rounded-md text-gray-100 py-2 px-4 flex items-center gap-1">
          <ArrowLongLeftIcon className="h-8" />
          Previous Lesson
        </div>
      </Link>
      <Link key="next" href={nextHref}>
        <div className="bg-green-500 rounded-md text-gray-100 py-2 px-4 flex items-center gap-1">
          Next Lesson
          <ArrowLongRightIcon className="h-8" />
        </div>
      </Link>
    </div>
  </>
}
