import { FC, ReactNode, useEffect } from 'react';

import { ToasterComponent, ToasterProvider, useToaster } from '@gravity-ui/uikit';

import { ToasterService } from 'shared/toaster/ToasterService';
import { useInject } from 'shared/utils/hooks/useInject';

const DelegateInitializer: FC = () => {
  const toaster = useToaster();
  const toasterService = useInject(ToasterService);
  useEffect(() => {
    toasterService.setDelegate(toaster);
  }, [toaster, toasterService]);
  return null;
};

export const ToasterServiceProvider: FC<{ children: ReactNode }> = (props) => {
  return (
    <ToasterProvider>
      <ToasterComponent />
      <DelegateInitializer />
      {props.children}
    </ToasterProvider>
  );
};
