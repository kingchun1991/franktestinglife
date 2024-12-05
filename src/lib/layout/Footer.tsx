import { Flex, Link, Text } from '@chakra-ui/react';

import { siteConfig } from '@/site.config';

const Footer = () => {
  return (
    <Flex as="footer" width="full" justifyContent="center">
      <Text fontSize="sm">
        2023 - {new Date().getFullYear()} -{' '}
        <Link href={siteConfig.url} target="_blank" rel="noopener noreferrer">
          FrankTestingLife
        </Link>
      </Text>
    </Flex>
  );
};

export default Footer;
