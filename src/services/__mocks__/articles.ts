const articlesAPI = jest.genMockFromModule<any>('../articles')

articlesAPI.get = () => ({
  articles: [
    {
      title: 'wdwd',
      slug: 'wdwd-kbla4e',
      body: 'wdwd',
      createdAt: '2020-03-21T05:56:25.787Z',
      updatedAt: '2020-03-21T05:56:25.787Z',
      tagList: [],
      description: 'wd',
      author: {
        username: 'pavel-xy',
        bio: null,
        image: 'https://static.productionready.io/images/smiley-cyrus.jpg',
        following: false
      },
      favorited: false,
      favoritesCount: 0
    },
    {
      title: 'you see see you!',
      slug: 'you-see-see-you-f2ieg2',
      body: 'are you OK?',
      createdAt: '2020-03-21T05:41:01.950Z',
      updatedAt: '2020-03-21T05:41:01.950Z',
      tagList: [],
      description: 'test',
      author: {
        username: '鲁班七号',
        bio: null,
        image: 'https://static.productionready.io/images/smiley-cyrus.jpg',
        following: false
      },
      favorited: false,
      favoritesCount: 1
    },
    {
      title: 'Test',
      slug: 'test-3yv42z',
      body: 'Test',
      createdAt: '2020-03-21T05:37:04.017Z',
      updatedAt: '2020-03-21T05:37:04.017Z',
      tagList: [],
      description: 'Test',
      author: {
        username: 'Bralls',
        bio: null,
        image: 'https://static.productionready.io/images/smiley-cyrus.jpg',
        following: false
      },
      favorited: false,
      favoritesCount: 1
    },
    {
      title: 'jalsjlajskljlasjlk',
      slug: 'jalsjlajskljlasjlk-m6d24a',
      body: 'smg;g.ms;kg;lsmg.msgsmgsgg;k;gg',
      createdAt: '2020-03-21T03:14:00.354Z',
      updatedAt: '2020-03-21T03:14:00.354Z',
      tagList: [],
      description: 'bsdhjkghdkghskjnhgfhdjhgjkfhgkfhdgk',
      author: {
        username: 'namax',
        bio: 'sdsdsdsd',
        image: 'https://static.productionready.io/images/smiley-cyrus.jpg',
        following: false
      },
      favorited: false,
      favoritesCount: 1
    },
    {
      title: 'sdsad',
      slug: 'sdsad-i8zrk6',
      body: 'dsds',
      createdAt: '2020-03-21T03:13:06.329Z',
      updatedAt: '2020-03-21T03:13:06.329Z',
      tagList: [],
      description: 'dsds',
      author: {
        username: 'namax',
        bio: 'sdsdsdsd',
        image: 'https://static.productionready.io/images/smiley-cyrus.jpg',
        following: false
      },
      favorited: false,
      favoritesCount: 0
    },
    {
      title: 'ewewew',
      slug: 'ewewew-5j727h',
      body: 'aaaaaaaaaaaaaaaa',
      createdAt: '2020-03-21T02:26:08.031Z',
      updatedAt: '2020-03-21T02:26:08.031Z',
      tagList: [],
      description: 'wewewewewewewewew',
      author: {
        username: 'aaaa12345',
        bio: null,
        image: 'https://static.productionready.io/images/smiley-cyrus.jpg',
        following: false
      },
      favorited: false,
      favoritesCount: 1
    },
    {
      title: 'Test',
      slug: 'test-zxemed',
      body: 'meeeeee',
      createdAt: '2020-03-20T23:54:24.046Z',
      updatedAt: '2020-03-20T23:54:24.046Z',
      tagList: [],
      description: 'me',
      author: {
        username: 'brunetto',
        bio: null,
        image: 'https://static.productionready.io/images/smiley-cyrus.jpg',
        following: false
      },
      favorited: false,
      favoritesCount: 0
    },
    {
      title: 'asdasdasd',
      slug: 'asdasdasd-rr2nu7',
      body: 'dfgdfgdfgdfg',
      createdAt: '2020-03-20T22:32:25.850Z',
      updatedAt: '2020-03-20T22:32:25.850Z',
      tagList: [],
      description: 'fdgdfgdfgdgdfg',
      author: {
        username: 'a8s7d8a7ds8a7d8',
        bio: null,
        image: 'https://static.productionready.io/images/smiley-cyrus.jpg',
        following: false
      },
      favorited: false,
      favoritesCount: 0
    },
    {
      title: 'asdasdasdas',
      slug: 'asdasdasdas-5jpcrq',
      body: 'asdasdasd',
      createdAt: '2020-03-20T22:23:43.873Z',
      updatedAt: '2020-03-20T22:23:43.873Z',
      tagList: [],
      description: 'asdasdasd',
      author: {
        username: 'a8s7d8a7ds8a7d8',
        bio: null,
        image: 'https://static.productionready.io/images/smiley-cyrus.jpg',
        following: false
      },
      favorited: false,
      favoritesCount: 0
    },
    {
      title: 'cypress Test',
      slug: 'cypress-test-d1xt06',
      body: 'Test 1',
      createdAt: '2020-03-20T21:11:16.138Z',
      updatedAt: '2020-03-20T21:11:16.138Z',
      tagList: [],
      description: 'Test 1',
      author: {
        username: '2020faiez',
        bio: null,
        image: 'https://static.productionready.io/images/smiley-cyrus.jpg',
        following: false
      },
      favorited: false,
      favoritesCount: 1
    }
  ],
  articlesCount: 500
})

export { articlesAPI }
