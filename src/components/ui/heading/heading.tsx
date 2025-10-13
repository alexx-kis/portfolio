import clsx from 'clsx';
import { ReactNode, RefObject } from 'react';
import s from './heading.module.scss';

// ^======================== Heading ========================^ //

type HeadingProps = {
  children: ReactNode;
  className: string;
  ref?: RefObject<HTMLHeadingElement | null>;
};

function Heading(headingProps: HeadingProps): React.JSX.Element {

  const { children, className, ref } = headingProps;

  return (
    <h2 className={clsx(className, s.heading)} ref={ref}>
      {children}
    </h2>
  );
}
export default Heading;