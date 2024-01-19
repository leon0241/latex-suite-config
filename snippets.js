[    
    // Math mode
    {trigger: "mk", replacement: "$$0$", options: "tA"},
    {trigger: "dm", replacement: "$$$0$$", options: "tAw"},
    {trigger: "beg", replacement: "\\begin{$0}\n$1\n\\end{$0}", options: "mA"},
    

    // Dashes
    // {trigger: "--", replacement: "–", options: "tA"},
    // {trigger: "–-", replacement: "—", options: "tA"},
    // {trigger: "—-", replacement: "---", options: "tA"},



    //MathBB
    {trigger: "|R", replacement: "\\mathbb{R}", options: "mA"},
    {trigger: "|N", replacement: "\\mathbb{N}", options: "mA"},
    {trigger: "|Z", replacement: "\\mathbb{Z}", options: "mA"},
    {trigger: "|Q", replacement: "\\mathbb{Q}", options: "mA"},
    {trigger: "|E", replacement: "\\mathbb{E}", options: "mA"},

    {trigger: "\\mathbb{R}2", replacement: "\\mathbb{R}^{2}", options: "mA"},
    {trigger: "\\mathbb{R}3", replacement: "\\mathbb{R}^{3}", options: "mA"},
    {trigger: "\\mathbb{R}n", replacement: "\\mathbb{R}^{n}", options: "mA"},
    {trigger: "\\mathbb{E}2", replacement: "\\mathbb{E}^{2}", options: "mA"},
    {trigger: "\\mathbb{E}3", replacement: "\\mathbb{E}^{3}", options: "mA"},
    {trigger: "\\mathbb{E}n", replacement: "\\mathbb{E}^{n}", options: "mA"},


    // Operations
    {trigger: "te", replacement: "\\text{$0}", options: "m"},
    {trigger: "text", replacement: "\\text{$0}", options: "mA"},
    {trigger: "bf", replacement: "\\mathbf{$0}", options: "mA"},
    {trigger: "sr", replacement: "^{2}", options: "mA"},
    {trigger: "cb", replacement: "^{3}", options: "mA"},
    {trigger: "rd", replacement: "^{$0}$1", options: "mA"},
    {trigger: "_", replacement: "_{$0}$1", options: "mA"},
    {trigger: "sts", replacement: "_\\text{$0}", options: "rmA"},
    {trigger: "sq", replacement: "\\sqrt{$0}$1", options: "mA"},
    {trigger: "//", replacement: "\\frac{$0}{$1}$2", options: "mA"},
    {trigger: "ee", replacement: "e^{ $0 }$1", options: "mA"},
    {trigger: "rm", replacement: "\\mathrm{$0}$1", options: "mA"},
    {trigger: "conj", replacement: "^{*}", options: "mA"},
    {trigger: "trace", replacement: "\\mathrm{Tr}", options: "mA"},
    {trigger: "det", replacement: "\\det", options: "mA"},
    {trigger: "re", replacement: "\\mathrm{Re}", options: "mA"},
    // {trigger: "im", replacement: "\\mathrm{Im}", options: "mA"},
    {trigger: "im", replacement: "\\Im{$0}$1", options: "mA"},
    {trigger: "ker", replacement: "\\ker{$0}$1", options: "mA"},
    {trigger: "mod", replacement: "\\mod{$0}$1", options: "mA"},
    {trigger: "aut", replacement: "\\aut{$0}$1", options: "mA"},
    {trigger: "dom", replacement: "\\dom{$0}$1", options: "mA"},
    {trigger: "cod", replacement: "\\text{cod}{$0}$1", options: "mA"},
    {trigger: "floor", replacement: "\\lfloor $0 \\rfloor $1", options: "mA"},
    {trigger: "ceil", replacement: "\\lceil $0 \\rceil $1", options: "mA"},

    
    {trigger: "([a-zA-Z]),\\.", replacement: "\\mathbf{[[0]]}", options: "rmA"},
    {trigger: "([a-zA-Z])\\.,", replacement: "\\mathbf{[[0]]}", options: "rmA"},
    {trigger: "([A-Za-z])(\\d)", replacement: "[[0]]_{[[1]]}", options: "rmA", description: "Auto letter subscript", priority: -1},
    {trigger: "([A-Za-z])(\\d\\d)", replacement: "[[0]]{[[1]]}", options: "rmA"},
    {trigger: "\\hat{([A-Za-z])}(\\d)", replacement: "hat{[[0]]}_{[[1]]}", options: "rmA"},
    {trigger: "\\\\mathbf{([A-Za-z])}(\\d)", replacement: "\\mathbf{[[0]]}_{[[1]]}", options: "rmA"},
    {trigger: "\\\\vec{([A-Za-z])}(\\d)", replacement: "\\vec{[[0]]}_{[[1]]}", options: "rmA"},
    {trigger: "([a-zA-Z])bar", replacement: "\\bar{[[0]]}", options: "rmA"},
    {trigger: "([a-zA-Z])hat", replacement: "\\hat{[[0]]}", options: "rmA"},
    {trigger: "([a-zA-Z])ddot", replacement: "\\ddot{[[0]]}", options: "rmA", priority: 3},
    {trigger: "([a-zA-Z])dot", replacement: "\\dot{[[0]]}", options: "rmA", priority: 1},
    {trigger: "([a-zA-Z])vec", replacement: "\\vec{[[0]]}", options: "rmA"},
    {trigger: "([a-zA-Z])und", replacement: "\\underline{[[0]]}", options: "rmA"},
    {trigger: "bar", replacement: "\\bar{$0}$1", options: "mA"},
    {trigger: "hat", replacement: "\\hat{$0}$1", options: "mA"},
    {trigger: "dot", replacement: "\\dot{$0}$1", options: "mA"},
    {trigger: "ddot", replacement: "\\ddot{$0}$1", options: "mA", priority: 2},
    {trigger: "vec", replacement: "\\vec{$0}$1", options: "mA"},
    {trigger: "und", replacement: "\\underline{$0}$1", options: "mA"},

    {trigger: "([^\\\\])(arcsin|arccos|arctan|arccot|arccsc|arcsec|sin|cos|tan|cot|csc)", replacement: "[[0]]\\[[1]]", options: "rmA"},
    {trigger: "\\\\(arcsin|arccos|arctan|arccot|arccsc|arcsec|sin|cos|tan|cot|csc)([A-Za-gi-z])", replacement: "\\[[0]] [[1]]", options: "rmA"}, // Insert space after trig funcs. Skips letter "h" to allow sinh, cosh, etc.
    {trigger: "\\\\(arcsinh|arccosh|arctanh|arccoth|arcsch|arcsech|sinh|cosh|tanh|coth|csch)([A-Za-z])", replacement: "\\[[0]] [[1]]", options: "rmA"}, // Insert space after trig funcs
    {trigger: "\\\\(neq|geq|leq|gg|ll|sim)([0-9]+)", replacement: "\\[[0]] [[1]]", options: "rmA"}, // Insert space after inequality symbols


    // Visual operations
    {trigger: "O", replacement: "\\overbrace{${VISUAL}}_{$0}", options: "mA"},
    {trigger: "U", replacement: "\\underbrace{${VISUAL}}_{$0}", options: "mA"},
    {trigger: "B", replacement: "\\underset{ $0 }{ ${VISUAL} }", options: "mA"},
    {trigger: "C", replacement: "\\cancel{ ${VISUAL} }", options: "mA"},
    {trigger: "K", replacement: "\\cancelto{ $0 }{ ${VISUAL} }", options: "mA"},
    {trigger: "S", replacement: "\\sqrt{ ${VISUAL} }", options: "mA"},



    // Symbols
    {trigger: "ooo", replacement: "\\infty", options: "mA"},
    // {trigger: "sum", replacement: "\\sum", options: "mA"},
    {trigger: "prod", replacement: "\\prod", options: "mA"},
    {trigger: "lim", replacement: "\\lim_{${0:n} \\to ${1:\\infty}} $2", options: "mA"},
    {trigger: "slim", replacement: "\\limsup_{${0:n} \\to ${1:\\infty}} $2", options: "mA"},
    {trigger: "ilim", replacement: "\\liminf_{${0:n} \\to ${1:\\infty}} $2", options: "mA"},
    {trigger: "pm", replacement: "\\pm", options: "m"},
    {trigger: "mp", replacement: "\\mp", options: "m"},
    {trigger: "...", replacement: "\\dots", options: "mA"},
    {trigger: "c..", replacement: "\\cdots", options: "mA"},
    {trigger: "v..", replacement: "\\vdots", options: "mA"},
    {trigger: "<->", replacement: "\\leftrightarrow ", options: "mA"},
    {trigger: "->", replacement: "\\to", options: "mA"},
    {trigger: "!>", replacement: "\\mapsto", options: "mA"},
    {trigger: "invs", replacement: "^{-1}", options: "mA"},
    {trigger: "\\\\\\", replacement: "\\setminus", options: "mA"},
    {trigger: "||", replacement: "\\,|\\,", options: "mA"},
    {trigger: "cap", replacement: "\\cap", options: "mA"},
    {trigger: "CAP", replacement: "\\bigcap\\limits_\{${0:n\\in\\mathbb{N}}\}^\{${1:\\infty}\} $2", options: "mA"},
    {trigger: "cup", replacement: "\\cup", options: "mA"},
    {trigger: "CUP", replacement: "\\bigcup\\limits_\{${0:n\\in\\mathbb{N}}\}^\{${1:\\infty\} $2", options: "mA"},
    {trigger: "VV", replacement: "\\vee", options: "mA"},
    {trigger: "NN", replacement: "\\wedge", options: "mA"},
    {trigger: "inn", replacement: "\\in", options: "mA"},
    {trigger: "sset", replacement: "\\subset", options: "mA"},
    {trigger: "spet", replacement: "\\supset", options: "mA"},
    {trigger: "eqsset", replacement: "\\subseteq", options: "mA"},
    {trigger: "set", replacement: "\\{$0\\}$1", options: "mA"},
    {trigger: "=>", replacement: "\\implies", options: "mA"},
    {trigger: "=<", replacement: "\\impliedby", options: "mA"},
    {trigger: "iff", replacement: "\\iff", options: "mA"},
    {trigger: "Exts", replacement: "\\exists", options: "mA", priority: 1},
    {trigger: "nExts", replacement: "\\nexists", options: "mA", priority: 1},
    {trigger: "fAll", replacement: "\\forall", options: "mA", priority: 1},
    {trigger: "===", replacement: "\\equiv", options: "mA"},
    {trigger: "Sq", replacement: "\\square", options: "mA"},
    {trigger: "!=", replacement: "\\neq", options: "mA"},
    {trigger: ">=", replacement: "\\geq", options: "mA"},
    {trigger: "<=", replacement: "\\leq", options: "mA"},
    {trigger: ">>", replacement: "\\gg", options: "mA"},
    {trigger: "<<", replacement: "\\ll", options: "mA"},
    {trigger: "~~", replacement: "\\sim", options: "mA"},
    {trigger: "\\sim ~", replacement: "\\approx", options: "mA"},
    {trigger: "prop", replacement: "\\propto", options: "mA"},
    {trigger: "nabl", replacement: "\\nabla", options: "mA"},
    {trigger: "del", replacement: "\\nabla", options: "mA"},
    {trigger: "xx", replacement: "\\times", options: "mA"},
    {trigger: "**", replacement: "\\cdot", options: "mA"},
    {trigger: "para", replacement: "\\parallel", options: "mA"},


    {trigger: "xnn", replacement: "x_{n}", options: "mA"},
    {trigger: "xii", replacement: "x_{i}", options: "mA"},
    {trigger: "xjj", replacement: "x_{j}", options: "mA"},
    {trigger: "xp1", replacement: "x_{n+1}", options: "mA"},
    {trigger: "ynn", replacement: "y_{n}", options: "mA"},
    {trigger: "yii", replacement: "y_{i}", options: "mA"},
    {trigger: "yjj", replacement: "y_{j}", options: "mA"},
    {trigger: "ann", replacement: "a_{n}", options: "mA"},


    {trigger: "mcal", replacement: "\\mathcal{$0}$1", options: "mA"},
    {trigger: "mbb", replacement: "\\mathbb{$0}$1", options: "mA"},
    {trigger: "ell", replacement: "\\ell", options: "mA"},
    {trigger: "lll", replacement: "\\ell", options: "mA"},
    {trigger: "LL", replacement: "\\mathcal{L}", options: "mA"},
    {trigger: "HH", replacement: "\\mathcal{H}", options: "mA"},
    {trigger: "\\C", replacement: "\\mathbb{C}", options: "mA"},
    {trigger: "\\R", replacement: "\\mathbb{R}", options: "mA"},
    {trigger: "\\Z", replacement: "\\mathbb{Z}", options: "mA"},
    {trigger: "\\N", replacement: "\\mathbb{N}", options: "mA"},
    {trigger: "\\I", replacement: "\\mathbb{1}", options: "mA"},
    {trigger: "\\mathbb{1}I", replacement: "\\hat{\\mathbb{1}}", options: "mA"},
    {trigger: "AA", replacement: "\\mathcal{A}", options: "mA"},
    {trigger: "CC", replacement: "\\mathcal{C}", options: "mA"},
    {trigger: "DD", replacement: "\\mathcal{D}", options: "mA"},
    {trigger: "BB", replacement: "\\mathbf{B}", options: "mA"},
    {trigger: "EE", replacement: "\\mathbf{E}", options: "mA"},



    // Unit vectors
    {trigger: ":i", replacement: "\\mathbf{i}", options: "mA"},
    {trigger: ":j", replacement: "\\mathbf{j}", options: "mA"},
    {trigger: ":k", replacement: "\\mathbf{k}", options: "mA"},
    {trigger: ":x", replacement: "\\hat{\\mathbf{x}}", options: "mA"},
    {trigger: ":y", replacement: "\\hat{\\mathbf{y}}", options: "mA"},
    {trigger: ":z", replacement: "\\hat{\\mathbf{z}}", options: "mA"},



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
    {trigger: "intzi", replacement: "\\int_{0}^{\\infty} $0 \\, d${1:x} $2", options: "mA"},
    {trigger: "intii", replacement: "\\int_{-\\infty}^{\\infty} $0 \\, d${1:x} $2", options: "mA"},
    {trigger: "cint", replacement: "\\int_{${0:0}}^{${1:\\infty}} $2 \\, d${3:x} $4", options: "mA"},
    {trigger: "bint", replacement: "\\int $0", options: "mA"},
    {trigger: "lint", replacement: "\\int_{${0:I}} $1", options: "mA"},
    {trigger: "oint", replacement: "\\oint", options: "mA"},
    {trigger: "iiint", replacement: "\\iiint", options: "mA"},
    {trigger: "iint", replacement: "\\iint", options: "mA"},
    {trigger: "int", replacement: "\\int $0 \\, d${1:x} $2", options: "mA"},

    // Sums
    {trigger: "sumzi", replacement: "\\sum_{n=0}^{\\infty} $0", options: "mA"},
    {trigger: "sumoi", replacement: "\\sum_{n=1}^{\\infty} $0", options: "mA"},
    {trigger: "csum", replacement: "\\sum_{${0:n}=${1:0}}^{${2:\\infty}} $3", options: "mA"},
    {trigger: "consum", replacement: "\\sum_{k=1}^{\\infty} a_{k} $0", options: "mA"},
    {trigger: "rconsum", replacement: "\\sum_{k=1}^{\\infty} a_{z(k)} $0", options: "mA"},

    {trigger: "opn", replacement: "${0:f}:${1:G}\\to ${2:H}", options: "mA"},

    // Physics
    {trigger: "kbt", replacement: "k_{B}T", options: "mA"},


    // Quantum mechanics
    {trigger: "hba", replacement: "\\hbar", options: "mA"},
    {trigger: "dag", replacement: "^{\\dagger}", options: "mA"},
    {trigger: "o+", replacement: "\\oplus ", options: "mA"},
    {trigger: "ox", replacement: "\\otimes ", options: "mA"},
    {trigger: "ot\\mathrm{Im}es", replacement: "\\otimes ", options: "mA"}, // Handle conflict with "im" snippet
    {trigger: "bra", replacement: "\\bra{$0} $1", options: "mA"},
    {trigger: "ket", replacement: "\\ket{$0} $1", options: "mA"},
    {trigger: "brk", replacement: "\\braket{ $0 | $1 } $2", options: "mA"},
    {trigger: "\\\\bra{([^|]+)\\|", replacement: "\\braket{ [[0]] | $0 ", options: "rmA", description: "Convert bra into braket"},
    {trigger: "\\\\bra{(.+)}([^ ]+)>", replacement: "\\braket{ [[0]] | $0 ", options: "rmA", description: "Convert bra into braket (alternate)"},
    {trigger: "outp", replacement: "\\ket{${0:\\psi}} \\bra{${0:\\psi}} $1", options: "mA"},



    // Chemistry
    {trigger: "pu", replacement: "\\pu{ $0 }", options: "mA"},
    {trigger: "msun", replacement: "M_{\\odot}", options: "mA"},
    {trigger: "solm", replacement: "M_{\\odot}", options: "mA"},
    {trigger: "ce", replacement: "\\ce{ $0 }", options: "mA"},
    {trigger: "iso", replacement: "{}^{${0:4}}_{${1:2}}${2:He}", options: "mA"},
    {trigger: "hel4", replacement: "{}^{4}_{2}He ", options: "mA"},
    {trigger: "hel3", replacement: "{}^{3}_{2}He ", options: "mA"},

    // Space
    {trigger: "ws", replacement: "\\hspace{20pt}", options: "mA"},
    {trigger: "wws", replacement: "\\hspace{40pt}", options: "mA"},
    {trigger: "wwws", replacement: "\\hspace{60pt}", options: "mA"},
    {trigger: "ews", replacement: "\\enspace", options: "mA"},
    {trigger: "quad", replacement: "\\quad", options: "mA"},
    {trigger: "qquad", replacement: "\\qquad", options: "mA"},

    // Environments
    {trigger: "pmat", replacement: "\\begin{pmatrix}\n$0\n\\end{pmatrix}", options: "mA"},
    {trigger: "bmat", replacement: "\\begin{bmatrix}\n$0\n\\end{bmatrix}", options: "mA"},
    {trigger: "Bmat", replacement: "\\begin{Bmatrix}\n$0\n\\end{Bmatrix}", options: "mA"},
    {trigger: "vmat", replacement: "\\begin{vmatrix}\n$0\n\\end{vmatrix}", options: "mA"},
    {trigger: "Vmat", replacement: "\\begin{Vmatrix}\n$0\n\\end{Vmatrix}", options: "mA"},
    {trigger: "case", replacement: "\\begin{cases}\n$0\n\\end{cases}\n> ", options: "mA"},
    {trigger: "Ccase", replacement: "\\begin{cases}$0\\end{cases}", options: "mA"},
    {trigger: "align", replacement: "\\begin{align}\n$0\n\\end{align}\n> ", options: "mA"},
    {trigger: "array", replacement: "\\begin{array}\n$0\n\\end{array}", options: "mA"},
    {trigger: "matrix", replacement: "\\begin{matrix}\n$0\n\\end{matrix}", options: "mA"},
    {trigger: "vtor", replacement: "\\left(\\begin{array}\\\\\n$0\n\\end{array}\\right)", options: "mA"},



    // Brackets
    {trigger: "avg", replacement: "\\langle $0 \\rangle $1", options: "mA"},
    {trigger: "norm", replacement: "\\lvert $0 \\rvert $1", options: "mA", priority: 1},
    // {trigger: "mod", replacement: "|$0|$1", options: "mA"},
    {trigger: "(", replacement: "(${VISUAL})", options: "mA"},
    {trigger: "[", replacement: "[${VISUAL}]", options: "mA"},
    {trigger: "{", replacement: "{${VISUAL}}", options: "mA"},
    {trigger: "(", replacement: "($0)$1", options: "mAw"},
    {trigger: "{", replacement: "{$0}$1", options: "mAw"},
    {trigger: "[", replacement: "[$0]$1", options: "mAw"},
    {trigger: "lr(", replacement: "\\left( $0 \\right) $1", options: "mA"},
    {trigger: "lr|", replacement: "\\left| $0 \\right| $1", options: "mA"},
    {trigger: "lr{", replacement: "\\left\\{ $0 \\right\\} $1", options: "mA"},
    {trigger: "lr[", replacement: "\\left[ $0 \\right] $1", options: "mA"},
    {trigger: "lra", replacement: "\\left< $0 \\right> $1", options: "mA"},


    // Phrases
    {trigger: "bmod", replacement: "\\bmod{$0} $1", options: "mA"},
    {trigger: "pmod", replacement: "\\pmod{$0} $1", options: "mA"},
    {trigger: "ddom", replacement: "\\dom{$0} $1", options: "mA"},
    {trigger: "nseq", replacement: "(x_{n}) $0", options: "mA"},
    {trigger: "cseq", replacement: "(${0:x}_{n}) $1", options: "mA"},
    {trigger: "fseq", replacement: "(f_{n})_{n\\in\\mathbb{N}} $0", options: "mA"},
    {trigger: "fxx", replacement: "f(x)$0", options: "mA"},
    {trigger: "fnx", replacement: "f_{n}(x)$0", options: "mA"},
    
    // Misc
    {trigger: "tayl", replacement: "${0:f}(${1:x} + ${2:h}) = ${0:f}(${1:x}) + ${0:f}'(${1:x})${2:h} + ${0:f}''(${1:x}) \\frac{${2:h}^{2}}{2!} + \\dots$3", options: "mA"},
    {trigger: ",,", replacement: ",\\,$0", options: "mA"},
    {trigger: "dss", replacement: "\\displaystyle$0", options: "mA"},
    {trigger: "tcol", replacement: "\\textcolor{$0}{$1}", options: "mA"},

    {trigger: "\\mathrm{Re}d", replacement: "red", options: "mA"},
]