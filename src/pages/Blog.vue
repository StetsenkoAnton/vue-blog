<template lang="pug">
  Layout
    .page_content-wrap.content-wrap
      main.page_content(v-if="content")
        button(type="button"
          @click="showSidebar = !showSidebar"
        ).btn.btn--outline.hide-for-xlarge.show-sidebar-btn
          i.fa.fa-filter(aria-hidden="true")
          | &nbsp;
          | Filters

        .page_title
          h1.h2 {{ content.pageTitle.title }}
          p.h5 {{ content.pageTitle.description }}

        list-sorting(
          :listLength="content.items.length"
          :pageName="content.pageTitle.title"
        )

        list-articles(
          :listSource="showList"
          :listLayout="paginationData.listLayoutRow"
        )
          template(slot-scope="{item}")
            article-cart(
              :cart-data="item"
            )


          list-pagination.category-list_settings(
          :listLength="content.items.length"
        )

      //-aside.page_sidebar.page_sidebar--left.category-sidebar(
        v-if="content"
        /:class="{'active': showSidebar}"
        )
        .sidebar_controls.hide-for-xlarge
          button.btn.btn--outline(type="button")
            i(aria-hidden="true").fa.fa-filter
            | &nbsp;
            | &nbsp;
            span Clear All Filters
          button.btn.btn--link.sidebar_close-btn(type="button"
            @click="showSidebar = !showSidebar"
          )
            i(aria-hidden="true").fa.fa-times
        ul.category-sidebar_list
          //-opened
          li.sidebar-category(
            v-for="(category, index) in content.categories"
          )
            button.sidebar-category_title(type="button"
              @click="setActiveTab(index)"
              /:class="{'active': activeTab == index}"
            )
              h5 {{ category.title}}
              i(aria-hidden="true").fa.toggle_arrow-icon

            ul.sidebar_groups-list(
            )
              li.sidebar_group-item(
                v-for="(filter, index) in category.filters"
              )
                button.sidebar_group-toggle(type="button"
                  @click="setActiveFilter(index)"
                  /:class="{'opened': activeFilter == index}"
                )
                  h6.sidebar_group-title {{ filter.title }}
                  i(aria-hidden="true").fa.toggle_plus-icon

                ul.sidebar_filters-list
                  li.sidebar_filter-item(
                    v-for="filterItem in filter.filterItems"
                  )
                    label.sidebar_filter-item_block
                      input(type="checkbox")
                      span.checkbox-emmitator
                      span.sidebar_filter {{ filterItem.title }}

</template>
<static-query>
  query Posts {
    blogPosts: allBlog {
      edges {
        node {
          title
          type
          date
          body
          thumbnail
        }
      }
    }
  }
</static-query>
<script>
  import {SortService} from "@/core/helpers";

