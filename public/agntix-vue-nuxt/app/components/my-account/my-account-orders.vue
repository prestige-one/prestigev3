<template>
    <div class="profile__ticket table-responsive">
        <table class="table">
            <thead>
                <tr>
                    <th scope="col">Order Id</th>
                    <th scope="col">Product Title</th>
                    <th scope="col">Status</th>
                    <th scope="col">View</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(order, index) in orderData" :key="index">
                    <th scope="row">{{ order.id }}</th>
                    <td data-info="title">{{ order.title }}</td>
                    <td :data-info="`status ${getStatusClass(order.status)}`">
                        {{ order.status }}
                    </td>
                    <td>
                        <a href="#" class="tp-logout-btn">{{ order.action }}</a>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script setup lang="ts">

const orderData = [
    {
        id: "#2245",
        title: "How can I share?",
        status: "Pending",
        action: "Invoice",
    },
    {
        id: "#2220",
        title: "Send money, but not working",
        status: "Need your reply",
        action: "Reply",
    },
    {
        id: "#2125",
        title: "Balance error",
        status: "Resolved",
        action: "Invoice",
    },
    {
        id: "#2124",
        title: "How to decline bid",
        status: "On Hold",
        action: "Status",
    },
    {
        id: "#2121",
        title: "How to contact",
        status: "Resolved",
        action: "Invoice",
    },
];

const getStatusClass = (status: string): string => {
    switch (status.toLowerCase()) {
        case "pending":
            return "pending";
        case "need your reply":
            return "reply";
        case "resolved":
            return "done";
        case "on hold":
            return "hold";
        default:
            return "pending";
    }
};
</script>
