Vue.component("header-comp", {
  data() {
    return {
      searchLine: "",
    };
  },
  props: ["cartitems", "addproduct"],
  template: ` <div class="header">
                    <div class="wrap header-wrap">
            <div class="header-left">
                <a href="#" class="header-logo-link">
                    <img src="img/logo.png" width="44" height="38" alt="logo" class="header-logo">
                </a>
                <search></search>
            </div>

            <div class="header-right">
                    <input type="checkbox" id="burger">
                    <label class="header-menu" for="burger">
                        <svg class="header-burger-link" width="32" height="23" viewBox="0 0 32 23"
                            xmlns="http://www.w3.org/2000/svg">
                            <path d="M0 23V20.31H32V23H0ZM0 12.76V10.07H32V12.76H0ZM0 2.69V0H32V2.69H0Z" />
                        </svg>
                    </label>
                    <nav class="header-nav nav">
                        <div class="nav-wrap">
                            <label class="nav-close" for="burger">
                                <svg width="13" height="13" viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M7.4158 6.00409L11.7158 1.71409C11.9041 1.52579 12.0099 1.27039 12.0099 1.00409C12.0099 0.73779 11.9041 0.482395 11.7158 0.294092C11.5275 0.105788 11.2721 0 11.0058 0C10.7395 0 10.4841 0.105788 10.2958 0.294092L6.0058 4.59409L1.7158 0.294092C1.52749 0.105788 1.2721 -1.9841e-09 1.0058 0C0.739497 1.9841e-09 0.484102 0.105788 0.295798 0.294092C0.107495 0.482395 0.0017066 0.73779 0.0017066 1.00409C0.0017066 1.27039 0.107495 1.52579 0.295798 1.71409L4.5958 6.00409L0.295798 10.2941C0.20207 10.3871 0.127676 10.4977 0.0769072 10.6195C0.0261385 10.7414 0 10.8721 0 11.0041C0 11.1361 0.0261385 11.2668 0.0769072 11.3887C0.127676 11.5105 0.20207 11.6211 0.295798 11.7141C0.388761 11.8078 0.499362 11.8822 0.621222 11.933C0.743081 11.9838 0.873786 12.0099 1.0058 12.0099C1.13781 12.0099 1.26852 11.9838 1.39038 11.933C1.51223 11.8822 1.62284 11.8078 1.7158 11.7141L6.0058 7.41409L10.2958 11.7141C10.3888 11.8078 10.4994 11.8822 10.6212 11.933C10.7431 11.9838 10.8738 12.0099 11.0058 12.0099C11.1378 12.0099 11.2685 11.9838 11.3904 11.933C11.5122 11.8822 11.6228 11.8078 11.7158 11.7141C11.8095 11.6211 11.8839 11.5105 11.9347 11.3887C11.9855 11.2668 12.0116 11.1361 12.0116 11.0041C12.0116 10.8721 11.9855 10.7414 11.9347 10.6195C11.8839 10.4977 11.8095 10.3871 11.7158 10.2941L7.4158 6.00409Z"
                                        fill="#6F6E6E" />
                                </svg></label>
                                <h2 class="burger-title">MENU</h2>
                                <h3 class="burger-text">MAN</h3>
                                <ul class="burger-list">
                                    <li class="burger-item"><a href="#" class="burger-link">Accessories</a></li>
                                    <li class="burger-item"><a href="#" class="burger-link">Bags</a></li>
                                    <li class="burger-item"><a href="#" class="burger-link">Denim</a></li>
                                    <li class="burger-item"><a href="#" class="burger-link">T-Shirts</a></li>
                                </ul>
                                <h3 class="burger-text">WOMAN</h3>
                                <ul class="burger-list">
                                    <li class="burger-item"><a href="#" class="burger-link">Accessories</a></li>
                                    <li class="burger-item"><a href="#" class="burger-link">Jackets & Coats</a></li>
                                    <li class="burger-item"><a href="#" class="burger-link">Polos</a></li>
                                    <li class="burger-item"><a href="#" class="burger-link">T-Shirts</a></li>
                                    <li class="burger-item"><a href="#" class="burger-link">Shirts</a></li>
                                </ul>
                                <h3 class="burger-text">KIDS</h3>
                                <ul class="burger-list">
                                    <li class="burger-item"><a href="#" class="burger-link">Accessories</a></li>
                                    <li class="burger-item"><a href="#" class="burger-link">Jackets & Coats</a></li>
                                    <li class="burger-item"><a href="#" class="burger-link">Polos</a></li>
                                    <li class="burger-item"><a href="#" class="burger-link">T-Shirts</a></li>
                                    <li class="burger-item"><a href="#" class="burger-link">Bags</a></li>
                                </ul>
                        </div>
                    </nav>
                <a href="#" class="header-account-link">
                    <svg width="29" height="29" viewBox="0 0 29 29" xmlns="http://www.w3.org/2000/svg">
                        <path d="M14.5 19.937C19 19.937 22.656 15.464 22.656 9.968C22.656 4.472 19 0 14.5 0C13.3631 0.0217413 12.2463 0.303398 11.2351 0.823397C10.2239 1.34339 9.34507 2.08794 8.66602 3C7.12663 4.99573 6.30819 7.45381 6.34399 9.974C6.34399 15.465 10 19.937 14.5 19.937ZM14.5 1.813C18 1.813 20.844 5.472 20.844 9.969C20.844 14.466 17.998 18.125 14.5 18.125C11.002 18.125 8.15603 14.465 8.15503 9.969C8.15403 5.473 11 1.813 14.5 1.813ZM20.844 18.125C20.6036 18.125 20.373 18.2205 20.203 18.3905C20.033 18.5605 19.9375 18.7911 19.9375 19.0315C19.9375 19.2719 20.033 19.5025 20.203 19.6725C20.373 19.8425 20.6036 19.938 20.844 19.938C22.526 19.9399 24.1386 20.6088 25.3279 21.7982C26.5172 22.9875 27.1861 24.6 27.188 26.282C27.1875 26.5221 27.0918 26.7523 26.922 26.9221C26.7522 27.0918 26.5221 27.1875 26.282 27.188H2.71997C2.47985 27.1875 2.24975 27.0918 2.07996 26.9221C1.91016 26.7523 1.81449 26.5221 1.81396 26.282C1.81608 24.6001 2.48517 22.9877 3.67444 21.7985C4.86371 20.6092 6.47608 19.9401 8.15796 19.938C8.39824 19.938 8.62868 19.8425 8.79858 19.6726C8.96849 19.5027 9.06396 19.2723 9.06396 19.032C9.06396 18.7917 8.96849 18.5613 8.79858 18.3914C8.62868 18.2215 8.39824 18.126 8.15796 18.126C5.99541 18.1279 3.92201 18.9875 2.39258 20.5164C0.863144 22.0453 0.00264777 24.1185 0 26.281C0.000794067 27.0019 0.287502 27.693 0.797241 28.2027C1.30698 28.7125 1.99811 28.9992 2.71899 29H26.282C27.0027 28.9989 27.6936 28.7121 28.2031 28.2024C28.7126 27.6927 28.9992 27.0017 29 26.281C28.9974 24.1187 28.1372 22.0457 26.6083 20.5168C25.0793 18.9878 23.0063 18.1276 20.844 18.125Z"/>
                    </svg>
                </a>
                <div class="header-cart-link">
                  <cart :cartitems = 'cartitems' :addproduct='addproduct'></cart>
                </div>
                </a>
            </div>
        </div>
`,
});

