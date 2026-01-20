import Heading from '@/components/ui/heading/heading';
import Icon from '@/components/ui/icon/icon';
import { CONTACTS } from '@/data/contacts';
import Container from '../container/container';
import s from './footer.module.scss';

// $======================== Footer ========================$ //

function Footer(): React.JSX.Element {
  return (
    <footer className={s.footer} id='contact'>
      <Container>
        <div className={s.inner}>
          <Heading className={s.heading}>Connect with me</Heading>
          <ul className={s.list}>
            {CONTACTS.map(({ href, icon, text }) => {
              return (
                <li key={text} className={s.item}>
                  <a href={href} className={s.link} target='_blank'>
                    <Icon
                      className={s['link-icon']}
                      src={icon}
                      width={45}
                      height={45}
                    />
                    {text}
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
      </Container>
    </footer>
  );
}
export default Footer;