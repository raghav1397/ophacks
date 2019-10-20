import React from 'react'

const PageTemplate = ({ children }) => (
    <div>
        <nav>Header Navigation</nav>
        <h1>Candler Center App</h1>
        {children}
    </div>
);

export default PageTemplate;