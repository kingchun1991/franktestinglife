/* eslint-disable react/no-array-index-key */
import {
  Box,
  Step,
  StepDescription,
  StepIcon,
  StepIndicator,
  StepNumber,
  StepSeparator,
  StepStatus,
  StepTitle,
  Stepper,
  useSteps,
} from '@chakra-ui/react';

import type { IWorkexp } from '~/lib/types/custom-types';

const Timeline = ({
  workexps,
  activeIndex,
}: {
  workexps: IWorkexp[];
  activeIndex: number;
}) => {
  const { activeStep } = useSteps({
    index: activeIndex,
    count: workexps.length,
  });

  return (
    <Stepper
      size="sm"
      index={activeStep}
      orientation="vertical"
      // height="400px"
      gap="0"
    >
      {workexps.map((workexp, index) => (
        <Step key={index}>
          <StepIndicator>
            <StepStatus
              complete={<StepIcon />}
              incomplete={<StepNumber />}
              active={<StepNumber />}
            />
          </StepIndicator>

          <Box flexShrink="0">
            <StepTitle>{workexp.title}</StepTitle>
            {/* <StepDescription
              style={{ whiteSpace: 'pre-line' }}
              dangerouslySetInnerHTML={{ __html: workexp.description }}
            /> */}
            <StepDescription>
              {workexp.from} - {workexp.to}
            </StepDescription>
          </Box>

          <StepSeparator />
        </Step>
      ))}
    </Stepper>
  );
};

export default Timeline;
