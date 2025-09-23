import clsx from 'clsx';
import s from './burger.module.scss';

// ^======================== Burger ========================^ //

type BurgerProps = {
  isActive: boolean;
  className: string;
  onBurgerClick: () => void;
};

function Burger(burgerProps: BurgerProps): React.JSX.Element {
  const { isActive, onBurgerClick, className } = burgerProps;
  return (
    <div
      className={clsx(
        s.burger, className,
        { [s._active]: isActive }
      )}
      onClick={onBurgerClick}
    >
      {Array.from({ length: 3 }, (_, index) => (
        <div key={index} className={s.line} />
      ))}
    </div>
  );
}
export default Burger;