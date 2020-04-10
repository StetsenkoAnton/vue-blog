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
              g-link.nav-list_link(to="/blog" exact) BLOG
            li
              g-link.nav-list_link(to="/gallery" exact) GALLERY
            //li
              g-link.nav-list_link(to="/StoreFront" exact) STORE FRONT
            //li
              g-link.nav-list_link(to="/MarketPlace" exact) MARKETPLACE
            //li
              g-link.nav-list_link(to="/ProductPage" exact) PRODUCTS
            li
              g-link.nav-list_link(to="/login" exact) CONTACT
            //-li
              g-link.nav-list_link(:to="/CartPage" exact)
                span Shopping Cart
                | &nbsp;
                i.fa.fa-shopping-cart.show-for-presmall
                | &nbsp;
                sup {{ cartsCount }}

          ul.header_options.header_nav-secondary
            li
              g-link.nav-list_link(to="/media")
                span MEDIA
            li
              g-link.nav-list_link(to="/some-link")
                span TV
                | &nbsp;
                i.fa.fa-television.show-for-presmall



</template>

<script src="./page-header.js"></script>

<style lang="scss"> @import './page-header'; </style>
