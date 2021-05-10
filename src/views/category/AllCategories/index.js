import * as am4core from '@amcharts/amcharts4/core';
import * as am4plugins_forceDirected from '@amcharts/amcharts4/plugins/forceDirected';
import am4themes_animated from '@amcharts/amcharts4/themes/animated';
import { CCard, CCol, CRow } from '@coreui/react';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './chart.css';

const Category = () => {
	const category = useSelector((state) => state.category);
	const dispatch = useDispatch();
	const [ show, setShow ] = useState(true);

	const renderCategories = (categories) => {
		let myCategories = [];
		for (let category of categories) {
			myCategories.push({
				name: category.name,
				value: category.children.length > 0 ? 0.3 : 0.2,
				children: category.children.length > 0 && renderCategories(category.children)
			});
		}
		return myCategories;
	};

	const categoryList = renderCategories(category.categories);

	console.log({ categoryList });

	am4core.useTheme(am4themes_animated);
	// Themes end

	let chart = am4core.create('chartdiv', am4plugins_forceDirected.ForceDirectedTree);
	// chart.legend = new am4charts.Legend();

	let networkSeries = chart.series.push(new am4plugins_forceDirected.ForceDirectedSeries());

	networkSeries.dataFields.linkWith = 'linkWith';
	networkSeries.dataFields.name = 'name';
	networkSeries.dataFields.id = 'name';
	networkSeries.dataFields.value = 'value';
	networkSeries.dataFields.children = 'children';

	networkSeries.nodes.template.tooltipText = '{name}';
	networkSeries.nodes.template.fillOpacity = 1;

	networkSeries.data = categoryList;

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

	// console.log({ categoryList })

	return (
		<React.Fragment>
			<CRow>
				<CCol xs="12">
					<CCard>
						<CRow style={{ background: '#67dcbb', borderRadius: '5px' }}>
							<CCol md={12}>
								<div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '15px' }}>
									<h1 style={{ margin: '1rem', color: '#333' }}>Toutes les Cate&#769;gories</h1>
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

export default Category;
