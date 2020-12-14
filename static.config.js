import path from 'path';
import posts from './src/data/posts.json';
import devops from './src/data/devops.json';
import virtualservice from './src/data/virtualservice.json';
import cech from './src/data/cech.json';
import ocat from './src/data/ocat.json';
// Typescript support in static.config.js is not yet supported, but is coming in a future update!

export default {
  entry: path.join(__dirname, `src`, `index.jsx`),
  getRoutes: () => [
    {
      children: posts.map((post) => ({
        getData: () => ({
          post,
        }),
        path: `/post/${post.id}`,
        template: `src/containers/Post`,
      })),
      getData: () => ({
        posts,
      }),
      path: `/blog`,
    },
    {
      children: devops.map((dev) => ({
        getData: () => ({
          dev,
        }),
        path: `/dev/${dev.id}`,
        template: `src/containers/Dev`,
      })),
      getData: () => ({
        devops,
      }),
      path: `/DevOps`,
    },
    {
      children: virtualservice.map((virtualservice) => ({
        getData: () => ({
          virtualservice,
        }),
        path: `/${virtualservice.id}`,
        template: `src/containers/Virtual`,
      })),
      getData: () => ({
        virtualservice,
      }),
      path: `/VEaas`,
    },
    {
      children: cech.map((cech) => ({
        getData: () => ({
          cech,
        }),
        path: `/${cech.id}`,
        template: `src/containers/Cech`,
      })),
      getData: () => ({
        cech,
      }),
      path: `/cech`,
    },
    {
      children: ocat.map((ocat) => ({
        getData: () => ({
          ocat,
        }),
        path: `/ocat/${ocat.id}`,
        template: `src/containers/Ocat`,
      })),
      getData: () => ({
        ocat,
      }),
      path: `/ocat`,
    },
  ],
  plugins: [
    [
      require.resolve(`react-static-plugin-source-filesystem`),
      {
        location: path.resolve(`./src/pages`),
      },
    ],
    require.resolve(`react-static-plugin-sass`),
    require.resolve(`react-static-plugin-reach-router`),
    require.resolve(`react-static-plugin-sitemap`),
  ],
};