Vue.component("search", {
  data() {
    return {
      searchLine: "",
    };
  },
  template: `
    <div class="search">
        <svg class="header-search" @click='$parent.$emit("filtergoods", searchLine)' width="27" height="28" viewBox="0 0 27 28"  xmlns="http://www.w3.org/2000/svg">
            <path d="M19.0589 17.6251C20.6705 15.865 21.6275 13.6039 21.769 11.2216C21.9106 8.83932 21.2281 6.48088 19.8362 4.54232C18.4443 2.60377 16.4278 1.20318 14.1252 0.575765C11.8227 -0.0516554 9.37437 0.132305 7.19143 1.09675C5.0085 2.0612 3.22389 3.74739 2.1373 5.87217C1.05071 7.99695 0.728322 10.4309 1.22426 12.7653C1.72021 15.0997 3.00428 17.1923 4.86085 18.6919C6.71741 20.1914 9.0334 21.0064 11.4199 21.0001C13.6723 21.0031 15.8638 20.2691 17.6599 18.9101L25.4079 26.7171C25.4934 26.8061 25.5958 26.8772 25.7091 26.9261C25.8225 26.9751 25.9444 27.0009 26.0679 27.0021C26.1916 27.0024 26.314 26.9773 26.4276 26.9283C26.5411 26.8793 26.6434 26.8074 26.7279 26.7171C26.9018 26.5362 26.999 26.295 26.999 26.0441C26.999 25.7931 26.9018 25.5519 26.7279 25.371L19.0589 17.6251ZM2.88589 10.5001C2.89873 8.81477 3.41021 7.17101 4.35586 5.776C5.30151 4.38098 6.63899 3.29715 8.1997 2.66114C9.76042 2.02513 11.4745 1.86542 13.1258 2.20213C14.7772 2.53884 16.2919 3.3569 17.479 4.55319C18.6661 5.74948 19.4725 7.27044 19.7965 8.92433C20.1204 10.5782 19.9475 12.291 19.2995 13.8468C18.6515 15.4026 17.5574 16.7316 16.1551 17.6665C14.7529 18.6014 13.1052 19.1002 11.4199 19.1C9.14843 19.0892 6.97409 18.1775 5.3741 16.5652C3.77412 14.9528 2.87924 12.7715 2.88589 10.5001Z" />
        </svg>
        <input class="search-content" type="text"  v-model='searchLine'>
    </div>
    `,
});

