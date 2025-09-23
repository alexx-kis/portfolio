import clsx from 'clsx';
import { ReactNode } from 'react';
import s from './main-heading.module.scss';

// ^======================== MainHeading ========================^ //

type MainHeadingProps = {
  children: ReactNode;
  className: string;
};

function MainHeading(mainHeadingProps: MainHeadingProps): React.JSX.Element {

  const { children, className } = mainHeadingProps;

  return (
    <h1 className={clsx(className, s.mainHeading)}>{children}</h1>
  );
}
export default MainHeading;