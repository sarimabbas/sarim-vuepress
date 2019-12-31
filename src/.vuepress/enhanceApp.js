import VueLazyload from "vue-lazyload";
import "vue-awesome/icons/rss";
import "vue-awesome/icons/file-alt";
import "vue-awesome/icons/brands/github";
import "vue-awesome/icons/brands/linkedin";
import Icon from "vue-awesome/components/Icon";

export default ({
  Vue, // the version of Vue being used in the VuePress app
  options, // the options for the root Vue instance
  router, // the router instance for the app
  siteData // site metadata
}) => {
  // ...apply enhancements to the app
  Vue.use(VueLazyload, {
    observer: true,
    preLoad: 1.3,
    attempt: 1
  });

  Vue.component("v-icon", Icon);
};
