<template>
  <section id="postbox" class="postbox-area pt-110 pb-80">
      <div class="container container-1330">
          <div class="row">
              <div class="col-xxl-8 col-xl-8 col-lg-8">
                  <div class="postbox-wrapper">
                      <!-- post box -->
                      <BlogStandardPost />
                      <!-- pagination -->
                      <div class="basic-pagination-wrap">
                          <div class="row">
                              <div class="col-xl-6">
                                  <!-- basic pagination -->
                                  <pagination-basic />
                              </div>
                          </div>
                      </div> 
                  </div>
              </div>
              <div class="col-xxl-4 col-xl-4 col-lg-4">
                <!-- blog sidebar area -->
                  <blog-sidebar-area/>
              </div>
          </div>
      </div>
  </section>
</template>

<script setup lang="ts">

</script>