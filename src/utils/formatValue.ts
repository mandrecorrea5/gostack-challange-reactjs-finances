const formatValue = (value: number): string => {
  const format = value.toLocaleString('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  });

  return format;
};

export default formatValue;
