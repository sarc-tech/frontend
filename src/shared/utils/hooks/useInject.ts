import { useState } from 'react';

import { interfaces } from 'inversify/lib/cjs/interfaces/interfaces';

import { appContainer } from 'app/di/appContainer';

/**
 * Хук для инъекции зависимостей из графа DI.
 * Компоненты будут созданы в соответствии со своей политикой:
 * - все что помечено как Singleton, будет переиспользовано;
 * - все что не помечено (например Model-классы), будет инстанциировано.
 */
export function useInject<T>(componentClass: interfaces.ServiceIdentifier<T>): T {
  const [component] = useState(() => appContainer.get(componentClass));
  return component;
}
