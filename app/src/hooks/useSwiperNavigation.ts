import { useState, useRef } from 'react'
import type { Swiper as SwiperType } from 'swiper'
import type { NavigationOptions } from 'swiper/types'; // Importação adicionada

export const useSwiperNavigation = () => {
    const [swiperInstance, setSwiperInstance] = useState<SwiperType | null>(null)
    const prevRef = useRef<HTMLButtonElement>(null)
    const nextRef = useRef<HTMLButtonElement>(null)

    const handleSwiperInit = (swiper: SwiperType) => {
        setSwiperInstance(swiper)

        setTimeout(() => {
            if (prevRef.current && nextRef.current) {
                // Correção aplicada aqui
                const navigation = swiper.params.navigation as NavigationOptions;
                navigation.prevEl = prevRef.current;
                navigation.nextEl = nextRef.current;
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