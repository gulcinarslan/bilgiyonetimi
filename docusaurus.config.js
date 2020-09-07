module.exports = {
  title: 'Bilgi Yönetimi Programı',
  tagline: 'Ders Notları',
  url: 'https://atabilgiyonetimi.netlify.app',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  favicon: 'img/icon.png',
  organizationName: 'gulcinofluoglu', // Usually your GitHub org/user name.
  projectName: 'blog', // Usually your repo name.
  themeConfig: {
    navbar: {
      title: 'Bilgi Yönetimi Programı',
      logo: {
        alt: 'Bilgi Yönetimi',
        src: 'img/logo.svg',
      },
      items: [
        {
          to: 'docs/',
          activeBasePath: 'docs',
          label: 'Dersler',
          position: 'left',
        },
        {to: 'blog', label: 'Blog', position: 'left'},
        {
          href: 'https://github.com/gulcinofluoglu/blog',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Docs',
          items: [
            {
              label: 'Temel Bilgi Teknolojileri',
              to: 'docs/',
            },
            {
              label: 'İşletim Sistemleri',
              to: 'docs/doc2/',
            },
          ],
        },
        {
          title: 'Bağlantılar',
          items: [
            {
              label: 'Atatürk Üniversitesi',
              href: 'https://atauni.edu.tr/',
            },
            {
              label: 'ÖBS',
              href: 'https://obs.atauni.edu.tr/',
            },
            {
              label: 'E-Portal',
              href: 'https://atauni.edu.tr/eportal/',
            },
          ],
        },
        {
          title: 'Kişisel',
          items: [
            {
              label: 'Blog',
              to: 'blog',
            },
            {
              label: 'GitHub',
              href: 'https://github.com/gulcinofluoglu',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Alternatik.`,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl:
            'https://github.com/gulcinofluoglu/blog/edit/master/website/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            'https://github.com/gulcinofluoglu/blog/edit/master/website/blog/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
