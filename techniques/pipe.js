const pipe = (...args) => args.reduce((accumulator, func) => func(accumulator));

const articleTitle = 'How to use pipe';
const toLowerCase = (str) => str.toLowerCase();
const addHyphens = (str) => str.replace(/\s/g, '-');

const slug = pipe(articleTitle, toLowerCase, addHyphens);
console.log(slug);