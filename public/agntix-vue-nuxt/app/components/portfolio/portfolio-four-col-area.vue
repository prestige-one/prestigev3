<template>
  <div>
    <!-- Breadcrumb Section -->
    <div class="tp-breadcrumb-area tp-breadcrumb-ptb" data-background="/img/blog/blog-masonry/blog-bradcum-bg.png" style="background-image: url(/img/blog/blog-masonry/blog-bradcum-bg.png);">
      <div class="container container-1430">
        <div class="row justify-content-center">
          <div class="col-xl-12">
            <div class="tp-portfolio-inner-box pb-100">
              <div class="tp-portfolio-heading pb-30 d-flex p-relative tp_fade_anim">
                <span class="tp-section-subtitle pre orange-color tp_fade_anim mr-95">
                  Portfolio 
                  <svg xmlns="http://www.w3.org/2000/svg" width="82" height="9" viewBox="0 0 82 9" fill="none">
                    <path d="M78 7.95425L81.5 4.47169L78 0.989136M1 3.98977H81V4.98977H1V3.98977Z" stroke="#FF5722" stroke-linecap="round" stroke-linejoin="round" />
                  </svg>
                </span>
                <h3 class="tp-blog-title fs-100 tp_fade_anim">
                  We Make <img src="/img/about-us/about-us-4/about-us-4-shape-1.png" alt=""> <br> Digital Beautiful
                </h3>
              </div>
              
              <!-- Dynamic Filter Tabs -->
              <div class="tp-portfolio-inner-tab-wrap">
                <nav>
                  <div id="nav-tab" class="nav nav-tabs" role="tablist">
                    <button 
                      v-for="category in categories" 
                      :key="category.id"
                      class="nav-link" 
                      :class="{ active: activeCategory === category.id }"
                      type="button" 
                      role="tab"
                      @click="filterPortfolio(category.id)"
                    >
                      {{ category.name }}
                    </button>
                  </div>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Portfolio Content Section -->
    <div class="tp-portfolio-inner-ptb pb-70">
      <div class="container container-1830">
        <div class="tp-portfolio-tab-content-wrap">
          <div class="tab-content">
            <div class="tab-pane fade show active">
              <div class="row">
                <div 
                  v-for="item in filteredPortfolio" 
                  :key="item.id"
                  class="col-xl-3 col-lg-4 col-md-6"
                >
                  <div class="tp-portfolio-inner-item mb-65">
                    <div class="tp-portfolio-inner-thumb">
                      <a href="#"><img :src="item.image" :alt="item.title"></a>
                    </div>
                    <div class="tp-portfolio-inner-content">
                      <h4 class="tp-portfolio-inner-title fs-30">
                        <a class="tp-line-white" href="#">{{ item.title }}</a>
                      </h4>
                      <span>{{ item.category }}</span>
                    </div>
                  </div>
                </div>
              </div>
              
              <!-- No Results Message -->
              <div v-if="filteredPortfolio.length === 0" class="row">
                <div class="col-12 text-center">
                  <p class="fs-20">No projects found in this category.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">

// Portfolio data
const portfolio_data = [
  {
    id: 1,
    image: '/img/portfolio/portfolio-col-3/portfolio-thumb-1.jpg',
    title: "Olivia Rivers",
    category: "Branding - 2025",
    categoryType: "branding"
  },
  {
    id: 2,
    image: '/img/portfolio/portfolio-col-3/portfolio-thumb-2.jpg',
    title: "Corporate Branding",
    category: "Agency - 2025",
    categoryType: "agency"
  },
  {
    id: 3,
    image: '/img/portfolio/portfolio-col-3/portfolio-thumb-3.jpg',
    title: "Mobile app",
    category: "Development - 2025",
    categoryType: "development"
  },
  {
    id: 4,
    image: '/img/portfolio/portfolio-col-3/portfolio-thumb-4.jpg',
    title: "Simple Logistics",
    category: "Marketing - 2025",
    categoryType: "marketing"
  },
  {
    id: 5,
    image: '/img/portfolio/portfolio-col-3/portfolio-thumb-5.jpg',
    title: "Electro Hub",
    category: "Design - 2025",
    categoryType: "design"
  },
  {
    id: 6,
    image: '/img/portfolio/portfolio-col-3/portfolio-thumb-6.jpg',
    title: "Soko Project",
    category: "Agency - 2025",
    categoryType: "agency"
  },
  {
    id: 7,
    image: '/img/portfolio/portfolio-col-3/portfolio-thumb-7.jpg',
    title: "Pastel Ladies",
    category: "Branding - 2025",
    categoryType: "branding"
  },
  {
    id: 8,
    image: '/img/portfolio/portfolio-col-3/portfolio-thumb-8.jpg',
    title: "Venus Rebrand",
    category: "Branding - 2025",
    categoryType: "branding"
  },
]

// Categories
const categories = [
  { id: 'all', name: 'All Projects' },
  { id: 'marketing', name: 'Marketing' },
  { id: 'agency', name: 'Agency' },
  { id: 'branding', name: 'Branding' },
  { id: 'design', name: 'Design' },
  { id: 'development', name: 'Development' },
]

// Active category state
const activeCategory = ref('all')

// Filter function
const filterPortfolio = (categoryId: string) => {
  activeCategory.value = categoryId
}

// Computed property for filtered portfolio
const filteredPortfolio = computed(() => {
  if (activeCategory.value === 'all') {
    return portfolio_data
  }
  return portfolio_data.filter(item => item.categoryType === activeCategory.value)
})
</script>
