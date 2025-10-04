// hooks/useFilters.ts
import { useState } from 'react'
import type { Estado } from '../constants/estados'
import type { FilterType } from '../components/FilterTabs/FilterTabs.types'

export const useFilters = () => {
    const [activeFilters, setActiveFilters] = useState<FilterType[]>([])
    const [selectedLocation, setSelectedLocation] = useState<Estado | null>(null)

    const handleFilterToggle = (filter: FilterType) => {
        setActiveFilters(prevFilters =>
            prevFilters.includes(filter)
                ? prevFilters.filter(f => f !== filter)
                : [...prevFilters, filter]
        )
    }

    const handleLocationSelect = (estado: Estado | null) => {
        setSelectedLocation(
            selectedLocation?.id === estado?.id ? null : estado
        )
    }

    const isActive = (filter: FilterType) => activeFilters.includes(filter)

    const resetFilters = () => {
        setActiveFilters([])
        setSelectedLocation(null)
    }

    return {
        activeFilters,
        selectedLocation,
        handleFilterToggle,
        handleLocationSelect,
        isActive,
        resetFilters
    }
}
