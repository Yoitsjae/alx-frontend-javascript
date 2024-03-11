const updateUniqueItems = (map) => {
  for (const [key, value] of map.entries()) {
    if (value === 1) {
      map.set(key, 100);
    }
  }
};

export default updateUniqueItems;
