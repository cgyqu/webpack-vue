<template>
    <div style="border:1px  solid #000;width: 600px;">
        <div v-for="message in messages" v-bind:key="message.id" style="height: 50px;">
            <component v-bind:message='message' :is="message.direction == 1?'left':'right'"></component>
        </div>
    </div>
</template>

<script>
    import left from "./Left.vue";
    import right from "./Right.vue";
    export default {
        name: "vue5",
        components: {
            left,
            right
        },
        data() {
            return {
                messages: [{
                        content: "你好,你好~~",
                        type: "text",
                        direction: "1",
                        id: 1
                    },
                    {
                        content: "您好,请问有啥能帮助您的？",
                        type: "text",
                        direction: "2",
                        id: 2
                    },
                    {
                        content: "http://www.tapd.cn/tfl/pictures/201907/tapd_22281431_1563450316_63.png",
                        type: "image",
                        direction: "1"
                    },
                    {
                        content: "帮我看下这个价格是否有问题",
                        type: "text",
                        direction: "1",
                        id: 3
                    },
                    {
                        content: "看到您的问题了,稍等",
                        type: "text",
                        direction: "2",
                        id: 4
                    }
                ]
            };
        }
    };
</script>