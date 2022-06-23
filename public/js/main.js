const app = new Vue({
  el: "#app",
  data: {
    products: [],
    api: "https://raw.githubusercontent.com/GeekBrainsTutorial/online-store-api/master/responses/",
    cartData: "",
    showedProducts: [],
    cartGoods: [],
  },
  methods: {
    async fetchProducts(url) {
      try {
        const answer = await fetch(url);
        return await answer.json();
      } catch (error) {
        return console.log(error);
      }
    },
    filterGoods(searchLine) {
      if (searchLine) {
        this.showedProducts = this.products.filter((value) =>
          value.product_name.toLowerCase().includes(searchLine.toLowerCase())
        );
      } else {
        this.showedProducts = this.products;
      }
    },
    async postJson(url, data) {
      console.log(url);
      try {
        const result = await fetch(url, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        });
        return await result.json();
      } catch (error) {
        console.log(error);
      }
    },
    async putJson(url, data) {
      console.log(url);
      try {
        const result = await fetch(url, {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        });
        return await result.json();
      } catch (error) {
        console.log(error);
      }
    },
    async remove(url, data) {
      try {
        const result = await fetch(url, {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        });
        result.json();
        this.fetchProducts("/api/cart").then((data_1) => {
          console.log(data_1);
          this.cartGoods.push({
            amount: data_1.amount,
            countGoods: data_1.countGoods,
          });
          this.cartGoods[1] = data_1.contents;
        });
      } catch (error) {
        console.log(error);
      }
      error;
    },
    addProduct(item) {
      console.log(this.cartGoods[1]);

      let find = this.cartGoods[1].find(
        (el) => el.id_product === item.id_product
      );
      if (find) {
        this.putJson(`/api/cart/${find.id_product}`, { quantity: 1 }).then(
          (data) => {
            if (data.result === 1) {
              find.quantity++;
            }
          }
        );
      } else {
        const prod = Object.assign({ quantity: 1 }, item);
        this.postJson(`/api/cart`, prod).then((data) => {
          if (data.result === 1) {
            this.cartGoods[1].push(prod);
          }
        });
      }
    },
  },
  mounted() {
    this.fetchProducts("/api/products").then((data) => {
      this.products = [...data];
      this.showedProducts = this.products;
    });
    this.fetchProducts("/api/cart").then((data) => {
      this.cartGoods.push({ amount: data.amount, countGoods: data.countGoods });
      this.cartGoods.push(data.contents);
    });
  },
});
