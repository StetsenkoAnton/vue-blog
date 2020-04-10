<template lang="pug">
  section
    .main-tile_block(
      v-for="(row, index) in tileList"
      :class="{'reverse-container': index%2}"
    )

      .tile-item_wrap
        .tile-item.tile-item--full
          component(
            :is="row[0].node.type === 'reddit' ? 'tile-item-image' : 'tile-item-article'"
            :item-data="row[0].node"
          )

      .tile-item_wrap
        .tile-item.tile-item--half(
          v-for="(entity, index) in row"
          v-if="index"
        )
          component(
            :is="entity.node.type === 'reddit' ? 'tile-item-image' : 'tile-item-article'"
            :item-data="entity.node"
          )


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
    redditPosts: allRedditPost {
      edges {
        node {
          id
          title
          type
          thumbnail
        }
      }
    }
    mediaPosts: allMedia {
      edges {
        node {
          thumbnail
          title
          type
          path
          date
          leadPar
        }
      }
    }
  }
</static-query>

<script>
  import TileItemArticle from '@/components/index-page/tile-item-article.vue';
  import TileItemImage from '@/components/index-page/tile-item-img.vue';
export default {
  name: 'TileList',
  components: {TileItemArticle, TileItemImage},
  computed: {
    tileList() {
      const blogList = this.$static.blogPosts.edges;
      const redditList = this.$static.redditPosts.edges;
      const mediaList = this.$static.mediaPosts.edges;
      const randomList = [...blogList, ...redditList, ...mediaList].sort(()=> Math.random() - 0.5);
      let result = [];
      let timeArr = [];
      randomList.every((el, index)=> {
        if(index > 15) return false;
        if(timeArr.length >= 5) {
          result.push([...timeArr]);
          timeArr = [];
        }
        timeArr.push(el);
        return true;
      })
      return result
    }
  }
}
</script>

<style lang="scss">
  @import '../../scss/base';
  $item-indent: 5px;
  @import '../../scss/components/site-entities-list+site-entities-item';
  @import '../../scss/components/rating';


</style>
