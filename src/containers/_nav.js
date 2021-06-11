import CIcon from '@coreui/icons-react';
import React from 'react';

const _nav = [
	{
		_tag: 'CSidebarNavItem',
		name: 'Accueil',
		to: '/dashboard',
		icon: <CIcon name="cil-view-quilt" customClasses="c-sidebar-nav-icon" />
	},

	{
		_tag: 'CSidebarNavTitle',
		_children: [ 'CATÉGORIES' ]
	},
	{
		_tag: 'CSidebarNavDropdown',
		name: 'Catégorie',
		route: '/category',
		icon: 'cil-list-rich',
		_children: [
			{
				_tag: 'CSidebarNavItem',
				name: 'Toutes les Catégories',
				to: '/category/allcategory'
			},
			{
				_tag: 'CSidebarNavItem',
				name: 'Ajouter et Modifier',
				to: '/category/addcategory'
			},

			{
				_tag: 'CSidebarNavItem',
				name: 'Archives des Catégories',
				to: '/category/archives'
			}
		]
	},

	{
		_tag: 'CSidebarNavTitle',
		_children: [ 'CLIENTS' ]
	},
	{
		_tag: 'CSidebarNavDropdown',
		name: 'Clients',
		route: '/users',
		icon: 'cil-people',
		_children: [
			{
				_tag: 'CSidebarNavItem',
				name: 'Tous les Clients',
				to: '/users/allusers'
			},
			{
				_tag: 'CSidebarNavItem',
				name: 'Ajouter Client',
				to: '/users/adduser'
			},
			{
				_tag: 'CSidebarNavItem',
				name: 'Modifier Client',
				to: '/users/edituser'
			},

			{
				_tag: 'CSidebarNavItem',
				name: 'Archives des Clients',
				to: '/users/archives'
			}
		]
	},

	{
		_tag: 'CSidebarNavItem',
		name: 'Statistiques',
		to: '/widgets',
		icon: 'cil-address-book',
		badge: {
			color: 'warning',
			text: 'NEW'
		}
	},

	{
		_tag: 'CSidebarNavDivider'
	},
	{
		_tag: 'CSidebarNavTitle',
		_children: [ 'COMMANDES' ]
	},
	{
		_tag: 'CSidebarNavDropdown',
		name: 'Achats',
		route: '/orders',
		icon: 'cil-cart',
		_children: [
			{
				_tag: 'CSidebarNavItem',
				name: 'En Transite',
				to: '/orders/activeorders'
			},
			{
				_tag: 'CSidebarNavItem',
				name: 'Achats Livrés',
				to: '/orders/delivered'
			},
			{
				_tag: 'CSidebarNavItem',
				name: 'Remboursements',
				to: '/orders/refunds'
			}
		]
	},

	{
		_tag: 'CSidebarNavItem',
		name: 'Revenues',
		to: '/orders/revenue',
		icon: 'cil-dollar',
		badge: {
			color: 'success',
			text: 'NEW'
		}
	},
	{
		_tag: 'CSidebarNavDivider'
	},
	{
		_tag: 'CSidebarNavTitle',
		_children: [ 'MÉSSAGES' ]
	},
	{
		_tag: 'CSidebarNavDropdown',
		name: 'Méssages',
		route: '/messages',
		icon: 'cil-speech',
		_children: [
			{
				_tag: 'CSidebarNavItem',
				name: 'Boite de Réception',
				to: '/messages'
			},
			{
				_tag: 'CSidebarNavItem',
				name: 'Composer',
				to: '/messages/newemail'
			},
			{
				_tag: 'CSidebarNavItem',
				name: 'Brouillons',
				to: '/messages/drafts'
			},
			{
				_tag: 'CSidebarNavItem',
				name: 'Envoyés',
				to: '/messages/sent'
			}
		]
	},

	{
		_tag: 'CSidebarNavItem',
		name: 'Conversations',
		to: '/messages/chats',
		icon: 'cib-whatsapp',
		badge: {
			color: 'success',
			text: 'NEW'
		}
	},

	{
		_tag: 'CSidebarNavTitle',
		_children: [ 'PAGES' ]
	},
	{
		_tag: 'CSidebarNavDropdown',
		name: 'Toutes les Pages',
		route: '/page',
		icon: 'cil-layers',
		_children: [
			{
				_tag: 'CSidebarNavItem',
				name: 'Toutes les Pages',
				to: '/page/allpages'
			},
			{
				_tag: 'CSidebarNavItem',
				name: 'Ajouter Page',
				to: '/page/addpage'
			},
			{
				_tag: 'CSidebarNavItem',
				name: 'Modifier Pages',
				to: '/page/editpage'
			},
			{
				_tag: 'CSidebarNavItem',
				name: 'Creer une Promotion',
				to: '/page/createpromotion'
			},
			{
				_tag: 'CSidebarNavItem',
				name: 'Archives des Pages',
				to: '/page/archives'
			}
		]
	},

	{
		_tag: 'CSidebarNavItem',
		name: 'Promotions',
		to: '/promotions',
		icon: 'cil-image',
		badge: {
			color: 'primary',
			text: 'NEW'
		}
	},

	{
		_tag: 'CSidebarNavTitle',
		_children: [ 'PRODUITS' ]
	},
	{
		_tag: 'CSidebarNavDropdown',
		name: 'Tous les Produits',
		route: '/product',
		icon: 'cil-sitemap',
		_children: [
			{
				_tag: 'CSidebarNavItem',
				name: 'Tous les Produits',
				to: '/product/allproducts'
			},
			{
				_tag: 'CSidebarNavItem',
				name: 'Ajouter Produit',
				to: '/product/addproduct'
			},
			{
				_tag: 'CSidebarNavItem',
				name: 'Modifier Produit',
				to: '/product/editproduct'
			},

			{
				_tag: 'CSidebarNavItem',
				name: 'Archives des Produits',
				to: '/product/archives'
			}
		]
	},

	{
		_tag: 'CSidebarNavItem',
		name: 'Nos Révendeurs',
		to: '/widgets',
		icon: 'cil-cash',
		badge: {
			color: 'warning',
			text: 'NEW'
		}
	}
];

export default _nav;
