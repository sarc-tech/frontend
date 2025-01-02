import { FC } from 'react';

import { useParams } from 'react-router-dom';

import { SideMenu } from 'widgets/side-menu/SideMenu';

export const SearchRequestPage: FC = () => {
  const { id } = useParams();
  return (
    <SideMenu>
      <h1>Заявка id: {id}</h1>
    </SideMenu>
  );
};