//-import ListPagination from '../../../components/list-pagination.vue'
  import ListPagination from '@/components/list-pagination/list-pagination.vue';
  import ListSorting    from '@/components/list-sorting/list-sorting.vue';
  import ListArticles   from '@/components/list-articles/list-articles.vue';
  import ArticleCart   from '@/components/article-cart.vue';



  export default {
    name: 'PageBlog',
    components: {
      ListPagination,
      ListSorting,
      ListArticles,
      ArticleCart
    },
    mounted() {
      setTimeout(()=> {
        this.content = {"categories":[{"_id":"59fa1a4f318927308e045dbf","filters":[{"_id":"58ee3811356c7e60d25fe5ad","filterItems":[{"title":"Transitional"}],"title":"Style"},{"_id":"58ee385b356c7e60d25fe5ae","filterItems":[{"title":"Kids Room"}],"title":"Type"},{"_id":"58ee40f2356c7e60d25fe5c3","filterItems":[{"title":"White"},{"title":"Light Wood"}],"title":"Cabinet Finish"},{"_id":"58ee425c356c7e60d25fe5c6","filterItems":[{"title":"White"},{"title":"Gray"},{"title":"Pink"},{"title":"Multi"}],"title":"Wall Color"},{"_id":"58ee42b1356c7e60d25fe5c7","filterItems":[{"title":"Hardwood"}],"title":"Floors"},{"_id":"58ee43a8356c7e60d25fe5ca","filterItems":[{"title":"Pattern"}],"title":"Wallpaper"}],"slug":"bedroom1","title":"Bedroom"},{"_id":"58595affed36e00584c561f0","filters":[{"_id":"58ee3811356c7e60d25fe5ad","filterItems":[{"title":"Transitional"},{"title":"Contemporary"},{"title":"Eclectic"},{"title":"Traditional"}],"title":"Style"},{"_id":"58ee385b356c7e60d25fe5ae","filterItems":[{"title":"Powder Room"},{"title":"Master Bath"}],"title":"Type"},{"_id":"58ee3c25356c7e60d25fe5b0","filterItems":[{"title":"Marble.com"},{"title":"Hans Krug"},{"title":"Milano Doors"},{"title":"TileBar"},{"title":"Valley Acrylic"},{"title":"Behr"},{"title":"Room and Board"},{"title":"Amba Products"},{"title":"Brizo"}],"title":"Brands"},{"_id":"58ee40f2356c7e60d25fe5c3","filterItems":[{"title":"Latte"},{"title":"White"},{"title":"Green"},{"title":"Red"},{"title":"Black"},{"title":"Gray"}],"title":"Cabinet Finish"},{"_id":"58ee41e3356c7e60d25fe5c5","filterItems":[{"title":"Granite"},{"title":"Marble"},{"title":"Quartzite"},{"title":"Onyx"},{"title":"Glass"},{"title":"Travertine"},{"title":"Quartz"}],"title":"Countertop Material"},{"_id":"58ee425c356c7e60d25fe5c6","filterItems":[{"title":"White"},{"title":"Beige"},{"title":"Gray"},{"title":"Blue"},{"title":"Red"},{"title":"Green"},{"title":"Yellow"},{"title":"Pink"}],"title":"Wall Color"},{"_id":"58ee42b1356c7e60d25fe5c7","filterItems":[{"title":"Laminate"},{"title":"Marble"},{"title":"Travertine"},{"title":"Porcelain Tile"},{"title":"Ceramic Tile"},{"title":"Quartz"},{"title":"Granite"},{"title":"Quartzite"}],"title":"Floors"},{"_id":"58ee4333356c7e60d25fe5c8","filterItems":[{"title":"Granite"},{"title":"Marble"},{"title":"Onyx"},{"title":"Travertine"},{"title":"Quartzite"},{"title":"Glass"},{"title":"Tile"}],"title":"Backsplash"},{"_id":"58ee4381356c7e60d25fe5c9","filterItems":[{"title":"Beige"},{"title":"White"},{"title":"Multi"},{"title":"Blue"},{"title":"Green"},{"title":"Red"},{"title":"Black"},{"title":"Gray"},{"title":"Brown"}],"title":"Tile Color"},{"_id":"58ee43da356c7e60d25fe5cb","filterItems":[{"title":"Free Standing"},{"title":"Drop In"},{"title":"Corner"},{"title":"Claw Foot"},{"title":"Hot Tub"}],"title":"Bath Tub"},{"_id":"58ee43fa356c7e60d25fe5cc","filterItems":[{"title":"Corner"},{"title":"Open"},{"title":"Alcove"},{"title":"Shower/Tub Combination"},{"title":"Double"}],"title":"Shower"}],"slug":"bathroom","title":"Bathroom"},{"_id":"58482d838f4de854d8c6eeea","filters":[{"_id":"58ee3811356c7e60d25fe5ad","filterItems":[{"title":"Transitional"},{"title":"Contemporary"},{"title":"Eclectic"},{"title":"Traditional"}],"title":"Style"},{"_id":"58ee385b356c7e60d25fe5ae","filterItems":[{"title":"Living Room"},{"title":"Formal"},{"title":"Family Room"}],"title":"Type"},{"_id":"58ee3c25356c7e60d25fe5b0","filterItems":[{"title":"Marble.com"},{"title":"American Leather"},{"title":"B&B Italia"},{"title":"Element Designs"},{"title":"Farrow & Ball"},{"title":"Lumber Liquidators"},{"title":"Mannington Residential"},{"title":"Robert Abbey"},{"title":"The Shade Store"},{"title":"VIG Furniture"},{"title":"Behr"},{"title":"Delightfull"},{"title":"Graham & Brown"},{"title":"Authentic Reclaimed Floors"},{"title":"Andersen Windows"},{"title":"Eurofase Lighting"},{"title":"DANTV"},{"title":"Vant"},{"title":"Ethan Allen"},{"title":"iLiv"},{"title":"Warp & Weft"},{"title":"Metropolitan Picture Framing"},{"title":"Interior Deluxe"},{"title":"UGG"}],"title":"Brands"},{"_id":"58ee425c356c7e60d25fe5c6","filterItems":[{"title":"White"},{"title":"Beige"},{"title":"Gray"},{"title":"Blue"},{"title":"Red"},{"title":"Green"},{"title":"Yellow"},{"title":"Pink"},{"title":"Orange"},{"title":"Multi"},{"title":"Purple"}],"title":"Wall Color"},{"_id":"58ee42b1356c7e60d25fe5c7","filterItems":[{"title":"Laminate"},{"title":"Hardwood"},{"title":"Carpet"},{"title":"Marble"},{"title":"Granite"},{"title":"Soapstone"}],"title":"Floors"},{"_id":"58ee43a8356c7e60d25fe5ca","filterItems":[{"title":"Painted"},{"title":"Pattern"},{"title":"Bright"},{"title":"Subtle"},{"title":"Tone on Tone"},{"title":"Textured"}],"title":"Wallpaper"},{"_id":"59089343e9ff0d4e995bb540","filterItems":[{"title":"Drapery/Panels"}],"title":"Window Treatments"}],"slug":"living-room","title":"Living Room"},{"_id":"58595af1ed36e00584c561ee","filters":[{"_id":"58ee3811356c7e60d25fe5ad","filterItems":[{"title":"Transitional"},{"title":"Contemporary"},{"title":"Eclectic"},{"title":"Traditional"}],"title":"Style"},{"_id":"58ee385b356c7e60d25fe5ae","filterItems":[{"title":"Kitchen/ Dining"},{"title":"Eat-In"},{"title":"Enclosed"}],"title":"Type"},{"_id":"58ee3c25356c7e60d25fe5b0","filterItems":[{"title":"Marble.com"},{"title":"Ashley Norton"},{"title":"Barbie Kennedy"},{"title":"Element Designs"},{"title":"Frigidaire"},{"title":"Hampshire Cabinetry"},{"title":"Kohler"},{"title":"Le Creuset"},{"title":"Lumber Liquidators"},{"title":"Mannington Residential"},{"title":"Moen"},{"title":"Smeg"},{"title":"Sub Zero Wolf"},{"title":"Viking"},{"title":"Williams Sonoma"},{"title":"Behr"},{"title":"Birzo"},{"title":"Caesarstone"},{"title":"Rangecraft"},{"title":"Canadel"},{"title":"Brizo"},{"title":"Cole & Mason"},{"title":"Bertazzoni"}],"title":"Brands"},{"_id":"58ee40f2356c7e60d25fe5c3","filterItems":[{"title":"Latte"},{"title":"White"},{"title":"Green"},{"title":"Red"},{"title":"Black"},{"title":"Gray"},{"title":"Blue"},{"title":"Espresso"},{"title":"Maple Wood"},{"title":"Painted"},{"title":"Dark Wood"},{"title":"Medium Wood"},{"title":"Light Wood"},{"title":"Cherry"},{"title":"Walnut"},{"title":"Alder"},{"title":"Coffee"},{"title":"Chestnut"},{"title":"Honey"},{"title":"Wheat"},{"title":"Ginger"},{"title":"Smoke"},{"title":"Sierra"},{"title":"Cordovan"},{"title":"Blackstone"}],"title":"Cabinet Finish"},{"_id":"58ee416f356c7e60d25fe5c4","filterItems":[{"title":"L- Shape"},{"title":"Galley"},{"title":"One Wall"},{"title":"U-Shaped/Horeshoe"},{"title":"Island"},{"title":"Penninsula"}],"title":"Layout"},{"_id":"58ee41e3356c7e60d25fe5c5","filterItems":[{"title":"Granite"},{"title":"Marble"},{"title":"Quartzite"},{"title":"Onyx"},{"title":"Glass"},{"title":"Wood"},{"title":"Travertine"},{"title":"Quartz"}],"title":"Countertop Material"},{"_id":"58ee425c356c7e60d25fe5c6","filterItems":[{"title":"Black"},{"title":"White"},{"title":"Beige"},{"title":"Gray"},{"title":"Blue"},{"title":"Red"},{"title":"Green"},{"title":"Yellow"},{"title":"Pink"},{"title":"Orange"},{"title":"Multi"},{"title":"Purple"}],"title":"Wall Color"},{"_id":"58ee42b1356c7e60d25fe5c7","filterItems":[{"title":"Laminate"},{"title":"Hardwood"}],"title":"Floors"},{"_id":"58ee4333356c7e60d25fe5c8","filterItems":[{"title":"Granite"},{"title":"Marble"},{"title":"Onyx"},{"title":"Travertine"},{"title":"Glass"},{"title":"Tile"},{"title":"Quartz"}],"title":"Backsplash"},{"_id":"58ee4457356c7e60d25fe5cd","filterItems":[{"title":"Bottom Freezer"},{"title":"Side by Side"},{"title":"Built-In"},{"title":"Stainless Steel"},{"title":"Wine & Beverage Coolers"}],"title":"Refrigerator"},{"_id":"58ee464c356c7e60d25fe5ce","filterItems":[{"title":"Wall-Mount Hood"},{"title":"Island Hood"},{"title":"Downdraft Hood"},{"title":"Pro Hoods"}],"title":"Hoods"},{"_id":"58ee46e5356c7e60d25fe5cf","filterItems":[{"title":"Freestanding Range"},{"title":"Single Wall Oven"},{"title":"Double Wall Oven"},{"title":"Cooktops"}],"title":"Cooking"},{"_id":"58ee5205356c7e60d25fe5e9","filterItems":[{"title":"Stainless Steel"},{"title":"Black"},{"title":"White"},{"title":"Yellow"},{"title":"Red"},{"title":"Burgandy"},{"title":"Blue"},{"title":"Copper"},{"title":"Graphite Gray"},{"title":"Bronze"},{"title":"Green"},{"title":"Purple"},{"title":"Brass"}],"title":"Appliance Colors"}],"slug":"kitchen","title":"Kitchen"},{"_id":"5878fa0b5b94845fdcbcff3b","filters":[{"_id":"58ee3811356c7e60d25fe5ad","filterItems":[{"title":"Transitional"},{"title":"Contemporary"},{"title":"Eclectic"},{"title":"Modern"},{"title":"Traditional"}],"title":"Style"},{"_id":"58ee3c25356c7e60d25fe5b0","filterItems":[{"title":"Marble.com"},{"title":"American Leather"},{"title":"B&B Italia"},{"title":"Barbie Kennedy"},{"title":"Element Designs"},{"title":"Farrow & Ball"},{"title":"Finest Wallpaper"},{"title":"Joss & Main"},{"title":"Lumber Liquidators"},{"title":"Mannington Residential"},{"title":"Midwest Stair Parts"},{"title":"Milano Doors"},{"title":"Robert Abbey"},{"title":"VIG Furniture"},{"title":"Williams Sonoma"},{"title":"Y Lighting"},{"title":"Behr"},{"title":"Delightfull"},{"title":"Graham & Brown"},{"title":"Authentic Reclaimed Floors"},{"title":"Room and Board"},{"title":"Andersen Windows"},{"title":"Eurofase Lighting"},{"title":"Caesarstone"},{"title":"Canadel"}],"title":"Brands"},{"_id":"58ee425c356c7e60d25fe5c6","filterItems":[{"title":"Black"},{"title":"White"},{"title":"Beige"},{"title":"Gray"},{"title":"Blue"},{"title":"Red"},{"title":"Green"},{"title":"Yellow"},{"title":"Pink"},{"title":"Orange"},{"title":"Multi"},{"title":"Purple"}],"title":"Wall Color"},{"_id":"58ee42b1356c7e60d25fe5c7","filterItems":[{"title":"Laminate"},{"title":"Hardwood"},{"title":"Carpet"},{"title":"Marble"},{"title":"Travertine"},{"title":"Limestone"},{"title":"Concrete"},{"title":"Porcelain Tile"},{"title":"Ceramic Tile"},{"title":"Quartz"},{"title":"Granite"},{"title":"Quartzite"}],"title":"Floors"},{"_id":"58ee4381356c7e60d25fe5c9","filterItems":[{"title":"Beige"},{"title":"White"},{"title":"Multi"},{"title":"Blue"},{"title":"Green"},{"title":"Red"},{"title":"Black"},{"title":"Gray"},{"title":"Brown"}],"title":"Tile Color"},{"_id":"58ee43a8356c7e60d25fe5ca","filterItems":[{"title":"Painted"},{"title":"Pattern"},{"title":"Bright"},{"title":"Subtle"},{"title":"Tone on Tone"},{"title":"Textured"}],"title":"Wallpaper"}],"slug":"lobby","title":"Lobby"},{"_id":"58595b0aed36e00584c561f2","filters":[{"_id":"58ee3811356c7e60d25fe5ad","filterItems":[{"title":"Transitional"},{"title":"Contemporary"},{"title":"Eclectic"},{"title":"Modern"},{"title":"Traditional"}],"title":"Style"},{"_id":"58ee385b356c7e60d25fe5ae","filterItems":[{"title":"Kitchen/ Dining"},{"title":"Eat-In"}],"title":"Type"},{"_id":"58ee3c25356c7e60d25fe5b0","filterItems":[{"title":"Marble.com"},{"title":"B&B Italia"},{"title":"Farrow & Ball"},{"title":"Finest Wallpaper"},{"title":"Joss & Main"},{"title":"Lumber Liquidators"},{"title":"Mannington Residential"},{"title":"Robert Abbey"},{"title":"The Shade Store"},{"title":"VIG Furniture"},{"title":"Williams Sonoma"},{"title":"Y Lighting"},{"title":"Behr"},{"title":"Delightfull"},{"title":"Graham & Brown"},{"title":"Authentic Reclaimed Floors"},{"title":"Room and Board"},{"title":"Andersen Windows"},{"title":"Eurofase Lighting"},{"title":"Caesarstone"},{"title":"Canadel"},{"title":"Warp & Weft"}],"title":"Brands"},{"_id":"58ee425c356c7e60d25fe5c6","filterItems":[{"title":"Black"},{"title":"White"},{"title":"Beige"},{"title":"Gray"},{"title":"Blue"},{"title":"Red"},{"title":"Green"},{"title":"Yellow"},{"title":"Pink"},{"title":"Orange"},{"title":"Multi"},{"title":"Purple"}],"title":"Wall Color"},{"_id":"58ee42b1356c7e60d25fe5c7","filterItems":[{"title":"Laminate"},{"title":"Hardwood"},{"title":"Carpet"},{"title":"Marble"},{"title":"Travertine"},{"title":"Limestone"},{"title":"Concrete"},{"title":"Porcelain Tile"},{"title":"Ceramic Tile"},{"title":"Quartz"},{"title":"Granite"},{"title":"Quartzite"}],"title":"Floors"},{"_id":"58ee43a8356c7e60d25fe5ca","filterItems":[{"title":"Painted"},{"title":"Pattern"},{"title":"Bright"},{"title":"Subtle"},{"title":"Tone on Tone"},{"title":"Textured"}],"title":"Wallpaper"}],"slug":"dining-room","title":"Dining Room"}],"items":[{"_id":"59fa06f87ec04c4135f477b0","adminRatingEnabled":false,"categoryTitle":"Kitchen","collectionTitle":"","commentsCount":0,"commentsEnabled":false,"componentsCount":12,"features":{"human":false,"labels":false,"panorama":false,"video":false,"virtualRoom":true},"is360View":false,"isLiked":false,"isShared":false,"isUserAlreadyVoted":false,"is_elite":false,"likesCount":0,"link":"/virtual-room/casa-verona-kitchen","rating":5,"slug":"casa-verona-kitchen","tagLine":"A chef's dream, the Casa Verona Kitchen features two islands among the abundance of pro cooking features.","tags":"","thumbnail":["https://cdn3.housetipster.com/crop_3-990x0-556/vr-thumbnail%2F6avrrs892ow08gccskko8_Capture_2017_11_01_at_17.20.58.png"],"title":"Casa Verona Kitchen","type":"room","userPhoto":"https://cdn3.housetipster.com/resize_50x50/ht-userlogo.png","vendorsCount":0,"viewsCount":272},{"_id":"59f3ca8cd50e55214d1f9a3b","adminRatingEnabled":false,"categoryTitle":"Kitchen","collectionTitle":"","commentsCount":0,"commentsEnabled":false,"componentsCount":11,"features":{"human":false,"labels":false,"panorama":false,"video":false,"virtualRoom":true},"is360View":false,"isLiked":false,"isShared":false,"isUserAlreadyVoted":false,"is_elite":false,"likesCount":0,"link":"/virtual-room/bari-villa-kitchen","rating":5,"slug":"bari-villa-kitchen","tagLine":"The Bari Villa Kitchen offers a sophisticated mix of classic and contemporary design elements.","tags":"","thumbnail":["https://cdn3.housetipster.com/crop_0-1424x171-803/vr-thumbnail%2F4h8mgzgj33qcs4wkg08s8_Capture_2017_11_03_at_15.20.53.png"],"title":"Bari Villa Kitchen","type":"room","userPhoto":"https://cdn3.housetipster.com/resize_50x50/ht-userlogo.png","vendorsCount":0,"viewsCount":252},{"_id":"59ed44a7510a485acc956116","adminRatingEnabled":false,"categoryTitle":"Kitchen","collectionTitle":"","commentsCount":0,"commentsEnabled":false,"componentsCount":14,"features":{"human":false,"labels":false,"panorama":false,"video":false,"virtualRoom":true},"is360View":true,"isLiked":false,"isShared":false,"isUserAlreadyVoted":false,"is_elite":false,"likesCount":0,"link":"/virtual-room/tuscan","rating":0,"slug":"tuscan","tagLine":"Tuscan Kitchen, House Tipster’s newest Virtual Room, takes VR interior design tools to the next level with full 360-degree functionality.","tags":"","thumbnail":["https://cdn3.housetipster.com/crop_0-1500x56-844/vr-thumbnail%2F5v004pluaccgg80c0sg4c_Tuscan__4_.jpeg","https://cdn3.housetipster.com/crop_0-1498x104-845/vr-thumbnail%2F5c39c7tn49wkw8s4kcg8o_Tuscan__1_.jpeg","https://cdn3.housetipster.com/crop_0-1500x56-844/vr-thumbnail%2F72jhkt5cdksgok80gossc_Tuscan__2_.jpeg","https://cdn3.housetipster.com/crop_0-1500x56-844/vr-thumbnail%2F75yb7kvrpd8o4c4o8cs8k_Tuscan__3_.jpeg"],"title":"Tuscan","type":"room","userPhoto":"https://cdn3.housetipster.com/resize_50x50/ht-userlogo.png","vendorsCount":0,"viewsCount":4066},{"_id":"59d91c228e68120c6e308eff","adminRatingEnabled":false,"categoryTitle":"Living Room","collectionTitle":"","commentsCount":0,"commentsEnabled":false,"componentsCount":1,"features":{"human":false,"labels":false,"panorama":false,"video":false,"virtualRoom":true},"is360View":false,"isLiked":false,"isShared":false,"isUserAlreadyVoted":false,"is_elite":false,"likesCount":1,"link":"/virtual-room/blauvelt-villa-window-tint","rating":0,"slug":"blauvelt-villa-window-tint","tagLine":"The Blauvelt Villa Living Room is so open and airy that it's almost like a patio.","tags":"","thumbnail":["https://cdn3.housetipster.com/crop_0-1424x171-803/vr-thumbnail%2F4rh4nuawlgqo0g88kgksk_Capture_2017_10_05_at_17.25.53.png","https://cdn3.housetipster.com/crop_0-1500x28-844/vr-thumbnail%2F7g0ml0hxh6skcosk0o0oo_Blauvelt_Villa___Window_Tint.jpeg","https://cdn3.housetipster.com/crop_0-1500x28-844/vr-thumbnail%2F3mkc6upw56iowc844gscg_Blauvelt_Villa___Window_Tint__1_.jpeg","https://cdn3.housetipster.com/crop_0-1500x28-844/vr-thumbnail%2F7efv4lez2ggsgw88kgsc4_Blauvelt_Villa___Window_Tint__2_.jpeg"],"title":"Blauvelt Villa - Window Tint","type":"room","userPhoto":"https://cdn3.housetipster.com/resize_50x50/ht-userlogo.png","vendorsCount":0,"viewsCount":278},{"_id":"59cbd9b33138e55cc360e9e8","adminRatingEnabled":false,"categoryTitle":"Lobby","collectionTitle":"","commentsCount":0,"commentsEnabled":false,"componentsCount":11,"features":{"human":false,"labels":false,"panorama":false,"video":false,"virtualRoom":true},"is360View":false,"isLiked":false,"isShared":false,"isUserAlreadyVoted":false,"is_elite":false,"likesCount":0,"link":"/virtual-room/milagra-moderna-officina","rating":0,"slug":"milagra-moderna-officina","tagLine":"The trendy, contemporary Milagra Moderna Officina packs a punch with state-of-the-art components in a sleek office environment.","tags":"","thumbnail":["https://cdn3.housetipster.com/crop_0-1424x171-803/vr-thumbnail%2F4ikxlrgflw2ss8oo8gg4k_Capture_2017_10_05_at_17.12.12.png","https://cdn3.housetipster.com/crop_0-1500x28-844/vr-thumbnail%2F4pps0pdmnm04kgcc8ws08_Milagra_Moderna_Officina__2_.jpeg","https://cdn3.housetipster.com/crop_0-1500x28-844/vr-thumbnail%2F1hljfnl7tgg080kcgc4ks_Milagra_Moderna_Officina__1_.jpeg","https://cdn3.housetipster.com/crop_0-1500x28-844/vr-thumbnail%2F2ryd1rfaanc4sko0oso40_Milagra_Moderna_Officina.jpeg"],"title":"Milagra Moderna Officina","type":"room","userPhoto":"https://cdn3.housetipster.com/resize_50x50/ht-userlogo.png","vendorsCount":0,"viewsCount":189},{"_id":"59ca7f653138e55cc360d869","adminRatingEnabled":false,"categoryTitle":"Bedroom","collectionTitle":"","commentsCount":0,"commentsEnabled":false,"componentsCount":17,"features":{"human":false,"labels":false,"panorama":false,"video":false,"virtualRoom":true},"is360View":true,"isLiked":false,"isShared":false,"isUserAlreadyVoted":false,"is_elite":false,"likesCount":0,"link":"/virtual-room/the-kittila-childs-bedroom","rating":0,"slug":"the-kittila-childs-bedroom","tagLine":"Keeping your kid’s room cute but classy takes effort. Thankfully, the Kittila Child’s Bedroom covers all the bases.","tags":"Transitional, Kids Room, White, Light Wood, White, Gray, Pink, Multi, Hardwood, Pattern","thumbnail":["https://cdn3.housetipster.com/crop_0-1424x171-803/vr-thumbnail%2F1gb5e8p4ji68484ssc4w8_Capture_2017_10_05_at_16.39.30.png","https://cdn3.housetipster.com/crop_0-1500x28-844/vr-thumbnail%2F2yjaf741c2kgk0wco4w4o_The_Kittila_Child_s_Bedroom__3_.jpeg","https://cdn3.housetipster.com/crop_0-1500x28-844/vr-thumbnail%2F1wpjokykfklc0gcg0s4kk_The_Kittila_Child_s_Bedroom__6_.jpeg","https://cdn3.housetipster.com/crop_0-1500x28-844/vr-thumbnail%2F2asfyjp296ckw0s448c4s_The_Kittila_Child_s_Bedroom__5_.jpeg"],"title":"The Kittila Child’s Bedroom","type":"room","userPhoto":"https://cdn3.housetipster.com/resize_50x50/ht-userlogo.png","vendorsCount":0,"viewsCount":216},{"_id":"59ca89c33138e55cc360d99d","adminRatingEnabled":false,"categoryTitle":"Bedroom","collectionTitle":"","commentsCount":0,"commentsEnabled":false,"componentsCount":9,"features":{"human":false,"labels":false,"panorama":false,"video":false,"virtualRoom":true},"is360View":true,"isLiked":false,"isShared":false,"isUserAlreadyVoted":false,"is_elite":false,"likesCount":0,"link":"/virtual-room/casa-dei-fornelli-bedroom","rating":5,"slug":"casa-dei-fornelli-bedroom","tagLine":"The 360-degree Casa Dei Fornelli Virtual Room checks off every box for a perfect bedroom sanctuary.","tags":"","thumbnail":["https://cdn3.housetipster.com/crop_0-1424x193-803/vr-thumbnail%2F74ledvwcvxc0oo0owwkk8_Capture_2017_10_05_at_16.53.18.png"],"title":"Casa Dei Fornelli Bedroom","type":"room","userPhoto":"https://cdn3.housetipster.com/resize_50x50/ht-userlogo.png","vendorsCount":0,"viewsCount":183},{"_id":"5a53ab5ca3e6fc5e98a49983","adminRatingEnabled":false,"categoryTitle":"Kitchen","collectionTitle":"","commentsCount":0,"commentsEnabled":false,"componentsCount":29,"features":{"human":false,"labels":false,"panorama":false,"video":false,"virtualRoom":true},"is360View":true,"isLiked":false,"isShared":false,"isUserAlreadyVoted":false,"is_elite":false,"likesCount":0,"link":"/virtual-room/mulholland-drive-kitchen","rating":0,"slug":"mulholland-drive-kitchen","tagLine":"The backsplash in the Mulholland Drive kitchen was replaced with windows as a \"continuum out to nature.\"","tags":"","thumbnail":["https://cdn3.housetipster.com/crop_0-1018x265-576/vr-thumbnail%2F601v0442ff0o8so8ck0k_Mulholland_Residence_Kitchen.jpeg"],"title":"Mulholland Drive Kitchen","type":"room","userPhoto":"https://cdn3.housetipster.com/resize_50x50/ht-userlogo.png","vendorsCount":0,"viewsCount":127},{"_id":"5945679de0e8574448bfd1de","adminRatingEnabled":false,"categoryTitle":"Living Room","collectionTitle":"","commentsCount":0,"commentsEnabled":false,"componentsCount":6,"features":{"human":false,"labels":false,"panorama":false,"video":false,"virtualRoom":true},"is360View":false,"isLiked":false,"isShared":false,"isUserAlreadyVoted":false,"is_elite":false,"likesCount":0,"link":"/virtual-room/mikeli-curtains-living-room","rating":0,"slug":"mikeli-curtains-living-room","tagLine":"The Mikeli Curtains Living Room demonstrates that minimalist design doesn't have to be stark and boring. It can be bright and fun too!","tags":"","thumbnail":["https://cdn3.housetipster.com/crop_0-1424x171-803/vr-thumbnail%2F77u417b9t2kogkccso8c0_Capture_2017_10_05_at_16.18.37.png"],"title":"Mikeli Curtains Living Room","type":"room","userPhoto":"https://cdn3.housetipster.com/resize_50x50/ht-userlogo.png","vendorsCount":0,"viewsCount":150},{"_id":"5942dc1d61949d33ae9fd8d5","adminRatingEnabled":false,"categoryTitle":"Bathroom","collectionTitle":"","commentsCount":0,"commentsEnabled":false,"componentsCount":12,"features":{"human":false,"labels":false,"panorama":false,"video":false,"virtualRoom":true},"is360View":false,"isLiked":false,"isShared":false,"isUserAlreadyVoted":false,"is_elite":false,"likesCount":9,"link":"/virtual-room/lohja-bathroom","rating":0,"slug":"lohja-bathroom","tagLine":"The Lohja Residence Bathroom is available in several different patterns and materials, and can be customized to your liking.","tags":"Contemporary, Master Bath, Marble.com, Behr, Latte, White, Black, Gray, Granite, Marble, Quartzite, White, Beige, Gray, Green, Marble, Quartz, Granite, Quartzite, Granite, Marble, Onyx, Free Standing","thumbnail":["https://cdn3.housetipster.com/crop_0-1500x59-842/vr-thumbnail%2F6s27cuapzy4gs4wwwg44o_1.jpg","https://cdn3.housetipster.com/crop_0-1500x59-842/vr-thumbnail%2F6olpgry8rksgwckwssocc_3.jpg","https://cdn3.housetipster.com/crop_0-1500x59-842/vr-thumbnail%2F2yocauhruym84scsskg0k_2.jpg","https://cdn3.housetipster.com/crop_0-1500x59-842/vr-thumbnail%2F633uow18c884swsw4kck8_4.jpg"],"title":"Lohja Bathroom","type":"room","userPhoto":"https://cdn3.housetipster.com/resize_50x50/ht-userlogo.png","vendorsCount":0,"viewsCount":740},{"_id":"590888e2e9ff0d4e995bb4f5","adminRatingEnabled":false,"categoryTitle":"Dining Room","collectionTitle":"","commentsCount":0,"commentsEnabled":true,"componentsCount":15,"features":{"human":false,"labels":false,"panorama":false,"video":false,"virtualRoom":true},"is360View":false,"isLiked":false,"isShared":false,"isUserAlreadyVoted":false,"is_elite":false,"likesCount":9,"link":"/virtual-room/napa-valley-dining-room","rating":5,"slug":"napa-valley-dining-room","tagLine":"The Twin Pines Dining Room is a lesson in minimalist splendor.","tags":"Farrow & Ball, Joss & Main, Mannington Residential, Graham & Brown, Warp & Weft, White, Gray, Blue, Purple, Hardwood, Pattern, Tone on Tone","thumbnail":["https://cdn3.housetipster.com/crop_0-1500x59-842/vr-thumbnail%2F3q1x5slhp46cw808ck4cc_Napa_Valley_Dining_Room_intial.jpeg","https://cdn3.housetipster.com/crop_0-1500x59-842/vr-thumbnail%2F550khpsv2ygw4scwoo844_Napa_Valley_Dining_Room__4_.jpeg","https://cdn3.housetipster.com/crop_0-1500x59-842/vr-thumbnail%2F4cvkd7c9lke88084okogc_Napa_Valley_Dining_Room__5_.jpeg","https://cdn3.housetipster.com/crop_0-1500x59-842/vr-thumbnail%2F2xox3aiptzqcgwsgc8gcc_Napa_Valley_Dining_Room__2_.jpeg"],"title":"Napa Valley Dining Room","type":"room","userPhoto":"https://cdn3.housetipster.com/resize_50x50/ht-userlogo.png","vendorsCount":0,"viewsCount":588},{"_id":"58fdf98ecdba133e1c57e346","adminRatingEnabled":false,"categoryTitle":"Living Room","collectionTitle":"","commentsCount":0,"commentsEnabled":false,"componentsCount":6,"features":{"human":false,"labels":false,"panorama":false,"video":false,"virtualRoom":true},"is360View":false,"isLiked":false,"isShared":false,"isUserAlreadyVoted":false,"is_elite":false,"likesCount":3,"link":"/virtual-room/ani-gara-po-living-room-by-vant-panels","rating":3,"slug":"ani-gara-po-living-room-by-vant-panels","tagLine":"The Ani Gara Po Living Room by Vant Panels is a lesson in making contrasting colors work well together in interior design.","tags":"Contemporary, Living Room, Family Room, Marble.com, American Leather, Behr, Vant, Ethan Allen, Gray, Blue, Granite, Soapstone","thumbnail":["https://cdn3.housetipster.com/vr-thumbnail/62d14c6c-1406-4708-9210-2858f6826ec5_4e7yvk11zmw4804440g8w.png","https://cdn3.housetipster.com/crop_0-1500x31-845/resize_0x0/thumbnails%2F5tbernoquiw4kog8swsw8_1.jpg","https://cdn3.housetipster.com/crop_0-1500x31-845/resize_0x0/thumbnails%2F5ya3asqwd2ww08kw0w4ow_3.jpg","https://cdn3.housetipster.com/crop_0-1500x31-845/resize_0x0/thumbnails%2F6i0y54f6v9sscgk8ws0kk_4.jpg"],"title":"Ani Gara Po Living Room by Vant Panels","type":"room","userPhoto":"https://cdn3.housetipster.com/resize_50x50/ht-userlogo.png","vendorsCount":0,"viewsCount":340},{"_id":"58fbea7fcdba133e1c57e1b6","adminRatingEnabled":false,"categoryTitle":"Living Room","collectionTitle":"","commentsCount":0,"commentsEnabled":false,"componentsCount":13,"features":{"human":false,"labels":false,"panorama":false,"video":false,"virtualRoom":true},"is360View":false,"isLiked":false,"isShared":false,"isUserAlreadyVoted":false,"is_elite":false,"likesCount":1,"link":"/virtual-room/oak-haven-living-room","rating":0,"slug":"oak-haven-living-room","tagLine":"This open living room has high ceilings, ample natural lighting, and is perfect for entertaining,","tags":"Living Room, Formal, Marble.com, American Leather, Mannington Residential, The Shade Store, Behr, iLiv, Warp & Weft, Metropolitan Picture Framing, Interior Deluxe, UGG, White, Beige, Gray, Hardwood","thumbnail":["https://cdn3.housetipster.com/crop_0-1500x108-842/vr-thumbnail%2F3u5biuvevsu8440808048_Oak_Haven_Living_Room__4_.jpeg","https://cdn3.housetipster.com/crop_0-1500x59-842/vr-thumbnail%2F12r6rm0eu0u844gwko8ck_Oak_Haven_Living_Room__1_.jpeg","https://cdn3.housetipster.com/crop_0-1500x59-842/vr-thumbnail%2F4z2j8nq7m3s488k8wkcc4_Oak_Haven_Living_Room__3_.jpeg","https://cdn3.housetipster.com/crop_0-1500x59-842/vr-thumbnail%2F2pssah63150kskkw84s04_Oak_Haven_Living_Room.jpeg"],"title":"Oak Haven Living Room","type":"room","userPhoto":"https://cdn3.housetipster.com/resize_50x50/ht-userlogo.png","vendorsCount":0,"viewsCount":315},{"_id":"58f50ec609b12d15606b231d","adminRatingEnabled":false,"categoryTitle":"Living Room","collectionTitle":"","commentsCount":0,"commentsEnabled":false,"componentsCount":5,"features":{"human":false,"labels":false,"panorama":false,"video":false,"virtualRoom":true},"is360View":false,"isLiked":false,"isShared":false,"isUserAlreadyVoted":false,"is_elite":false,"likesCount":13,"link":"/virtual-room/signature-room-by-graham-and-brown","rating":0,"slug":"signature-room-by-graham-and-brown","tagLine":"This Signature Room by Graham and Brown exudes class any way you customize it.","tags":"Contemporary, Eclectic, Living Room, B&B Italia, Graham & Brown, Authentic Reclaimed Floors, Andersen Windows, Hardwood, Pattern, Bright, Tone on Tone","thumbnail":["https://cdn3.housetipster.com/crop_0-1500x59-842/vr-thumbnail%2F4ojsg709a1a84o8ogkg80_4.jpg","https://cdn3.housetipster.com/crop_0-1500x59-842/vr-thumbnail%2F1nxsl42k3ilckwk0gkw0c_2.jpg","https://cdn3.housetipster.com/crop_0-1500x59-842/vr-thumbnail%2F2v5kk37sf1s0ow88k0848_3.jpg","https://cdn3.housetipster.com/crop_0-1500x59-842/vr-thumbnail%2F5p95io12c98o84ssc8gg8_1.jpg"],"title":"Signature Room by Graham and Brown","type":"room","userPhoto":"https://cdn3.housetipster.com/resize_50x50/ht-userlogo.png","vendorsCount":0,"viewsCount":850},{"_id":"58ecd6d5356c7e60d25fe441","adminRatingEnabled":false,"categoryTitle":"Living Room","collectionTitle":"","commentsCount":0,"commentsEnabled":false,"componentsCount":13,"features":{"human":false,"labels":false,"panorama":false,"video":false,"virtualRoom":true},"is360View":false,"isLiked":false,"isShared":false,"isUserAlreadyVoted":false,"is_elite":false,"likesCount":0,"link":"/virtual-room/moonshadow-villa-living-room","rating":5,"slug":"moonshadow-villa-living-room","tagLine":"A lunarscape living room full of stars.","tags":"Contemporary, Living Room, Marble.com, B&B Italia, Element Designs, Farrow & Ball, Lumber Liquidators, VIG Furniture, Eurofase Lighting, DANTV, White, Beige, Gray, Blue, Laminate, Pattern","thumbnail":["https://cdn3.housetipster.com/crop_0-1500x31-845/vr-thumbnail%2F3dm24kijjo00ccw8gw0gw_4.jpg","https://cdn3.housetipster.com/crop_0-1500x31-845/vr-thumbnail%2F46bcgt8gggows4c08o48s_1.jpg","https://cdn3.housetipster.com/crop_0-1500x31-845/vr-thumbnail%2F7cks338u2pgc88swsc8gg_3.jpg","https://cdn3.housetipster.com/crop_0-1500x31-845/vr-thumbnail%2F5shlk84i1sowccoggc0w4_2.jpg"],"title":"Moonshadow Villa Living Room","type":"room","userPhoto":"https://cdn3.housetipster.com/resize_50x50/ht-userlogo.png","vendorsCount":0,"viewsCount":338},{"_id":"58e4f220356c7e60d25fdeab","adminRatingEnabled":false,"categoryTitle":"Kitchen","collectionTitle":"","commentsCount":0,"commentsEnabled":false,"componentsCount":19,"features":{"human":false,"labels":false,"panorama":false,"video":false,"virtualRoom":true},"is360View":false,"isLiked":false,"isShared":false,"isUserAlreadyVoted":false,"is_elite":false,"likesCount":1,"link":"/virtual-room/aurora-kitchen","rating":0,"slug":"aurora-kitchen","tagLine":"The beautiful Aurora Kitchen is a real attention-getter!","tags":"Contemporary, Element Designs, Kohler, Lumber Liquidators, Viking, Behr, Caesarstone, Cole & Mason, Latte, White, Green, Red, Black, Gray, Blue, L- Shape, Quartz, Black, White, Beige, Gray, Blue, Laminate, Quartz, Side by Side, Built-In, Stainless Steel, Wall-Mount Hood, Freestanding Range, Double Wall Oven, Stainless Steel, Black, White, Red, Burgandy, Blue, Graphite Gray","thumbnail":["https://cdn3.housetipster.com/crop_0-1500x31-845/resize_0x0/thumbnails%2F3esa9z6d0v8kko0c0ckoo_5.jpg","https://cdn3.housetipster.com/crop_0-1500x31-845/resize_0x0/thumbnails%2Fezvm4065t3sccws4kso8_2.jpg","https://cdn3.housetipster.com/crop_0-1500x31-845/resize_0x0/thumbnails%2F3qajpubr1l8gok04wk4s0_1.jpg","https://cdn3.housetipster.com/crop_0-1500x31-845/resize_0x0/thumbnails%2F6lzjh14xdusk4o4sg4c0g_3.jpg"],"title":"Aurora Kitchen","type":"room","userPhoto":"https://cdn3.housetipster.com/resize_50x50/ht-userlogo.png","vendorsCount":0,"viewsCount":498},{"_id":"58e2591d40ed113eca4e82b4","adminRatingEnabled":false,"categoryTitle":"Bathroom","collectionTitle":"","commentsCount":0,"commentsEnabled":false,"componentsCount":10,"features":{"human":false,"labels":false,"panorama":false,"video":false,"virtualRoom":true},"is360View":false,"isLiked":false,"isShared":false,"isUserAlreadyVoted":false,"is_elite":false,"likesCount":6,"link":"/virtual-room/jade-river-bathroom","rating":5,"slug":"jade-river-bathroom","tagLine":"This artfully-designed luxury bathroom comes with a shower that's so complete there's no need for a bath.","tags":"Contemporary, Master Bath, Marble.com, Hans Krug, Milano Doors, TileBar, Valley Acrylic, Behr, Brizo, Latte, White, Green, Black, Gray, Granite, Marble, Quartzite, Quartz, White, Beige, Gray, Blue, Green, Yellow, Quartz, Marble, Glass, Tile, White, Blue, Red, Gray, Double","thumbnail":["https://cdn3.housetipster.com/crop_0-1500x31-845/vr-thumbnail%2F6i7iqcymfr0gs8ssw0c0s_1.jpg","https://cdn3.housetipster.com/crop_0-1500x31-845/vr-thumbnail%2F48muxi3uuxwkk88kgcw88_3.jpg","https://cdn3.housetipster.com/crop_0-1500x31-845/vr-thumbnail%2F7e0z412q7i4gccko0oc0g_4.jpg","https://cdn3.housetipster.com/crop_0-1500x31-845/vr-thumbnail%2F1qx9oq8exaw0ckck08oo4_2.jpg"],"title":"Jade River Bathroom","type":"room","userPhoto":"https://cdn3.housetipster.com/resize_50x50/ht-userlogo.png","vendorsCount":0,"viewsCount":507},{"_id":"58c98e31388bb25ce1971799","adminRatingEnabled":false,"categoryTitle":"Kitchen","collectionTitle":"","commentsCount":0,"commentsEnabled":false,"componentsCount":8,"features":{"human":false,"labels":false,"panorama":false,"video":false,"virtualRoom":true},"is360View":false,"isLiked":false,"isShared":false,"isUserAlreadyVoted":false,"is_elite":false,"likesCount":1,"link":"/virtual-room/stonewell-kitchen-by-rangecraft","rating":5,"slug":"stonewell-kitchen-by-rangecraft","tagLine":"The Rangecraft custom hood can be customized to your tastes in a \"range\" of colors and finishes.","tags":"Marble.com, Ashley Norton, Barbie Kennedy, Hampshire Cabinetry, Le Creuset, Rangecraft, Bertazzoni, White, Black, Painted, Dark Wood, Medium Wood, Light Wood, Granite, Marble, Quartzite, Tile, Wall-Mount Hood, Yellow, Red, Burgandy, Blue, Copper, Bronze, Green, Purple, Brass","thumbnail":["https://cdn3.housetipster.com/crop_0-1500x31-845/resize_0x0/thumbnails%2F4vydsbru6sg08os8oo084_Stonewell_Kitchen_by_RangeCraft__2_.jpeg","https://cdn3.housetipster.com/crop_0-1500x31-845/resize_0x0/thumbnails%2F43t12dirorsw4ww8kgs8w_Stonewell_Kitchen_by_RangeCraft__1_.jpeg","https://cdn3.housetipster.com/crop_0-1500x31-845/resize_0x0/thumbnails%2F6xsht2u2188w4s48c44wo_Stonewell_Kitchen_by_RangeCraft__3_.jpeg","https://cdn3.housetipster.com/crop_0-1500x31-845/resize_0x0/thumbnails%2F2p3q7p13n5q84g04ook84_Stonewell_Kitchen_by_RangeCraft__4_.jpeg"],"title":"Stonewell Kitchen by RangeCraft","type":"room","userPhoto":"https://cdn3.housetipster.com/resize_50x50/ht-userlogo.png","vendorsCount":0,"viewsCount":422},{"_id":"58c8235cd18b816adee5d760","adminRatingEnabled":false,"categoryTitle":"Kitchen","collectionTitle":"","commentsCount":0,"commentsEnabled":false,"componentsCount":9,"features":{"human":false,"labels":false,"panorama":false,"video":false,"virtualRoom":true},"is360View":false,"isLiked":false,"isShared":false,"isUserAlreadyVoted":false,"is_elite":false,"likesCount":0,"link":"/virtual-room/dreamvalley-kitchen-by-electrolux","rating":0,"slug":"dreamvalley-kitchen-by-electrolux","tagLine":"Dream Valley Kitchens showcases Electrolux's latest refrigerator model.","tags":"Traditional, Marble.com, Ashley Norton, Frigidaire, Lumber Liquidators, Behr, Coffee, Chestnut, Honey, Wheat, Ginger, Smoke, Sierra, Cordovan, Blackstone, Granite, Marble, Quartzite, Onyx, White, Beige, Gray, Blue, Green, Yellow, Pink, Orange, Purple, Hardwood, Granite, Marble, Onyx, Quartz, Side by Side, Built-In, Stainless Steel, Double Wall Oven, Stainless Steel","thumbnail":["https://cdn3.housetipster.com/vr-thumbnail/9142044d-c22b-4cbc-a369-16ce73526f02_16ko56qqjcm8okg004k0k.png"],"title":"Dreamvalley Kitchen by Electrolux","type":"room","userPhoto":"https://cdn3.housetipster.com/resize_50x50/ht-userlogo.png","vendorsCount":0,"viewsCount":367},{"_id":"58c81f6ad18b816adee5d632","adminRatingEnabled":false,"categoryTitle":"Living Room","collectionTitle":"","commentsCount":0,"commentsEnabled":false,"componentsCount":11,"features":{"human":false,"labels":false,"panorama":false,"video":false,"virtualRoom":true},"is360View":false,"isLiked":false,"isShared":false,"isUserAlreadyVoted":false,"is_elite":false,"likesCount":0,"link":"/virtual-room/oceanview-living-room","rating":0,"slug":"oceanview-living-room","tagLine":"Contemporary style living room with two different living spaces, bringing the outdoors in.","tags":"Contemporary, Eclectic, Living Room, Marble.com, B&B Italia, Lumber Liquidators, VIG Furniture, Behr, Delightfull, White, Laminate","thumbnail":["https://cdn3.housetipster.com/vr-thumbnail/dc6e5265-ed8d-4346-8486-1ee49709dc1b_6yj2qrrwfyo8k04gg0oww.png"],"title":"Oceanview Living Room","type":"room","userPhoto":"https://cdn3.housetipster.com/resize_50x50/ht-userlogo.png","vendorsCount":0,"viewsCount":491},{"_id":"586d07c886aeca1e567c134b","adminRatingEnabled":true,"categoryTitle":"Kitchen","collectionTitle":"","commentsCount":0,"commentsEnabled":true,"componentsCount":12,"features":{"human":false,"labels":false,"panorama":false,"video":false,"virtualRoom":true},"is360View":false,"isLiked":false,"isShared":false,"isUserAlreadyVoted":false,"is_elite":false,"likesCount":4,"link":"/virtual-room/tuscan-sienna","rating":5,"slug":"tuscan-sienna","tagLine":"Tuscan kitchen design immediately conjures images of Italy, sunlight, and warmth.","tags":"Traditional, Kitchen/ Dining, Eat-In, Marble.com, Ashley Norton, Hampshire Cabinetry, Kohler, Lumber Liquidators, Sub Zero Wolf, Behr, Light Wood, Granite, Gray, Pink, Laminate, Granite, Wall-Mount Hood, Freestanding Range, Stainless Steel","thumbnail":["https://cdn3.housetipster.com/vr-thumbnail/3ab3252f-12d1-4d61-9856-dea6c7869ae4_6xonw8jkb6cck4o088ckw.png"],"title":"Tuscan Sienna","type":"room","userPhoto":"https://cdn3.housetipster.com/resize_50x50/ht-userlogo.png","vendorsCount":0,"viewsCount":421},{"_id":"586c3233b59e793470d8414b","adminRatingEnabled":true,"categoryTitle":"Kitchen","collectionTitle":"","commentsCount":1,"commentsEnabled":true,"componentsCount":14,"features":{"human":false,"labels":false,"panorama":false,"video":false,"virtualRoom":true},"is360View":false,"isLiked":false,"isShared":false,"isUserAlreadyVoted":false,"is_elite":false,"likesCount":3,"link":"/virtual-room/firenza-kitchen","rating":0,"slug":"firenza-kitchen","tagLine":"This Tuscan L shaped kitchen with a center island can be transformed into any style kitchen.","tags":"Traditional, Kitchen/ Dining, Eat-In, Marble.com, Ashley Norton, Hampshire Cabinetry, Lumber Liquidators, Viking, Behr, Latte, Green, Red, Black, Gray, Blue, Granite, Marble, White, Beige, Gray, Blue, Green, Yellow, Pink, Purple, Hardwood, Granite, Marble","thumbnail":["https://cdn3.housetipster.com/crop_0-1500x59-842/resize_0x0/thumbnails%2F5hvlw0d05m4ogowocgkgg_1.jpg","https://cdn3.housetipster.com/crop_0-1500x59-842/resize_0x0/thumbnails%2F2itf4t7sa8w080csggkwc_4.jpg","https://cdn3.housetipster.com/crop_0-1500x59-842/resize_0x0/thumbnails%2F3nbe0vsn97cwssw440wkw_2.jpg","https://cdn3.housetipster.com/crop_0-1500x59-842/resize_0x0/thumbnails%2F6mlpksz5rhgk4gsgggoo0_3.jpg"],"title":"Firenza Kitchen","type":"room","userPhoto":"https://cdn3.housetipster.com/resize_50x50/ht-userlogo.png","vendorsCount":0,"viewsCount":424},{"_id":"586c31edb59e793470d840c5","adminRatingEnabled":true,"categoryTitle":"Kitchen","collectionTitle":"","commentsCount":0,"commentsEnabled":false,"componentsCount":14,"features":{"human":false,"labels":false,"panorama":false,"video":false,"virtualRoom":true},"is360View":false,"isLiked":false,"isShared":false,"isUserAlreadyVoted":false,"is_elite":false,"likesCount":4,"link":"/virtual-room/calabria-kitchen","rating":0,"slug":"calabria-kitchen","tagLine":"This beautiful kitchen fits your every cooking need.","tags":"Traditional, Kitchen/ Dining, Eat-In, Marble.com, Ashley Norton, Hampshire Cabinetry, Lumber Liquidators, Viking, White, Gray, Smoke, Granite, Marble, White, Beige, Gray, Hardwood, Granite, Marble, Side by Side, Single Wall Oven, Stainless Steel, Black, White, Red, Burgandy, Blue","thumbnail":["https://cdn3.housetipster.com/crop_0-1500x59-842/resize_0x0/thumbnails%2F61vb7bv220ow4ow08cw44_3.jpg","https://cdn3.housetipster.com/crop_0-1500x59-842/resize_0x0/thumbnails%2F4ryw2yrjtu68kwgggo48w_2.jpg","https://cdn3.housetipster.com/crop_0-1500x59-842/resize_0x0/thumbnails%2F4p27ehz2k3ac8sg88os8s_4.jpg","https://cdn3.housetipster.com/crop_0-1500x59-842/resize_0x0/thumbnails%2F5gqsl6b94js440gskswsc_1.jpg"],"title":"Calabria Kitchen","type":"room","userPhoto":"https://cdn3.housetipster.com/resize_50x50/ht-userlogo.png","vendorsCount":0,"viewsCount":513},{"_id":"586c3191b59e793470d8403e","adminRatingEnabled":true,"categoryTitle":"Kitchen","collectionTitle":"","commentsCount":0,"commentsEnabled":true,"componentsCount":14,"features":{"human":false,"labels":false,"panorama":false,"video":false,"virtualRoom":true},"is360View":false,"isLiked":false,"isShared":false,"isUserAlreadyVoted":false,"is_elite":false,"likesCount":1,"link":"/virtual-room/villa-virtual-room","rating":0,"slug":"villa-virtual-room","tagLine":"This Villa kitchen has many classic elements.","tags":"Traditional, Kitchen/ Dining, Eat-In, Marble.com, Ashley Norton, Hampshire Cabinetry, Lumber Liquidators, Viking, Behr, Latte, White, Red, Black, Gray, Blue, Granite, Marble, White, Beige, Gray, Blue, Green, Yellow, Pink, Purple, Laminate, Granite, Marble, Wall-Mount Hood, Freestanding Range, Stainless Steel, Black, White, Red, Burgandy, Blue, Graphite Gray","thumbnail":["https://cdn3.housetipster.com/crop_0-1500x31-845/vr-thumbnail%2F4s279ogdtbsww08koww00_1.jpg","https://cdn3.housetipster.com/crop_0-1500x31-845/vr-thumbnail%2F65cyryztp94w80os4ockk_2.jpg","https://cdn3.housetipster.com/crop_0-1500x31-845/vr-thumbnail%2F2hniqpmxzmass8o8k48g8_4.jpg","https://cdn3.housetipster.com/crop_0-1500x31-845/vr-thumbnail%2F658a9bofzs84s4kgkskgk_2.jpg"],"title":"Villa Virtual Room","type":"room","userPhoto":"https://cdn3.housetipster.com/resize_50x50/ht-userlogo.png","vendorsCount":0,"viewsCount":515},{"_id":"586bc594b59e793470d83928","adminRatingEnabled":false,"categoryTitle":"Kitchen","collectionTitle":"","commentsCount":0,"commentsEnabled":false,"componentsCount":24,"features":{"human":false,"labels":false,"panorama":false,"video":false,"virtualRoom":true},"is360View":false,"isLiked":false,"isShared":false,"isUserAlreadyVoted":false,"is_elite":false,"likesCount":8,"link":"/virtual-room/marblecom-signature-room","rating":5,"slug":"marblecom-signature-room","tagLine":"This kitchen was designed by Marble.com to showcase their stone collection.","tags":"Traditional, Marble.com, Hampshire Cabinetry, Mannington Residential, Moen, Viking, Williams Sonoma, Canadel, Dark Wood, Medium Wood, Light Wood, U-Shaped/Horeshoe, Island, Granite, Beige, Gray, Hardwood, Granite, Side by Side, Wall-Mount Hood, Cooktops, Stainless Steel, Black, White, Red, Burgandy, Blue, Graphite Gray","thumbnail":["https://cdn3.housetipster.com/crop_0-1500x31-845/resize_0x0/thumbnails%2F6zqolflqthwc4occ040go_Marble.com_Signature_Room_4_.jpeg","https://cdn3.housetipster.com/crop_0-1500x31-845/resize_0x0/thumbnails%2F3d056u8uf24gsogss40os_Marble.com_Signature_Room_intial.jpeg","https://cdn3.housetipster.com/crop_0-1500x31-845/resize_0x0/thumbnails%2F6c8bqnhck2o0o00wwko0w_Marble.com_Signature_Room__2_.jpeg","https://cdn3.housetipster.com/crop_0-1500x31-845/resize_0x0/thumbnails%2F5su250ip3y0w0kwsswkgk_Marble.com_Signature_Room__3_.jpeg"],"title":"Marble.com Signature Room","type":"room","userPhoto":"https://cdn3.housetipster.com/resize_50x50/ht-userlogo.png","vendorsCount":0,"viewsCount":853}],"pageTitle":{"_id":"59ce0e35c083e9f75eb01a6e","description":"House Tipster's Virtual Rooms can be customized to your tastes in fine detail. Mix and match materials, textures, finishes, appliances, and accessories. Change them instantly and experiment with different designs until you find the look you like best.","title":"Virtual Rooms","type":"VR"},"pagination":{"limit":12,"name":"virtual rooms","page":1,"pages":3,"total":25}};
      }, 2000)
    },
    data() {
      return {
        content: null,
        showSidebar: false,
        activeCategory: '',
        activeTab: undefined,
        activeFilter: undefined,
        sortingList: [],
        showList: [],
      }
    },
    computed: {
      paginationData() {
        return {"currentPage":1,"showItem":6,"sort":"newest","listLayoutRow":false}
      }
    },
    watch: {
      'content.items'() {
        this.sortingList = this.content.items;
      },

      'paginationData.currentPage'() {
        this.displayList();
      },
      'paginationData.showItem'() {
        this.displayList();
      },
      'paginationData.sort'() {
        this.sortList(this.paginationData.sort);
      },

      'sortingList'() {
        this.displayList();
      }
    },
    methods: {
      /*sidebar*/
      setActiveTab: function (index) {
        if (this.activeTab == index) {
          this.activeTab = undefined;
        } else {
          this.activeTab = index;
          this.activeFilter = undefined;
        }
      },
      setActiveFilter: function (index) {
        if (this.activeFilter == index) {
          this.activeFilter = undefined;
        } else {
          this.activeFilter = index;
        }
      },
      sortList(value) {
        let sortArr = this.sortingList;
        let originArr = this.content.items;
        switch(value) {
          case 'newest':
            sortArr = originArr;
            break;
          case 'popular':
            sortArr = originArr.sort((a, b) => {
              return SortService.sort(a.rating, b.rating)
            });
            break;
          case 'viewed':
            sortArr = originArr.sort((a, b) => {
              return SortService.sort(a.viewsCount, b.viewsCount)
            });
            break;
          case 'title':
            sortArr = originArr.sort((a, b) => {
              return SortService.sort(a.title, b.title, 'reverse')
            });
            break;
        }
      },

      displayList() {
        let qty = this.paginationData.showItem;
        let currPage = this.paginationData.currentPage;
        let itemList = this.sortingList;

        let start = currPage * qty - qty;
        let end = currPage * qty;

        this.showList = itemList.slice(start, end);
      }
    },
  }

