import Link from "next/link";
import { ArrowLongLeftIcon, ArrowLongRightIcon }
  from '@heroicons/react/24/solid'

interface HeadlineProps {
  title: string,
  subtitle?: string,
  prevLessonLink?: string,
  nextLessonLink?: string
}

export default function Headline(
    { title, subtitle, prevLessonLink, nextLessonLink }: HeadlineProps
) {
  return <>
    <div className="flex flex-row justify-between items-start py-6 px-12">
      { prevLessonLink !== undefined &&
        <Link key="mainNavBack" href={prevLessonLink}>
          <ArrowLongLeftIcon className="h-8 w-8 text-white" />
        </Link>
      }
      { prevLessonLink === undefined &&
        <div></div>
      }
      <div className="flex flex-col items-center gap-2">
        <h1 className="text-white font-semibold text-4xl">{title}</h1>
        <h2 className="px-12 text-xl">{subtitle}</h2>
      </div>
      { nextLessonLink !== undefined &&
        <Link key="mainNavBack" href={nextLessonLink}>
          <ArrowLongRightIcon className="h-8 w-8 text-white" />
        </Link>
      }
      { nextLessonLink === undefined &&
        <div>&nbsp;</div>
      }
    </div>
  </>;
}
