import WorkCard from '@/components/ui/work-card/work-card';
import { WorkType } from '@/types/types';
import s from './works-list.module.scss';

// $======================== Works ========================$ //

type WorksProps = {
  worksList: WorkType[];
};

function WorksList(worksProps: WorksProps): React.JSX.Element {
  const { worksList } = worksProps;
  return (
    <ul className={s['works-list']}>
      {worksList.map(({ href, label, title, desc, technologies, imgSrc, gifSrc, gifMobSrc }) => {
        return (
          <WorkCard
            className={s.item}
            key={label}
            href={href}
            label={label}
            title={title}
            desc={desc}
            technologies={technologies}
            imgSrc={imgSrc}
            gifSrc={gifSrc}
            gifMobSrc={gifMobSrc}
          />
        );
      })}
    </ul>
  );
}
export default WorksList;