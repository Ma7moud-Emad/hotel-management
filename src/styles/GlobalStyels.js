import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
:root{
    /* indigo */
    --color-brand-50: #eef2ff;
    --color-brand-100: #e0e7ff;
    --color-brand-200: #c7d2ff;
    --color-brand-500: #6366f1;
    --color-brand-600: #4f46e5;
    --color-brand-700: #4338ca;
    --color-brand-800: #3730a3;
    --color-brand-900: #312e81;

    /* gray */
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

    /* blue */
    --color-blue-100: #e0f2fe;
    --color-blue-700: #0369a1;

    /* green */
    --color-green-100: #dcfce7;
    --color-green-700: #15803d;
    
    /* yellow */
    --color-yellow-100: #fef9c3;
    --color-yellow-700: #a16207;

    /* silver */
    --color-silver-100: #e5e7ff;
    --color-silver-700: #374151;

    /* indego */
    --color-indego-100: #e0e7ff;
    --color-indego-700: #4338ca;

    /* red */
    --color-red-100: #fee2e2;
    --color-red-700: #b91c1c;
    --color-red-800: #991b1b;

    /* backdrop */
    --backdrop-color:rgba(255, 255, 255, 0.1);

    /* text-shadow */
    --shadow-sm: 0 1px 2px rgba(0, 0, 0, .04);
    --shadow-md: 0 0.6rem 2.4rem rgba(0, 0, 0, .06);
    --shadow-lg: 0 2.4rem 3.4rem rgba(0, 0, 0, .12);

    /* border-raduis */
    --border-radius-tiny: 3px;
    --border-radius-sm: 5px;
    --border-radius-md: 7px;
    --border-radius-lg: 9px;

    /* for dark mode */
    --image-grayscale: 0;
    --image-opacity:100%;
    filter: grayscale(var(--image-grayscale)) opacity(--image-opacity);

    /* animations for dark mode */
    transition:background-color 0.3, border 0.3s;

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
        /* color: var(--color-gray-700); */
        min-height: 100vh;
        padding: 0;
        margin: 0;
    }

    input,
    button,
    textarea,
    select {
        font-family: inherit;
        /* color: inherit; */
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
        background-color: var(--color-brand-50);
    }

    button:has(svg) {
        line-height: 0;
    }

    a {
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
