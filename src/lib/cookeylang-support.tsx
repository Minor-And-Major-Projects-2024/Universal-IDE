export function addLang(monaco: any) {
  if (
    monaco.languages.getLanguages().findIndex((n: any) => n.id == 'quiken') > -1
  )
    return;

  const quiken = {
    defaultToken: 'invalid',

    autoClosingPairs: [
      { open: '{', close: '}' },
      { open: '[', close: ']' },
      { open: '(', close: ')' },
      { open: '"', close: '"', notIn: ['string'] },
      { open: "'", close: "'", notIn: ['string', 'comment'] },
      { open: '%*', close: ' *%', notIn: ['string'] },
    ],

    surroundingPairs: [
      { open: '{', close: '}' },
      { open: '[', close: ']' },
      { open: '(', close: ')' },
    ],

    keywords: [
      'for',
      'forrep',
      'while',
      'do',
      'if',
      'el',
      'break',
      'class',
      'extends',
      'superClass',
      'this',
      'NaV',
      'true',
      'false',
      'or',
      'and',
      'function',
      'ret',
      'exit',
      'switch',
      'case',
      'default',
      'lambda',
    ],

    typeKeywords: ['var', 'final'],

    operators: [
      '+',
      '-',
      '*',
      '/',
      '^',
      '=',
      '+=',
      '-=',
      '*=',
      '/=',
      '^=',
      '++',
      '--',
      '%=',
      '%',
      '@',
      ':',
      '?',
      '!',
      '<',
      '>',
      '<=',
      '>=',
      '==',
      '!=',
    ],

    symbols: /[=><!~?:&+\-*\/\^%@]+/,

    escapes: /\\(?:m\d+|u{.+}|.)/,

    tokenizer: {
      root: [{ include: 'common' }],

      common: [
        [
          /[a-z_][a-zA-Z0-9_]*/,
          {
            cases: {
              '@typeKeywords': 'keyword',
              '@keywords': 'keyword',
              '@default': 'identifier',
            },
          },
        ],

        [
          /[A-Z][\w\$]*/,
          {
            cases: {
              '@keywords': 'keyword',
              '@default': 'type.identifier',
            },
          },
        ],

        [/[{}()\[\]<>]/, '@brackets'],

        { include: 'whitespace' },

        [
          /@symbols/,
          {
            cases: {
              '@operators': 'operator',
              '@default': 'invalid',
            },
          },
        ],

        [/\d+(\.\d+)?/, 'number.float'],

        [/[;,.]/, 'delimiter'],

        [/"/, 'string', '@string_double'],
        [/'/, 'string', '@string_single'],
      ],

      string_double: [
        [/[^\\"]+/, 'string'],
        [/@escapes/, 'string.escape'],
        [/\\./, 'invalid'],
        [/"/, 'string', '@pop'],
      ],

      string_single: [
        [/[^\\']+/, 'string'],
        [/@escapes/, 'string.escape'],
        [/\\./, 'invalid'],
        [/'/, 'string', '@pop'],
      ],

      comment: [
        [/[^%*]+/, 'comment'],
        [/\*%/, 'comment', '@pop'],
      ],

      whitespace: [
        [/[ \t\r\n]+/, ''],
        [/^#!.*/, 'comment.shebang'],
        [/%\*/, 'comment', '@comment'],
        [/%%.*/, 'comment'],
      ],
    },
  };

  monaco.languages.register({ id: 'quiken' });

  monaco.languages.setMonarchTokensProvider('quiken', quiken);

  monaco.languages.registerCompletionItemProvider('quiken', {
    provideCompletionItems: () => {
      const suggestions = [
        {
          label: 'true',
          kind: monaco.languages.CompletionItemKind.Keyword,
          insertText: 'true',
        },
        {
          label: 'false',
          kind: monaco.languages.CompletionItemKind.Keyword,
          insertText: 'false',
        },
        {
          label: 'or',
          kind: monaco.languages.CompletionItemKind.Keyword,
          insertText: 'or',
        },
        {
          label: 'and',
          kind: monaco.languages.CompletionItemKind.Keyword,
          insertText: 'and',
        },
        {
          label: 'superClass',
          kind: monaco.languages.CompletionItemKind.Keyword,
          insertText: 'superClass',
        },
        {
          label: 'this',
          kind: monaco.languages.CompletionItemKind.Keyword,
          insertText: 'this',
        },
        {
          label: 'NaV',
          kind: monaco.languages.CompletionItemKind.Keyword,
          insertText: 'NaV',
        },
        {
          label: 'var',
          kind: monaco.languages.CompletionItemKind.Keyword,
          insertText: 'var',
        },
        {
          label: 'final',
          kind: monaco.languages.CompletionItemKind.Keyword,
          insertText: 'final',
        },
        {
          label: 'printLine',
          kind: monaco.languages.CompletionItemKind.Keyword,
          insertText: 'printLine(${1:expression})',
          insertTextRules:
            monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
          documentation: 'Prints to console',
        },
        {
          label: 'ifel',
          kind: monaco.languages.CompletionItemKind.Snippet,
          insertText: `if (\${1:condition}) {
  \t\$2
  } el {
  \t\$3
  }`,
          insertTextRules:
            monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
          documentation: 'If-El Statement',
        },
        {
          label: 'class',
          kind: monaco.languages.CompletionItemKind.Snippet,
          insertText: `class \${1:Class} {
  \t\${2:construct}(\$3) {
  \t\t\$0
  \t}
  }`,
          insertTextRules:
            monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
          documentation: 'Class',
        },
        {
          label: 'function',
          kind: monaco.languages.CompletionItemKind.Snippet,
          insertText: `function \${1:functionName}(\$2) {
  \t\$0
  }`,
          insertTextRules:
            monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
          documentation: 'Function',
        },
        {
          label: 'for',
          kind: monaco.languages.CompletionItemKind.Snippet,
          insertText: `for (\${1:var i = 0}; \${2:i < 5}; \${3:i++}) {
  \t\$0
  }`,
          insertTextRules:
            monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
          documentation: 'For loop',
        },
        {
          label: 'forrep',
          kind: monaco.languages.CompletionItemKind.Snippet,
          insertText: `forrep (\$1) {
  \t\$0
  }`,
          insertTextRules:
            monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
          documentation: 'Forrep loop',
        },
        {
          label: 'cast',
          kind: monaco.languages.CompletionItemKind.Snippet,
          insertText: `@"\${1:type}":\$0`,
          insertTextRules:
            monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
          documentation: 'Type Cast',
        },
        {
          label: 'switch',
          kind: monaco.languages.CompletionItemKind.Snippet,
          insertText: `switch (\${1:value}) {
  \tcase (\${2:case}) {
  \t\t\$3
  \t}
  
  \tdefault {
  \t\t\$0
  \t}
  }`,
          insertTextRules:
            monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
          documentation: 'Switch statement',
        },
        {
          label: 'lambda',
          kind: monaco.languages.CompletionItemKind.Snippet,
          insertText: `lambda (\$1): \$0`,
          insertTextRules:
            monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
          documentation: 'Lambda Expression',
        },
        {
          label: 'dowhile',
          kind: monaco.languages.CompletionItemKind.Snippet,
          insertText: `do {
  \t\$0
  } while (\${1:expression});`,
          insertTextRules:
            monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
          documentation: 'Do While Loop',
        },
      ];
      return { suggestions };
    },
  });
}
