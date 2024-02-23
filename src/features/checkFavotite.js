const checkFavorite = (id, favoriteList) => {
  const index = favoriteList.findIndex((item) => item.id === id);
  console.log(index);
  if (index !== -1) {
    return "favorite";
  }
  return;
};
export default checkFavorite;
