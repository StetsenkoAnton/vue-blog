<template lang="pug">
  article.tile_article
    template(v-if="itemData.type === 'reddit'")
      router-link.tile-article_link.tile-article_link--img(to="/gallery")
        .tile-article_label gallery
        img.tile-article_img(:src="itemData.thumbnail")

    template(v-else)
      .tile-article_label {{ itemData.type }}

      router-link.tile-article_link(to="/some-link")
        img.tile-article_img(:src="itemData.thumbnail || 'https://cdn3.housetipster.com/empty.jpg'")

      .tile-article_body
        .tile-article_info
          .tile-article_publish.ellipsis
            time {{itemData.date}}
          ul.tile-article_meta-list
            li
              | {{ itemData.viewsCount || 0}}&nbsp;views
            li
              | {{ itemData.commentsCount || 0}}&nbsp;comments

        h3.tile-article_title
          router-link(to="/some-link") {{ itemData.title }}

        .tile-article_tagline
          p(v-show="itemData.leadPar") {{ itemData.leadPar }}
          .tile-article_rating.rating-component(v-show="!itemData.leadPar")
            .stars-holder
              i(aria-hidden="true"
                v-for="rating in [1,2,3,4,5]"
                :class="{'empty': rating}"
              ).fa.fa-star-o

</template>

<script>

export default {
  name: 'TileItemArticle',
  props: {
    itemData: {
      type: Object,
    }
  },
}
</script>
