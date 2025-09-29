'use client';

import { MediaQuery } from '@/constants/viewport';
import { useMediaQuery } from '@/hooks/use-media-query';
import clsx from 'clsx';
import Image from 'next/image';
import { useState } from 'react';
import s from './work-card.module.scss';

// ^======================== Work ========================^ //

type WorkCardProps = {
  className: string;
  href: string;
  label: string;
  title: string;
  desc: string;
  technologies: string[],
  imgSrc: string;
  gifSrc: string;
  gifMobSrc: string;
};

function WorkCard(workCardProps: WorkCardProps): React.JSX.Element {
  const { className, href, label, title, desc, technologies, imgSrc, gifSrc, gifMobSrc } = workCardProps;
  const [isHovered, setIsHovered] = useState(false);
  const isMobileScreen = useMediaQuery(MediaQuery.MOBILE);

  return (
    <li
      className={clsx(className, s.workCard)}
      onMouseEnter={() => {
        setIsHovered(true);
      }}
      onMouseLeave={() => {
        setIsHovered(false);
      }}
    >
      <a href={href} className={s.link} aria-label={label}>
        <div className={s.imageBox}>
          <Image
            className={s.image}
            src={!isMobileScreen ? (isHovered ? gifSrc : imgSrc) : gifMobSrc}
            alt=''
            width={417}
            height={234}
          />
        </div>
        <div className={s.info}>
          <p className={s.title}>{title}</p>
          <p className={s.description}>{desc}</p>
          <ul className={s.technologies}>
            {technologies.map((item) => (
              <li key={item} className={s.technology}>
                {item}
              </li>
            ))}
          </ul>
        </div>
      </a>
    </li>
  );
}
export default WorkCard;