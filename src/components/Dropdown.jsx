import React from 'react';
import data from '../data/sorting.json'

export const Dropdown = () => {
    return <div>
        <label>Sort by</label>
        <select>
            {data.map(({label, value}, index) => (
                <option key={index} value={value}>{label}</option>
            ))}
        </select>
    </div>
}

