import clsx from 'clsx';
import { ReactNode, RefObject } from 'react';
import s from './main-heading.module.scss';

// ^======================== MainHeading ========================^ //

type MainHeadingProps = {
  children: ReactNode;
  className: string;
  ref?: RefObject<HTMLHeadingElement | null>;
};

function MainHeading(mainHeadingProps: MainHeadingProps): React.JSX.Element {

  const { children, className, ref } = mainHeadingProps;

  return (
    <h1 className={clsx(className, s.mainHeading)} ref={ref}>{children}</h1>
  );
}
export default MainHeading;