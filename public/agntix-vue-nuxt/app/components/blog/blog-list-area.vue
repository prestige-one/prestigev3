<template>
  <div id="down" class="tp-blog-list-ptb pb-80">
    <div class="container container-1230">
      <div class="row">
        <div class="col-lg-12">
          <div class="tp-blog-list-item-wrap pb-10">
            <div 
              v-for="blog in blogListData" 
              :key="blog.id" 
              class="tp-blog-list-item mb-40"
            >
              <div class="row">
                <!-- Left side (date, author, category) -->
                <div class="col-lg-3 col-md-6">
                  <div class="tp-blog-list-item-content">
                    <div class="tp-blog-list-item-tags">
                      <p>{{ blog.date }}</p>
                      <span class="tp-blog-list-item-tags-name">{{ blog.author }}</span>
                      <span class="tp-blog-list-item-meta">{{ blog.category }}</span>
                    </div>
                  </div>
                </div>

                <!-- Title -->
                <div class="col-lg-5 col-md-6">
                  <div class="tp-blog-list-item-title-box">
                    <h4 class="tp-blog-list-item-title">
                      <NuxtLink 
                      :to="'/blog-details'" 
                      class="tp-line-white" 
                      
                      >
                      
                      <span v-html="sanitizeHtml(blog.title)"/>
                     </NuxtLink>
                    </h4>
                  </div>
                </div>

                <!-- Thumbnail -->
                <div class="col-lg-4">
                  <div class="tp-blog-list-item-thumb text-lg-end">
                    <NuxtLink :to="'/blog-details'">
                      <img 
                        :src="blog.image" 
                        :alt="blog.author || 'Blog author'" 
                      >
                    </NuxtLink>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div class="col-lg-12">
          <div class="basic-pagination-wrap">
            <div class="row">
              <div class="col-xl-6">
                <pagination-basic />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
 const blogListData = [
  {
    id: 1,
    date: "Aug 3, 2025",
    author: "Damien Cabral",
    category: "Marketing",
    title: "Simplicity is process <br/> the obvious and adding <br/> meaningful.",
    image: "/img/blog/blog-list/blog-list-1.jpg",
  },
  {
    id: 2,
    date: "Aug 3, 2025",
    author: "Cabral's Legacy",
    category: "Design",
    title: "We came to with a complex <br/> set of requirements and <br/> delivered.",
    image: "/img/blog/blog-list/blog-list-2.jpg",
  },
  {
    id: 3,
    date: "Aug 3, 2025",
    author: "Cabral's Secret",
    category: "Inspiration",
    title: "Design can speak the <br/> in tongue of art force of <br/> commerce.",
    image: "/img/blog/blog-list/blog-list-3.jpg",
  },
  {
    id: 4,
    date: "Aug 3, 2025",
    author: "Silent Cabral",
    category: "Branding",
    title: "Common UX painpoints in <br/> Dashboard-related projects <br/> you must know",
    image: "/img/blog/blog-list/blog-list-4.jpg",
  },
];
</script>