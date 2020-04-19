const Prism = require('prismjs')
const loadLanguages = require('prismjs/components/')

const [code, language, showLineNumbers] = process.argv.slice(2)
const NEW_LINE_EXP = /\n(?!$)/g
let lineNumbersHTML = ''
let outputHTML = ''

loadLanguages([language])

if (showLineNumbers === 'true') {
  Prism.hooks.add('after-tokenize', function (env) {
    let match = env.code.match(NEW_LINE_EXP)
    let linesCount = match ? match.length + 1 : 1

    lineNumbersHTML += '<div class="line-numbers">'

    for (let lineNumber = 1; lineNumber <= linesCount; lineNumber++) {
      lineNumbersHTML += `<div class="line-number">${lineNumber}</div>`
    }

    lineNumbersHTML += '</div>'
  })
}

const codeHTML = Prism.highlight(code, Prism.languages[language], language)

outputHTML += '<div class="code-snippet">'
outputHTML +=   lineNumbersHTML
outputHTML +=   `<pre class="language-${language}">`
outputHTML +=     `<code class="language-${language}">${codeHTML}</code>`
outputHTML +=   '</pre>'
outputHTML += '</div>'

console.log(outputHTML)
