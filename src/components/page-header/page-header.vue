<template lang="pug">
  header.page_header(
    :class="{\
        'menu-show': openBurgerMenu,\
        'signin-show': openSignIn,\
        'logged': userIsLogin\
        }"
  )

    include blocks/hidden-section.pug
    section.header_main
      include blocks/top-menu.pug
    nav.header_nav
      .content-wrap.content-indent
        .header_row.header_row--nav
          ul.header_nav-list
            li
              g-link.nav-list_link(:to="{name: 'VrList'}" exact) VIRTUAL ROOMS
            li
              g-link.nav-list_link(:to="{name: 'GalleryList'}" exact ) GALLERY
            li
              g-link.nav-list_link(:to="{name: 'StoreFront'}" exact) STORE FRONT
            li
              g-link.nav-list_link(:to="{name: 'MarketPlace'}" exact) MARKETPLACE
            li
              g-link.nav-list_link(:to="{name: 'ProductPage'}" exact) PRODUCTS
            li
              g-link.nav-list_link(to="/some-link" exact) CONTACT
            //-li
              g-link.nav-list_link(:to="{name: 'CartPage'}" exact)
                span Shopping Cart
                | &nbsp;
                i.fa.fa-shopping-cart.show-for-presmall
                | &nbsp;
                sup {{ cartsCount }}

          ul.header_options.header_nav-secondary
            li
              g-link.nav-list_link(:to="{name: 'ArticleList'}")
                span MEDIA
            li
              g-link.nav-list_link(to="/some-link")
                span TV
                | &nbsp;
                i.fa.fa-television.show-for-presmall



</template>

<script src="./page-header.js"></script>

<style lang="scss"> @import './page-header'; </style>
