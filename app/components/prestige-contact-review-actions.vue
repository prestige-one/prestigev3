<template>
  <div class="prestige-contact-review-actions">
    <NuxtLink to="/#contact" class="prestige-contact-review-actions__contact">
      {{ $t('ap.reviews.contact') }}
    </NuxtLink>

    <div
      class="prestige-contact-review-actions__rating"
      :aria-label="$t('ap.reviews.ratingAria')"
    >
      <img
        src="/img/login/google.svg"
        alt=""
        class="prestige-contact-review-actions__google"
      >
      <div class="prestige-contact-review-actions__copy">
        <span class="prestige-contact-review-actions__score">
          4.8/5.0 <span class="prestige-contact-review-actions__star">&#9733;</span>
        </span>
        <span class="prestige-contact-review-actions__caption">{{ $t('ap.reviews.caption') }}</span>
      </div>
    </div>
  </div>
</template>

<style scoped>
.prestige-contact-review-actions {
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 18px;
}

.prestige-contact-review-actions__contact,
.prestige-contact-review-actions__rating {
  min-height: 50px;
  border-radius: 999px;
  background: #fff;
  color: #0b0b0b;
}

.prestige-contact-review-actions__contact {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-width: 182px;
  padding: 0 30px;
  font-size: 14px;
  font-weight: 700;
  letter-spacing: 1.1px;
  text-transform: uppercase;
  white-space: nowrap;
  transition: background-color 0.25s ease, color 0.25s ease, transform 0.25s ease;
}

.prestige-contact-review-actions__contact:hover {
  background: #efefef;
  color: #0b0b0b;
  transform: translateY(-2px);
}

.prestige-contact-review-actions__contact:focus-visible {
  outline: 2px solid #fbbc04;
  outline-offset: 3px;
}

.prestige-contact-review-actions__rating {
  display: inline-flex;
  align-items: center;
  min-width: 241px;
  padding: 0 25px;
  gap: 15px;
}

.prestige-contact-review-actions__google {
  width: 28px;
  height: 28px;
  flex: 0 0 auto;
}

.prestige-contact-review-actions__copy {
  display: flex;
  flex-direction: column;
  line-height: 1.25;
}

.prestige-contact-review-actions__score {
  font-size: 15px;
  font-weight: 700;
  color: #0b0b0b;
}

.prestige-contact-review-actions__star {
  color: #fbbc04;
}

.prestige-contact-review-actions__caption {
  font-size: 12px;
  color: #5d5d5d;
}

@media (max-width: 575.98px) {
  .prestige-contact-review-actions {
    align-items: stretch;
    flex-direction: column;
  }

  .prestige-contact-review-actions__contact,
  .prestige-contact-review-actions__rating {
    width: 100%;
  }

  .prestige-contact-review-actions__rating {
    justify-content: center;
  }
}
</style>
