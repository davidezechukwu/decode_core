export enum ThemesEnum {
    Default = 'default',
    Light = 'light',
    Neutral = 'neutral',
    Dark = 'dark'
}

export function GetThemesEnumsFromString(theme: string): ThemesEnum {
    if (!theme?.trim()) {
        throw new Error(`GetThemesEnumsFromString(${theme}) has an invalid empty theme argument`);
    }

    switch (theme.toLowerCase()) {
        case 'default':
            return ThemesEnum.Default;
        case 'light':
            return ThemesEnum.Light;
        case 'neutral':
            return ThemesEnum.Neutral;
        case 'dark':
            return ThemesEnum.Dark;
        default:
            throw new Error(`GetThemesEnumsFromString(${theme}) has an invalid theme:${theme} argument`);
    }
}
