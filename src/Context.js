import React from "react";
//create context
const ProductContext = React.createContext();

//Provider
export { ProductContext };
// class ProductProvider extends Component {
//   state = {
//     products: storeProducts,
//     detailProduct: detailProduct,
//   };
//   handleDetail = () => {
//     console.log("hello from detail");
//   };
//   addToCart = () => {
//     console.log("hello from add to cart");
//   };
//   render() {
//     return (
//       <ProductContext.Provider
//         value={{
//           ...this.state,
//           handleDetail: this.handleDetail,
//           addToCart: this.addToCart,
//         }}
//       >
//         {this.props.children}
//       </ProductContext.Provider>
//     );
//   }
// }

//consumer
