import { ValidationResult } from "interfaces";

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

export const maxLength =
  (length: number) =>
    (value: string): ValidationResult => {
      if (value.length <= length) return { success: true };
      return { success: false, error: "Too long." };
    };

// eslint-disable-next-line
export const pass = (value: string): ValidationResult => {
  return { success: true };
};

export const exact =
  (exact: string) =>
    (value: string): ValidationResult => {
      if (exact == value) return { success: true };
      return { success: false, error: `Must be ${exact}.` };
    };

export const startsWith =
  (start: string) =>
    (value: string): ValidationResult => {
      if (value.startsWith(start)) return { success: true };
      return { success: false, error: `Must start with ${start}.` };
    };
