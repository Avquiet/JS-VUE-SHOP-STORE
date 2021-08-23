Vue.component('products-comp',{
    props:['showed','addproduct'],
    template: ` 
            <section class="products wrap">
                <div class="products-item" v-for="product of showed" :key='product.id_product'>
                    <img :src="product.img" alt="1">
                    <div class="product-add">
                        <button class="add-btn" :id="product.id_product" @click='$emit("addproduct",product)'>
                            <img class="add-btn-img" src="img/product-btn-1.svg" alt="corzina">
                            <p class="add-btn-text">Add to Cart</p>   
                        </button>
                        </a>
                    </div>
                    <div class="product-title-text">
                        <h6 class="product-text-1">
                            {{product.product_name}}
                        </h6>
                        
                        <p class="product-title-text-2">
                            Known for her sculptural takes on traditional  tailoring, Australian arbiter of cool Kym Ellery teams up with
                            Moda
                            Operandi.
                        </p>
                        <h6 class="product-title-text-3">
                            {{product.price}}$
                        </h6>
                    </div>
                </div>
            </section>
            
` 
})