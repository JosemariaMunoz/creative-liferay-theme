# creative-liferay-theme

Creative liferay theme is a Liferay 7.1 / 7.2 theme based in the great bootstrap theme called [Creative](https://github.com/BlackrockDigital/startbootstrap-creative) created by [Start Bootstrap](http://startbootstrap.com/). under the MIT license.

The steps to move this bootstrap theme in liferay was:

- Copy the creative SCSS files to the ´/css/vendor/crative-css-files´ directory
- Load the SCSS individually from ´_custom.scss´
- Locate the general components and wrape them inside the ID #main
- Copy the plugin files to JS and CSS directories ´/vendor/*´
- Perform the loading of the JS individually from portal_normal.ftl
- Adapt new markup for navigation.ftl with the theme navbar
- Adapt marked as the ´<sections>´ to Liferay
- Create an SCSS file to correct conflicts, loaded the last of the scss files.
- Create temporal content with the theme markup until create a site template