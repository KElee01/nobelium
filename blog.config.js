const BLOG = {
        title: 'rrestlesS 的广播',
        author: ' KElee01',
        email: ' shawnellee@protonmail.ch',
        link: 'https://rrestless.vercel.app',
        description: '分享如何把最近新学习的技能运用在日常学习生活中，多数针对苹果生态',
        lang: 'zh-CN', // ['en-US', 'zh-CN', 'zh-HK', 'zh-TW', 'ja-JP', 'es-ES']
        appearance: 'auto', // ['light', 'dark', 'auto'],
        font: 'sans-serif', // ['sans-serif', 'serif']
        lightBackground: '#FAFAFA', // use hex value, don't forget '#' e.g #fffefc
        darkBackground: '#1E1E1E', // use hex value, don't forget '#'
        path: '', // leave this empty unless you want to deploy Nobelium in a folder
        since: 2021, // If leave this empty, current year will be used.
        postsPerPage: 7,
        sortByDate: true,
        showAbout: true,
        showArchive: true,
        autoCollapsedNavBar: false, // The automatically collapsed navigation bar
        ogImageGenerateURL: 'https://og-image-rrestless.vercel.app', // The link to generate OG image, don't end with a slash
        socialLink: 'https://t.me/rrrrrestlesssss',
        seo: {
            keywords: ['rrestlesS', 'Apple', '博客', 'Blog']
        },
        notionPageId: process.env.NOTION_PAGE_ID, // DO NOT CHANGE THIS！！！
        notionAccessToken: process.env.NOTION_ACCESS_TOKEN, // Useful if you prefer not to make your database public
        analytics: {
            provider: '', // Currently we support Google Analytics and Ackee, please fill with 'ga' or 'ackee', leave it empty to disable it.
            ackeeConfig: {
                tracker: '', // e.g 'https://ackee.craigary.net/tracker.js'
                dataAckeeServer: '', // e.g https://ackee.craigary.net , don't end with a slash
                domainId: '' // e.g '0e2257a8-54d4-4847-91a1-0311ea48cc7b'
            },
            gaConfig: {
                measurementId: '' // e.g: G-XXXXXXXXXX
            }
        },
        comment: {
            // support provider: gitalk, utterances, cusdis
            provider: '', // leave it empty if you don't need any comment plugin
            gitalkConfig: {
                repo: '', // The repository of store comments
                owner: '',
                admin: [],
                clientID: '',
                clientSecret: '',
                distractionFreeMode: false
            },
            utterancesConfig: {
                repo: ''
            },
            cusdisConfig: {
                appId: '', // data-app-id
                host: 'https://cusdis.com', // data-host, change this if you're using self-hosted version
                scriptSrc: 'https://cusdis.com/js/cusdis.es.js' // change this if you're using self-hosted version
            }
        },
        isProd: process.env.VERCEL_ENV === 'production' // distinguish between development and production environment (ref: https://vercel.com/docs/environment-variables#system-environment-variables)
    }
    // export default BLOG
module.exports = BLOG