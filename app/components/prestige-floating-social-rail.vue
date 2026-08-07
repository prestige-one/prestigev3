<template>
  <aside class="prestige-social-rail" aria-label="Follow Prestige One on social media">
    <nav class="prestige-social-rail__links">
      <a
        v-for="social in socialLinks"
        :key="social.name"
        class="prestige-social-rail__link"
        :style="{ '--prestige-social-accent': social.color }"
        :href="social.href"
        target="_blank"
        rel="noopener noreferrer"
        :aria-label="`Follow Prestige One on ${social.name}`"
      >
        <component :is="social.icon" class="prestige-social-rail__icon" />
        <span class="prestige-social-rail__tooltip">{{ social.name }}</span>
      </a>
    </nav>
  </aside>
</template>

<script setup lang="ts">
import FacebookIcon from "~/components/svg/social/fb-three.vue";
import InstagramIcon from "~/components/svg/social/instagram-two.vue";
import LinkedinIcon from "~/components/svg/social/linkedin-three.vue";
import WhatsappIcon from "~/components/svg/social/whatsapp-three.vue";
import XIcon from "~/components/svg/social/x.vue";
import YoutubeIcon from "~/components/svg/social/youtube.vue";

const socialLinks = [
  { name: "YouTube", href: "https://www.youtube.com/@byprestigeone", icon: YoutubeIcon, color: "#ff0000" },
  { name: "LinkedIn", href: "https://www.linkedin.com/company/byprestigeone", icon: LinkedinIcon, color: "#0a66c2" },
  { name: "WhatsApp", href: "https://wa.me/+971523412936", icon: WhatsappIcon, color: "#25d366" },
  { name: "X", href: "https://x.com/ByPrestigeOne", icon: XIcon, color: "#ffffff" },
  { name: "Instagram", href: "https://www.instagram.com/byprestigeone/", icon: InstagramIcon, color: "#e4405f" },
  { name: "Facebook", href: "https://www.facebook.com/ByPrestigeOne/", icon: FacebookIcon, color: "#1877f2" },
] as const;
</script>

<style scoped>
.prestige-social-rail {
	position: fixed;
	bottom: -5%;
	left: 0;
	z-index: 18;
	display: flex;
	width: 40px;
	padding: 0;
	flex-direction: column;
	align-items: center;
	color: rgba(255, 255, 255, 0.82);
	background: transparent;
	border: none;
	transform: translateY(-50%);
}

.prestige-social-rail__links {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 3px;
}

.prestige-social-rail__link {
  position: relative;
  display: grid;
  width: 34px;
  height: 34px;
  color: rgba(255, 255, 255, 0.78);
  border-radius: 50%;
  transition: color 0.24s ease, background-color 0.24s ease, transform 0.24s ease;
  place-items: center;
}

.prestige-social-rail__link:hover,
.prestige-social-rail__link:focus-visible {
  color: var(--prestige-social-accent, #fff);
  background: rgba(255, 255, 255, 0.09);
  transform: translateX(2px);
}

.prestige-social-rail__link:focus-visible {
  outline: 1px solid rgba(255, 255, 255, 0.7);
  outline-offset: 2px;
}

.prestige-social-rail__icon {
  display: grid;
  font-size: 18px;
  place-items: center;
}

.prestige-social-rail__icon :deep(svg) {
  display: block;
  width: 17px;
  height: 17px;
}

.prestige-social-rail__tooltip {
  position: absolute;
  top: 50%;
  left: calc(100% + 10px);
  padding: 7px 11px;
  color: #fff;
  font-size: 13px;
  line-height: 1;
  white-space: nowrap;
  background: rgba(13, 14, 16, 0.94);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 7px;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.24);
  opacity: 0;
  pointer-events: none;
  transform: translate(-7px, -50%);
  transition: opacity 0.22s ease, transform 0.22s ease;
}

.prestige-social-rail__link:hover .prestige-social-rail__tooltip,
.prestige-social-rail__link:focus-visible .prestige-social-rail__tooltip {
  opacity: 1;
  transform: translate(0, -50%);
}

.prestige-social-rail__line {
  width: 1px;
  height: 56px;
  margin: 10px 0 12px;
  background: rgba(255, 255, 255, 0.72);
}

.prestige-social-rail__follow {
  font-size: 12px;
  font-weight: 600;
  letter-spacing: 0.14em;
  line-height: 1;
  color: rgba(255, 255, 255, 0.9);
  writing-mode: vertical-rl;
  text-orientation: mixed;
}

@media (max-width: 767.98px) {
  .prestige-social-rail {
    top: 52%;
    width: 44px;
    padding: 8px 5px;
    border-radius: 0 11px 11px 0;
  }

  .prestige-social-rail__links { gap: 1px; }
  .prestige-social-rail__link { width: 32px; height: 32px; }
  .prestige-social-rail__icon { font-size: 16px; }
  .prestige-social-rail__icon :deep(svg) { width: 15px; height: 15px; }
  .prestige-social-rail__tooltip,
  .prestige-social-rail__line,
  .prestige-social-rail__follow { display: none; }
}

@media (prefers-reduced-motion: reduce) {
  .prestige-social-rail__link,
  .prestige-social-rail__tooltip {
    transition: none;
  }
}
</style>
