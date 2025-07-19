import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
:root{
    &, &.light{
      --color-gray-0: #fff;
    --color-gray-50: #f9fafb;
    --color-gray-100: #f3f4f6;
    --color-gray-200: #e5e7eb;
    --color-gray-300: #d1d5db;
    --color-gray-400: #9ca3af;
    --color-gray-500: #6b7280;
    --color-gray-600: #4b5563;
    --color-gray-700: #374151;
    --color-gray-800: #1f2937;
    --color-gray-900: #111827;

    --color-blue-100: #e0f2fe;
    --color-blue-700: #0369a1;

    --color-green-100: #dcfce7;
    --color-green-700: #15803d;

    --color-yellow-100: #fef9c3;
    --color-yellow-700: #a16207;

    --color-silver-100: #e5e7eb;
    --color-silver-700: #374151;

    --color-indego-100: #e0e7ff;
    --color-indego-700: #4338ca;

    --color-red-100: #fee2e2;
    --color-red-700: #b91c1c;
    --color-red-800: #991b1b;

    --color-brand-50: #eef2ff;
    --color-brand-100: #e0e7ff;
    --color-brand-200: #c7d2fe;
    --color-brand-500: #6366f1;
    --color-brand-600: #4f46e5;
    --color-brand-700: #4338ca;
    --color-brand-800: #3730a3;
    --color-brand-900: #312e81;

}
&.dark{
    --color-gray-0: #18212f;
    --color-gray-50: #111827;
    --color-gray-100: #1f2937;
    --color-gray-200: #374151;
    --color-gray-300: #4b5563;
    --color-gray-400: #6b7280;
    --color-gray-500: #9ca3af;
    --color-gray-600: #d1d5db;
    --color-gray-700: #e5e7eb;
    --color-gray-800: #f3f4f6;
    --color-gray-900: #f9fafb;

    --color-blue-100: #075985;
    --color-blue-700: #e0f2fe;

    --color-green-100: #166534;
    --color-green-700: #dcfce7;

    --color-yellow-100: #854d0e;
    --color-yellow-700: #fef9c3;

    --color-silver-100: #374151;
    --color-silver-700: #f3f4f6;

    --color-indego-100: #3730a3;
    --color-indego-700: #e0e7ff;

    --color-red-100: #fee2e2;
    --color-red-700: #b91c1c;
    --color-red-800: #991b1b;
}

*,
*::before,
*::after {
    box-sizing: border-box;
} 

*:disabled {
    cursor: not-allowed;
}    

html {
    font-size: 62.5%;
    scroll-behavior: smooth;
}

body {
    font-family: 'Poppins',sans-serif;
    min-height: 100vh;
    padding: 0;
    background-color: var(--color-gray-100);
    color: var(--color-gray-900);
    margin: 0;
}

input,
button,
textarea,
select {
    font-family: inherit;
}

button {
    cursor: pointer;
}

select:disabled,
input:disabled{
    background-color: var(--color-gray-200);
    color: var(--color-gray-500);
}

input:focus,
button:focus,
button
textarea:focus
,select:focus 
{
    outline: 2px solid var(--color-brand-600);
    outline-offset: -1px;
}

button:has(svg) {
    line-height: 0;
}

a{
    color: inherit;
    text-decoration: none;
}

ul {
    list-style: none;
}

p,
h1,
h2,
h3,
h4,
h5,
h6 {
    overflow-wrap: break-word;
    hyphens: auto;
}

img {
    max-width: 100%;
}
}
`;

export default GlobalStyles;
