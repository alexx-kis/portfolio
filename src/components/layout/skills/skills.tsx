'use client';

import Skill from '@/components/ui/skill/skill';
import { AppRoute } from '@/constants/const';
import { SkillType } from '@/types/types';
import clsx from 'clsx';
import { usePathname } from 'next/navigation';
import './skills.scss';

// @======================== Skills ========================@ //

type SkillsProps = {
  data: SkillType[];
};

export default function Skills(skillsProps: SkillsProps) {
  const { data } = skillsProps;
  const pathname = usePathname();
  return (
    <div
      className={clsx(
        'skills',
        { '_expanded': pathname === AppRoute.ABOUT }
      )}
    >
      <h3 className='skills__heading heading _small'>
        My skills
      </h3>
      <div className='skills__container'>
        {data.map(({ skillsGroupTitle, skillsItems }, index) => {
          return (
            <div key={index} className='skills__group'>
              <p className='skills__group-title'>{skillsGroupTitle}</p>
              <ul className='skills__list'>
                {skillsItems.map(({ skillIcon, skillName, skillDescription }, index) => {
                  return (
                    <Skill
                      className='skills__list-item'
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
      </div>
    </div>
  );
}
