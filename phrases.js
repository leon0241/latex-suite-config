[
  {trigger: "trace", replacement: "\\mathrm{Tr}", options: "mA"},
  {trigger: "det", replacement: "\\det", options: "mA"},
  // {trigger: "im", replacement: "\\mathrm{Im}", options: "mA"},
  {trigger: "im", replacement: "\\Im{$0}$1", options: "mA"},
  {trigger: "ker", replacement: "\\ker{$0}$1", options: "mA"},
  {trigger: "mod", replacement: "\\mod{$0}$1", options: "mA"},
  {trigger: "aut", replacement: "\\aut{$0}$1", options: "mA"},
  {trigger: "dom", replacement: "\\dom{$0}$1", options: "mA"},
  {trigger: "cod", replacement: "\\text{cod}{$0}$1", options: "mA"},

  {trigger: "bmod", replacement: "\\bmod{$0} $1", options: "mA"},
  {trigger: "pmod", replacement: "\\pmod{$0} $1", options: "mA"},

  // Trig 
  {trigger: "([^\\\\])(arcsin|arccos|arctan|arccot|arccsc|arcsec|sin|cos|tan|cot|csc)", replacement: "[[0]]\\[[1]]", options: "rmA"},
  {trigger: "\\\\(arcsin|arccos|arctan|arccot|arccsc|arcsec|sin|cos|tan|cot|csc)([A-Za-gi-z])", replacement: "\\[[0]] [[1]]", options: "rmA"}, // Insert space after trig funcs. Skips letter "h" to allow sinh, cosh, etc.
  {trigger: "\\\\(arcsinh|arccosh|arctanh|arccoth|arcsch|arcsech|sinh|cosh|tanh|coth|csch)([A-Za-z])", replacement: "\\[[0]] [[1]]", options: "rmA"}, // Insert space after trig funcs



]
