import "./style.css";
import { Products } from "./products";

const p = new Products();
(window as any).deleteProduct = p.deleteProduct.bind(p);

p.loadProducts();
p.renderProducts();
