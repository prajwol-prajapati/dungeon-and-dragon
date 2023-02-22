# Progressive Spells

- Find the web view of the project [here](http://dragons-dungeons-spell.s3-website-us-east-1.amazonaws.com)

# Development

- Create .env file getting reference from .env.example

## Install packages

```
yarn install
```

## Scripts

| Command        | Description                      |
| -------------- | -------------------------------- |
| `yarn dev`     | start dev server                 |
| `yarn build`   | build for production             |
| `yarn preview` | locally preview production build |

#### Naming convention guidelines

- Components follow `atomic design` inside `/src/components` separated into `atoms`, `molecules`, `organisms` etc.
- Components are named with PascalCase. Your Awesome Component will be named as `YourAwesomeComponent`.
- Components contains
  - `index.tsx` describing components.
- Typscript `ts` files are named with `camelCasing` convention.
- Variables are named with camel case.
- Interfaces and Class names are pascal cased.
- Globals are all `CAPITALIZED`.

#### The Folder Structure

- `components` contains custom components built for project.
- `pages` contains pages
- `assets` contains static files sucs as svgs
- `utils` contains utility functions like `Contexts`

### What this project contains

- [x] React with typescript support.
- [x] Folder structure using atomic design
- [x] [Vite](https://vitejs.dev/)
- [x] [Ant Design](https://ant.design/) Dependency (frontend library).
- [x] react-query and axios.
- [x] [Open project on our website](http://dragons-dungeons-spell.s3-website-us-east-1.amazonaws.com)
