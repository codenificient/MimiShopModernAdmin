import React from 'react';

// BASE COMPONENTS
const Toaster = React.lazy(() => import('./views/notifications/toaster/Toaster'));
const Breadcrumbs = React.lazy(() => import('./views/base/breadcrumbs/Breadcrumbs'));
const Collapses = React.lazy(() => import('./views/base/collapses/Collapses'));
const Charts = React.lazy(() => import('./views/charts/Charts'));
const Dashboard = React.lazy(() => import('./views/dashboard/Dashboard'));
const Modals = React.lazy(() => import('./views/notifications/modals/Modals'));
const Widgets = React.lazy(() => import('./views/widgets/Widgets'));

// MESSAGES
const Inbox = React.lazy(() => import('./views/email/Inbox'));
const EmailDetails = React.lazy(() => import('./views/email/EmailDetails'));
const NewEmail = React.lazy(() => import('./views/email/NewMessage'));
const EmailArchives = React.lazy(() => import('./views/email/Archive'));
const EmailReply = React.lazy(() => import('./views/email/EmailReply'));
const OutgoingMessages = React.lazy(() => import('./views/email/Out'));
const Drafts = React.lazy(() => import('./views/email/Drafts'));
const Spam = React.lazy(() => import('./views/email/Spam'));
const ChatDetail = React.lazy(() => import('./views/email/ChatDetails'));
const Chats = React.lazy(() => import('./views/email/Chats'));

// CATEGORIES
const AllCategories = React.lazy(() => import('./views/category/AllCategories'));
const AddCategory = React.lazy(() => import('./views/category/AddCategory'));
const ArchivedCategory = React.lazy(() => import('./views/category/Archives'));

// USERS
const Users = React.lazy(() => import('./views/users/Users'));
const User = React.lazy(() => import('./views/users/User'));
const AjouterClient = React.lazy(() => import('./views/users/AjouterClient'));
const ModifierClient = React.lazy(() => import('./views/users/ModifierClient'));
const ArchivesClient = React.lazy(() => import('./views/users/ArchivesClient'));

// PRODUCTS
const ModifyProduct = React.lazy(() => import('./views/products/ModifyProduct'));
const AddProduct = React.lazy(() => import('./views/products/AddProduct'));
const AllProducts = React.lazy(() => import('./views/products/AllProducts'));
const Revendeur = React.lazy(() => import('./views/products/Revendeur'));

// ORDERS
const ActiveOrders = React.lazy(() => import('./views/orders/ActiveOrders'));
const DeliveredOrders = React.lazy(() => import('./views/orders/DeliveredOrders'));
const ArchivedOrders = React.lazy(() => import('./views/orders/ArchivedOrders'));
const Revenue = React.lazy(() => import('./views/orders/Revenue'));

// NEW PAGES
const NewPage = React.lazy(() => import('./views/newpage/NewPage'));
const AllPages = React.lazy(() => import('./views/newpage/AllPages'));
const EditPages = React.lazy(() => import('./views/newpage/ModifyPages'));
const Promotions = React.lazy(() => import('./views/newpage/Promotions'));

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
	{ path: '/product/revendeurs', name: 'Modifier les Produits', component: Revendeur },

	// ORDERS
	{ path: '/orders', name: 'Achats Actifs', component: ActiveOrders, exact: true },
	{ path: '/orders/activeorders', name: 'Achats En Transite', component: ActiveOrders },
	{ path: '/orders/delivered', name: 'Achats Deliverés', component: DeliveredOrders },
	{ path: '/orders/archives', name: 'Archives des Achats', component: ArchivedOrders },
	{ path: '/orders/revenue', name: 'Archives des Achats', component: Revenue },

	// PAGES
	{ path: '/page', name: 'Pages', component: AllPages, exact: true },
	{ path: '/page/allpages', name: 'Toutes les Pages', component: AllPages },
	{ path: '/page/addpage', name: 'Ajouter une Page', component: NewPage },
	{ path: '/page/editpage', name: 'Modifier Page', component: EditPages },
	{ path: '/page/promotions', name: 'Modifier Page', component: Promotions },

	// EXTRAS
	{ path: '/base/breadcrumbs', name: 'Breadcrumbs', component: Breadcrumbs },
	{ path: '/base/collapses', name: 'Collapse', component: Collapses },
	{ path: '/charts', name: 'Charts', component: Charts },
	{ path: '/notifications/modals', name: 'Modals', component: Modals },
	{ path: '/notifications/toaster', name: 'Toaster', component: Toaster },
	{ path: '/widgets', name: 'Widgets', component: Widgets },

	// MESSAGES
	{ path: '/messages', name: 'Méssages', component: Inbox, exact: true },
	{ path: '/messages/emaildetails/:id', name: 'Détailles de Couriel', component: EmailDetails },
	{ path: '/messages/newemail', name: 'Nouveau Méssage', component: NewEmail },
	{ path: '/messages/sent', name: 'Méssages Envoyés', component: OutgoingMessages },
	{ path: '/messages/drafts', name: 'Brouillons des Méssages', component: Drafts },
	{ path: '/messages/junk', name: 'Méssages Indésirés', component: Spam },
	{ path: '/messages/chats/:id', name: 'Méssagérie Instantanée', component: ChatDetail },
	{ path: '/messages/chats', name: 'Méssages Instantanés', component: Chats },
	{ path: '/messages/archive', name: 'Email Archives', component: EmailArchives },
	{ path: '/messages/reply/:id', name: 'Répondre à un Méssage', component: EmailReply },

	// USERS
	{ path: '/users', exact: true, name: 'Tous les Clients', component: Users },
	{ path: '/users/allusers', name: 'Tous les Clients', component: Users },
	{ path: '/users/adduser', name: 'Ajouter un Client', component: AjouterClient },
	{ path: '/users/edituser/:id', name: 'Modifer Client', component: ModifierClient },
	{ path: '/users/:id', name: 'Détailles de Client', component: User },
	{ path: '/users/archives', name: 'Archives de Client', component: ArchivesClient }
];

export default routes;
