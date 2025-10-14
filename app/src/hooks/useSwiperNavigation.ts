import { useState, useRef, useEffect } from 'react'
import type { Swiper as SwiperType } from 'swiper'

export const useSwiperNavigation = () => {
    const [swiperInstance, setSwiperInstance] = useState<SwiperType | null>(null)
    const prevRef = useRef<HTMLButtonElement>(null)
    const nextRef = useRef<HTMLButtonElement>(null)

    const handleSwiperInit = (swiper: SwiperType) => {
        setSwiperInstance(swiper)

        setTimeout(() => {
            if (prevRef.current && nextRef.current) {
                (swiper.params.navigation as any).prevEl = prevRef.current;
                (swiper.params.navigation as any).nextEl = nextRef.current
                swiper.navigation.init()
                swiper.navigation.update()
            }
        })
    }

    return {
        swiperInstance,
        prevRef,
        nextRef,
        handleSwiperInit
    }
}