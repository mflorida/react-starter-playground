# React Starter _Playground_

## Welcome to the React Starter Playground jungle!

This is a playground built as an opinionated alternative to the 
ubiquitous `create-react-app` with a lot more _stuff_ included - examples 
and tidbits and whatnot. There's also a tiny Express server that can be used 
to test the _build_. There's no 'magic' here - no hidden wizardry. All nails, 
screws, nuts, and bolts are clearly exposed. There may be a little duct tape 
stuck to some parts as well. The customized <code>[webpack.config.mjs](webpack.config.mjs)</code> 
file makes it all work.

## Get Started

1. Clone this repo.
2. Run `yarn` from the root.
3. Run `yarn dev` to bring up the playground.
4. It'll be running on port `3030`, so "get your hands dirty."
5. When ready to deploy, run `yarn build` and deploy to your server
   - Simple SPA that can be deployed on any web server
   - Uses hash routing for that old-school SPA vibe

## Info

- Does not depend on `create-react-app` so customizing is straightforward (no 'magic' scripts)
- All CSS is hand-written
  - Global utility classes (similar to Tailwind, but _much_ simpler)
  - Component-specific styles
- 
- Use the _feature packed_ 'counter' example:
  - Increment or decrement by 1 or 5
  - Add, subtract, multiply, divide (or set equal to) using a specified number
  - Reset counter
  - Counter value is displayed in a few different areas of the UI using React context
- 
