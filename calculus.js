[
  // Limits
  // lim, customisable lim, supremum lim, infimum lim
  {trigger: "lim", replacement: "\\lim_{0\\to\\infty} $0", options: "mA"},
  {trigger: "clim", replacement: "\\lim_{${0:n} \\to ${1:\\infty}} $2", options: "mA"},
  {trigger: "slim", replacement: "\\limsup_{${0:n} \\to ${1:\\infty}} $2", options: "mA"},
  {trigger: "ilim", replacement: "\\liminf_{${0:n} \\to ${1:\\infty}} $2", options: "mA"},



  // Derivatives
  {trigger: "par", replacement: "\\frac{ \\partial ${0:y} }{ \\partial ${1:x} } $2", options: "m"},
  {trigger: "pa2", replacement: "\\frac{ \\partial^{2} ${0:y} }{ \\partial ${1:x}^{2} } $2", options: "mA"},
  {trigger: "pa3", replacement: "\\frac{ \\partial^{3} ${0:y} }{ \\partial ${1:x}^{3} } $2", options: "mA"},
  {trigger: "pa([A-Za-z])([A-Za-z])", replacement: "\\frac{ \\partial [[0]] }{ \\partial [[1]] } ", options: "rm"},
  {trigger: "pa([A-Za-z])([A-Za-z])([A-Za-z])", replacement: "\\frac{ \\partial^{2} [[0]] }{ \\partial [[1]] \\partial [[2]] } ", options: "rm"},
  {trigger: "pa([A-Za-z])([A-Za-z])2", replacement: "\\frac{ \\partial^{2} [[0]] }{ \\partial [[1]]^{2} } ", options: "rmA"},
  {trigger: "de([A-Za-z])([A-Za-z])", replacement: "\\frac{ d[[0]] }{ d[[1]] } ", options: "rm"},
  {trigger: "de([A-Za-z])([A-Za-z])2", replacement: "\\frac{ d^{2}[[0]] }{ d[[1]]^{2} } ", options: "rmA"},
  {trigger: "ddt", replacement: "\\frac{d}{dt} ", options: "mA"},



  // Integrals
  // dx int, int zero inf, int inf inf, customisable int, bare int(no dx), something int lol, O int (circle int)
  // iint (double), iiint (triple)
  
  {trigger: "dint", replacement: "\\int $1 \\,d${0:x} $2", options: "mA"},
  {trigger: "intzi", replacement: "\\int_{0}^{\\infty} $0 \\, d${1:x} $2", options: "mA"},
  {trigger: "intii", replacement: "\\int_{-\\infty}^{\\infty} $0 \\, d${1:x} $2", options: "mA"},
  {trigger: "cint", replacement: "\\int_{${0:0}}^{${1:\\infty}} $2 \\, d${3:x} $4", options: "mA"},
  {trigger: "bint", replacement: "\\int $0", options: "mA"},
  {trigger: "lint", replacement: "\\int_{${0:I}} $1", options: "mA"},
  {trigger: "oint", replacement: "\\oint", options: "mA"},
  {trigger: "iint", replacement: "\\iint", options: "mA"},
  {trigger: "iiint", replacement: "\\iiint", options: "mA"},

  // Sums
  {trigger: "sumzi", replacement: "\\sum_{n=0}^{\\infty} $0", options: "mA"},
  {trigger: "sumoi", replacement: "\\sum_{n=1}^{\\infty} $0", options: "mA"},
  {trigger: "csum", replacement: "\\sum_{${0:n}=${1:0}}^{${2:\\infty}} $3", options: "mA"},
  {trigger: "consum", replacement: "\\sum_{k=1}^{\\infty} a_{k} $0", options: "mA"},
  {trigger: "rconsum", replacement: "\\sum_{k=1}^{\\infty} a_{z(k)} $0", options: "mA"},

  // Sequences
  // Sequence of n, sequence of choice, function sequence
  {trigger: "nseq", replacement: "(x_{n}) $0", options: "mA"},
  {trigger: "cseq", replacement: "(${0:x}_{n}) $1", options: "mA"},
  {trigger: "fseq", replacement: "(f_{n})_{n\\in\\mathbb{N}} $0", options: "mA"},
]
