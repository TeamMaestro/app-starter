import { Color } from '../interface';

export function createColorClasses(color: Color | undefined | null): any | undefined {
    return (color != null) ? {
        [`app-color-${color}`]: true
    } : undefined;
}
