import { Icon } from './icon';
export declare const getIconMap: () => Map<string, string>;
export declare const addIcons: (icons: {
    [name: string]: string;
}) => void;
export declare const getUrl: (i: Icon) => string;
export declare const getName: (name: string) => string;
export declare const getSrc: (src: string) => string;
export declare const isSrc: (str: string) => boolean;
export declare const isStr: (val: any) => val is string;
