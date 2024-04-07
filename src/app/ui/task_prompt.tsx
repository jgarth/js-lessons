interface TaskPromptProps {
  title: string;
  type?: string;
  children?: React.ReactNode;
  className?: string;
}

import { BeakerIcon, UsersIcon, ClipboardIcon } from "@heroicons/react/24/outline";

export default function TaskPrompt({ className, title, type, children }: TaskPromptProps) {
  return (
    <>
      <div className={`p-4 bg-green-300/30 border border-green-500 rounded-md ${className} mt-6 mb-6`}>
        <div className="flex gap-4 items-center mb-4">
          { type == 'group' && (<UsersIcon className="w-8 h-8"/>) }
          { type == 'research' && (<BeakerIcon className="w-8 h-8"/>) }
          { type == undefined && (<ClipboardIcon className="w-8 h-8"/>) }
          <h2 className="text-2xl">{title}</h2>
        </div>
        {children}
      </div>
    </>
  );
}
