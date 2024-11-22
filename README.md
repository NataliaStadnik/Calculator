# Calculator

A simple calculator on JavaScript without libraries and frameworks.

There is an option to choose the colour scheme of the app.

## Task

[Innowise Lab Internship: Simple Calculator](https://docs.google.com/document/d/1zpXXeSae-BlcxPKgw3DhxZA92cspVailrPYoaXSYrW8/edit?tab=t.0#heading=h.5dt3hghpa22f)

## How to run the app

1. Install Dependencies: `npm install`;

2. Start:

   - Development mode: `npm run dev`;
   - Production mode: `npm run build`;
   - Check with ESlint: `npm run lint`;

## Folder Structure

```
├── src/                                      # Sources
│   ├── Calculator                            # folder for calculator
│   │   └── calculator.css                    # styles for calculator
│   │   ├── CalculatorsEval.js                # script with evaluation
│   │   ├── CalculatorView.js                 # script for work with DOM
│   │   ├── utilits.js                        # additional functions
│   ├── css                                   # folder with globals styles
│   │   └── normalize.css                     # file for CSS reset
│   │   └── style.css                         # global styles file
│   ├── Theme                                 # folder for Themes Manager
│   │   └── allThemes.js                      # style database
│   │   └── theme.css                         # slyles for Themes Manager
│   │   └── Theme.js                          # script for Themes Manager
│   ├── index.js                              # main script
│   ├── main.css                              # main style file
└── index.html                                # main html-file
└── .editorconfig
└── .gitignore
└── .prettierrc.js
└── .babel.config.js
└── eslint.config.mjs
└── package-lock.json
└── package.json
└── README.md
└── webpack.congig.js
```