</script>

<style lang="scss">
  @import '../scss/base';
  @import '../scss/components/slider-entity';
  @import '../scss/pages/articles-list';
  @import '../scss/pages/filters-sidebar';
  @import '../scss/components/site-entity-banner';
  @import '../scss/components/pager';
  @import '../scss/components/simple-pagination';
  @import '../scss/components/no-result';
  @import '../scss/repeating-blocks/sorting&pagination';
  @import '../scss/repeating-blocks/filters';
  @import '../scss/components/affiliations';
  @import '../scss/components/rating';

  .article-item_title {
    margin-bottom: 4px;
    height: calc(2em * #{$line-height-detail});
    overflow: hidden;
  }
  .article-item_content {
    margin-bottom: 1em;
    overflow: hidden;
    font-weight: 300;
    p {
      display: none;
      @include media('>=medium') {
        max-height: calc(3em * #{$line-height-detail});
        display: block;
        margin-bottom: 0;
      }
    }
  }

  .article-item_details-footer {
    margin-top: auto;
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-wrap: wrap;
  }

  .article-item_views-details {
    align-items: center;
    display: flex;
    justify-content: space-between;
    margin-bottom: 20px;
  }

  .show-for-album {
    display: none;
    .articles-list--album-view & {
      @include media('>=large') {
        display: block;
      }
    }
  }

  .vr-card_components-list {
    margin: 0;
    padding: 0;
    list-style: none;
    align-items: center;
    display: flex;
    li {
      color: $col-txt;
      font-size: .875rem;
      margin-right: 16px;
      &:last-child { margin-right: 0; }
    }
    .vr_component-item {
      font-weight: 600;
      .item-name { font-weight: 400; }
    }
  }
  .features-list_holder {
    flex: 0 0 100%;
    max-width: 100%;
    margin-top: 30px;
  }
  .vr-card_features-list {
    list-style: none;
    margin: 0;
    padding: 0;
    display: flex;
    justify-content: space-between;
    li {
      color: $col-primary;
      flex: 0 0 auto;
      font-size: 1.5rem;
      line-height: 1;
      &.disabled {
        color: $disable-txt;
      }
    }
  }
</style>
