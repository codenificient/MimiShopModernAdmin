import CIcon from '@coreui/icons-react'
import React from 'react'

const _nav =  [
  {
    _tag: 'CSidebarNavItem',
    name: 'Accueil',
    to: '/dashboard',
    icon: <CIcon name="cil-speedometer" customClasses="c-sidebar-nav-icon"/>,
    badge: {
      color: 'danger',
      text: 'NEW',
    }
  },

  {
    _tag: 'CSidebarNavTitle',
    _children: ['CATEGORIES']
  },
  {
    _tag: 'CSidebarNavDropdown',
    name: 'Catégorie',
    route: '/category',
    icon: 'cil-puzzle',
    _children: [
    
      {
        _tag: 'CSidebarNavItem',
        name: 'Toutes les Catégories',
        to: '/category/allcategory',
      },
      {
        _tag: 'CSidebarNavItem',
        name: 'Ajouter et Modifier',
        to: '/category/addcategory',
      },


      {
        _tag: 'CSidebarNavItem',
        name: 'Archives des Catégories',
        to: '/category/archives',
      },
  
    ],
  },

    {
    _tag: 'CSidebarNavTitle',
    _children: ['CLIENTS']
  },
  {
    _tag: 'CSidebarNavDropdown',
    name: 'Tous les Clients',
    route: '/user',
    icon: 'cil-puzzle',
    _children: [
      {
        _tag: 'CSidebarNavItem',
        name: 'Ajouter Client',
        to: '/user/adduser',
      },
      {
        _tag: 'CSidebarNavItem',
        name: 'Modifier Client',
        to: '/user/edituser',
      },
 
      {
        _tag: 'CSidebarNavItem',
        name: 'Archives des Clients',
        to: '/user/archives',
      },  
    
    ],
  },


{
    _tag: 'CSidebarNavItem',
    name: 'Statistiques',
    to: '/widgets',
    icon: 'cil-calculator',
    badge: {
      color: 'warning',
      text: 'NEW',
    },
  },

    {
    _tag: 'CSidebarNavDivider'
  },
  {
    _tag: 'CSidebarNavTitle',
    _children: ['COMMANDES'],
  },
  {
    _tag: 'CSidebarNavDropdown',
    name: 'Achats Actifs',
    route: '/orders',
    icon: 'cil-star',
    _children: [
      {
        _tag: 'CSidebarNavItem',
        name: 'En Transit',
        to: '/orders/activeorders',
      },
      {
        _tag: 'CSidebarNavItem',
        name: 'Delivered Orders',
        to: '/orders/delivered',
      },
      {
        _tag: 'CSidebarNavItem',
        name: 'Refunds In Progress',
        to: '/orders/refunds',
      },

    ],
  },

    {
    _tag: 'CSidebarNavItem',
    name: 'Revenues',
    to: '/orders/revenue',
    icon: 'cil-calculator',
    badge: {
      color: 'success',
      text: 'NEW',
    },
  },

  {
    _tag: 'CSidebarNavTitle',
    _children: ['PAGES']
  },
  {
    _tag: 'CSidebarNavDropdown',
    name: 'Toutes les Pages',
    route: '/page',
    icon: 'cil-puzzle',
    _children: [
      {
        _tag: 'CSidebarNavItem',
        name: 'Toutes les Pages',
        to: '/page/allpages',
      },
      {
        _tag: 'CSidebarNavItem',
        name: 'Ajouter Page',
        to: '/page/addpage',
      },
      {
        _tag: 'CSidebarNavItem',
        name: 'Modifier Pages',
        to: '/page/editpage',
      },
      {
        _tag: 'CSidebarNavItem',
        name: 'Creer une Promotion',
        to: '/page/createpromotion',
      },
      {
        _tag: 'CSidebarNavItem',
        name: 'Archives des Pages',
        to: '/page/archives',
      }, 
    
    ],
  },

  {
    _tag: 'CSidebarNavItem',
    name: 'Promotions',
    to: '/promotions',
    icon: 'cil-calculator',
    badge: {
      color: 'primary',
      text: 'NEW',
    },
  },

  
  {
    _tag: 'CSidebarNavTitle',
    _children: ['PRODUITS']
  },
  {
    _tag: 'CSidebarNavDropdown',
    name: 'Tous les Produits',
    route: '/product',
    icon: 'cil-puzzle',
    _children: [
      {
        _tag: 'CSidebarNavItem',
        name: 'Tous les Produits',
        to: '/product/allproducts',
      },
      {
        _tag: 'CSidebarNavItem',
        name: 'Ajouter Produit',
        to: '/product/addproduct',
      },
      {
        _tag: 'CSidebarNavItem',
        name: 'Modifier Produit',
        to: '/product/editproduct',
      },
 
      {
        _tag: 'CSidebarNavItem',
        name: 'Archives des Produits',
        to: '/product/archives',
      },     
    ],
  },


  {
    _tag: 'CSidebarNavItem',
    name: 'Nos Revendeurs',
    to: '/widgets',
    icon: 'cil-calculator',
    badge: {
      color: 'warning',
      text: 'NEW',
    },
  },
]

export default _nav
