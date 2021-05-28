## Installation

1. `npm install`
2. Configure `.env` file based on `.env.example`
3. Run `npm start` for local development or `npm run build` for the production build of the app

## Environment

```
REACT_APP_BASENAME=/app
PUBLIC_URL=/app

```

| Parameter                         | Description                                                                                | Required |
| --------------------------------- | ------------------------------------------------------------------------------------------ | -------- |
| REACT_APP_BASENAME                | This is the basename for the React App. It's needed for the Nginx location block           | Yes      |
| PUBLIC_URL                        | This is the basename for the React App. It's needed during build time for the static files | Yes      |