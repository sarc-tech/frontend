import { FC, ReactNode, useEffect } from 'react';

import { ToasterComponent, ToasterProvider, useToaster } from '@gravity-ui/uikit';

import { toasterService } from 'features/toaster/ToasterService';

const DelegateInitializer: FC = () => {
  const toaster = useToaster();
  useEffect(() => {
    toasterService.setDelegate(toaster);
  }, [toaster]);
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
