<template lang="pug">
  footer.page_footer(v-if="content")
    .content-wrap.content-indent.footer_content-wrap
      .footer_col.footer_contacts
        g-image(src="https://gridsome.org/logos/logo-normal.svg" width="186" height="auto").medium-show
        dl.footer_contact-dl.medium-show
          template(v-for="contact in content.contacts")
            dt {{ contact.title }}
            dd
              a(:href="'tel:'+contact.value") {{ contact.value }}
        ul.footer_social-list
          li(
            v-for="social in content.socialLinks"
            v-if="social.link"
          )
            a.footer_social-link(:href="social.link" target="_blank")
              i(aria-hidden="true" class="fa"
                :class="{ 'fa-facebook': social.title === 'Facebook',\
                          'fa-instagram': social.title === 'Instagram',\
                          'fa-twitter': social.title === 'Twitter',\
                          'fa-google-plus': social.title === 'Google Plus',\
                          'fa-youtube': social.title === 'YouTube',\
                          'fa-pinterest-p': social.title === 'Pinterest'\
                        }"
                )
      .footer_col.footer_company
        h3.footer_item-title Company
        ul.footer_links-list
          li(v-for="page in content.pages")
            router-link(:to="page.url_key") {{page.title}}

      .footer_col.footer_tips-links
        h3.footer_item-title House
        ul.footer_links-list
          li(
            v-for="htPage in content.sitePages"
          )
            router-link(:to="htPage.url_key") {{htPage.title}}

      .footer_col.footer_about
        g-image(src="https://gridsome.org/logos/logo-normal.svg" width="186" height="auto").medium-hide
        .inner-body.large-show
          h3.footer_item-title about us
          p {{content.aboutUs.mainText}}
        .inner-footer
          .inner-item
            p {{content.aboutUs.leftText}}
          .inner-item
            p {{content.aboutUs.rightText}}

</template>

<script>
  import footerContent from '../../../content/single-data/footer.json'

  export default {
    name: 'PageFooter',
    data () {
      return {
        content: footerContent
      }
    }
  }
</script>

<style lang="scss" scoped> @import './_page-footer.scss'; </style>
