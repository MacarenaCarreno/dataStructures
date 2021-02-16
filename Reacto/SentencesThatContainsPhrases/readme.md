# Sentence that contains all the given phrases #

Given a list of sentences and a list of phrases. The task is to find which sentence(s) contain all the words in a phrase and for every phrase print the sentences number that contains the given phrase.

Constraint: A word cannot be a part of more than 10 sentences.

Examples:
- Input:

- Sentences:
1. Strings are an array of characters.
2. Sentences are an array of words.

- Phrases:
1. an array of
2. sentences are strings

- Output:
Phrase1 is present in sentences: 1,2
Phrase2 is present in sentences: None
Since each word in phrase 1 exists in both the sentences,
but all the words in second phrase do not exist in either.

Input:
Sentences:
1. Sets in python are a hash table representation of arrays.
2. Searching in Sets are a function of time complexity O(1).
3. Sets only contain unique elements, and have no order.
Phrases:
1. Sets are a
2. Searching in
Output:
Phrase1 is present in sentences: 1, 2
Phrase2 is present in sentences: 2
