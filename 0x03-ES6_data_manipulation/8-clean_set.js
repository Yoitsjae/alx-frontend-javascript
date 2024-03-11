const cleanSet = (set, startString) => {
  const filtered = Array.from(set).filter(item => item.startsWith(startString));
  return filtered.join('-').slice(startString.length);
};

export default cleanSet;
