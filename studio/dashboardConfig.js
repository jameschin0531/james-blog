export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gridsome-blog'
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
                  buildHookId: '5fb8be7aa9e60ae68e8e4606',
                  title: 'Sanity Studio',
                  name: 'james-blog-studio',
                  apiId: 'db34728a-f73b-4482-9c24-9fe1b83ed117'
                },
                {
                  buildHookId: '5fb8be7a8ed60ce8554eedf6',
                  title: 'Blog Website',
                  name: 'james-blog-web',
                  apiId: 'f0d55ff2-0a73-4548-9c12-e53efd32d383'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/jameschin0531/james-blog',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://james-blog-web.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
