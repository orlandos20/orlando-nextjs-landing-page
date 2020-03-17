export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5e702cda4cdaa6be797c9502',
                  title: 'Sanity Studio',
                  name: 'orlando-nextjs-landing-page-studio-2buys8dt',
                  apiId: 'e6de6496-714a-41fb-a7d7-d93a1714957b'
                },
                {
                  buildHookId: '5e702cdaf6355474c16ccd14',
                  title: 'Landing pages Website',
                  name: 'orlando-nextjs-landing-page-web',
                  apiId: 'ffacc2d6-3028-4dd4-a516-960f1f62c1e6'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/orlandos20/orlando-nextjs-landing-page',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://orlando-nextjs-landing-page-web.netlify.com', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page']},
      layout: {width: 'medium'}
    }
  ]
}
