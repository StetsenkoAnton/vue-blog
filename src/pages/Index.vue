<template lang="pug">
  Layout
    .page_main-wrap
      .page_main
        //-div(v-if="!userIsLogin")
          include ./index-blocks/slider.pug
        main.content-wrap.content-indent
          //-section.main-features_section(v-if="!userIsLogin")
            include ./index-blocks/features-list.pug

          section.main_title-holder
            h2.h1
              i.fa.fa-bullhorn(aria-hidden="true")
              | &nbsp;
              |{{content.contentTitle}}


          tile-list.main-tile_section-list

          //-section.main-roles_section(v-if="!userIsLogin")
            include ./index-blocks/roles.pug


</template>

<script>
  import mainContent from '../../content/single-data/main.json';
  import TileList from '@/components/index-page/tile-list.vue';
export default {
  // metaInfo: {
  //   title: 'Hello, world!'
  // },
  components: {TileList},
  name: 'MainPage',
  data() {
    return {
      content: mainContent,
    }
  },
  computed: {
    userIsLogin() {
      //return this.$store.state.auth.isLogin;
      return true
    }
  },
  methods: {
    loadContent() {

    }
  }
}
</script>

<style lang="scss">
  @import '../scss/base';
  @import '../scss/components/slider-entity';
  $item-indent: 5px;
  //@import '../../../scss/components/site-entity-banner';
  /*@import '../scss/components/site-entities-list+site-entities-item';*/
  /*@import '../scss/components/rating';*/

  main {
    color: $col-txt2;
  }
  /* ---------------------------------------------------------
     1. Main slider
     ---------------------------------------------------------*/
  .slider--main {
    height: 385px;
    display: flex;
    @include media('>=presmall') {
      height: 500px;
    }
    @include media('>=medium') {
      height: 605px;
    }
    @include media('>=large') {
      margin-top: -20px;
    }
    .agile__list {
      display: flex;
    }
    .agile__track {
      align-items: stretch;
    }
  }



  .banners_slide-img {
    height: auto;
    width: 100%;
    @supports ((object-fit: cover) or (-ms-object-fit: cover) or (-o-object-fit: cover)) {
      position: static;
      object-fit: cover;
      width: 100%;
      height: 100%;
      transform: none;
    }
  }

  .slide_text-block {
    color: $white;
    background-color: rgba(#000, .4);
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    z-index: 2;
    padding: 25px 20px;
    width: calc(100% - 40px);
    text-align: center;
    @include media('>=presmall') {
      max-width: 530px;
      padding: 35px 30px;
    }
    @include media('>=medium') {
      max-width: 960px;
      padding: 13px 45px 55px;
    }
  }

  .banners_slide-title {
    text-align: center;
    margin-bottom: 10px;
    .h1 {
      @include media('>=presmall') {
        font-size: 64px;
      }
    }
  }

  .banners_slide-text {
    display: block;
    max-width: none;
    font-weight: normal;
    @include media('>=presmall') {
      font-size: 18px;
    }
    @include media('>=medium') {
      font-size: 24px;
    }
  }

  .main-slide_popup-btn {
    position: absolute;
    bottom: 20px;
    left: 50%;
    transform: translateX(-50%);
    padding: .45em 3.5em;
    z-index: 15;
    font-size: .875rem;
    box-shadow: 0 0 5px rgba(#000, .25);
    white-space: nowrap;
    @include media('>=presmall') {
      bottom: 50px;
    }
    @include media('>=medium') {
      bottom: 100px;
      font-size: 1rem;
    }
  }

  /* ---------------------------------------------------------
     2.1 Login popup
     ---------------------------------------------------------*/
  .reg_account-choose {
    .btn--outline {
      height: $input-height;
      display: flex;
      align-items: center;
      &:hover {
        background-color: inherit;
        color: inherit;
      }
      &.active {
        border-color: $col-primary;
        .fa {
          opacity: 1;
          color: $col-primary;
        }
        .reg_user-ico {
          color: $col-primary;
        }
      }
    }
    .btn--link {
      color: #ccc;
      font-size: .875em;
      &:hover {
        color: $col-primary;
      }
    }
    .fa {
      opacity: 0;
      font-size: .75em;
      margin-right: 1em;
    }
    .reg_user-ico {
      font-size: 1.25em;
      color: #ccc;
      margin-left: auto;
    }
  }

  .reg_captcha-section {
    @include media('>=premedium') {
      display: flex;
      align-items: center;
      justify-content: space-between;
    }
    .btn {
      margin: 15px 0;
    }
  }
  /* ---------------------------------------------------------
     2.1 Login popup Card
     ---------------------------------------------------------*/
  .popup-login_card {
    @include media('>=premedium') {
      padding: 10px 20px;
    }
    .h2 {
      font-weight: normal;
      margin-bottom: 10px;
    }
  }
  .popup-login_card-info {
    position: relative;
    span {
      position: relative;
      z-index: 2;
      display: inline-block;
      background-color: $white;
      padding: 0 15px;
      font-weight: 300;
    }
    hr {
      border: none;
      border-bottom: 1px solid $col-placeholder;
      position: absolute;
      left: 0;
      right: 0;
      top: 50%;
      transform: translateY(-50%);
      margin: 0;
    }
  }
  .popup-login_card-list {
    font-weight: 300;
    list-style-type: none;
    margin: 23px auto 0;
    max-width: 185px;
    padding: 0;
    text-align: left;
    li {
      &:before {
        content: "\f058";
        font-family: FontAwesome;
        color: $col-primary;
        margin-right: 10px;
      }
    }
  }

  /* ---------------------------------------------------------
     3. Features list
     ---------------------------------------------------------*/
  .main-features_section {
    padding: 20px 0;
    @include media('>=medium') {
      padding: 60px 0 40px;
    }
  }
  .main-features_list {
    margin: 0;
    padding: 0;
    list-style: none;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    li {
      flex: 0 0 170px;
      max-width: 170px;
      margin: 0 0 15px;
      padding: 0 10px;

    }
  }
  .main-features_link {
    display: block;
    text-align: center;
    color: $col-txt2;
    line-height: 1.375;
    .h5 {
      @include multi-transition (color);
      margin-bottom: 15px;
    }
    &:hover {
      .main-features_icon-holder {
        background-color: $col-primary;
        color: $white;
      }
      .h5 {
        color: $col-primary;
      }
    }
  }
  .main-features_icon-holder {
    @include multi-transition (color, background-color);
    display: inline-flex;
    text-align: center;
    font-size: 1.75em;
    color: $col-primary;
    width: 45px;
    height: 45px;
    margin-bottom: 15px;
    i {
      margin: auto;
    }
  }
  /* ---------------------------------------------------------
     4. Title
     ---------------------------------------------------------*/
  .main_title-holder {
    text-align: center;
    .h1 {
      @include media('<medium') {
        font-size: 1.25rem;
      }
    }
    .fa {
      color: $col-primary;
    }
  }
  /* ---------------------------------------------------------
     4. Roles
     ---------------------------------------------------------*/
  .main-roles_section {
    padding: 0 0 10px;
  }
  .main-roles_title {
    text-align: center;
    @include media('>=medium') {
      margin-bottom: 1.5em;
    }
  }
  .main-roles_list {
    @include media('>=medium') {
      display: flex;
    }
  }
  .main-roles_item {
    margin-bottom: 25px;
    @include media('>=medium') {
      flex: 0 0 33.33%;
      &:first-child .main-roles_link {
        border-right: none;
      }
      &:last-child .main-roles_link {
        border-left: none;
      }
    }
    &:hover {
      @include media('>=medium') {
        .main-roles_link {
          background-color: $col-primary;
          color: $white;
        }
        .main-roles_description {
          color: inherit;
        }
      }
    }
  }
  .main-roles_link {
    color: inherit;
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 15px 10px;
    margin-bottom: 10px;
    @include media('>=medium') {
      display: block;
      border: 1px solid $col-border;
    }
    @include media('>=large') {
      display: flex;
    }
    .h4 {
      margin: 0 0 0 1em;
      @include media('>=medium') {
        font-size: 1rem;
      }
    }

  }
  .main-roles_img {
    width: 58px;
    height: auto;
  }
  .main-roles_description {
    @include multi-transition (color);
    text-align: center;
    padding: 15px;
    line-height: 1.125;
    @include media('>=medium') {
      color: $disable-txt;
    }
    p {
      margin: 0 auto;
      @include media('>=medium') {
        max-width: 270px;
      }
    }
  }

  /*spiner*/
  .spiner {
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: rgba(#000, .5);
    color: #fff;
    display: flex;
    align-items: center;
    justify-content: center;
  }

</style>
