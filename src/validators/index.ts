import { ValidationResult } from "../interfaces";

export const notEmpty = (value: string): ValidationResult => {
  if (value) return { success: true };
  return { success: false, error: "Empty." };
};

export const safeUsername = (value: string): ValidationResult => {
  if (/^[a-z0-9_]{1,15}$/i.test(value)) return { success: true };
  return { success: false, error: "Invalid username." };
};

export const safeEmail = (value: string): ValidationResult => {
  if (/^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/i.test(value)) return { success: true };
  return { success: false, error: "Invalid email." };
};
