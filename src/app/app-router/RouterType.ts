import { createBrowserRouter } from 'react-router-dom';

/**
 * Router нельзя указать в качестве return type.
 * Поэтому, в качестве workaround, заводим свой тип.
 * https://github.com/remix-run/react-router/discussions/9915
 */
export type RouterType = ReturnType<typeof createBrowserRouter>;
