# Podcaster

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app). It uses the iTunes API to fetch podcast data and displays it in a user-friendly interface.

## Getting Started

To get started with the project, follow these steps:

1. Clone the repository to your local machine.

2. Install the dependencies:

```bash
  npm install
  # or
  yarn install
  # or
  pnpm install
  # or
  bun install
```

3. Run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

4. Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.
   
## Building and Running in Production Mode

1. Build the application:

```bash 
npm run build
# or
yarn build
# or
pnpm build
# or
bun build
```

2. After the build is complete, you can start the application:

```bash
npm run start
# or
yarn start
# or
pnpm start
# or
bun start
```

3. Open http://localhost:3000 with your browser to see the result.

4. To stop the application, press Ctrl + C in the terminal.

---

## Project Structure

- `src/`: Contains the source code for the application.
  - `app/`: Contains the global layout and pages for the application.
  - `components/`: Contains reusable React components.
  - `constants/`: Contains constant values used throughout the application.
  - `types/`: Contains TypeScript type definitions.
  - `utils/`: Contains utility functions.

## How it works

The application fetches data from the iTunes API using two main functions: `fetchTopPodcasts` and `fetchPodcast`, located in `src/utils/fetchItunesPodcasts.ts.`

`fetchTopPodcasts` fetches the top podcasts from the iTunes API, with an optional limit parameter that defaults to 100.

`fetchPodcast` fetches a single podcast by its id.

The fetched data is used in various parts of the application, such as in `src/app/podcast/[podcastId]/page.tsx,` where the `useQueries` hook from the `react-query` library is used to fetch the top podcasts and a specific podcast based on the `podcastId` parameter. The fetched data is then used to display the podcast details and its episodes.

The `react-query` library also provides `caching` out of the box. This means that if the same data is fetched multiple times, react-query will serve the cached data instead of making a new request to the iTunes API. This improves the performance of the application and reduces the load on the iTunes API.
