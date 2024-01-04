Client-side rendering (CSR)
Upon loading a page, the client’s browser retrieves minimal HTML and JavaScript. The JavaScript fetches data and renders components dynamically.

Server-side rendering 
Involves generating HTML content on the server before delivering it to the client

Static Site Generation (SSG)
Static Site Generation involves pre-rendering all pages as static HTML files during the build process. During the build phase, the application generates HTML files for each page. These static files are then served to users, minimizing the need for server-side rendering and database queries.

Incremental Static Regeneration (ISR)
Static pages are generated at build time, and dynamic pages are regenerated incrementally based on specific triggers. This strategy balances the benefits of static content and real-time data updates.

Island Architecture - https://www.patterns.dev/vanilla/islands-architecture
