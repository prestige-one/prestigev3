
<template>
  <div class="sidebar-wrapper">
    <!-- Search Widget -->
    <div class="sidebar-widget mb-30">
      <div class="sidebar-search">
        <form action="#">
          <div class="sidebar-search-input">
            <input type="text" placeholder="Search...">
            <button type="submit">
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M18.9999 19L14.6499 14.65M17 9C17 13.4183 13.4183 17 9 17C4.58172 17 1 13.4183 1 9C1 4.58172 4.58172 1 9 1C13.4183 1 17 4.58172 17 9Z"
                  stroke="currentcolor" stroke-opacity="0.8" stroke-width="2" stroke-linecap="round"
                  stroke-linejoin="round" />
              </svg>
            </button>
          </div>
        </form>
      </div>
    </div>

    <!-- Author Widget -->
    <div class="sidebar-widget mb-55">
      <div class="sidebar-widget-author text-center">
        <div class="sidebar-widget-author-img">
          <img :src="sidebarData.author.image" alt="">
        </div>
        <div class="sidebar-widget-author-content">
          <h4 class="sidebar-widget-author-name">{{ sidebarData.author.name }}</h4>
          <span>{{ sidebarData.author.role }}</span>
          <p v-html="sanitizeHtml(sidebarData.author.description)"/>
        </div>
        <div class="sidebar-widget-author-social mb-30">
          <a 
            v-for="social in sidebarData.author.social" 
            :key="social.id" 
            :href="social.link"
          >
            <span v-html="sanitizeHtml(social.icon)"/>
          </a>
        </div>
        <div class="sidebar-widget-author-btn">
          <a class="tp-btn-yellow-green sidebar-btn w-100" href="#">
            <span>
              <span class="text-1">Agntix Theme</span>
              <span class="text-2">Agntix Theme</span>
            </span>
          </a>
        </div>
      </div>
    </div>

    <!-- Category Widget -->
    <div class="sidebar-widget mb-55">
      <h3 class="sidebar-widget-title">Category</h3>
      <div class="sidebar-widget-category">
        <ul>
          <li v-for="category in sidebarData.categories" :key="category.id">
            <a class="d-flex align-items-center justify-content-between" :href="category.link">
              {{ category.name }}
              <span>{{ category.count }}</span>
            </a>
          </li>
        </ul>
      </div>
    </div>

    <!-- Latest Posts Widget -->
    <div class="sidebar-widget mb-55">
      <h3 class="sidebar-widget-title">Latest Posts</h3>
      <div class="rc-post-wrap">
        <div 
          v-for="post in sidebarData.latestPosts" 
          :key="post.id" 
          class="rc-post d-flex align-items-center"
        >
          <div class="rc-post-thumb">
            <a :href="post.link">
              <img :src="post.image" alt="">
            </a>
          </div>
          <div class="rc-post-content">
            <div class="rc-post-category">
              <a :href="post.categoryLink">{{ post.category }}</a>
            </div>
            <h3 class="rc-post-title">
              <a :href="post.link">{{ post.title }}</a>
            </h3>
            <div class="rc-post-meta">
              <span>{{ post.date }}</span>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Tags Widget -->
    <div class="sidebar-widget">
      <h3 class="sidebar-widget-title">Tags</h3>
      <div class="sidebar-widget-content">
        <div class="tagcloud">
          <a 
            v-for="tag in sidebarData.tags" 
            :key="tag.id" 
            :href="tag.link"
          >
            {{ tag.name }}
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
 const sidebarData = {
  author: {
    image: "/img/blog/blog-standard/blog-av-1.jpg",
    name: "Richard Scott",
    role: "Content writer at Kanik",
    description: "Crafting Digital Experiences <br> with Purpose!",
    social: [
      {
        id: 1,
        icon: `<svg width="18" height="17" viewBox="0 0 18 17" fill="none" xmlns="http://www.w3.org/2000/svg"> <path fill-rule="evenodd" clip-rule="evenodd" d="M5.67227 0H0L6.72535 8.79151L0.430223 16.1665H3.33876L8.09997 10.5886L12.3277 16.1153H18L11.0793 7.06826L11.0915 7.08386L17.0504 0.102701H14.1418L9.71667 5.28701L5.67227 0ZM3.131 1.53968H4.89685L14.869 14.5755H13.1032L3.131 1.53968Z" fill="currentcolor" /></svg>`,
        link: "#"
      },
      {
        id: 2,
        icon: `<svg width="19" height="19" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M17.9994 10.5256C17.2116 10.3786 16.4014 10.302 15.5746 10.302C11.025 10.302 6.97863 12.6212 4.39943 16.2214M15.45 3.53634C12.79 6.63763 8.79271 8.61014 4.32318 8.61014C3.17971 8.61014 2.06716 8.48103 1 8.23695M11.7254 17.9135C11.9384 16.8869 12.0503 15.8237 12.0503 14.7345C12.0503 9.39347 9.35944 4.67635 5.25026 1.84649M18 9.45632C18 14.1266 14.1944 17.9126 9.5 17.9126C4.80558 17.9126 1 14.1266 1 9.45632C1 4.78603 4.80558 1 9.5 1C14.1944 1 18 4.78603 18 9.45632Z" stroke="currentcolor" stroke-width="1.5" stroke-linejoin="round" /></svg>`,
        link: "#"
      },
      {
        id: 3,
        icon: `<svg width="20" height="19" viewBox="0 0 20 19" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M14.2426 4.82562H14.2496M5.27195 1H13.8159C16.1752 1 18.0878 2.90279 18.0878 5.25V13.75C18.0878 16.0972 16.1752 18 13.8159 18H5.27195C2.91262 18 1 16.0972 1 13.75V5.25C1 2.90279 2.91262 1 5.27195 1ZM12.9615 8.96482C13.0669 9.67223 12.9455 10.3947 12.6144 11.0295C12.2833 11.6643 11.7595 12.179 11.1174 12.5005C10.4753 12.8221 9.74767 12.934 9.03796 12.8204C8.32825 12.7067 7.67263 12.3734 7.16433 11.8677C6.65603 11.362 6.32096 10.7098 6.20675 10.0037C6.09255 9.29764 6.20504 8.57373 6.52823 7.93494C6.85141 7.29615 7.36883 6.775 8.00688 6.44563C8.64494 6.11625 9.37115 5.99542 10.0822 6.10032C10.8075 6.20732 11.479 6.54356 11.9975 7.05938C12.516 7.5752 12.854 8.24324 12.9615 8.96482Z" stroke="currentcolor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" /></svg>`,
        link: "#"
      }
    ]
  },
  categories: [
    { id: 1, name: "Articles", count: "08", link: "/blog-grid" },
    { id: 2, name: "Business", count: "04", link: "/blog-grid" },
    { id: 3, name: "Family & Divorce", count: "12", link: "/blog-grid" },
    { id: 4, name: "Web Design", count: "16", link: "/blog-grid" }
  ],
  latestPosts: [
    {
      id: 1,
      image: "/img/blog/blog-standard/blog-rp-1.jpg",
      category: "Design",
      categoryLink: "#",
      title: "Fueling ambition & Achieving your goals",
      link: "/blog-details",
      date: "July 15, 2023"
    },
    {
      id: 2,
      image: "/img/blog/blog-standard/blog-rp-2.jpg",
      category: "Design",
      categoryLink: "#",
      title: "Behind the scenes of creative processes",
      link: "/blog-details",
      date: "July 15, 2023"
    },
    {
      id: 3,
      image: "/img/blog/blog-standard/blog-rp-3.jpg",
      category: "Design",
      categoryLink: "#",
      title: "Starting seo as your home business",
      link: "/blog-details",
      date: "July 15, 2023"
    }
  ],
  tags: [
    { id: 1, name: "Creative", link: "#" },
    { id: 2, name: "Design Trends", link: "#" },
    { id: 3, name: "Development", link: "#" },
    { id: 4, name: "Lifestyle", link: "#" },
    { id: 5, name: "Agntix", link: "#" }
  ]
};
</script>