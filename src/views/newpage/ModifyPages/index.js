import CIcon from '@coreui/icons-react';
import {
	CCard,
	CCardBody,
	CCardFooter,
	CCardHeader,
	CCol,
	CDropdown,
	CDropdownItem,
	CDropdownMenu,
	CDropdownToggle,
	CRow,
	CWidgetDropdown
} from '@coreui/react';
import React from 'react';
import { Col, Row } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import ChartLineSimple from 'src/views/charts/ChartLineSimple';
import './style.css';

export default function Products() {
	const page = useSelector((state) => state.page);

	let colorsOptions = [ 'success', 'danger', 'warning', 'primary' ];

	return (
		<React.Fragment>
			<Row>
				<Col md={12}>
					<div style={{ display: 'flex', justifyContent: 'space-between' }}>
						<h1 style={{ margin: '3rem' }}>Modifier des Pages </h1>
					</div>
				</Col>
			</Row>
			<CCard>
				<CCardBody>
					<CCardHeader>Liste des Pages</CCardHeader>

					{page.allpages.length &&
						page.allpages.map((page, index) => (
							<Link>
								{' '}
								<CWidgetDropdown
									color={`gradient-${colorsOptions[index % 5]}`}
									header={`Page Category - ${page.category.name}`}
									text={page.title}
									footerSlot={
										<ChartLineSimple
											pointed
											className="c-chart-wrapper mt-3 mx-3"
											style={{ height: '70px' }}
											dataPoints={[ 65, 59, 84, 84, 51, 55, 40 ]}
											pointHoverBackgroundColor={colorsOptions[index % 5]}
											label="Pages"
											labels="months"
										/>
									}
								>
									<CDropdown>
										<CDropdownToggle color="transparent">
											<CIcon name="cil-settings" />
										</CDropdownToggle>
										<CDropdownMenu className="pt-0" placement="bottom-end">
											<CDropdownItem>Action</CDropdownItem>
											<CDropdownItem>Another action</CDropdownItem>
											<CDropdownItem>Something else here...</CDropdownItem>
											<CDropdownItem disabled>Disabled action</CDropdownItem>
										</CDropdownMenu>
									</CDropdown>

									<CRow>
										<CCol>
											<div className="pageImageContainer flexRow sb">
												<div>{page.description}</div>
											</div>
										</CCol>
									</CRow>
									<CRow>
										<CCol>
											<div className="pageImageContainer flexRow sb">
												<div className="imageContainer">
													<img src={page.products[0].img} alt={page.products[0].img} />
												</div>
											</div>
										</CCol>
									</CRow>
									<CRow>
										<CCol>
											<div className="flexRow sb">
												<div className="imageContainer">
													<img src={page.banners[0].img} alt={page.banners[0].img} />
												</div>
											</div>
										</CCol>
									</CRow>
								</CWidgetDropdown>
							</Link>
						))}
				</CCardBody>

				<CCardFooter className="text-theme" align="center">
					Created By
				</CCardFooter>
			</CCard>
		</React.Fragment>
	);
}
