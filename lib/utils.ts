import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

//add functions here that do things like when add new Date() to post. 
export function formatDate(date: string) {
  return new Date(date).toLocaleDateString('en-US', {
    month: 'long', 
    day: 'numeric',
    year: 'numeric', 
  })
}
//JSONPARSE STRINGIFY FUNCTION TO USE IN APP
export function parseServerActionResponse<T>(response:T) {
  return JSON.parse(JSON.stringify((response)))
}