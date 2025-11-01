import { ReactNode } from 'react';

interface ContainerProps {
  children: ReactNode;
  className?: string;
}

export default function Container({ children, className = '' }: ContainerProps) {
  return (
    <div className={`mx-auto px-6 sm:px-12 lg:px-24 max-w-[1440px] ${className}`}>
      {children}
    </div>
  );
}
