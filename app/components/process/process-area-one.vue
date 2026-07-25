<template>
   <div class="crp-process-area p-relative pt-140 pb-100">
    <div class="crp-process-shape-wrap">
        <img class="crp-process-shape-1" data-speed="1.1" src="/img/home-09/process/shape-1.png" alt="shape">
        <img class="crp-process-shape-2" data-speed="1.1" src="/img/home-09/process/shape-3.png" alt="shape">
        <img class="crp-process-shape-3" data-speed="1.1" src="/img/home-09/process/shape-2.png" alt="shape">
    </div>
    <div class="container container-1330">
        <div class="row">
            <div class="col-xl-6">
                <div class="crp-process-title-box mb-85">
                    <span class="tp-section-subtitle-teko mb-25 tp_fade_anim" data-delay=".3">Simple process</span>
                    <h4 class="tp-section-title-teko tp_fade_anim" data-delay=".5">Understand the <br> business <span>process.</span></h4>
                </div>
            </div>
        </div>
        <div class="row">
            <div v-for="item in process_items" :key="item.id" class="col-xl-3 col-lg-4 col-md-6">
                <div class="crp-process-item mb-50 tp_fade_anim" :data-delay="item.delay">
                    <div class="crp-process-icon">
                        <img :src="item.icon" :alt="item.title">
                    </div>
                    <div class="crp-process-content">
                        <h4 class="crp-process-title-sm">{{ item.title }}</h4>
                        <p>
                            {{ item.description }}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
</template>

<script setup lang="ts">

 const process_items = [
      {
          id: 1,
          delay: ".3",
          icon: '/img/home-09/process/process-1.png',
          title: "Branding",
          description: "Brand identity design a the key to success whether you breath rebranding."
      },
      {
          id: 2,
          delay: ".5",
          icon: '/img/home-09/process/process-2.png',
          title: "Scratch",
          description: "Brand identity design a the key to success whether you breath rebranding."
      },
      {
          id: 3,
          delay: ".7",
          icon: '/img/home-09/process/process-3.png',
          title: "Thinking",
          description: "Brand identity design a the key to success whether you breath rebranding."
      },
      {
          id: 4,
          delay: ".9",
          icon: '/img/home-09/process/process-4.png',
          title: "Execution",
          description: "Brand identity design a the key to success whether you breath rebranding."
      }
  ];
</script>