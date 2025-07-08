import type React from "react"

interface HighlightedWord {
  word: string
  color: string
}

interface HeadlineProps {
  lines: Array<{
    text: string
    highlightedWords?: HighlightedWord[]
  }>
  className?: string
}

const Headline: React.FC<HeadlineProps> = ({ lines, className = "" }) => {
  const highlightWords = (text: string, highlightedWords?: HighlightedWord[]) => {
    if (!highlightedWords || highlightedWords.length === 0) {
      return text
    }

    let processedText = text
    const replacements: Array<{ original: string; replacement: string }> = []

    highlightedWords.forEach((item, index) => {
      const placeholder = `__HIGHLIGHT_${index}__`
      const replacement = `<span class="${item.color}">${item.word}</span>`

      processedText = processedText.replace(new RegExp(item.word, "gi"), placeholder)
      replacements.push({ original: placeholder, replacement })
    })

    replacements.forEach(({ original, replacement }) => {
      processedText = processedText.replace(new RegExp(original, "g"), replacement)
    })

    return processedText
  }

  return (
    <h1 className={`text-white heading-2  ${className}`}>
      {lines.map((line, index) => (
        <div key={index} className="block">
          <span
            dangerouslySetInnerHTML={{
              __html: highlightWords(line.text, line.highlightedWords),
            }}
          />
        </div>
      ))}
    </h1>
  )
}

export default Headline
