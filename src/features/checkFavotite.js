const checkFavorite = (id, favoriteList) => {
  const index = favoriteList.findIndex((item) => item.id === id);

  if (index !== -1) {
    return "favorite";
  }
  return;
};
export default checkFavorite;
