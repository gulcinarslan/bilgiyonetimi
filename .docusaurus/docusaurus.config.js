export default {
  "title": "Bilgi Yönetimi Programı",
  "tagline": "Ders Notları",
  "url": "https://your-docusaurus-test-site.com",
  "baseUrl": "/",
  "onBrokenLinks": "throw",
  "favicon": "img/favicon.ico",
  "organizationName": "gulcinofluoglu",
  "projectName": "blog",
  "themeConfig": {
    "navbar": {
      "title": "Bilgi Yönetimi Programı",
      "logo": {
        "alt": "Bilgi Yönetimi Programı",
        "src": "img/logo.svg"
      },
      "items": [
        {
          "to": "docs/",
          "activeBasePath": "docs",
          "label": "Dersler",
          "position": "left"
        },
        {
          "to": "blog",
          "label": "Blog",
          "position": "left"
        },
        {
          "href": "https://github.com/gulcinofluoglu/blog",
          "label": "GitHub",
          "position": "right"
        }
      ],
      "hideOnScroll": false
    },
    "footer": {
      "style": "dark",
      "links": [
        {
          "title": "Docs",
          "items": [
            {
              "label": "Temel Bilgi Teknolojileri",
              "to": "docs/"
            },
            {
              "label": "İşletim Sistemleri",
              "to": "docs/doc2/"
            }
          ]
        },
        {
          "title": "Bağlantılar",
          "items": [
            {
              "label": "Atatürk Üniversitesi",
              "href": "https://atauni.edu.tr/"
            },
            {
              "label": "ÖBS",
              "href": "https://obs.atauni.edu.tr/"
            },
            {
              "label": "E-Portal",
              "href": "https://atauni.edu.tr/eportal/"
            }
          ]
        },
        {
          "title": "Kişisel",
          "items": [
            {
              "label": "Blog",
              "to": "blog"
            },
            {
              "label": "GitHub",
              "href": "https://github.com/gulcinofluoglu"
            }
          ]
        }
      ],
      "copyright": "Copyright © 2020 Alternatik."
    },
    "colorMode": {
      "defaultMode": "light",
      "disableSwitch": false,
      "respectPrefersColorScheme": false,
      "switchConfig": {
        "darkIcon": "🌜",
        "darkIconStyle": {},
        "lightIcon": "🌞",
        "lightIconStyle": {}
      }
    }
  },
  "presets": [
    [
      "@docusaurus/preset-classic",
      {
        "docs": {
          "sidebarPath": "E:\\gulcin\\blog\\blog\\sidebars.js",
          "editUrl": "https://github.com/gulcinofluoglu/blog/edit/master/website/"
        },
        "blog": {
          "showReadingTime": true,
          "editUrl": "https://github.com/gulcinofluoglu/blog/edit/master/website/blog/"
        },
        "theme": {
          "customCss": "E:\\gulcin\\blog\\blog\\src\\css\\custom.css"
        }
      }
    ]
  ],
  "onDuplicateRoutes": "warn",
  "customFields": {},
  "plugins": [],
  "themes": []
};