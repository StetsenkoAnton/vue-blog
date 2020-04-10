// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api

import DefaultLayout from '~/layouts/Default.vue'
import BlogLayout   from '~/layouts/Blog.vue'
import LogOut       from '~/layouts/LogOut.vue'

export default function (Vue, { router, head, isClient }) {
  // Set default layout as a global component
  Vue.component('Layout', DefaultLayout);
  Vue.component('BlogLayout', BlogLayout);
  Vue.component('LogOut', LogOut);

  Vue.directive('btn-spinner', {
    bind: (el)=> {
      let newDiv = document.createElement('div');
      let spinner = el.appendChild(newDiv);
      el.style.position = 'relative';
      spinner.setAttribute('class', 'spinner');
      spinner.style.backgroundColor = '#ea7925';
      spinner.innerHTML = "<div class='rect1'></div><div class='rect2'></div><div class='rect3'></div><div class='rect4'></div><div class='rect5'></div>";

      el.onclick = function() {
        this.blur();
      }
    },
    update: (el, binding)=> {
      let spinner = el.lastChild;
      if(binding.value) {
        spinner.style.display = 'flex';
        el.setAttribute('disabled', true);
      }
      else {
        spinner.style.display = 'none';
        el.removeAttribute('disabled');
      }
    }
  });

  Vue.filter('currency', function (value) {
    return '$' + value.toFixed(2);
  });

  /*ROUTER*/
  router.beforeEach((to, from, next) => {
    if(localStorage.getItem('isUserLogin') || to.name === 'login') {
      next()
    }
    else next('/login')
  })
}
