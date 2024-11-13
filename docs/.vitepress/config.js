import {defineConfig} from 'vitepress'

// https://vitepress.dev/reference/site-config

export default defineConfig({
    title: "Backstack ~ v-0.9.1",
    description: "Backend resources for your codebase.",
    head: [
        ['link', {rel: 'icon', href: '/favicon.svg', type: 'image/svg+xml'}]
    ],
    ignoreDeadLinks: true,
    themeConfig: {
        // https://vitepress.dev/reference/default-theme-config

        logo: {src: '/favicon.svg', width: 24, height: 24},
        nav: [
            {text: 'Guide', link: '/guide/introduction', activeMatch: '/guide/'},
            {text: 'Demo', link: '/demo/introduction', activeMatch: '/demo/'},
            {text: 'Pricing', link: '/pricing', activeMatch: '/pricing'},
            {text: 'Dashboard', link: 'https://dash.backstack.com'},
        ],

        sidebar: {
            '/guide/': {base: '/guide/', items: guideSidebar()},
            '/demo/': {base: '/demo/', items: demoSidebar()}
        },

        socialLinks: [
            { icon: 'github', link: 'https://github.com/deloachtech/backstack-demo' },
        ]
    }
})

function guideSidebar() {
    return [

        {
            text: 'Getting Started',
            items: [
                {text: 'Introduction', link: 'introduction'},
                {text: 'Quick Start', link: 'quick-start'},
            ]
        },
        {
            text: 'Architecture',
            items: [
                {text: 'Access Control', link: 'access-control'},
                {text: 'Errors', link: 'errors'},
                {text: 'Monetization', link: 'monetization'},
                {text: 'Lists', link: 'lists'},
            ]
        },
        {
            text: 'App Endpoints',
            items: [
                {text: 'app', link: 'app/app'},
                {text: 'app/contact-us', link: 'app/contact-us'},
                {text: 'app/forgot-password', link: 'app/forgot-password'},
                {text: 'app/locales', link: 'app/locales'},
                {text: 'app/login', link: 'app/login'},
                {text: 'app/logout', link: 'app/logout'},
                {text: 'app/optional-features', link: 'app/optional-features'},
                {text: 'app/session', link: 'app/session'},
                {text: 'app/signup', link: 'app/signup'},
                {text: 'app/unlock', link: 'app/unlock'},
                {text: 'app/versions', link: 'app/versions'},
            ]
        },
        {
            text: 'Account Endpoints',
            items: [
                {text: 'account', link: 'account/account'},
                {text: 'account/counters', link: 'account/counters'},
                {text: 'account/invoices', link: 'account/invoices'},
                {text: 'account/networks', link: 'account/networks'},
                {text: 'account/optional-features', link: 'account/optional-features'},
                {text: 'account/payment-methods', link: 'account/payment-methods'},
                {text: 'account/users', link: 'account/users'},
                {text: 'account/versions', link: 'account/versions'},
            ]
        },
        {
            text: 'User Endpoints',
            items: [
                {text: 'user', link: 'user/user'},
                {text: 'user/change-account', link: 'user/change-account'},
                {text: 'user/change-password', link: 'user/change-password'},
                {text: 'user/hidden-tips', link: 'user/hidden-tips'},
                {text: 'user/notification-settings', link: 'user/notification-settings'},
            ]
        },

    ]
}

function demoSidebar() {
    return [
        {
            text: 'Getting Started',
            items: [
                {text: 'Introduction', link: 'introduction'},
                {text: 'Quick Start', link: 'quick-start'},
            ]
        },
        {
            text: 'Components',
            items: [
                {text: 'ActionDropdown', link: 'components/action-dropdown'},
                {text: 'AxiosError', link: 'components/axios-error'},
                {text: 'BarChart', link: 'components/bar-chart'},
                {text: 'Button', link: 'components/button'},
                {text: 'Error404', link: 'components/error-404'},
                {text: 'Error500', link: 'components/error-500'},
                {text: 'ExternalLink', link: 'components/external-link'},
                {text: 'FormInput', link: 'components/form-input'},
                {text: 'FormSelect', link: 'components/form-select'},
                {text: 'Indicator', link: 'components/indicator'},
                {text: 'LineChart', link: 'components/line-chart'},
                {text: 'Modal', link: 'components/modal'},
                {text: 'PageHeading', link: 'components/page-heading'},
                {text: 'RadioButtonGroup', link: 'components/radio-button-group'},
                {text: 'Setting', link: 'components/setting'},
                {text: 'SettingButton', link: 'components/setting-button'},
                {text: 'Spinner', link: 'components/spinner'},
                {text: 'TableToolbar', link: 'components/table-toolbar'},
                {text: 'Tip', link: 'components/tip'},
                {text: 'Toast', link: 'components/toast'},
                {text: 'Tooltip', link: 'components/tooltip'},

            ]
        }
    ]
}