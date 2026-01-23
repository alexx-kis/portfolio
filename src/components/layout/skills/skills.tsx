'use client';

import Skill from '@/components/ui/skill/skill';
import { AppRoute } from '@/constants/const';
import { SkillType } from '@/types/types';
import clsx from 'clsx';
import { usePathname } from 'next/navigation';
import { RefObject } from 'react';
import s from './skills.module.scss';
import SmallHeading from '@/components/ui/small-heading/small-heading';
import Container from '../container/container';

// @======================== Skills ========================@ //

type SkillsProps = {
  data: SkillType[];
  refs?: {
    heading: RefObject<HTMLHeadingElement | null>;
    itemRows: RefObject<(HTMLDivElement | null)[]>;
  };
};

export default function Skills(skillsProps: SkillsProps) {

  const { data, refs } = skillsProps;
  const pathname = usePathname();

  return (
    <div
      className={clsx(
        s.skills,
        { '_expanded': pathname === AppRoute.ABOUT }
      )}
    >
      <SmallHeading className={s.heading} ref={refs?.heading}>
        My skills
      </SmallHeading>
      <Container className={s.container}>
        {data.map(({ skillsGroupTitle, skillsItems }, index) => {
          return (
            <div key={index} className={s.group} ref={(el) => { if (el && refs) refs.itemRows.current[index] = el; }}>
              <p className={s['group-title']}>{skillsGroupTitle}</p>
              <ul className={s.list}>
                {skillsItems.map(({ skillIcon, skillName, skillDescription }, index) => {
                  return (
                    <Skill
                      className={s['list-item']}
                      key={index}
                      skillIcon={skillIcon}
                      skillName={skillName}
                      skillDescription={skillDescription}
                    />
                  );
                })}
              </ul>
            </div>
          );
        })}
      </Container>
    </div>
  );
}
