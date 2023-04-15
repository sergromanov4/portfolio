const debounce = <T extends (...args: any[]) => any>(fn: T, time: number): (...args: Parameters<T>) => void => {
    let timeout: any;

    return (...args: Parameters<T>) => {
        clearTimeout(timeout);
        timeout = setTimeout(() => fn(...args), time);
    };
};

export default debounce;
