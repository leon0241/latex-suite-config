[
  // Text
  {trigger: "te", replacement: "\\text{$0}", options: "m"},
  {trigger: "text", replacement: "\\text{$0}", options: "mA"},

  // Spacing
  {trigger: "ws", replacement: "\\hspace{20pt}", options: "mA"},
  {trigger: "wws", replacement: "\\hspace{40pt}", options: "mA"},
  {trigger: "wwws", replacement: "\\hspace{60pt}", options: "mA"},
  {trigger: "ews", replacement: "\\enspace", options: "mA"},
  {trigger: "quad", replacement: "\\quad", options: "mA"},
  {trigger: "qquad", replacement: "\\qquad", options: "mA"},
  {trigger: ",,", replacement: ",\\,$0", options: "mA"},

  // Displaystyle
  {trigger: "dss", replacement: "\\displaystyle$0", options: "mA"},

  // Colouring
  {trigger: "tcol", replacement: "\\textcolor{$0}{$1}", options: "mA"},

  // Avoiding formatting
  {trigger: "\\mathrm{Re}d", replacement: "red", options: "mA"},
  {trigger: "g\\mathrm{Re}en", replacement: "green", options: "mA"},
]
