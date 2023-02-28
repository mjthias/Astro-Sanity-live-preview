# Astro Sanity live preview

### Info

This setup allows live-preview in Sanity.\
ajaxPreview fetches the current path and updates #**CONTENT every 3sec.\
Layout.astro will only respond with the html from inside #**CONTENT, if the request is an ajax-request.

### Files needed:

_public/ajaxPreview.js_ \
_src/layouts/Layout.astro_\
_src/pages/preview/[...slug].astro_\
_src/sanity/fetch.js ( getPreviewPageBySlug() )_
