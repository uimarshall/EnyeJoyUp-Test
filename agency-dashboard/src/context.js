import React, { Component } from "react";
import { storeProducts } from "./data";

// Create Context obj which comes wt 2 comps(Provider&Consumer)
const ProductContext = React.createContext();
// 1. Provider: will provide info for all our application taking advantage of the 'value' params.
// 1. Consumer: will pass props down to a child comp

class ProductProvider extends Component {
	state = {
		products: [],

		modalOpen: false
	};
	componentDidMount() {
		this.setProducts();
	}
	setProducts = () => {
		let tempProducts = [];
		storeProducts.forEach(item => {
			const singleItem = { ...item };
			tempProducts = [...tempProducts, singleItem];
		});
		this.setState(() => {
			return { products: tempProducts };
		});
	};

	getItem = id => {
		const product = this.state.products.find(item => item.id === id);
		return product;
	};

	// Handle Model
	openModal = id => {
		const product = this.getItem(id);
		this.setState(() => {
			return { modalProduct: product, modalOpen: true };
		});
	};

	closeModal = () => {
		this.setState(() => {
			return { modalOpen: false };
		});
	};

	render() {
		return (
			// we return the 'ProductContext' & the 'Provider comp'

			<ProductContext.Provider
				value={{
					...this.state,

					addToCart: this.addToCart,
					openModal: this.openModal,
					closeModal: this.closeModal
				}}
			>
				{/* return the children that will be inside this comp */}
				{this.props.children}
			</ProductContext.Provider>
		);
	}
}

const ProductConsumer = ProductContext.Consumer;
export { ProductProvider, ProductConsumer };
