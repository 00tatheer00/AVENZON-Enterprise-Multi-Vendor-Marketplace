export const APP_CONSTANTS = {
  DEFAULT_PAGE_SIZE: 12,
  MAX_PAGE_SIZE: 48,
  CURRENCY: 'USD',
  LOCALE: 'en-US',
  TOUCH_TARGET_MIN_SIZE: '44px',
  SUPPORT_EMAIL: 'support@avenzon.com',
  SHIPPING_GUARANTEE_HOURS: 24,
  MAX_FILE_UPLOAD_SIZE_MB: 5,
} as const;

export const API_ENDPOINTS = {
  PRODUCTS: '/products',
  CATEGORIES: '/categories',
  VENDORS: '/vendors',
  SEARCH: '/search',
  CART: '/cart',
  CHECKOUT: '/checkout',
} as const;
