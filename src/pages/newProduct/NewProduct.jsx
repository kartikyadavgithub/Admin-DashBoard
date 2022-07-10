import "./newProduct.css";
import{Link} from "react-router-dom";
import Chart from "../../components/chart/Chart";
import { productData } from "../../dummydata";
import Publish from "@mui/icons-material/Publish";

export default function NewProduct() {
  return (
    <div className="newProduct">
        <h1 className="newProductTitle">New Product</h1>
            <form className="addProductForm">
                 <div className="addProductItem">
                    <label>Image</label>
                    <input type="file" id="file"/>
                 </div>
                 <div className="addProductItem">
                    <label>Name</label>
                    <input type="text" placeholder="Apple AirPod Pro"/>
                 </div>
                 <div className="addProductItem">
                    <label>In Stock</label>
                    <input type="number" placeholder="123"/>
                 </div>
                <div className="addProductItem">
                    <label>Active</label>
                    <select name="active" id="active">
                        <option value="yes">Yes</option>
                        <option value="no">No</option>
                    </select>
                 </div>
                <button className="addProductButton">Create</button>
            </form>
    </div>
  );
}
