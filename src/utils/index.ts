/**
 * Função que formata uma data em uma string padronizada
 * @author Thiago Moreira
 * @param {Date} dateToConvert
 * @return {String} data no padrão DD/MM/YYYY hh:mm:ss
 */
function formatDateTime(dateToConvert: Date): string {
  const date = new Date(dateToConvert);
  const day = `0${date.getDate()}`.slice(-2);
  const month = `0${date.getMonth() + 1}`.slice(-2);
  const year = date.getFullYear();
  const hours = `0${date.getHours()}`.slice(-2);
  const minutes = `0${date.getMinutes()}`.slice(-2);
  const seconds = `0${date.getSeconds()}`.slice(-2);
  const formattedDateTime = `${day}/${month}/${year} ${hours}:${minutes}:${seconds}`;

  return formattedDateTime;
}

/**
 * Função que formata uma data em uma string padronizada
 * @author Thiago Moreira
 * @param {Date} dateToConvert
 * @return {String} data no padrão DD/MM/YYYY
 */
function formatDate(dateToConvert: Date): string {
  const date = new Date(dateToConvert);
  const day = `0${date.getDate()}`.slice(-2);
  const month = `0${date.getMonth() + 1}`.slice(-2);
  const year = date.getFullYear();
  const formattedDateTime = `${day}/${month}/${year}`;

  return formattedDateTime;
}

/**
 * Função que formata uma data em uma string padronizada
 * @author Thiago Moreira
 * @param {Date} dateToConvert
 * @return {String} data no padrão DD/MM/YYYY hh:mm:ss:mmm
 */
function formatDateTimeComplete(dateToConvert: Date): string {
  const date = new Date(dateToConvert);
  const day = `0${date.getDate()}`.slice(-2);
  const month = `0${date.getMonth() + 1}`.slice(-2);
  const year = date.getFullYear();
  const hours = `0${date.getHours()}`.slice(-2);
  const minutes = `0${date.getMinutes()}`.slice(-2);
  const seconds = `0${date.getSeconds()}`.slice(-2);
  const milliseconds = date.getMilliseconds();
  const formattedDateTime = `${day}/${month}/${year} ${hours}:${minutes}:${seconds}.${milliseconds}`;

  return formattedDateTime;
}

export { formatDateTime, formatDate, formatDateTimeComplete };
