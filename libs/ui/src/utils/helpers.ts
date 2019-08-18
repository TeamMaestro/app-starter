import { EventEmitter } from '@stencil/core';

export const hasShadowDom = (el: HTMLElement) => {
    return !!el.shadowRoot && !!(el as any).attachShadow;
};

// tslint:disable-next-line: max-line-length
export const renderHiddenInput = (always: boolean, container: HTMLElement, name: string, value: string | undefined | null, disabled: boolean) => {
    if (always || hasShadowDom(container)) {
        let input = container.querySelector('input.aux-input') as HTMLInputElement | null;
        if (!input) {
            input = container.ownerDocument.createElement('input');
            input.type = 'hidden';
            input.classList.add('aux-input');
            container.appendChild(input);
        }
        input.disabled = disabled;
        input.name = name;
        input.value = value || '';
    }
};


export const debounce = (func: (...args: any[]) => void, wait = 0) => {
    let timer: any;
    return (...args: any[]): any => {
        clearTimeout(timer);
        timer = setTimeout(func, wait, ...args);
    };
};

export const debounceEvent = (event: EventEmitter, wait: number): EventEmitter => {
    const original = (event as any)._original || event;
    return {
        _original: event,
        emit: debounce(original.emit.bind(original), wait)
    } as EventEmitter;
};


export const deferEvent = (event: EventEmitter): EventEmitter => {
    return debounceEvent(event, 0);
};
