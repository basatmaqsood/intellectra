import React, { useEffect, useRef } from "react"
import { gsap } from "gsap"

interface HighlightedWord {
  word: string
  color: string
}

interface HeadlineProps {
  lines: Array<{
    text: string
    highlightedWords: HighlightedWord[]
    placeholder?: string
  }>
  className?: string
  interval?: number
  animationDuration?: number
}

const Headline: React.FC<HeadlineProps> = ({ 
  lines, 
  className = "", 
  interval = 3000, 
  animationDuration = 0.5 
}) => {
  const containerRefs = useRef<(HTMLDivElement | null)[]>([])
  
  useEffect(() => {
    lines.forEach((line, lineIndex) => {
      const container = containerRefs.current[lineIndex]
      if (!container || !line.highlightedWords || line.highlightedWords.length <= 1) return

      const words = container.children
      let currentIndex = 0

      // Set initial states
      gsap.set(Array.from(words).slice(1), { 
        opacity: 0,
        y: -20,
        position: 'absolute',
        top: 0,
        left: 0
      })

      // Create animation timeline
      const timeline = gsap.timeline({ repeat: -1 })
      
      const animate = () => {
        const currentWord = words[currentIndex]
        const nextIndex = (currentIndex + 1) % words.length
        const nextWord = words[nextIndex]

        timeline
          .to(currentWord, {
            opacity: 0,
            y: 20,
            duration: animationDuration,
          })
          .to(nextWord, {
            opacity: 1,
            y: 0,
            duration: animationDuration,
          }, `-=${animationDuration}`)
          .to({}, { duration: interval / 1000 }) // Pause before next animation
      }

      // Create animations for each word
      for (let i = 0; i < words.length; i++) {
        animate()
        currentIndex = (currentIndex + 1) % words.length
      }
    })

    return () => {
      // Cleanup animations
      containerRefs.current.forEach(ref => {
        if (ref) {
          gsap.killTweensOf(Array.from(ref.children))
        }
      })
    }
  }, [lines, interval, animationDuration])

  return (
    <h1 className={`text-white heading-2 max-w-[90%] mx-auto ${className}`}>
      {lines.map((line, lineIndex) => (
        <div key={lineIndex} className="block relative">
          {line.text.split('WORD_PLACEHOLDER').map((textPart, partIndex) => (
            <React.Fragment key={partIndex}>
              {textPart}
              {partIndex < line.text.split('WORD_PLACEHOLDER').length - 1 && (
                <div
                  ref={el => containerRefs.current[lineIndex] = el}
                  className="inline-block relative justify-center"
                  style={{ minHeight: '1.2em', minWidth: '120px' }}
                >
                  {line.highlightedWords.map((word, wordIndex) => (
                    <span
                      key={wordIndex}
                      className={`${word.color} whitespace-nowrap`}
                    >
                      {word.word}
                    </span>
                  ))}
                </div>
              )}
            </React.Fragment>
          ))}
        </div>
      ))}
    </h1>
  )
}

export default Headline