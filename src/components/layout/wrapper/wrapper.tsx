import Background from '@/components/ui/background/background';
import type { ReactNode } from 'react';
import s from './wrapper.module.scss';

// $======================== Wrapper ========================$ //

type WrapperProps = {
  children: ReactNode;
};

function Wrapper({ children }: WrapperProps): React.JSX.Element {
  return (
    <div className={s.wrapper}>
      <Background className={s.bg} style={{backgroundImage: 'url(/img/bg/bg-tile.png)',}}/>
      {children}
    </div>
  );
}
export default Wrapper;