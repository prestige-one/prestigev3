
<template>
  <div class="st-counter-area st-counter-ptb pb-160">
    <div class="container container-1320">
        <div class="st-counter-wrapper">
            <div class="row gx-0">
                <div v-for="item in counterData" :key="item.id" class="col-md-3 col-sm-6">
                    <div class="st-counter-item text-center">
                        <h4><counter-item :min="0" :max="item.value" />{{ item.suffix }}</h4>
                        <span v-html="sanitizeHtml(item.label)"/>
                    </div>
                </div>
            </div>
        </div>
    </div>
  </div>
</template>

<script setup lang="ts">
  const counterData = [
    {
        id: 1,
        value: 55,
        suffix: 'k',
        duration: 1,
        label: 'Projects <br> completed',
        className: ''
    },
    {
        id: 2,
        value: 12,
        suffix: 'k+',
        duration: 1,
        label: 'Happy clients <br> over the world',
        className: ''
    },
    {
        id: 3,
        value: 15,
        suffix: '',
        duration: 1,
        label: 'Years of <br> experience',
        className: ''
    },
    {
        id: 4,
        value: 68,
        suffix: 'k',
        duration: 1,
        label: 'Awards <br> achievement',
        className: ''
    }
];
</script>