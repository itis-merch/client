<template>
    <div class="flex flex-col mb-5 max-w-[82%]">
        <div class="new-arrivals">
            <h1 class="sg-logo-text text-2xl">{{ name }}</h1>
            <div class="text-justify py-5 text-base max-w-[98%]"> {{ description }}</div>
            <div class="products grid grid-cols-3 gap-[40px]">
                <div class="product mt-5" v-for="product in products" v-bind:key="product">
                    <RouterLink :to="{ name: 'productPage', params: { id: product.id } }">
                        <SGCard class="" :title="formatText(product.name, 18)" :description="formatText(product.description, 60)" :image="product.image_urls[0]" :price="product.price" />
                    </RouterLink>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import SGCard from '../components/SGCard.vue';
import axios from 'axios';

export default {
    mounted() {
        try {
            axios.get(this.baseUrl + "categories/" + this.$route.params.id)
            .then((response) => {
                // console.log(response.data);
                this.name = response.data.name;
                this.description = response.data.description;
                for(var i = 0; i < response.data.products.length; i++){
                        this.products.push(response.data.products[i]);
                }
            })
        } catch (error) {
            console.log(error);
        }
    },
    methods: {
        formatText(text, maxLength) {
            let formattedText;

            if (text.length > maxLength) {
                formattedText = text.slice(0, maxLength) + '...';
            } else {
                return text;
            }

            return formattedText;
        }
    },
    data() {
        return {
            baseUrl: 'http://45.9.73.210:8080/api/v1/',
            products: [],
            name: 'Wrong category', 
            description: '', 
            images: [
                'https://sun9-8.userapi.com/impg/l863UxfDxhpsUjNye_opPQWk2Dgs0TqybCQ3ag/scsDue1T0eM.jpg?size=1728x2160&quality=95&sign=96f9b74fe23728dbb1b6f9a995a4ab62&type=album',
                'https://sun9-73.userapi.com/impg/CPoUZrhsTKEMMS2DX653XQdl_7zWmCgYlbzwdw/jqD0pd0_fRg.jpg?size=1458x1458&quality=95&sign=b926f376bca4db733d288d35a09a0b06&type=album',
                'https://sun7-7.userapi.com/impg/83lhmRPgYPYC7uoKjJPu2QVjInbFr5pngNxz1w/GW435H0PdyE.jpg?size=1352x1352&quality=95&sign=6e394fb00eafcae2d8df871dcc46f249&type=album'
            ],
            /*
            products: [
                {
                    id: 1,
                    category_id: 1,
                    name: 'Number (N)ine Destroyed Tee',
                    description: 'This t-shirt has a thrashed vintage look with an illusion of dirt scattering across the shirt.',
                    price: '606,95',
                    images: [
                        'https://cdn.shopify.com/s/files/1/0614/0972/2528/products/NN-DESTROYED-TEE-1-min_2.jpg?v=1659901749',
                        'https://cdn.shopify.com/s/files/1/0614/0972/2528/products/NN-DESTROYED-TEE-4-min_2.jpg?v=1659901749',
                        'https://cdn.shopify.com/s/files/1/0614/0972/2528/products/NN-DESTROYED-TEE-2-min_2.jpg?v=1659901749'
                    ]
                },
                {
                    id: 1,
                    category_id: 1,
                    name: 'Number (N)ine Destroyed Tee',
                    description: 'This t-shirt has a thrashed vintage look with an illusion of dirt scattering across the shirt.',
                    price: '606,95',
                    images: [
                        'https://cdn.shopify.com/s/files/1/0614/0972/2528/products/NN-DESTROYED-TEE-1-min_2.jpg?v=1659901749',
                        'https://cdn.shopify.com/s/files/1/0614/0972/2528/products/NN-DESTROYED-TEE-4-min_2.jpg?v=1659901749',
                        'https://cdn.shopify.com/s/files/1/0614/0972/2528/products/NN-DESTROYED-TEE-2-min_2.jpg?v=1659901749'
                    ]
                },
                {
                    id: 1,
                    category_id: 1,
                    name: 'Number (N)ine Destroyed Tee',
                    description: 'This t-shirt has a thrashed vintage look with an illusion of dirt scattering across the shirt.',
                    price: '606,95',
                    images: [
                        'https://cdn.shopify.com/s/files/1/0614/0972/2528/products/NN-DESTROYED-TEE-1-min_2.jpg?v=1659901749',
                        'https://cdn.shopify.com/s/files/1/0614/0972/2528/products/NN-DESTROYED-TEE-4-min_2.jpg?v=1659901749',
                        'https://cdn.shopify.com/s/files/1/0614/0972/2528/products/NN-DESTROYED-TEE-2-min_2.jpg?v=1659901749'
                    ]
                },
                {
                    id: 1,
                    category_id: 1,
                    name: 'Number (N)ine Destroyed Tee',
                    description: 'This t-shirt has a thrashed vintage look with an illusion of dirt scattering across the shirt.',
                    price: '606,95',
                    images: [
                        'https://cdn.shopify.com/s/files/1/0614/0972/2528/products/NN-DESTROYED-TEE-1-min_2.jpg?v=1659901749',
                        'https://cdn.shopify.com/s/files/1/0614/0972/2528/products/NN-DESTROYED-TEE-4-min_2.jpg?v=1659901749',
                        'https://cdn.shopify.com/s/files/1/0614/0972/2528/products/NN-DESTROYED-TEE-2-min_2.jpg?v=1659901749'
                    ]
                },
                {
                    id: 1,
                    category_id: 1,
                    name: 'Number (N)ine Destroyed Tee',
                    description: 'This t-shirt has a thrashed vintage look with an illusion of dirt scattering across the shirt.',
                    price: '606,95',
                    images: [
                        'https://cdn.shopify.com/s/files/1/0614/0972/2528/products/NN-DESTROYED-TEE-1-min_2.jpg?v=1659901749',
                        'https://cdn.shopify.com/s/files/1/0614/0972/2528/products/NN-DESTROYED-TEE-4-min_2.jpg?v=1659901749',
                        'https://cdn.shopify.com/s/files/1/0614/0972/2528/products/NN-DESTROYED-TEE-2-min_2.jpg?v=1659901749'
                    ]
                },
                {
                    id: 1,
                    category_id: 1,
                    name: 'Number (N)ine Destroyed Tee',
                    description: 'This t-shirt has a thrashed vintage look with an illusion of dirt scattering across the shirt.',
                    price: '606,95',
                    images: [
                        'https://cdn.shopify.com/s/files/1/0614/0972/2528/products/NN-DESTROYED-TEE-1-min_2.jpg?v=1659901749',
                        'https://cdn.shopify.com/s/files/1/0614/0972/2528/products/NN-DESTROYED-TEE-4-min_2.jpg?v=1659901749',
                        'https://cdn.shopify.com/s/files/1/0614/0972/2528/products/NN-DESTROYED-TEE-2-min_2.jpg?v=1659901749'
                    ]
                }
            ]
            */
        }
    },
    components: {
        SGCard
    }
}
</script>
