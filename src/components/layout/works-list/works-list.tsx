import WorkCard from '@/components/ui/work-card/work-card';
import { WorkType } from '@/types/types';
import './works-list.scss';

// $======================== Works ========================$ //

type WorksProps = {
  worksList: WorkType[];
};

function WorksList(worksProps: WorksProps): React.JSX.Element {
  const { worksList } = worksProps;
  return (
    <ul className='works-list'>
      {worksList.map(({ href, label, title, desc, technologies, imgSrc, gifSrc, gifMobSrc }) => {
        return (
          <WorkCard
            className={'works-list__item'}
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