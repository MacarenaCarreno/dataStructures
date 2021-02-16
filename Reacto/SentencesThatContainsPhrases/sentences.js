function getRes(sent, ph) {
  let dic = {};

  for (let i = 0; i < ph.length; i++) {
    let firstWord = ph[i].split(' ')[0];

    for (let k = 0; k < sent.length; k++) {
      let words = sent[k].split(' ');

      if (words.includes(firstWord)) {
        let location = words.indexOf(firstWord);

        let newSentence = words.slice(location, ph[i].lenght).join(' ');

        if (newSentence.includes(ph[i])) {
          let phCount = i + 1;
          let sentCount = k + 1;

          if (dic['Phrase ' + phCount]) {
            dic['Phrase ' + phCount].push(sentCount);
          } else {
            dic['Phrase ' + phCount] = [sentCount];
          }
        }
      }
    }
  }

  return dic;
}

const sent = [
  'Strings are an array of characters',
  'Sentences are an array of words',
];
const ph = ['an array of', 'sentences are strings'];

getRes(sent, ph);

const sent2 = [
  'Sets in python are a hash table representation of arrays.',
  'Searching in Sets are a function of time complexity O(1).',
  'Sets only contain unique elements, and have no order.',
];

const ph2 = ['Sets are a', 'Searching in'];
getRes(sent2, ph2);

console.log(
  'EXERCICE 1::',
  getRes(sent, ph),
  'EXERCICE 2::',
  getRes(sent2, ph2)
);
