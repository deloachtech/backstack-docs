import {defineConfig} from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
    title: "Backstack",
    description: "Backend resources for your codebase.",
    themeConfig: {
        // https://vitepress.dev/reference/default-theme-config
        nav: [
            {text: 'Docs', link: '/markdown-examples'},
            {text: 'Examples', link: ''},
            {text: 'Pricing', link: '/pricing'}
        ],

        sidebar: [
            {
                text: 'Introduction',
                items: [
                    {text: 'Key Features', link: '/key-features'},
                    {text: 'Quick Start', link: '/quickstart'},
                    {text: 'Architecture', link: '/architecture'},
                ]
            },
            {
                text: 'Core Concepts',
                items: [
                    {text: 'App Schemas', link: '/app-schemas'},
                    {text: 'Sessions', link: '/sessions'},
                    {text: 'Accounts', link: '/accounts'},
                    {text: 'Users', link: '/users'},
                    {text: 'Features', link: '/features'},
                    {text: 'Roles', link: '/roles'},
                    {text: 'Versions', link: '/versions'},
                    {text: 'Access Control', link: '/access-control'},
                    {text: 'Monetization', link: 'monetization'},
                    {text: 'Pagination', link: '/pagination'},
                    {text: 'Errors', link: '/errors'},
                ]
            },
            {
                text: 'Workflows',
                items: [
                    {text: 'Account Users', link: '/account-users'},
                    {text: 'Invoicing Accounts', link: '/invoicing-accounts'},
                    {text: 'Logging In', link: '/login'},
                    {text: 'Managing Resource Usage', link: '/managing-resources'},
                    {text: 'Networks', link: '/networks'},
                    {text: 'Optional Features', link: '/optional-features'},
                    {text: 'Resetting Passwords', link: '/reset-passwords'},
                    {text: 'Signing Up', link: '/signup'},
                    {text: 'Version Assignment', link: '/version-assignment'},
                ]
            },
            {
                text: 'Resources',
                items: [
                    {text: 'Markdown Examples', link: '/markdown-examples'},
                    {text: 'Runtime API Examples', link: '/api-examples'},
                    {text: 'Account', link: '/account'},
                    {text: 'User', link: '/user'},
                    {text: 'Counters', link: '/counter'},
                    {text: 'Countries', link: '/countries'},
                    {text: 'Timezones', link: '/timezones'},

                ]
            }
        ],

        socialLinks: [
            {icon: 'github', link: 'https://github.com/vuejs/vitepress'}
        ]
    }
})
