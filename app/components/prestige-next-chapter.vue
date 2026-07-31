<template>
  <section class="prestige-next-area pt-140 pb-160">
    <div class="container container-1230">
      <div class="prestige-next-inner">
        <h2 class="prestige-next-title tp_reveal_anim" data-delay="0.05">
          The Vision Continues.
        </h2>
        <p class="prestige-next-lead tp_fade_anim" data-fade-from="bottom" data-fade-offset="24">
          New developments, new opportunities, and more to come from Prestige One.
        </p>
        <div class="prestige-next-actions tp_fade_anim" data-fade-from="bottom" data-fade-offset="24" data-delay="0.1">
          <nuxt-link to="/projects" class="prestige-next-btn prestige-next-btn--solid">
            Explore Our Developments <span aria-hidden="true">→</span>
          </nuxt-link>
          <nuxt-link to="/contact-us" class="prestige-next-btn prestige-next-btn--ghost">
            Get in Touch <span aria-hidden="true">→</span>
          </nuxt-link>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts"></script>

<style scoped>
.prestige-next-area {
  border-top: 1px solid rgba(255, 255, 255, 0.07);
  position: relative;
  overflow: hidden;
}
.prestige-next-area::before {
  content: "";
  position: absolute;
  top: -10%;
  left: 50%;
  transform: translateX(-50%);
  width: min(760px, 92vw);
  height: 420px;
  z-index: 0;
  pointer-events: none;
  background-image:
    radial-gradient(circle at 60% 40%, rgba(120, 210, 255, 0.16), transparent 60%),
    radial-gradient(circle at 35% 65%, rgba(217, 179, 130, 0.14), transparent 60%);
  filter: blur(70px);
}
.prestige-next-inner {
  position: relative;
  z-index: 1;
  max-width: 820px;
  margin: 0 auto;
  text-align: center;
}
.prestige-next-title {
  margin: 0 0 22px;
  font-size: clamp(34px, 5vw, 68px);
  font-weight: 500;
  line-height: 1.06;
  letter-spacing: -1px;
  color: #fff;
}
.prestige-next-lead {
  margin: 0 auto 40px;
  max-width: 560px;
  font-size: clamp(15px, 1.3vw, 19px);
  line-height: 1.7;
  color: rgba(255, 255, 255, 0.7);
}
.prestige-next-actions {
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
  justify-content: center;
}
.prestige-next-btn {
  display: inline-flex;
  align-items: center;
  gap: 10px;
  padding: 15px 32px;
  border-radius: 60px;
  font-size: 14px;
  letter-spacing: 0.04em;
  transition: transform 0.3s ease, background 0.3s ease, color 0.3s ease;
}
.prestige-next-btn span { transition: transform 0.3s ease; }
.prestige-next-btn:hover span { transform: translateX(4px); }
.prestige-next-btn--solid {
  color: #0b0b0d;
  background: var(--tp-common-gold, #d9b382);
}
.prestige-next-btn--solid:hover { color: #0b0b0d; background: #e7c79c; transform: translateY(-2px); }
.prestige-next-btn--ghost {
  color: #fff;
  border: 1px solid rgba(255, 255, 255, 0.25);
}
.prestige-next-btn--ghost:hover { color: #fff; background: rgba(255, 255, 255, 0.08); transform: translateY(-2px); }

@media (max-width: 767.98px) {
  .prestige-next-area {
    padding-top: 100px;
    padding-bottom: 110px;
  }
}
</style>
