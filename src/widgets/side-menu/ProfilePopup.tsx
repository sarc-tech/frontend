import { FC, RefObject, useRef, useState } from 'react';

import { ArrowRightFromSquare } from '@gravity-ui/icons';
import { Button, Flex, Icon, Popup, Text, User, spacing } from '@gravity-ui/uikit';
import { observer } from 'mobx-react-lite';

import { authStore } from 'features/AuthStore';

type ProfilePopupState = {
  ref: RefObject<Element>;
  open: boolean;
  setOpen: (open: boolean) => void;
};

type Props = {
  state: ProfilePopupState;
};

export const useProfilePopupState = () => {
  const ref = useRef(null);
  const [open, setOpen] = useState(false);
  return {
    ref,
    open,
    setOpen,
    toggle: () => setOpen(!open),
  };
};

export const ProfilePopup: FC<Props> = observer((props) => {
  return (
    <Popup
      anchorRef={props.state.ref}
      open={props.state.open}
      placement={'right'}
      className={spacing({ p: 2 })}
      onOutsideClick={() => props.state.setOpen(false)}
    >
      <Flex
        className={spacing({ p: 2 })}
        direction="row"
        alignItems="center"
        justifyContent="space-between"
        gap={3}
        width={300}
        style={{ boxSizing: 'border-box' }}
      >
        <User
          name={<Text variant={'subheader-3'}>Boris Petrov</Text>}
          description={'boris@yandex.ru'}
          size={'l'}
          avatar={{ text: 'Boris Petrov' }}
          style={{ minWidth: 0 }}
        />
        <Button
          view={'flat-secondary'}
          size={'m'}
          pin={'round-round'}
          onClick={() => authStore.clearToken()}
        >
          <Icon data={ArrowRightFromSquare} />
        </Button>
      </Flex>
    </Popup>
  );
});
