import { APP_CONSTANTS } from '@/core/config/constants';

export function formatCurrency(
  amount: number,
  currency: string = APP_CONSTANTS.CURRENCY,
  locale: string = APP_CONSTANTS.LOCALE
): string {
  return new Intl.NumberFormat(locale, {
    style: 'currency',
    currency,
    minimumFractionDigits: 2,
  }).format(amount);
}

export function formatPercentage(value: number): string {
  return `${value > 0 ? '+' : ''}${value.toFixed(1)}%`;
}

export function formatRating(rating: number): string {
  return rating.toFixed(1);
}
