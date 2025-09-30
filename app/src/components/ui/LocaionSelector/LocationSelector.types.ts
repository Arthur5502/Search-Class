// components/ui/LocationSelector/LocationSelector.types.ts
import { Estado } from '../../../constants/estados'

export interface LocationSelectorProps {
    selectedLocation: Estado | null
    onLocationSelect: (estado: Estado | null) => void
    variant?: 'desktop' | 'mobile'
}
