const sanitizeItemName = (name: string) => {
  return name
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/\s*/g, '')
    .toLowerCase();
};

export { sanitizeItemName };
