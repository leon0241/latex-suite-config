[
  // floor and ceil
  {trigger: "floor", replacement: "\\lfloor $0 \\rfloor $1", options: "mA"},
  {trigger: "ceil", replacement: "\\lceil $0 \\rceil $1", options: "mA"},
  
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

  // Visual operations
  {trigger: "O", replacement: "\\overbrace{${VISUAL}}_{$0}", options: "mA"},
  {trigger: "U", replacement: "\\underbrace{${VISUAL}}_{$0}", options: "mA"},
  {trigger: "B", replacement: "\\underset{ $0 }{ ${VISUAL} }", options: "mA"},
  {trigger: "C", replacement: "\\cancel{ ${VISUAL} }", options: "mA"},
  {trigger: "K", replacement: "\\cancelto{ $0 }{ ${VISUAL} }", options: "mA"},
  {trigger: "S", replacement: "\\sqrt{ ${VISUAL} }", options: "mA"},
]
