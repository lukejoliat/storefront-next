import { useState } from "react";

export const useInput = <T>(initialValue: T | undefined) => {
    const [value, setValue] = useState(initialValue);

    const handleChange = (event: any) => {
        setValue(event?.target?.value);
    };

    return {
        value,
        onChange: handleChange,
        type: typeof initialValue === 'string' ? 'text' : 'number'
    } as {
        value: T,
        onChange: (event: any) => void,
        type: string
    };
};
