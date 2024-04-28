<script lang="ts">
    import { onMount } from 'svelte';
    import type { SeoProps } from './types.ts';
    export let title: string;
    export let description: string;
    export let config: undefined | SeoProps = undefined;

    let jsonLdScriptContent = `{}`;

    onMount(() => {
      const jsonLd = {
        "@context": "http://schema.org",
        "@type": config?.jsonLd?["@type"] || 'WebSite',
        "name": title,
        "url": config?.url,
        "description": description,
        "author": {
          "@type": "Person",
          "name": config?.author
        },
        "image": config?.image
      };
      jsonLdScriptContent = JSON.stringify(jsonLd);
    });
</script>

<svelte:head>
    <!-- Essential -->
    <title>{title}</title>
    <meta name="description" content={description} />
    <meta property="og:title" content={title} />
    <meta property="og:description" content={description} />
    <meta charset={config?.charset || 'UTF-8'}>
    <meta name="viewport" content={config?.viewport || 'width=device-width, initial-scale=1.0'}>
    <meta name="robots" content={config?.robots || 'index, follow'} />
    
  
    {#if config?.author}
      <meta name="author" content={config?.author} />
    {/if}
    {#if config?.keywords?.length > 0}
      <meta name="keywords" content={config?.keywords?.join(', ')} />
    {/if}
    {#if config?.url}
      <link rel="canonical" href={config?.url} />
    {/if}
  
    <!-- Open Graph -->
    {#if config?.openGraph}
      <meta property="og:type" content={config?.openGraph?.type || "website"} />
      <meta property="og:url" content={config?.url} />
      <meta property="og:image" content={config?.image} />
      <meta property="og:site_name" content={config?.openGraph?.site_name} />
      <meta property="og:locale" content={config?.openGraph?.locale} />
      <meta property="og:audio" content={config?.openGraph?.audio} />
      <meta property="og:video" content={config?.openGraph?.video} />
    {/if}
  
    <!-- Facebook -->
    {#if config?.facebook}
      <meta property="fb:app_id" content={config?.facebook?.appId} />
      <meta property="fb:page_id" content={config?.facebook?.pageId} />
      <meta property="fb:admins" content={config?.facebook?.admins} />
    {/if}
  
    <!-- Twitter -->
    {#if config?.twitter}
      <meta property="twitter:card" content={config?.twitter?.cardType} />
      <meta property="twitter:site" content={config?.twitter?.site} />
      <meta property="twitter:site:id" content={config?.twitter?.siteId} />
      <meta property="twitter:creator" content={config?.twitter?.creator} />
      <meta property="twitter:creator:id" content={config?.twitter?.creatorId} />
      <meta property="twitter:title" content={title} />
      <meta property="twitter:description" content={description} />
      <meta property="twitter:image" content={config?.twitter?.image} />
      <meta property="twitter:image:alt" content={config?.twitter?.imageAlt} />
  
      {#if config.twitter.playerConfig}
        <meta property="twitter:player" content={config?.twitter?.player} />
        <meta property="twitter:player:width" content={config?.twitter?.playerWidth} />
        <meta property="twitter:player:height" content={config?.twitter?.playerHeight} />
        <meta property="twitter:player:stream" content={config?.twitter?.playerStream} />
      {/if}
  
      {#if config.twitter.appleConfig}
        <meta name="twitter:app:name:iphone" content={config?.twitter?.appNameiPhone} />
        <meta name="twitter:app:id:iphone" content={config?.twitter?.appIdiPhone} />
        <meta name="twitter:app:url:iphone" content={config?.twitter?.appUrliPhone} />
        <meta name="twitter:app:name:ipad" content={config?.twitter?.appNameiPad} />
        <meta name="twitter:app:id:ipad" content={config?.twitter?.appIdiPad} />
        <meta name="twitter:app:url:ipad" content={config?.twitter?.appUrliPad} />
      {/if}
  
      {#if config.twitter.googleConfig}
        <meta name="twitter:app:name:googleplay" content={config?.twitter?.appNameGooglePlay} />
        <meta name="twitter:app:id:googleplay" content={config?.twitter?.appIdGooglePlay} />
        <meta name="twitter:app:url:googleplay" content={config?.twitter?.appUrlGooglePlay} />
      {/if}
    {/if}
  
    <!-- Additional JSON-LD structured data -->
    {#if config?.jsonLd}
      <script type="application/ld+json">
        {@html jsonLdScriptContent}
      </script>
    {/if}
</svelte:head>
