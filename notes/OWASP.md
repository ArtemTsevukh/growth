Top 10 Client-Side Security Risks

1. Broken Client-side Access Control
Insufficient control of JavaScript access to client-side assets (data and code), exfiltration of sensitive data, or manipulation of the DOM for malicious purposes (to access those assets).

2. DOM-based XSS
Vulnerabilities that permit XSS attacks through DOM manipulation or abuse.

3. Sensitive Data Leakage
Inability to detect/prevent digital trackers and pixels across a web property to ensure national and international privacy laws are complied with.

4. Vulnerable and Outdated Components
Lack of detection and updates to JavaScript libraries that are outdated or contain known vulnerabilities.

5. Lack of Third-party Origin Control
Origin control allows the restriction of certain web assets or resources by comparing the origin of the resource to the origin of the third-party library. Without leveraging such controls, supply chain risk increases due to inclusion of unknown or uncontrolled third-party code that has access to data in the site’s origin.

6. JavaScript Drift
Inability to detect changes at the asset and code level of JavaScript used client-side. This includes the inability to detect behavioral changes of this code to determine if the changes are potentially malicious in nature. This is particularly important for third-party libraries.

7. Sensitive Data Stored Client-Side
Storage of sensitive data like passwords, crypto secrets, API tokens, or PII data in persistent client-side storage like LocalStorage, browser cache, or transient storage like JavaScript variables in a data layer.

8. Client-side Security Logging and Monitoring Failures
Insufficient monitoring and detection of client-side changes and data accesses, particularly failures and errors, in real-time as each page is assembled and executed using both first-party and third-party code.

9. Not Using Standard Browser Security Controls
Not using common standards-based security controls built into browsers such as iframe sandboxes, and security headers like Content Security Policy (CSP), subresource integrity, and many other standard security features.

10. Including Proprietary Information on the Client-Side
Presence of sensitive business logic, developer comments, proprietary algorithms, or system information contained in client-side code or stored data.

ALSO READ: https://www.cloudflare.com/en-gb/learning/security/threats/owasp-top-10/