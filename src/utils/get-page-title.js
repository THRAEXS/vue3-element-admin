import settings from '@/settings'

const siteTitle = settings.title || 'Fund'

export default title => title ? `${title} - ${siteTitle}` : siteTitle
