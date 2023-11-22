import { Flex, Link, Text } from '@chakra-ui/react';

const Footer = () => {
  return (
    <Flex as="footer" width="full" justifyContent="center">
      <Text fontSize="sm">
        2023 - {new Date().getFullYear()} -{' '}
        <Link
          href="https://FrankTestingLife.vercel.app/"
          isExternal
          rel="noopener noreferrer"
        >
          FrankTestingLife
        </Link>
      </Text>
    </Flex>
  );
};

export default Footer;
