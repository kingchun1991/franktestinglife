'use client';

import { Flex } from '@chakra-ui/react';

import SomeText from '@/lib/components/samples/SomeText';

const Home = () => {
  return (
    <Flex
      direction="column"
      alignItems="center"
      justifyContent="center"
      minHeight="70vh"
      gap={4}
      mb={8}
      w="full"
    >
      <SomeText />
    </Flex>
  );
};

export default Home;
