const makeEl = ({
  tag,
  content,
  attributes = { class: 'paragraph', id: 'main text' }
} = {}) => {
  const attrStr = Object.entries(attributes)
    .map(([key, value]) => `${key}="${value}"`)
    .join(' ');

  return `<${tag} ${attrStr}>${content}</${tag}>`;
};

const markup = makeEl({ tag: 'p', content: 'text' });

module.exports = markup;
