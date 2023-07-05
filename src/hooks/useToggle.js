import { useState } from 'react';

export default function useToggle(defautValue) {
    const [value, setValue] = useState(defautValue);
    // if pass agr set value = arg
    function toggleValue(value) {
        setValue((prev) => (typeof value === 'boolean' ? value : !prev));
    }
    return [value, toggleValue];
}
