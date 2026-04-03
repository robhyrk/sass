"use client"

interface FloatingElementsProps {
  variant?: 'hero' | 'about' | 'cta'
}

export function FloatingElements({ variant = 'hero' }: FloatingElementsProps) {
  const elements = {
    hero: [
      { type: 'heart', color: '#F9A8D4', size: 24, top: '15%', left: '8%', delay: '0s' },
      { type: 'sparkle', color: '#FFFFFF', size: 20, top: '25%', right: '12%', delay: '0.5s' },
      { type: 'heart', color: '#A7F3D0', size: 18, bottom: '30%', left: '15%', delay: '1s' },
      { type: 'sparkle', color: '#FDE68A', size: 16, top: '40%', right: '8%', delay: '1.5s' },
      { type: 'flower', color: '#F9A8D4', size: 28, bottom: '20%', right: '15%', delay: '2s' },
      { type: 'heart', color: '#C4B5FD', size: 20, top: '60%', left: '5%', delay: '0.3s' },
    ],
    about: [
      { type: 'heart', color: '#F9A8D4', size: 22, top: '20%', right: '10%', delay: '0s' },
      { type: 'sparkle', color: '#FFFFFF', size: 18, bottom: '25%', left: '8%', delay: '0.8s' },
      { type: 'flower', color: '#FDE68A', size: 24, top: '50%', left: '5%', delay: '1.2s' },
    ],
    cta: [
      { type: 'sparkle', color: '#FFFFFF', size: 22, top: '20%', left: '10%', delay: '0s' },
      { type: 'heart', color: '#F9A8D4', size: 20, bottom: '30%', right: '12%', delay: '0.6s' },
      { type: 'sparkle', color: '#A7F3D0', size: 18, top: '40%', right: '8%', delay: '1s' },
      { type: 'flower', color: '#C4B5FD', size: 26, bottom: '20%', left: '15%', delay: '1.4s' },
    ],
  }

  const renderElement = (el: typeof elements.hero[0], index: number) => {
    const style: React.CSSProperties = {
      position: 'absolute',
      top: el.top,
      left: el.left,
      right: el.right,
      bottom: el.bottom,
      animationDelay: el.delay,
      zIndex: 10,
    }

    if (el.type === 'heart') {
      return (
        <svg
          key={index}
          className="animate-float pointer-events-none"
          style={style}
          width={el.size}
          height={el.size}
          viewBox="0 0 24 24"
          fill={el.color}
        >
          <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
        </svg>
      )
    }

    if (el.type === 'sparkle') {
      return (
        <svg
          key={index}
          className="animate-sparkle pointer-events-none"
          style={style}
          width={el.size}
          height={el.size}
          viewBox="0 0 24 24"
          fill={el.color}
        >
          <path d="M12 2L13.09 8.26L19 7L14.74 11.26L21 14L14.74 12.91L19 19L12.74 14.74L12 22L11.26 14.74L5 19L9.26 12.91L3 14L9.26 11.26L5 7L10.91 8.26L12 2Z" />
        </svg>
      )
    }

    if (el.type === 'flower') {
      return (
        <svg
          key={index}
          className="animate-float-reverse pointer-events-none"
          style={style}
          width={el.size}
          height={el.size}
          viewBox="0 0 24 24"
          fill={el.color}
        >
          <circle cx="12" cy="12" r="3" fill="#FDE68A" />
          <ellipse cx="12" cy="6" rx="2.5" ry="4" fill={el.color} />
          <ellipse cx="12" cy="18" rx="2.5" ry="4" fill={el.color} />
          <ellipse cx="6" cy="12" rx="4" ry="2.5" fill={el.color} />
          <ellipse cx="18" cy="12" rx="4" ry="2.5" fill={el.color} />
          <ellipse cx="7.76" cy="7.76" rx="2.5" ry="4" transform="rotate(-45 7.76 7.76)" fill={el.color} />
          <ellipse cx="16.24" cy="16.24" rx="2.5" ry="4" transform="rotate(-45 16.24 16.24)" fill={el.color} />
          <ellipse cx="16.24" cy="7.76" rx="2.5" ry="4" transform="rotate(45 16.24 7.76)" fill={el.color} />
          <ellipse cx="7.76" cy="16.24" rx="2.5" ry="4" transform="rotate(45 7.76 16.24)" fill={el.color} />
        </svg>
      )
    }

    return null
  }

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {elements[variant].map((el, i) => renderElement(el, i))}
    </div>
  )
}
