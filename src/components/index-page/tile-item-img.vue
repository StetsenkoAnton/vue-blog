<template lang="pug">
  article.tile_article
    router-link.tile-article_link.tile-article_link--img(to="/gallery")
      .tile-article_label gallery
      img.tile-article_img(:src="itemData.thumbnail")

</template>

<script>

export default {
  name: 'TileItemImage',
  props: {
    itemData: {
      type: Object,
    }
  },
}
</script>
