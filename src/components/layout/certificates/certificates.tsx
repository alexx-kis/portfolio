import SmallHeading from '@/components/ui/small-heading/small-heading';
import { CERTIFICATES } from '@/data/certificates';
import Image from 'next/image';
import s from './certificates.module.scss';

// $======================== Certificates ========================$ //

function Certificates(): React.JSX.Element {
  return (
    <div className={s.certificates}>
      <SmallHeading className={s.heading}>My certificates</SmallHeading>
      <ul className={s.list}>
        {CERTIFICATES.map(({ id, path }) => (
          <li key={id} className={s.item}>
            <Image
              src={path}
              alt=''
              width={1708}
              height={2400}
            />
          </li>
        ))}
      </ul>
    </div>
  );
}
export default Certificates;