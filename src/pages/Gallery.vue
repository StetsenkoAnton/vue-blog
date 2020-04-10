<template lang="pug">
  Layout
    .page_content-wrap.content-wrap
      main.page_content
        .page_title
          h1.h2 Gallery
          p.h5 This page uses "axios" to load images

        ul.gallery-list(v-if="list")
          li.gallery-list_item(
            v-for="item in list"
            :key="item.node.id"
          )
            .gallery-item
              img.gallery-item_picture(
                :src="item.node.thumbnail || 'https://cdn3.housetipster.com/empty.jpg'"
              )
              .gallery-item_details
                .gallery-item_details-body
                  .gallery-item_title Author:
                    | &nbsp;
                    span.h3 {{ item.node.author }}

</template>
<static-query>
  query Posts {
    imgPosts: allRedditPost {
      edges {
        node {
          id
          title
          thumbnail
          author
        }
      }
    }
  }
</static-query>
<script>
export default {
  name: 'PageGallery',
  computed: {
    list() {
      return this.$static.imgPosts.edges
    }
  }
}
</script>

<style lang="scss">
  @import '../scss/base';

  .gallery-list {
    width: 100%;
    margin: 0;
    padding: 0;
    list-style: none;
    column-gap: 10px;
    column-count: 4;
  }

  .gallery-list_item {
    padding: 5px 0;
    -webkit-column-break-inside: avoid; /* Chrome, Safari, Opera */
    page-break-inside: avoid; /* Firefox */
    break-inside: avoid; /* IE 10+ */
  }

  .gallery-item {
    position: relative;
    border: 1px solid $col-border;

    &:hover {
      .gallery-item_details {
        opacity: 1;
      }
    }
  }

  .gallery-item_picture {
    width: 100%;
  }

  .gallery-item_details {
    display: flex;
    justify-content: center;
    align-items: center;
    opacity: 0;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    min-height: 100%;
    padding: 1rem;
    color: $white;
    background-color: rgba(#000, .5);
    transition: opacity .3s;
  }

</style>
