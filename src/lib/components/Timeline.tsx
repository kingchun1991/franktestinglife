/* eslint-disable react/no-array-index-key */

import { LuCheck } from 'react-icons/lu';

import { StepsItem, StepsList, StepsRoot } from '@/components/ui/steps';
import type { IWorkexp } from '@/lib/types/custom-types';

const Timeline = ({ workexps }: { workexps: IWorkexp[] }) => {
  return (
    <StepsRoot
      orientation="vertical"
      size="sm"
      defaultValue={1}
      count={workexps.length}
    >
      <StepsList>
        {workexps.map((workexp, index) => (
          <StepsItem
            key={index}
            index={index}
            icon={<LuCheck />}
            title={workexp.title}
            description={`${workexp.from} - ${workexp.to}`}
          />
        ))}
      </StepsList>
    </StepsRoot>
  );
};

export default Timeline;
