import { ReactNode } from 'react';
import { Link } from 'react-router-dom';

interface ButtonProps {
  children: ReactNode;
  to?: string;
  href?: string;
  onClick?: () => void;
  type?: 'button' | 'submit' | 'reset';
  variant?: 'primary' | 'secondary';
  className?: string;
}

export default function Button({ 
  children, 
  to, 
  href, 
  onClick, 
  type = 'button', 
  variant = 'primary',
  className = '' 
}: ButtonProps) {
  const baseStyles = `
    inline-flex items-center justify-center px-8 py-3 rounded-full font-medium 
    transition-all duration-300 ease-in-out transform hover:scale-105
  `;
  
  const primaryStyles = `
    bg-accent text-black hover:bg-transparent hover:border-2 hover:border-accent hover:text-accent
  `;
  
  const secondaryStyles = `
    bg-transparent border-2 border-accent text-accent hover:bg-accent hover:text-black
  `;

  const styles = `${baseStyles} ${variant === 'primary' ? primaryStyles : secondaryStyles} ${className}`;

  if (to) {
    return (
      <Link to={to} className={styles}>
        {children}
      </Link>
    );
  }

  if (href) {
    return (
      <a href={href} className={styles} target="_blank" rel="noopener noreferrer">
        {children}
      </a>
    );
  }

  return (
    <button type={type} onClick={onClick} className={styles}>
      {children}
    </button>
  );
}