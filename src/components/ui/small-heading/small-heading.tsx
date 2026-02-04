import clsx from 'clsx';
import { ReactNode, RefObject } from 'react';
import s from './small-heading.module.scss';

// ^======================== SmallHeading ========================^ //

type SmallHeadingProps = {
  children: ReactNode;
  className: string;
  ref?: RefObject<HTMLHeadingElement | null>;
};

export default function SmallHeading(smallHeadingProps: SmallHeadingProps) {

  const { children, className, ref } = smallHeadingProps;

  return (
    <h3 className={clsx(s.small_heading, className)} ref={ref}>{children}</h3>
  );
}