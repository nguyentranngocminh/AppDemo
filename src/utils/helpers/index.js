/**
 * Get context of image in public folder.
 * Ex: loadImage("common/arrow-left.svg")
 * @param {string} path
 * @return {string}
 */
export const loadImage = (path) => {
  const requireContextImage = require.context('../../../assets/img', true);
  const images = requireContextImage
    .keys()
    .map((file) => [file.replace('./', ''), requireContextImage(file)])
    .reduce((objs, [name, context]) => {
      objs[name] = context;
      return objs;
    }, {});

  return images[path];
};
