<template>
 <div id="down" class="tp-blog-masonry-ptb pb-70">
    <div class="container container-1330">
      <masonry-wall :items="blogData" :column-width="330" :gap="25">
        <template #default="{ item }">
          <blog-masonry-item :item="item" />
        </template>
      </masonry-wall>
    </div>
  </div>
</template>

<script setup lang="ts">


const blogData = [
    {
        id: 1,
        type: "standard",
        author: {
            name: "wpuser",
            role: "Administrator",
            image: '/img/blog/blog-masonry/blog-masonry-user-1.jpg'
        },
        date: "April 15, 2025",
        image: '/img/blog/blog-masonry/blog-masonry-thumb-1.jpg',
        category: "Inspiration",
        title: "Understanding the process of 3D modeling.",
        excerpt: "Learn about the intricate process of 3D modeling and how it transforms ideas into digital reality.",
        videoId: null
    },
    // Type 2: Text-only blog post
    {
        id: 2,
        type: "text-only",
        author: {
            name: "Ronald Lara",
            role: "Administrator",
            image: '/img/blog/blog-masonry/blog-masonry-user-3.jpg'
        },
        date: "April 15, 2025",
        category: "Branding",
        title: "The role of social media in shaping society",
        excerpt: "Explore how social media platforms have become powerful tools that influence cultural norms and societal values."
    },
    // Type 3: Video blog post
    {
        id: 3,
        type: "video",
        author: {
            name: "Eric Young",
            role: "Administrator",
            image: '/img/blog/blog-masonry/blog-masonry-user-2.jpg'
        },
        date: "April 15, 2025",
        image: '/img/blog/blog-masonry/blog-masonry-thumb-2.jpg',
        category: "UX Design",
        title: "8 Tips to Design Better Text Input Controls",
        excerpt: "Discover practical tips to improve user experience with text input controls in your designs.",
        videoId: "VCPGMjCW0is"
    },
    // Additional posts to demonstrate all types
    {
        id: 4,
        type: "standard",
        author: {
            name: "Abbas",
            role: "Administrator",
            image: '/img/blog/blog-masonry/blog-masonry-user-4.jpg'
        },
        date: "April 15, 2025",
        image: '/img/blog/blog-masonry/blog-masonry-thumb-3.jpg',
        category: "UX Design",
        title: "21 Web Design Mistakes to Avoid Right Now",
        excerpt: "Common pitfalls in web design and how to avoid them for better user engagement."
    },
    // Type 4: Quote post
    {
        id: 5,
        type: "quote",
        category: "Branding",
        content: "A small river named Duden flows by their place & supplies it with the necessary regelialia. It is...",
        authorName: "Damien Cabral"
    },
    // Type 5: Link post
    {
        id: 6,
        type: "link",
        category: "Branding",
        content: "The rise of video marketing: engaging your audience with visual content",
        authorName: "Damien Cabral"
    },
    {
        id: 7,
        type: "standard",
        author: {
            name: "Elvin Bond",
            role: "Administrator",
            image: '/img/blog/blog-masonry/blog-masonry-user-5.jpg'
        },
        date: "April 15, 2025",
        image: '/img/blog/blog-masonry/blog-masonry-thumb-5.jpg',
        category: "UX Design",
        title: "6 Big Commerce Design Tips For Big Results",
        excerpt: "Maximize your e-commerce potential with these design strategies that drive conversions."
    },
    {
        id: 8,
        type: "standard",
        author: {
            name: "Koen Chegg",
            role: "Administrator",
            image: '/img/blog/blog-masonry/blog-masonry-user-6.jpg'
        },
        date: "April 15, 2025",
        image: '/img/blog/blog-masonry/blog-masonry-thumb-6.jpg',
        category: "UX Design",
        title: "21 Web Design Mistakes to Avoid Right Now",
        excerpt: "Learn from common design errors to create more effective and user-friendly websites."
    },
    {
        id: 9,
        type: "standard",
        author: {
            name: "Albert Juan",
            role: "Administrator",
            image: '/img/blog/blog-masonry/blog-masonry-user-7.jpg'
        },
        date: "April 15, 2025",
        image: '/img/blog/blog-masonry/blog-masonry-thumb-4.jpg',
        category: "Inspiration",
        title: "Everything You Should Know About Return",
        excerpt: "Understanding the importance of return policies in e-commerce and customer satisfaction."
    }
];
</script>