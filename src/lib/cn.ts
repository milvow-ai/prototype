/**
 * cn — utility for merging Tailwind class names safely.
 * Uses clsx for conditional classes and tailwind-merge to dedupe conflicting Tailwind utilities.
 */

import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]): string {
  return twMerge(clsx(inputs));
}
