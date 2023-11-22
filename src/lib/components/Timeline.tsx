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

const steps = [
  {
    jobTitle: 'System Analyst',
    description:
      '3/F, GRAND BALLROOM,<br> SHERATON HONG KONG HOTEL & TOWERS,<br> 20 NATHAN ROAD,<br> KOWLOON TSIM SHA TSUI,HONG KONG<br><br>香港九龍尖沙咀彌敦道20號<br>香港喜来登酒店 3樓宴會大廳',
  },
  { jobTitle: 'Analyst programmer', description: '6:00 PM' },
  { jobTitle: 'Ceremony & Banquet', description: '7:00 PM' },
];

const Timeline = () => {
  const { activeStep } = useSteps({
    index: 1,
    count: steps.length,
  });

  return (
    <Stepper index={activeStep} orientation="vertical" height="400px" gap="0">
      {steps.map((step, index) => (
        <Step key={index}>
          <StepIndicator>
            <StepStatus
              complete={<StepIcon />}
              incomplete={<StepNumber />}
              active={<StepNumber />}
            />
          </StepIndicator>

          <Box flexShrink="0">
            <StepTitle>{step.jobTitle}</StepTitle>
            <StepDescription
              style={{ whiteSpace: 'pre-line' }}
              dangerouslySetInnerHTML={{ __html: step.description }}
            />
          </Box>

          <StepSeparator />
        </Step>
      ))}
    </Stepper>
  );
};

export default Timeline;
