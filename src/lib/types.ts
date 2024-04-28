export interface SeoProps {
    image?: string;
    url?: string;
    keywords?: string[];
    author?: string; // Author of the content
    charset?: string; // Character set for HTML document
    viewport?: string; // Viewport settings for responsive design
    robots?: string; // Instructions for web crawlers
    canonical?: string; // Canonical URL
    twitter?: {
      cardType?: 'summary' | 'summary_large_image' | 'app' | 'player';
      site?: string;
      siteId?: string;
      creator?: string;
      creatorId?: string;
      description?: string;
      title?: string;
      image?: string;
      imageAlt?: string;
      playerConfig: {
        player?: string;
        playerWidth?: string;
        playerHeight?: string;
        playerStream?: string;
      };
      appleConfig: {
        appNameiPhone?: string;
        appIdiPhone?: string;
        appUrliPhone?: string;
        appNameiPad?: string;
        appIdiPad?: string;
        appUrliPad?: string;
      };
      googleConfig: {
        appNameGooglePlay?: string;
        appIdGooglePlay?: string;
        appUrlGooglePlay?: string;
      };
    };
    facebook?: {
      appId?: string;
      pageId?: string;
      admins?: string;
    };
    openGraph?: {
      title?: string; // Open Graph title
      type?: string; // Type of the object, e.g., 'website', 'article'
      image?: string; // URL of the image
      url?: string; // URL of the page
      audio?: string; // URL to audio file
      description?: string; // Description of the object
      determiner?: string; // The word that appears before this object's title
      locale?: string; // The locale these tags are marked up in
      site_name?: string; // Site name
      video?: string; // URL to video file
    };
    jsonLd?: {
      '@context'?: string;
      '@type'?: string;
      name?: string;
      description?: string;
      url?: string;
      image?: string;
    };
  }
  