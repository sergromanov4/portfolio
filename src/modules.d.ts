declare module '*.scss' {
    const styles: {
        [className: string]: string;
    };

    export default styles;
}

declare module 'classnames' {
    const module: any;

    export default module;
}

declare module '*.svg' {
    const module: any;

    export default module;
}
