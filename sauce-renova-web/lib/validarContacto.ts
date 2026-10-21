const EMAIL_REGEX = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9-]+(\.[A-Za-z0-9-]+)*\.[A-Za-z]{2,}$/;

export const emailValido = (value: string) => EMAIL_REGEX.test(value.trim());

export const telefonoValido = (value: string) => {
  const limpio = value.replace(/[\s.\-()]/g, "");
  if (/^(?:\+|00)(?!34)\d{8,15}$/.test(limpio)) return true;
  return /^(?:(?:\+|00)34)?[6-9]\d{8}$/.test(limpio);
};