import { useState, useEffect } from 'react'
import type { CardDimensions } from '../components/ui/CourseCard'

interface ResponsiveConfig {
    slideWidth: string
    cardDimensions: CardDimensions
    coverflowSettings: {
        rotate: number
        stretch: number
        depth: number
    }
}

export const useResponsiveCarousel = (): ResponsiveConfig => {
    const [config, setConfig] = useState<ResponsiveConfig>({
        slideWidth: '350px',
        cardDimensions: { width: '350px', height: '561px' },
        coverflowSettings: { rotate: 20, stretch: -60, depth: 100 }
    })

    useEffect(() => {
        const updateConfig = () => {
            const width = window.innerWidth

            if (width < 480) {
                setConfig({
                    slideWidth: '280px',
                    cardDimensions: { width: '280px', height: '420px' },
                    coverflowSettings: { rotate: 10, stretch: -30, depth: 50 }
                })
            } else if (width < 768) {
                setConfig({
                    slideWidth: '300px',
                    cardDimensions: { width: '300px', height: '480px' },
                    coverflowSettings: { rotate: 15, stretch: -40, depth: 70 }
                })
            } else if (width < 1024) {
                setConfig({
                    slideWidth: '320px',
                    cardDimensions: { width: '320px', height: '520px' },
                    coverflowSettings: { rotate: 18, stretch: -50, depth: 80 }
                })
            } else {
                setConfig({
                    slideWidth: '362px',
                    cardDimensions: { width: '362px', height: '561px' },
                    coverflowSettings: { rotate: 20, stretch: -60, depth: 100 }
                })
            }
        }

        updateConfig()
        window.addEventListener('resize', updateConfig)

        return () => window.removeEventListener('resize', updateConfig)
    }, [])

    return config
}