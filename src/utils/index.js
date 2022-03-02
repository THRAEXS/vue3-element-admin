const APP_TITLE = import.meta.env.VITE_APP_TITLE;

export const getPageTitle = title => title ? `${APP_TITLE} | ${title}` : APP_TITLE;
