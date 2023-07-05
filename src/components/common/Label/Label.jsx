import { nanoid } from 'nanoid';
import React from 'react';
import './Label.scss';

const Label = ({ title, color, background, height, icons = [] }) => {
    console.log(icons);
    return (
        <span
            style={{
                display: 'flex',
                alignItems: 'center',
                gap: '4px',
                background: background,
                color: color,
                fontSize: '1.4rem',
                width: 'fit-content',
                height: height,
                padding: '4px 6px',
                borderRadius: '5px',
            }}
        >
            {icons.length > 0 &&
                icons.map((icon) => <div style={{ fill: color, width: '16px', height: '16px' }}>{icon}</div>)}
            {title}
        </span>
    );
};

export default Label;
