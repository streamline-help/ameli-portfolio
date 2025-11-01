import React from 'react';

type Props = React.PropsWithChildren<{
  as?: keyof JSX.IntrinsicElements;
  className?: string;
  id?: string;
  container?: boolean;
}>;

export default function Section({
  as: Tag = 'section',
  className,
  id,
  container = true,
  children,
}: Props) {
  const baseClasses = 'py-8 md:py-14';
  const finalClassName = className ? `${baseClasses} ${className}` : baseClasses;

  return (
    <Tag id={id} className={finalClassName}>
      {container ? (
        <div className="mx-auto w-full max-w-[1200px] px-4 sm:px-6 md:px-8">
          {children}
        </div>
      ) : (
        children
      )}
    </Tag>
  );
}
