import * as am4core from '@amcharts/amcharts4/core';
import * as am4plugins_forceDirected from '@amcharts/amcharts4/plugins/forceDirected';
import am4themes_animated from '@amcharts/amcharts4/themes/animated';
import { CCard, CCol, CRow } from '@coreui/react';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './chart.css';

const AllProduct = () => {
	const category = useSelector((state) => state.category);
	const product = useSelector((state) => state.product);
	const dispatch = useDispatch();
	const [ show, setShow ] = useState(true);

	const renderCategories = (categories, options = []) => {
		for (let category of categories) {
			options.push({
				name: category.name,
			});
			if (category.children.length > 0) {
				renderCategories(category.children, options);
			}
		}
		return options;
	};

	const categoryList = renderCategories(category.categories);

	// console.log({ categoryList });

	const renderProducts = (products, options = []) => {
		let productCategories = [];
		for (let prod of products) {
			categoryList.map((cate) => {
				if (cate.name == prod.category.name) {
					productCategories.push({
						category: cate.name,
						value: 1,
						products: prod.category.name == cate.name ? [ prod.name ] : []
					});
				}
			});
		}
		return productCategories;
	};

	const productList = renderProducts(product.products);

	// console.log({ productList });




// const createProducts = (arr = []) => {
// 		return productList.reduce((acc, val, ind) => {
// 			const index = acc.findIndex(elem => elem.category === val.category);

// 			if (index !== -1) {
// 				const key = Object.keys(val)[1];
// 				acc[index][key] = val[key];
// 			} else {
// 				acc.push(val);
// 			};
// 			return acc;
// 		}, [])
// }
	
	const createProducts = (arr = []) => {
		const result = new Map();
		arr.forEach(elem => {
			let item = result.get(elem.category) || { category: elem.category, value: 7, products: [] };
			item.value++;
			item.products.push({				
				value: 5,
				name: elem.products			
			});
			result.set(item.category, item);
		})
		return Array.from(result.values());
	}
	
	const productsByCategory = createProducts(productList);

	// console.log({ productsByCategory });

	am4core.useTheme(am4themes_animated);
	// Themes end

	let chart = am4core.create('chartdiv', am4plugins_forceDirected.ForceDirectedTree);
	// chart.legend = new am4charts.Legend();

	let networkSeries = chart.series.push(new am4plugins_forceDirected.ForceDirectedSeries());

	networkSeries.data = [...productsByCategory];

	networkSeries.dataFields.linkWith = 'linkWith';
	networkSeries.dataFields.name = 'category';
	networkSeries.dataFields.id = 'category';
	networkSeries.dataFields.value = 'value';
	networkSeries.dataFields.children = 'products';

	networkSeries.nodes.template.tooltipText = '{name}';
	networkSeries.nodes.template.fillOpacity = 1;


	networkSeries.nodes.template.label.text = '{name}';
	networkSeries.fontSize = 12;
	networkSeries.maxLevels = 4;
	networkSeries.maxRadius = am4core.percent(6);
	networkSeries.manyBodyStrength = -16;
	networkSeries.nodes.template.label.hideOversized = true;
	networkSeries.nodes.template.label.truncate = true;

	useEffect(
		() => {
			if (!category.loading) {
				setShow(false);
			}
		},
		[ category.loading ]
	);

	// console.log({ categoryList });

	return (
		<React.Fragment>
			<CRow>
				<CCol xs="12">
					<CCard>
						<CRow style={{ background: '#67dcbb', borderRadius: '5px' }}>
							<CCol md={12}>
								<div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '15px' }}>
									<h1 style={{ margin: '1rem', color: '#333' }}>Tous les Produits</h1>
								</div>
							</CCol>
						</CRow>

						<CRow>
							<CCol md={12}>
								<div id="chartdiv" />
							</CCol>
						</CRow>
					</CCard>
				</CCol>
			</CRow>
		</React.Fragment>
	);
};

export default AllProduct;
