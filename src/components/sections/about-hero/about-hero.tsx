import Container from '@/components/shared/container/container';
import Heading from '@/components/ui/heading/heading';
import { basePath } from '@/constants/const';
import { aboutPageText } from '@/data/about';
import { splitTextToParagraphs } from '@/utils/utils';
import Image from 'next/image';
import s from './about-hero.module.scss';

// @======================== AboutHero ========================@ //

function AboutHero(): React.JSX.Element {
  return (
    <section className={s.about_hero}>
      <Container>
        <div className={s.inner}>
          <Heading className={s.heading}>
            About me
          </Heading>
          <div className={s.content}>
            <div className={s.image_wrapper}>
              <Image
                src={`${basePath}/img/avatar-big.png`}
                alt=''
                width={1061}
                height={1108}
              />
            </div>
            <div className={s.text_box}>
              {splitTextToParagraphs(aboutPageText).map((paragraph) => (
                <p key={paragraph} className={s.text}>
                  {paragraph}
                </p>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
export default AboutHero;