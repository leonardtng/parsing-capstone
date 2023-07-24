import { lexer } from "./lexer";
import { Token } from "./types";
import { Terminal, TerminalRule } from "./types";
import { LexRules } from "./types";

const testLexerSmoke = () => {
  const paragraph =
    "The quick brown fox jumps over the lazy dog. If the dog barked, was it really lazy?";
  const whitespace = /\s+/dy;
  const terminalRules = [
    new TerminalRule(new Terminal("WORD"), /\b\w+\b/dy),
    new TerminalRule(new Terminal("COMMA"), /,/dy),
    new TerminalRule(new Terminal("PUNCTUATION"), /\./dy),
    new TerminalRule(new Terminal("QUESTION_MARK"), /\?/dy),
  ];

  const lexRules = new LexRules(whitespace, terminalRules);

  const { position, tokens } = lexer(lexRules, paragraph);
  console.log(position);
  console.log(tokens);
};

const testLexer = () => {
  const paragraph = " A B B  AA123  123.45  --";

  const whitespace = /\s+/dy;
  const terminalRules = [
    new TerminalRule(new Terminal("A"), /A/dy),
    new TerminalRule(new Terminal("B"), /B B/dy),
    new TerminalRule(new Terminal("X"), /[A-Z]+/dy),
    new TerminalRule(new Terminal("Y"), /\d+(\.\d+)?/dy),
  ];

  const lexRules = new LexRules(whitespace, terminalRules);

  const { position, tokens } = lexer(lexRules, paragraph);

  // const expectedTokens = [
  //   new Token(new Terminal("B"), {
  // ]

  console.log(position);
  console.log(tokens);
};

testLexer();
