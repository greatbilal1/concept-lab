# Notes — Web Application Security

Never trust client-side validation. Parameterize all SQL queries, sanitize user HTML with DOMPurify, store tokens in HttpOnly SameSite cookies, and enforce ownership checks on every endpoint.