import Editor from '@/app/ui/editor';

type ReactText = string | number;
type ReactChild = ReactElement | ReactText;

interface ReactNodeArray extends Array<ReactNode> {}
type ReactFragment = {} | ReactNodeArray;
type ReactNode = ReactChild | ReactFragment | ReactPortal | boolean | null | undefined;

interface SplitProps {
  leftWidth ?: string,
  rightWidth ?: string,
  initialCode ?: string,
  children ?: ReactNode
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
