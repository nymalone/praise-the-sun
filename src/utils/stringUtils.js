const weekDay = (date, type = "long") =>
  new Intl.DateTimeFormat('pt-BR', { weekday: type }).format(date);

const hour = (date, type = "numeric") =>
  new Intl.DateTimeFormat('pt-BR', { hour: type }).format(date);

const time = (date, type = "numeric") =>
  new Intl.DateTimeFormat('pt-BR', { hour: type, minute: type }).format(date);

export default {
  weekDay,
  hour,
  time,
};
