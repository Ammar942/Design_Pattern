import { Confirm } from "./confirm";
interface Product {
  id: number;
  name: string;
  price: number;
  description: string;
}
const BASE_API = "http://localhost:3000/products";

export class Products {
  private products: Product[] = [];
  renderProducts() {
    const productList = document.querySelector<HTMLDivElement>("#app")!;
    productList.innerHTML = `
     <div class="container">
  <div class="wrapper">
    <div class="card">
      <div class="card-header">
        <h1 class="title">Product List</h1>
      </div>
      <div class="product-list">
        ${this.products
          .map(
            (product) => `
          <div class="product-item">
            <div class="product-info">
              <h3 class="product-name">${product.name}</h3>
              <p class="product-price">$${product.price.toFixed(2)}</p>
              <p class="product-desc">${product.description}</p>
            </div>
            <button 
              onclick="deleteProduct(${product.id})" 
              class="delete-btn"
            >
              Delete
            </button>
          </div>
        `
          )
          .join("")}
      </div>
    </div>
  </div>
</div>

    `;
  }
  async loadProducts() {
    try {
      const res = await fetch(`${BASE_API}`);
      this.products = await res.json();
      console.log(this.products);
      this.renderProducts();
    } catch (err) {
      console.log(err);
    }
  }
  @Confirm("This product will be deleted .. Are you sure ?")
  async deleteProduct(id: number) {
    try {
      const res = await fetch(`${BASE_API}/${id}`, { method: "DELETE" });
      console.log(res);
      if (res.ok) {
        console.log(this.products, id);
        this.products = this.products.filter((product) => product.id != id);
        console.log(this.products);
        this.renderProducts();
      }
    } catch (err) {
      console.log(err);
    }
  }
}
