function getImageUrl(name: string) {
  return new URL(`./images/${name}`, import.meta.url).href;
}

const IMAGES = {
  noavatar: getImageUrl('noavatar.png'),
};

export default IMAGES;
