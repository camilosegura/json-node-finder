import { NO_FOUND } from './constants';

const findLabel = (node, id) => {
  if (node && node.id === id) {
    return node.label;
  }

  let label = NO_FOUND;
  const { children } = node;

  if (children) {
    const { length } = children;
    let i = 0;

    for (i; i < length; i += 1) {
      label = findLabel(children[i], id);

      if (label !== NO_FOUND) {
        return label;
      }
    }
  }

  return label;
};

export default findLabel;
