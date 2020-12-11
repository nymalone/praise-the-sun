import { fromUnixTime } from "date-fns";

export const toUpperCase = (text) => {
  const upperText = text;
  return upperText ? upperText.replace(/\b\w/g, (c) => c.toUpperCase()) : '';
};

export const getDT = (dt) => {
  return dt ? fromUnixTime(dt) : '';
};
