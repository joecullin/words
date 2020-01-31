# words

Service that extracts words from text.

## Setup

```
npm install
npm start
```

Default port is 3000. To specify a different port:

```
WORDS_PORT=3089 npm start
```

## Usage example

```
curl -v 'http://localhost:3089/words' -H 'Content-Type: application/json' -d '{"rule":"four words","text":"Some random string that will change"}'

result:

{
    "info": "",
    "success": true,
    "value": "Some random string that"
}
```

## Notes

Because I wanted to get this in quickly (explained to Dan), I skimped in a few spots:

- The web service doesn't do any input sanitizing or validation. It should send meaningful http status codes, and it should give the user helpful info about problems.
- I'm not checking behavior for edge cases, huge input values, etc.
- I didn't spend any time optimizing performance. I'm sure I could at the very least skip some of the string traversals in `prepositionRuleProcessor`.
- Vague specs. I understand it's deliberately open-ended. In real life I would've wanted to have at least a few conversations to talk through various assumptions. Instead I had those conversations with myself and documented them below.

## Rules

Three types of rules are supported.
- nounRule -- _"two words"_
- rangeRule -- _"words one through two"_
- prepositionRule -- _"email following three words"_

Types of nouns:
- quotedPhrase - one or more words surrounded by single or double quotes
- string - an entire string
- email - an email address
- dollars - a dollar amount, e.g. _$400_ or _$0.50_
- date - a valid date formatted as YYYY-MM-DD
- nthWord - the word n places from current, e.g. "third word"
- nWords -  n words in a row, e.g. "4 words"

Preposition rules have 3 parts: `<captureNoun><preposition><anchorNoun>`
- captureNoun: a valid noun rule, this is the text we're aiming to capture.
- preposition, either "following" or "preceding"
- anchorNoun - the relative point described by the preposition.

Misc notes on rules:
- Range rules only apply to words. You can't get e.g. _2nd through 100th email_.
- Range rules only work left to right (low to high).
- Combinations like _second through 4th word following "phone number"_ are not supported.
- All rules and processing  are case-sensitive.
- Words are split on spaces. Punctuation is not ignored. So the last word of a sentence gets a period attached to it.

Example preposition rule:
- rule: _word preceding "my ol' phone"_
- text: _I really banged up my ol' phone when I fell._
- --> anchor is the quotedPhrase _my  ol' phone_
- --> captured word is _my_, because it precedes the anchor.

## Tests

Run `npm test` to run all tests.

Or run an individual test group:

```node_modules/jest/bin/jest.js __tests__/endToEnd/e2e.test.js```.



## Messy notes to show some of my thinking

Just dumping these in here in case they're interesting.

```
- The only quoted phrases/word in your examples is phone. I'll assume it could be any quoted phrase (like "red peppers") and that there's nothing special about the word phone. (That is, I'm not going to recognize phone numbers.)
- Or should I limit myself to quoted single words? That would make tokenizing simple. Start with that and then build?
- Or pick out balanced words first?

- I'm not sure if the "preceding" and "following" expressions should be interpreted as "directly preceding" and "directly following." I'm also unsure whether the operands for those expressions are anchored to the beginning/end of the text (but that might be the same question).

 leave a lot of room for interpretation. Are they anchored to the beginning/end of the string? Are they anchored to the expression?

Consider "email following 3 words" as the regular expression:

"email me at joe@example.com"
--> I'd expect a result of joe@example.com.

"please email me at joe@example.com"
--> maybe the "directly" isn't implied, so the 3 words are "please email me", and the result is joe@example.com
--> maybe the expression isn't anchored, so it matches "email me at"

"please email me at joe@example.com or email Bob at bob@example.com"
--> results in two matches?

Or consider "dollars following 3 words"

Is it anchored at the beginning of the text?

"second email" "3rd dollars" --> not valid.

...

- Only get the first match?

- no compounds, like:
second through 4th word following "phone"

10th word following email -- what if text only has 4 words? treating that as invalid for now.

should I make this case-insensitive??? - rules? text?
```
