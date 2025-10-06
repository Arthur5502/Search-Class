export const swiperStyles = `
.swiper-overflow-container .swiper {
    overflow: visible !important;
    position: static !important;
}

.swiper-overflow-container .swiper-wrapper {
    overflow: visible !important;
}

.swiper-overflow-container .swiper-slide {
    opacity: 0 !important;
    visibility: hidden !important;
    pointer-events: none !important;
    transition: opacity 0.3s ease, visibility 0.3s ease !important;
}

.swiper-overflow-container .swiper-slide-active,
.swiper-overflow-container .swiper-slide-next,
.swiper-overflow-container .swiper-slide-prev {
    opacity: 1 !important;
    visibility: visible !important;
    pointer-events: auto !important;
}

.swiper-pagination-custom {
    position: absolute !important;
    bottom: -40px !important;
    left: 50% !important;
    transform: translateX(-50%) !important;
    width: auto !important;
    display: flex !important;
    justify-content: center !important;
    align-items: center !important;
    gap: 8px !important;
    z-index: 10 !important;
}

.swiper-pagination-bullet {
    width: 12px !important;
    height: 12px !important;
    background: rgba(255, 255, 255, 0.3) !important;
    opacity: 1 !important;
    margin: 0 !important;
    transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1) !important;
    cursor: pointer !important;
    border: 1px solid rgba(255, 255, 255, 0.2) !important;
    border-radius: 50% !important;
    backdrop-filter: blur(20px) !important;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1) !important;
}

.swiper-pagination-bullet-active {
    background: linear-gradient(135deg, #667eea 0%, #764ba2 50%, #f093fb 100%) !important;
    width: 32px !important;
    height: 12px !important;
    border-radius: 12px !important;
    box-shadow: 0 0 20px rgba(102, 126, 234, 0.6) !important;
    border: 1px solid rgba(102, 126, 234, 0.8) !important;
    transform: scale(1.1) !important;
}

  /* Responsividade */
@media (max-width: 480px) {
    .swiper-pagination-custom {
        bottom: -30px !important;
        gap: 6px !important;
    }
    
    .swiper-pagination-bullet {
        width: 8px !important;
        height: 8px !important;
    }
    
    .swiper-pagination-bullet-active {
        width: 24px !important;
        height: 8px !important;
        border-radius: 8px !important;
    }
}

    @media (prefers-reduced-motion: reduce) {
    .swiper-pagination-bullet {
        transition: none !important;
    }
}
`