interface RecapProps {
  children?: React.ReactNode;
  className?: string;
}

import { ArrowPathIcon } from "@heroicons/react/24/outline";

export default function Recap({ className, children }: RecapProps) {
  return (
    <>
      <div className={`p-4 bg-orange-300/30 border border-orange-500 rounded-md ${className} mb-12`}>
        <div className="flex gap-4 items-center mb-4">
          <ArrowPathIcon className="w-8 h-8"/>
          <h2 className="text-2xl">Recap</h2>
        </div>
        {children}
      </div>
    </>
  );
}
