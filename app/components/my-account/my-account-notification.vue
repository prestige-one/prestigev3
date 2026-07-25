<template>
    <div class="profile__notification">
        <div class="profile__notification-top mb-30">
            <h3 class="profile__notification-title">My activity settings</h3>
            <p>
                Stay up to date with notifications on activity that involves you,
                including mentions, messages, replies to your bids, new items, sales,
                and administrative updates.
            </p>
        </div>
        <div class="profile__notification-wrapper">
            <div v-for="notification in notificationData" :key="notification.id" class="profile__notification-item mb-20">
                <div class="form-check form-switch d-flex align-items-center">
                    <input :id="notification.id" class="form-check-input" type="checkbox" role="switch" :checked="notification.checked" >
                    <label class="form-check-label" :for="notification.id">
                        {{ notification.label }}
                    </label>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">

const notificationData = [
    { id: "like", label: "Like & Follows Notifications", checked: true },
    { id: "post", label: "Post, Comments & Replies Notifications", checked: true },
    { id: "new", label: "New Product Notifications", checked: true },
    { id: "sale", label: "Product on sale Notifications", checked: true },
    { id: "payment", label: "Payment Notifications", checked: true },
];
</script>