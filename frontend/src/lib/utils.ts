import { clsx, type ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function calculateBonus(
  balance: number,
  date: number,
  interest: number
) {
  return (balance / 360) * date * interest
}

export function roundNumber(number: number) {
  return Math.round(number * 100 + Number.EPSILON) / 100
}
