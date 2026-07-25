<template>
 <div id="down" class="tp-blog-gird-sidebar-ptb pb-70">
    <div class="container container-1330">
      <div class="row">
        <blog-grid-col-item
          v-for="blog in blog_data"
          :key="blog.id"
          :blog="blog"
          :col-class="'col-lg-4 col-md-6'"
          font-size=""
        />
        <div class="col-lg-12">
          <div class="basic-pagination-wrap mt-20 text-center">
            <div class="row">
              <div class="col-lg-12">
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

const blog_data = [
  {
    id: 1,
    date: "April 15, 2025",
    author: "wpuser",
    authorImg: '/img/blog/blog-masonry/blog-masonry-user-1.jpg',
    category: " Inspiration",
    title: "Understanding the process <br> of 3D modeling.",
    image: '/img/blog/blog-masonry/blog-masonry-thumb-1.jpg',
  },
  {
    id: 2,
    date: "April 15, 2025",
    author: "Sophia",
    authorImg: '/img/blog/blog-masonry/blog-masonry-user-3.jpg',
    category: " UX Design",
    title: "8 Tips to Design Better Text <br> Input Controls",
    image: '/img/blog/blog-masonry/blog-masonry-thumb-3.jpg',
  },
  {
    id: 3,
    date: "April 15, 2025",
    author: "Logan Garner",
    authorImg: '/img/blog/blog-masonry/blog-masonry-user-2.jpg',
    category: "UX Design",
    title: "21 Web Design Mistakes to <br> Avoid Right Now",
    image: '/img/blog/blog-masonry/blog-masonry-thumb-2.jpg',
    videoUrl: "VCPGMjCW0is"
  },
  {
    id: 4,
    date: "April 15, 2025",
    author: "Jessamine Mumtaz",
    authorImg: '/img/blog/blog-masonry/blog-masonry-user-4.jpg',
    category: "Inspiration",
    title: "Everything You Should Know <br> About Return",
    image: '/img/blog/blog-masonry/blog-masonry-thumb-4.jpg',
  },
  {
    id: 5,
    date: "April 15, 2025",
    author: "Lynn Chang",
    authorImg: '/img/blog/blog-masonry/blog-masonry-user-5.jpg',
    category: " UX Design",
    title: "Understanding the process <br> of 3D modeling.",
    image: '/img/blog/blog-masonry/blog-masonry-thumb-7.jpg',
  },
  {
    id: 6,
    date: "April 15, 2025",
    author: "Silent Cabral",
    authorImg: '/img/blog/blog-masonry/blog-masonry-user-6.jpg',
    category: "UX Design",
    title: "The role of social media in <br> shaping society",
    image: '/img/blog/blog-masonry/blog-masonry-thumb-8.jpg',
  },
]
</script>
