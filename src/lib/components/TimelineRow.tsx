/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { Flex, Icon, Text, useColorModeValue } from '@chakra-ui/react';
import type React from 'react';

// Define interface for props
interface TimelineRowProps {
  logo: any;
  title: string;
  date: string;
  color: string;
  index: number;
  arrLength: number;
}

export const TimelineRow: React.FC<TimelineRowProps> = ({
  logo,
  title,
  date,
  color,
  index,
  arrLength,
}) => {
  const textColor = useColorModeValue('gray.700', 'white.300');
  const bgIconColor = useColorModeValue('white.300', 'gray.700');

  return (
    <Flex alignItems="center" minH="78px" justifyContent="start" mb="5px">
      <Flex direction="column" h="100%">
        <Icon
          as={logo}
          bg={bgIconColor}
          color={color}
          h="30px"
          w="26px"
          pe="6px"
          zIndex="1"
          position="relative"
          // right={document.documentElement.dir === 'rtl' ? '-8px' : ''}
          // left={document.documentElement.dir === 'rtl' ? '' : '-8px'}
        />
      </Flex>
      <Flex direction="column" justifyContent="flex-start" h="100%">
        <Text fontSize="sm" color={textColor} fontWeight="bold">
          {title}
        </Text>
        <Text fontSize="sm" color="gray.400" fontWeight="normal">
          {date}
        </Text>
      </Flex>
    </Flex>
  );
};
