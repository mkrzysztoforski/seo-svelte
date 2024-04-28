# Svelte SEO Component

🚀 Enhance your Svelte application's SEO with this easy-to-use SEO component that supports essential meta tags and social media integrations.

## Features

- **SEO Basics**: Title, description, and keywords.
- **Social Media Ready**: Open Graph and Twitter Cards for better link previews.
- **Canonical URLs**: Avoid duplicate content issues.

## Installation

`npm i svelte-seo`

## Props

- `title` (string): The title of the webpage. **Required**
- `description` (string): A brief description of the webpage. **Required**
- `other` For all others please check the config **Not required**

## Usage

```svelte
<script>
    import Seo from './seo.svelte';
</script>

    <Seo title="Amazing Svelte App"
       description="Explore the features of our application."
       author="John Appleseed"
       keywords={['svelte', 'app', 'technology']}
       url="https://www.example.com/page"
       imageUrl="https://www.example.com/image.jpg"
    />
```

## Best Practices

- **Title**: Keep your titles under 60 characters to ensure they display fully in search results.
- **Description**: Aim for descriptions between 50-160 characters to provide enough detail while maintaining visibility in search results.
- **Keywords**: Use relevant keywords but avoid keyword stuffing.
- **URL and Image URL**: Ensure these are absolute URLs to help social media platforms and search engines properly index and display your content.

## Contributing

Feel free to fork this project and submit pull requests or create an issue if you find any bugs or have suggestions for improvements.

## License

Distributed under the MIT License.

## Emoji Legends

- 🚀 - New feature
- ✨ - Improvement
- 🐛 - Bugfix

---

Enhance your Svelte applications' online presence effectively with this SEO component! Feel free to adjust and expand it as needed to fit your specific requirements.
