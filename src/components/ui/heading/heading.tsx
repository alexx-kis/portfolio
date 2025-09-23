import clsx from 'clsx';
import { ReactNode } from 'react';
import s from './heading.module.scss';

// ^======================== Heading ========================^ //

type HeadingProps = {
  children: ReactNode;
  className: string;
};

function Heading(headingProps: HeadingProps): React.JSX.Element {

  const { children, className } = headingProps;

  return (
    <h2 className={clsx(className, s.heading)}>
      {children}
    </h2>
  );
}
export default Heading;