[    
  // Math mode
  {trigger: "mk", replacement: "$$0$", options: "tA"},
  {trigger: "dm", replacement: "$$$0$$", options: "tAw"},

  // The classic
  {trigger: "//", replacement: "\\frac{$0}{$1}$2", options: "mA"},

  {trigger: "\\\\(neq|geq|leq|gg|ll|sim)([0-9]+)", replacement: "\\[[0]] [[1]]", options: "rmA"}, // Insert space after inequality symbols

  // Symbols
  // "Equal like"
  {trigger: "!=", replacement: "\\ne", options: "mA"},
  {trigger: ">=", replacement: "\\ge", options: "mA"},
  {trigger: "<=", replacement: "\\le", options: "mA"},
  {trigger: "===", replacement: "\\equiv", options: "mA"},
  {trigger: ">>", replacement: "\\gg", options: "mA"},
  {trigger: "<<", replacement: "\\ll", options: "mA"},
  {trigger: "~~", replacement: "\\sim", options: "mA"},
  {trigger: "\\sim~", replacement: "\\approx", options: "mA"},
  {trigger: "prop", replacement: "\\propto", options: "mA"},


  // Arrows
  {trigger: "<->", replacement: "\\leftrightarrow ", options: "mA"},
  {trigger: "->", replacement: "\\to", options: "mA"},
  {trigger: "!>", replacement: "\\mapsto", options: "mA"},
  {trigger: "=>", replacement: "\\implies", options: "mA"},
  {trigger: "=<", replacement: "\\impliedby", options: "mA"},
  {trigger: "iff", replacement: "\\iff", options: "mA"},

  // Set Theory
  {trigger: "set", replacement: "\\{$0\\}$1", options: "mA"},
  {trigger: "Exts", replacement: "\\exists", options: "mA", priority: 1},
  {trigger: "nExts", replacement: "\\nexists", options: "mA", priority: 1},
  {trigger: "fAll", replacement: "\\forall", options: "mA", priority: 1},
  {trigger: "sset", replacement: "\\subset", options: "mA"},
  {trigger: "spet", replacement: "\\supset", options: "mA"},
  {trigger: "inn", replacement: "\\in", options: "mA"},
  {trigger: "eqsset", replacement: "\\subseteq", options: "mA"},

  // Separators
  {trigger: "para", replacement: "\\parallel", options: "mA"},
  {trigger: "|\\", replacement: "\\setminus", options: "mA"},
  {trigger: "||", replacement: "\\mid", options: "mA"},


  // uhh logic and cap cup things
  {trigger: "cap", replacement: "\\cap", options: "mA"},
  {trigger: "CAP", replacement: "\\bigcap\\limits_\{${0:n\\in\\mathbb{N}}\}^\{${1:\\infty}\} $2", options: "mA"},
  {trigger: "cup", replacement: "\\cup", options: "mA"},
  {trigger: "CUP", replacement: "\\bigcup\\limits_\{${0:n\\in\\mathbb{N}}\}^\{${1:\\infty\} $2", options: "mA"},
  {trigger: "VV", replacement: "\\vee", options: "mA"},
  {trigger: "NN", replacement: "\\wedge", options: "mA"},

  // Dots
  {trigger: "...", replacement: "\\dots", options: "mA"},
  {trigger: "c..", replacement: "\\cdots", options: "mA"},
  {trigger: "v..", replacement: "\\vdots", options: "mA"},

  // Random symbols
  {trigger: "prod", replacement: "\\prod", options: "mA"},
  {trigger: "pm", replacement: "\\pm", options: "m"},
  {trigger: "mp", replacement: "\\mp", options: "m"},
  {trigger: "Sq", replacement: "\\square", options: "mA"},
  {trigger: "nabl", replacement: "\\nabla", options: "mA"},
  {trigger: "del", replacement: "\\nabla", options: "mA"},
  {trigger: "xx", replacement: "\\times", options: "mA"},
  {trigger: "**", replacement: "\\cdot", options: "mA"},

  // Misc
  {trigger: "opn", replacement: "${0:f}:${1:G}\\to ${2:H}", options: "mA"},
  {trigger: "tayl", replacement: "${0:f}(${1:x} + ${2:h}) = ${0:f}(${1:x}) + ${0:f}'(${1:x})${2:h} + ${0:f}''(${1:x}) \\frac{${2:h}^{2}}{2!} + \\dots$3", options: "mA"},
]
