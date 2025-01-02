import { FC, ReactNode } from 'react';

import { Flex, Text } from '@gravity-ui/uikit';

type Props = {
  children?: ReactNode;
};

export const PageHeader: FC<Props> = ({ children }) => {
  return (
    <Flex className={'page-header'} height={64} alignItems={'center'}>
      <Text variant="header-1" as="h1">
        {children}
      </Text>
    </Flex>
  );
};
