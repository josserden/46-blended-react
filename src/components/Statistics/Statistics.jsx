import { StatisticItem } from 'components';
import { StatisticsList, StatisticTitle } from './Statistics.styled';

import { FaRegThumbsUp } from 'react-icons/fa';
import { MdPeople, MdOutlineProductionQuantityLimits } from 'react-icons/md';
import { GiTreeDoor } from 'react-icons/gi';

const icons = [
  <FaRegThumbsUp />,
  <MdPeople />,
  <MdOutlineProductionQuantityLimits />,
  <GiTreeDoor />,
];

export const Statistics = ({ stats, title }) => {
  return (
    <>
      {title && <StatisticTitle>Main Statistics</StatisticTitle>}
      <StatisticsList>
        {stats.map(({ id, title, total }, index) => (
          <StatisticItem
            key={id}
            title={title}
            total={total}
            icon={icons[index]}
          />
        ))}
      </StatisticsList>
    </>
  );
};
