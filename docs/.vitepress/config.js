import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config

export default defineConfig({
    title: "Backstack ~ v-0.9.1",
    description: "Backend resources for your codebase.",
    head: [
        ['link', { rel: 'icon', href: '/favicon.svg', type: 'image/svg+xml' }]
    ],
    ignoreDeadLinks: true,
    themeConfig: {
        // https://vitepress.dev/reference/default-theme-config

        logo: { src: '/favicon.svg', width: 24, height: 24 },
        nav: [
            { text: 'Guide', link: '/guide/introduction',  activeMatch: '/guide/' },
            { text: 'Sample Project', link: '/sample/introduction', activeMatch: '/sample/' },
            { text: 'Pricing', link: '/pricing', activeMatch: '/pricing' }
        ],

        sidebar: {
            '/guide/': { base: '/guide/', items: guideSidebar() },
            '/sample/': { base: '/sample/', items: demoSidebar() }
        },

        // socialLinks: [
        //     { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
        // ]
    }
})

function guideSidebar() {
    return [

        {
            text: 'Getting Started',
            items: [
                { text: 'Introduction', link: 'introduction' },
                { text: 'Quick Start', link: 'quick-start' },
                { text: 'Sample Project', link: 'sample-project' },
                
            ]
        },
        {
            text: 'Core Concepts',
            items: [
                { text: 'Architecture', link: 'architecture' },
                { text: 'Sessions', link: 'sessions' },
                { text: 'Accounts', link: 'accounts' },
                { text: 'Users', link: 'users' },
                { text: 'Features', link: 'features' },
                { text: 'Roles', link: 'roles' },
                { text: 'Versions', link: 'versions' },
                { text: 'Access Control', link: 'access-control' },
                { text: 'Monetization', link: 'monetization' },
                { text: 'Pagination', link: 'pagination' },
                { text: 'Errors', link: 'errors' },
            ]
        },
        {
            text: 'Workflows',
            items: [
                { text: 'Account Users', link: 'account-users' },
                { text: 'Invoicing Accounts', link: 'invoicing-accounts' },
                { text: 'Logging In', link: '/login' },
                { text: 'Managing Resource Usage', link: 'managing-resources' },
                { text: 'Networks', link: 'networks' },
                { text: 'Optional Features', link: 'optional-features' },
                { text: 'Resetting Passwords', link: 'reset-passwords' },
                { text: 'Signing Up', link: 'signup' },
                { text: 'Version Assignment', link: 'version-assignment' },
            ]
        },
        {
            text: 'Resources',
            items: [
                { text: 'Account', link: 'account' },
                { text: 'User', link: 'user' },
                { text: 'Counters', link: 'counters' },
                { text: 'Countries', link: 'countries' },
                { text: 'Timezones', link: 'timezones' },

            ]
        }

    ]
}

function demoSidebar() {
    return []
}