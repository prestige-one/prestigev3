<template>
  <div :class="`dgm-service-area dgm-service-radius ${topCls}`" :style="{ backgroundColor: isDark ? '#1A1B1E' : '' }">
    <div class="container container-1230">
        <div class="row">
            <div class="col-xl-7">
                <div class="dgm-service-title-box z-index-1 mb-60">
                    <span :class="`tp-section-subtitle subtitle-grey mb-15 text-${darkText?'black':'white'} tp_fade_anim`" data-delay=".3">Services</span>
                    <h4 :class="`tp-section-title-grotesk text-${darkText?'black':'white'} tp_fade_anim`" data-delay=".5">
                        Growing sales through exceptional
                        <span class="p-relative">
                            services
                            <span class="tp-section-title-shape">
                                <svg-title-shape-one/>
                            </span>
                        </span>
                    </h4>
                </div>
            </div>
        </div>
        <div :class="`dgm-service-wrap ${wrapCls}`">
            <div class="row">
                <div class="col-xl-12">
                    <div v-for="item in service_data" :key="item.id" class="dgm-service-item p-relative tp_fade_anim">
                        <div class="dgm-service-bg">
                            <img src="/img/home-03/service/service-bg.jpg" alt="">
                        </div>
                        <div class="row align-items-center">
                            <div class="col-lg-5">
                                <div :class="`dgm-service-content-left ${darkText?'black-text':''} d-inline-flex align-items-center`">
                                    <span>{{item.id > 9 ? item.id : '0' + item.id}}</span>
                                    <h4 class="dgm-service-title-sm">
                                      <nuxt-link href="/service-details">
                                        <div v-html="sanitizeHtml(item.title)"/>
                                      </nuxt-link>
                                    </h4>
                                </div>
                            </div>
                            <div class="col-lg-7">
                                <div :class="`dgm-service-content-right ${darkText?'black-text':''} d-flex align-items-center justify-content-between`">
                                    <p>We immerse ourselves in your issues and we put our <br> knowledge
                                        and expertise at your service</p>
                                    <nuxt-link class="dgm-service-link" href="/service-details">
                                        <span>
                                            <svg-arrow-one width="14" height="14" view-box="0 0 14 14" path-value="M0.880859 13L12.8809 1M12.8809 1H0.880859M12.8809 1V13" stroke-width="1.5" />
                                            <svg-arrow-one width="14" height="14" view-box="0 0 14 14" path-value="M0.880859 13L12.8809 1M12.8809 1H0.880859M12.8809 1V13" stroke-width="1.5" />
                                        </span>
                                    </nuxt-link>
                                </div>
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
interface Props {
    topCls?: string;
    wrapCls?: string;
    darkText?: boolean;
}

withDefaults(defineProps<Props>(), {
    topCls: 'pt-120 black-bg-5 z-index-1',
    wrapCls: '',
    darkText: false
})

const service_data = [
  {
        id: 1,
        title: "SEO <br> Marketing",
        description: "We immerse ourselves in your issues and we put our <br> knowledge and expertise at your service",
    },
    {
        id: 2,
        title: "Social <br> Marketing",
        description: "We immerse ourselves in your issues and we put our <br> knowledge and expertise at your service",
    },
    {
        id: 3,
        title: "Content <br> Marketing",
        description: "We immerse ourselves in your issues and we put our <br> knowledge and expertise at your service",
    },
    {
        id: 4,
        title: "Email <br> Marketing",
        description: "We immerse ourselves in your issues and we put our <br> knowledge and expertise at your service",
    },
];

const { isDark } = useIsDark();
</script>
