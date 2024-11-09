import { defineConfig } from 'vitepress'
import { withSidebar } from 'vitepress-sidebar';

const vitePressOptions = {
// VitePress's options here...
    title: "KreuzSMP wiki",
    description: "Вики Minecraft-сервера Kreuz",
    head: [
        ['link', { rel: "icon", type: "image/png", href: "/favicon.png"}]
    ],
    themeConfig: {
        logo: '/Vector.svg',
        siteTitle: 'KSMP',
        nav: [
            { text: 'Главная', link: '/' },
            { text: 'Начало', link: '/1/beginning/about-project.md' }
        ],
        socialLinks: [
            { icon: 'discord', link: 'https://kreuzsmp.ru/discord' },
            { icon: 'youtube', link: 'https://kreuzsmp.ru/youtube' },
            { icon: 'tiktok', link: 'https://kreuzsmp.ru/tiktok' },
            { icon: 'telegram', link: 'https://kreuzsmp.ru/telegram' },
        ]
    },
    markdown: {
        image: {
            lazyLoading: true,
        }
    }
};

const vitePressSidebarOptions = {
    documentRootPath: '/',
    collapsed: false,
    capitalizeFirst: true,
    useTitleFromFrontmatter: true,
    sortMenusByFrontmatterOrder: true,
    useFolderTitleFromIndexFile: true,
};

export default defineConfig(withSidebar(vitePressOptions, vitePressSidebarOptions));
