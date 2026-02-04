import { basePath } from '@/constants/const';
import s from './header-lang.module.scss';

// ^======================== HeaderLang ========================^ //

import Image from 'next/image';

function HeaderLang(): React.JSX.Element {

  const handleButtonClick = () => {

  };

  return (
    <div className={s.headerLang}>
      <div className={s.selected}>
        <div className={s.icon}>
          <Image
            src={`${basePath}/img/icons/eng.svg`}
            width={45}
            height={45}
            alt='english'
          />
        </div>
        <div className={s.name}>EN</div>
      </div>
      <div className={s.dropdown}>
        <div className={s.dropdown_item}>
          <button type='button' className={s.dropdown_link} onClick={handleButtonClick}>
            <div className={s.icon}>
              <Image
                src={`${basePath}/img/icons/rus.svg`}
                width={45}
                height={45}
                alt='russian'
              />
            </div>
            <div className={s.dropdown_name}>RU</div>
          </button>
        </div>
      </div>
    </div>
  );
}
export default HeaderLang;