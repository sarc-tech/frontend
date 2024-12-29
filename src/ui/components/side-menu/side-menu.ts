import { createEvent, createStore } from 'effector';

export const setSideMenuCompact = createEvent<boolean>();

export const $sideMenuCompact = createStore<boolean>(false);

$sideMenuCompact.on(setSideMenuCompact, (_, compact) => compact);
