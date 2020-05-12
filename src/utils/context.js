export const expandedProperty = (context, property) => {
  const suffix = property.split(":").pop();

  return `${context}:${suffix}`;
};
