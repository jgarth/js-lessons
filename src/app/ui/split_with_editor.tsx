import Editor from '@/app/ui/editor';

interface SplitProps {
  leftWidth ?: string,
  rightWidth ?: string,
  initialCode ?: string,
  children ?: React.ReactNode
}


export default function SplitWithEditor({ leftWidth, rightWidth, initialCode, children }: SplitProps) {

  if(leftWidth === undefined) { leftWidth = '40%'; }
  if(rightWidth === undefined) { rightWidth = '60%'; }

  return <>
    <div className="flex flex-col lg:flex-row justify-stretch px-4">
      <div className={`flex flex-col space-between p-8 gap-8`} style={{width: leftWidth}}>
        {children}
      </div>
      <Editor className={`grow`} style={{width: rightWidth}}>
        {initialCode}
      </Editor>
    </div>
  </>;
}
