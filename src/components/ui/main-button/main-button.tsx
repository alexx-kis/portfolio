import Image from 'next/image';
import Link from 'next/link';
import './main-button.scss';

// ^======================== MainButton ========================^ //
type MainButtonProps = {
  className: string;
  href: string;
  text: string;
  iconPath: string;
  onMainButtonClick?: (e: React.MouseEvent<HTMLAnchorElement>) => void;
};
function MainButton(mainButtonProps: MainButtonProps): React.JSX.Element {
  const { className, href, text, iconPath, onMainButtonClick } = mainButtonProps;
  return (
    <Link
      className={`${className} main-button`}
      href={href}
      onClick={onMainButtonClick}
    >
      <div className='main-button__text'>
        {text}
      </div>
      <Image
        className='main-button__icon'
        src={iconPath}
        width={10}
        height={10}
        alt=''
      />
    </Link>
  );
}
export default MainButton;