import React from 'react';

const Toaster = React.lazy(() => import('./views/notifications/toaster/Toaster'));

const Breadcrumbs = React.lazy(() => import('./views/base/breadcrumbs/Breadcrumbs'));
const Collapses = React.lazy(() => import('./views/base/collapses/Collapses'));

const Charts = React.lazy(() => import('./views/charts/Charts'));
const Dashboard = React.lazy(() => import('./views/dashboard/Dashboard'));
const Modals = React.lazy(() => import('./views/notifications/modals/Modals'));
// CATEGORIES
const AllCategories = React.lazy(() => import('./views/category/AllCategories'));
const AddCategory = React.lazy(() => import('./views/category/AddCategory'));
const ArchivedCategory = React.lazy(() => import('./views/category/Archives'));

const Widgets = React.lazy(() => import('./views/widgets/Widgets'));
// USERS
const Users = React.lazy(() => import('./views/users/Users'));
const User = React.lazy(() => import('./views/users/User'));
// PRODUCTS
const ModifyProduct = React.lazy(() => import('./views/products/ModifyProduct'));
const AddProduct = React.lazy(() => import('./views/products/AddProduct'));
const AllProducts = React.lazy(() => import('./views/products/AllProducts'));
// ORDERS
const ActiveOrders = React.lazy(() => import('./views/orders/ActiveOrders'));
const DeliveredOrders = React.lazy(() => import('./views/orders/DeliveredOrders'));
const ArchivedOrders = React.lazy(() => import('./views/orders/ArchivedOrders'));
// NEW PAGES
const NewPage = React.lazy(() => import('./views/newpage/NewPage'));
const AllPages = React.lazy(() => import('./views/newpage/AllPages'));
const EditPages = React.lazy(() => import('./views/newpage/ModifyPages'));

const routes = [
	// HOME
	{ path: '/', exact: true, name: 'Accueil' },
	{ path: '/dashboard', name: 'Dashboard', component: Dashboard },

	// CATEGORY
	{ path: '/category', name: 'Catégorie', component: AllCategories, exact: true },
	{ path: '/category/allcategory', name: 'Toutes Catégories', component: AllCategories },
	{ path: '/category/addcategory', name: 'Ajouter Catégorie', component: AddCategory },
	{ path: '/category/archives', name: 'Archives des Catégories', component: ArchivedCategory },

	// PRODUCT
	{ path: '/product', name: 'Produit', component: AllProducts, exact: true },
	{ path: '/product/addproduct', name: 'Ajouter Produit', component: AddProduct },
	{ path: '/product/allproducts', name: 'Tous les Produits', component: AllProducts },
	{ path: '/product/editproduct', name: 'Modifier les Produits', component: ModifyProduct },

	// ORDERS
	{ path: '/orders', name: 'Achats Actifs', component: ActiveOrders, exact: true },
	{ path: '/orders/activeorders', name: 'Achats En Transit', component: ActiveOrders },
	{ path: '/orders/delivered', name: 'Achats Deliverés', component: DeliveredOrders },
	{ path: '/orders/archives', name: 'Archives des Achats', component: ArchivedOrders },

	// PAGES
	{ path: '/page', name: 'Pages', component: AllPages, exact: true },
	{ path: '/page/allpages', name: 'Toutes les Pages', component: AllPages },
	{ path: '/page/addpage', name: 'Ajouter une Page', component: NewPage },
	{ path: '/page/editpage', name: 'Modifier Page', component: EditPages },

	{ path: '/base/breadcrumbs', name: 'Breadcrumbs', component: Breadcrumbs },
	{ path: '/base/collapses', name: 'Collapse', component: Collapses },
	{ path: '/charts', name: 'Charts', component: Charts },
	{ path: '/notifications/modals', name: 'Modals', component: Modals },
	{ path: '/notifications/toaster', name: 'Toaster', component: Toaster },
	{ path: '/widgets', name: 'Widgets', component: Widgets },
	{ path: '/users', exact: true, name: 'Users', component: Users },
	{ path: '/users/:id', exact: true, name: 'User Details', component: User }
];

export default routes;
