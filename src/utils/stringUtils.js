import { fromUnixTime } from "date-fns";

// const weekDay = (date, type = "long") =>
//   new Intl.DateTimeFormat('pt-BR', { weekday: type }).format(date);

// const hour = (date, type = "numeric") =>
//   new Intl.DateTimeFormat('pt-BR', { hour: type }).format(date);

// const time = (date, type = "numeric") =>
//   new Intl.DateTimeFormat('pt-BR', { hour: type, minute: type }).format(date);

// export default {
//   weekDay,
//   hour,
//   time,
// };
export const toUpperCase = (text) => {
  const upperText = text;
  return upperText.replace(/\b\w/g, (c) => c.toUpperCase());
};

export const getDT = (dt) => {
  // const date = new Date(dt * 1000); // multiply by 1000 for milliseconds
  // const date_string = date.toLocaleString("pt-BR"); // 24 hour format
  // return date_string;
  return fromUnixTime(dt)
};