Vue.component("cart", {
  props: ["cartitems", "addproduct"],
  data() {
    return {
      isVisibleCart: false,
    };
  },
  methods: {
    calculateCart() {
      let cartPrice = 0;
      let cart = this.$parent.$parent.cartGoods[1];
      cart.forEach((el) => (cartPrice += el.quantity * el.price));
      return cartPrice;
    },
    deleteItem(id) {
      let remove = this.$parent.$parent.remove;
      let cart = this.$parent.$parent.cartGoods[1];
      let find = cart.find((el) => el.id_product === id);

      remove(`/api/cart/${id}`, find);
      //    const curElement = this.cartitems.find(el => el.id_product == id);
      //    if (curElement.count == 1) {

      //        this.cartitems.splice(this.cartitems.indexOf(curElement), 1);
      //    } else {
      //         --curElement.count;
      //    }
    },
  },
  template: ` 
    <div class="wrap cart-basket">
        <svg class='cart-corzina' @click='isVisibleCart = !isVisibleCart' width="33" height="29" viewBox="0 0 33 29" xmlns="http://www.w3.org/2000/svg">
            <path d="M27.199 29C26.5512 28.9738 25.9396 28.6948 25.4952 28.2227C25.0509 27.7506 24.8094 27.1232 24.8225 26.475C24.8356 25.8269 25.1023 25.2097 25.5653 24.7559C26.0283 24.3022 26.6508 24.048 27.2991 24.048C27.9474 24.048 28.5697 24.3022 29.0327 24.7559C29.4957 25.2097 29.7624 25.8269 29.7755 26.475C29.7886 27.1232 29.5471 27.7506 29.1028 28.2227C28.6585 28.6948 28.0468 28.9738 27.399 29H27.199ZM7.75098 26.32C7.75098 25.79 7.90815 25.2718 8.20264 24.8311C8.49712 24.3904 8.91569 24.0469 9.4054 23.844C9.8951 23.6412 10.434 23.5881 10.9539 23.6915C11.4737 23.7949 11.9512 24.0502 12.326 24.425C12.7009 24.7998 12.9562 25.2773 13.0596 25.7972C13.163 26.317 13.1098 26.8559 12.907 27.3456C12.7041 27.8353 12.3606 28.2539 11.9199 28.5483C11.4792 28.8428 10.9611 29 10.431 29C10.0789 29.0003 9.73017 28.9311 9.40479 28.7966C9.0794 28.662 8.78374 28.4646 8.53467 28.2158C8.28559 27.9669 8.08805 27.6713 7.95325 27.3461C7.81844 27.0208 7.74902 26.6721 7.74902 26.32H7.75098ZM11.551 20.686C11.2916 20.6868 11.039 20.6024 10.8322 20.4457C10.6253 20.2891 10.4756 20.0689 10.406 19.819L5.573 2.36401H2.18005C1.86657 2.36401 1.56591 2.23947 1.34424 2.01781C1.12257 1.79614 0.998047 1.49549 0.998047 1.18201C0.998047 0.868519 1.12257 0.567873 1.34424 0.346205C1.56591 0.124537 1.86657 5.81268e-06 2.18005 5.81268e-06H6.46106C6.72055 -0.00080736 6.97309 0.0837201 7.17981 0.240568C7.38653 0.397416 7.53589 0.617884 7.60498 0.868006L12.438 18.323H25.616L29.999 8.27501H15.399C15.2409 8.27961 15.0834 8.25242 14.9359 8.19507C14.7884 8.13771 14.6539 8.05134 14.5404 7.94108C14.4269 7.83082 14.3366 7.69891 14.275 7.55315C14.2134 7.40739 14.1816 7.25075 14.1816 7.0925C14.1816 6.93426 14.2134 6.77762 14.275 6.63186C14.3366 6.4861 14.4269 6.35419 14.5404 6.24393C14.6539 6.13367 14.7884 6.0473 14.9359 5.98994C15.0834 5.93259 15.2409 5.90541 15.399 5.91001H31.812C32.0077 5.90996 32.2003 5.95866 32.3724 6.05172C32.5446 6.14478 32.6908 6.27926 32.798 6.44301C32.9058 6.60729 32.9714 6.79569 32.9889 6.99145C33.0063 7.18721 32.9752 7.38424 32.8981 7.565L27.493 19.977C27.4007 20.1876 27.249 20.3668 27.0565 20.4927C26.864 20.6186 26.6391 20.6858 26.4091 20.686H11.551Z"/>
        </svg>
        <div class="basket-card" v-if='isVisibleCart'>
            <p class='cart-emp' v-if='!cartitems[1].length'>Empty</p>
            <div class='cart-item' v-for="item of cartitems[1]" :key='item.id_product'>
                <img :src="item.img" alt="Some img" class='cart-img'>
                <div class='cart-item-info'>
                    <svg class='cart-del' @click='deleteItem(item.id_product)' width="13" height="13" viewBox="0 0 13 13"  xmlns="http://www.w3.org/2000/svg">
                        <path
                        d="M7.4158 6.00409L11.7158 1.71409C11.9041 1.52579 12.0099 1.27039 12.0099 1.00409C12.0099 0.73779 11.9041 0.482395 11.7158 0.294092C11.5275 0.105788 11.2721 0 11.0058 0C10.7395 0 10.4841 0.105788 10.2958 0.294092L6.0058 4.59409L1.7158 0.294092C1.52749 0.105788 1.2721 -1.9841e-09 1.0058 0C0.739497 1.9841e-09 0.484102 0.105788 0.295798 0.294092C0.107495 0.482395 0.0017066 0.73779 0.0017066 1.00409C0.0017066 1.27039 0.107495 1.52579 0.295798 1.71409L4.5958 6.00409L0.295798 10.2941C0.20207 10.3871 0.127676 10.4977 0.0769072 10.6195C0.0261385 10.7414 0 10.8721 0 11.0041C0 11.1361 0.0261385 11.2668 0.0769072 11.3887C0.127676 11.5105 0.20207 11.6211 0.295798 11.7141C0.388761 11.8078 0.499362 11.8822 0.621222 11.933C0.743081 11.9838 0.873786 12.0099 1.0058 12.0099C1.13781 12.0099 1.26852 11.9838 1.39038 11.933C1.51223 11.8822 1.62284 11.8078 1.7158 11.7141L6.0058 7.41409L10.2958 11.7141C10.3888 11.8078 10.4994 11.8822 10.6212 11.933C10.7431 11.9838 10.8738 12.0099 11.0058 12.0099C11.1378 12.0099 11.2685 11.9838 11.3904 11.933C11.5122 11.8822 11.6228 11.8078 11.7158 11.7141C11.8095 11.6211 11.8839 11.5105 11.9347 11.3887C11.9855 11.2668 12.0116 11.1361 12.0116 11.0041C12.0116 10.8721 11.9855 10.7414 11.9347 10.6195C11.8839 10.4977 11.8095 10.3871 11.7158 10.2941L7.4158 6.00409Z"
                         />
                    </svg>
                    <p class='carts-name'>{{ item.product_name }}</p>
                    <p class='cart-title'>Color: {{ item.color }}</p>
                    <p class='cart-title'>Size: {{ item.size }}</p>
                    <p type='number' class='cart-title' @input='$parent.$emit("addproduct",item)'>Quantity: {{ item.quantity }}</p>
                    <p class='cart-title'>Price: <span class='prices'>{{item.quantity * item.price}}$</span></p>

                </div>
            </div>
            <p class="carts-name" v-if='cartitems[1].length'>Total: <span class='prices'>{{ calculateCart() }}$</span></p>
        </div>
    </div>
    `,
});
