[
  // Modifiers
  {trigger: "rd", replacement: "^{$0}$1", options: "mA"},
  {trigger: "_", replacement: "_{$0}$1", options: "mA"},

  {trigger: "bar", replacement: "\\bar{$0}$1", options: "mA"},
  {trigger: "hat", replacement: "\\hat{$0}$1", options: "mA"},
  {trigger: "dot", replacement: "\\dot{$0}$1", options: "mA"},
  {trigger: "ddot", replacement: "\\ddot{$0}$1", options: "mA", priority: 2},
  {trigger: "vec", replacement: "\\vec{$0}$1", options: "mA"},
  {trigger: "und", replacement: "\\underline{$0}$1", options: "mA"},

  // Standard modifiers

  {trigger: "sr", replacement: "^{2}", options: "mA"},
  {trigger: "cb", replacement: "^{3}", options: "mA"},
  {trigger: "sts", replacement: "_\\text{$0}", options: "rmA"},
  {trigger: "conj", replacement: "^{*}", options: "mA"},
  {trigger: "ee", replacement: "e^{$0}$1", options: "mA"},
  {trigger: "invs", replacement: "^{-1}", options: "mA"},

  {trigger: "sq", replacement: "\\sqrt{$0}$1", options: "mA"},

  {trigger: "([a-zA-Z])bar", replacement: "\\bar{[[0]]}", options: "rmA"},
  {trigger: "([a-zA-Z])hat", replacement: "\\hat{[[0]]}", options: "rmA"},
  {trigger: "([a-zA-Z])ddot", replacement: "\\ddot{[[0]]}", options: "rmA", priority: 3},
  {trigger: "([a-zA-Z])dot", replacement: "\\dot{[[0]]}", options: "rmA", priority: 1},
  {trigger: "([a-zA-Z])vec", replacement: "\\vec{[[0]]}", options: "rmA"},
  {trigger: "([a-zA-Z])und", replacement: "\\underline{[[0]]}", options: "rmA"},

  // Auto digit subscripting
  {trigger: "([A-Za-z])(\\d)", replacement: "[[0]]_{[[1]]}", options: "rmA", description: "Auto letter subscript", priority: -1},
  {trigger: "\\hat{([A-Za-z])}(\\d)", replacement: "hat{[[0]]}_{[[1]]}", options: "rmA"},
  {trigger: "\\\\mathbf{([A-Za-z])}(\\d)", replacement: "\\mathbf{[[0]]}_{[[1]]}", options: "rmA"},
  {trigger: "\\\\vec{([A-Za-z])}(\\d)", replacement: "\\vec{[[0]]}_{[[1]]}", options: "rmA"},



  // Pre modified symbols

  // things with a subscript
  {trigger: "xnn", replacement: "x_{n}", options: "mA"},
  {trigger: "xii", replacement: "x_{i}", options: "mA"},
  {trigger: "xjj", replacement: "x_{j}", options: "mA"},
  {trigger: "xp1", replacement: "x_{n+1}", options: "mA"},
  {trigger: "ynn", replacement: "y_{n}", options: "mA"},
  {trigger: "yii", replacement: "y_{i}", options: "mA"},
  {trigger: "yjj", replacement: "y_{j}", options: "mA"},
  {trigger: "ann", replacement: "a_{n}", options: "mA"},

  {trigger: "fxx", replacement: "f(x)$0", options: "mA"},
  {trigger: "fnx", replacement: "f_{n}(x)$0", options: "mA"},

  // Unit vectors
  {trigger: ":i", replacement: "\\mathbf{i}", options: "mA"},
  {trigger: ":j", replacement: "\\mathbf{j}", options: "mA"},
  {trigger: ":k", replacement: "\\mathbf{k}", options: "mA"},
  {trigger: ":x", replacement: "\\hat{\\mathbf{x}}", options: "mA"},
  {trigger: ":y", replacement: "\\hat{\\mathbf{y}}", options: "mA"},
  {trigger: ":z", replacement: "\\hat{\\mathbf{z}}", options: "mA"},




  // {trigger: "([a-zA-Z]),\\.", replacement: "\\mathbf{[[0]]}", options: "rmA"},
  // {trigger: "([a-zA-Z])\\.,", replacement: "\\mathbf{[[0]]}", options: "rmA"},
  // {trigger: "([A-Za-z])(\\d\\d)", replacement: "[[0]]{[[1]]}", options: "rmA"},
]
