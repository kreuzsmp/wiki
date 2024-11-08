import { defineConfig } from 'vitepress'
import { withSidebar } from 'vitepress-sidebar';

const vitePressOptions = {
// VitePress's options here...
    title: "KreuzSMP wiki",
    description: "Вики Minecraft-сервера Kreuz",
    themeConfig: {
        nav: [
            { text: 'Home', link: '/' },
            { text: 'beginning', link: '/1/beginning/about-project.md' }
        ],

        socialLinks: [
            { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
        ]
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
