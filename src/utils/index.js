const APP_TITLE = import.meta.env.VITE_APP_TITLE;

export const pageTitle = title => title ? `${APP_TITLE} | ${title}` : APP_TITLE;

// export { default as request } from './request';

export { default as Cookie } from './cookie';
