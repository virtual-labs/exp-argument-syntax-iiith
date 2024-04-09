importScripts('https://storage.googleapis.com/workbox-cdn/releases/6.2.0/workbox-sw.js');

workbox.precaching.precacheAndRoute([{"revision":"7cc40c199d128af6b01e74a28c5900b0","url":"assets/css/bootstrap.min.css"},{"revision":"b1e92a5593c58e6832c7f6dce30a06ce","url":"assets/css/common-styles-responsive.css"},{"revision":"77f3d6639e02a6b774981b1ad75806f5","url":"assets/css/common-styles.css"},{"revision":"22d85286c513f3d4038c42b486ea1bf6","url":"assets/css/fontawesome.min.css"},{"revision":"613745964e452941615d4e3d1a387ab7","url":"assets/css/github-markdown.min.css"},{"revision":"a394012067cf46c79ab70d75f9caf500","url":"assets/css/katex.min.css"},{"revision":"6d9501ec2a9a6e52b90a8d27340202b6","url":"assets/css/vlabs-style.css"},{"revision":"269550530cc127b6aa5a35925a7de6ce","url":"assets/fonts/font-awesome-4.7.0/css/font-awesome.min.css"},{"revision":"912ec66d7572ff821749319396470bde","url":"assets/fonts/font-awesome-4.7.0/fonts/fontawesome-webfont.svg"},{"revision":"ff2be0cf35ad764cfcc9779f148aa8ac","url":"assets/images/favicon.png"},{"revision":"59cbb9b31115938b15a1786dcedd7796","url":"assets/images/logo-new.png"},{"revision":"97524ffa51690acdcb0e54a4f5b8502a","url":"assets/images/logo.png"},{"revision":"7d45f6653f4b7219600292be2d83f1b4","url":"assets/images/popout.png"},{"revision":"7924fe35ba7c22ce467efd504cce93d7","url":"assets/images/vlabs-color-small-moe.jpg"},{"revision":"cd2bcc63369f82702340cbc2281c38d1","url":"assets/js/assessment_v2.js"},{"revision":"0c6c2d6c8bd1ff223774dc9689ee7788","url":"assets/js/assessment.js"},{"revision":"cd2a84a9d406609b6af31751adb582ca","url":"assets/js/event-handler.js"},{"revision":"0f6278fc4d074348edaba4042b4dd1f8","url":"assets/js/iframeResize.js"},{"revision":"4ae9cbf2f402c4a1dde3d8f0e3e8cf1b","url":"assets/js/instruction-box.js"},{"revision":"d9b11ca4d877c327889805b73bb79edd","url":"assets/js/jquery-3.4.1.slim.min.js"},{"revision":"bc2456c37c311bbdd25f4f54e0e8d1b9","url":"assets/js/toggleSidebar.js"},{"revision":"30ef592489ce0ac84ab367ce9eb0d597","url":"assets/js/webcomponents-loader.min.js"},{"revision":"0f2e317d41fb69dfb0270dbdf749e380","url":"assets/js/zero-md.min.js"},{"revision":"caf1062309e21ed583d00d24cac20912","url":"assets/katex_assets/katex.min.css"},{"revision":"109fae99533c8a568981c155015d2d92","url":"contributors.html"},{"revision":"7d4cc2ffd52ae481ec48f618e284d85f","url":"feedback.html"},{"revision":"da0197adf1366a3c33a6ba6ffb2298cb","url":"images/Aspose.Words.68c70019-dfc7-42bb-ba59-989a52f48db9.001.png"},{"revision":"1daa311c5a7c282afb4d70da86e32e2c","url":"images/Aspose.Words.68c70019-dfc7-42bb-ba59-989a52f48db9.002.png"},{"revision":"debf0534c0d0b045e48cc14397caa396","url":"images/Aspose.Words.68c70019-dfc7-42bb-ba59-989a52f48db9.003.png"},{"revision":"12693df037041b8abe21ecfd46ce91f7","url":"images/Aspose.Words.68c70019-dfc7-42bb-ba59-989a52f48db9.004.png"},{"revision":"4c8b1f99f6a5cc8ea34dbe284a5dc690","url":"images/Aspose.Words.68c70019-dfc7-42bb-ba59-989a52f48db9.005.png"},{"revision":"a488fc97dc77805e2f92ad8e4033fff6","url":"images/Aspose.Words.68c70019-dfc7-42bb-ba59-989a52f48db9.006.png"},{"revision":"69d111f5d557844f6348440bfd4cef77","url":"images/Aspose.Words.7a8adaa7-d66d-4a9f-bf4f-4c05d7403cc8.002.png"},{"revision":"6ae0056d558b2411e4d05ec2af0b08cc","url":"images/Aspose.Words.7a8adaa7-d66d-4a9f-bf4f-4c05d7403cc8.003.png"},{"revision":"e80abf332a273c9d8588370ddbe87c57","url":"index.html"},{"revision":"b4276908fb09c187eb21e3eb1da3bf8f","url":"learn.html"},{"revision":"82b8f2abfedfa586217fb9da41311619","url":"learn/css/main.css"},{"revision":"a1b180493fe25ce1ded44abe33a64897","url":"learn/index.html"},{"revision":"43288140a0cb6f9386452a1b8021fd45","url":"learn/js/main.js"},{"revision":"106ca45f0956684b5cda34954492a6b3","url":"performance-report.html"},{"revision":"914e243a5d6373b22585e9bdd0c25eef","url":"plugins/svc-rating/checkEventSubmission.js"},{"revision":"e99077e253b07129d0b9755e6a06f93f","url":"plugins/svc-rating/config.js"},{"revision":"40bc0d089f560247a1bfb0cd151232ad","url":"plugins/svc-rating/imageData.js"},{"revision":"a47af25e8d8500c59a6c26bac42a0cd9","url":"plugins/svc-rating/images/empty-star.svg"},{"revision":"6ad37561267a21d6bcb558f9c7c3fe8a","url":"plugins/svc-rating/images/half-star.svg"},{"revision":"7924fe35ba7c22ce467efd504cce93d7","url":"plugins/svc-rating/images/logo.jpg"},{"revision":"f2be5f1d57e0a2c690e34cf9095bed16","url":"plugins/svc-rating/images/mobile_rating_icon.png"},{"revision":"17c8ce8f2faa7937f7978a4dfb69df3a","url":"plugins/svc-rating/images/mobile-icon.svg"},{"revision":"96102a862f070a61a20193b621188ef3","url":"plugins/svc-rating/images/star.svg"},{"revision":"e083f28aa9e5a670a2e5de02197c261f","url":"plugins/svc-rating/index.html"},{"revision":"db18c05646b11f1fa66ef3ebb87116ca","url":"plugins/svc-rating/index.js"},{"revision":"fdc8b6772fb88081e86497fd2f75e20b","url":"plugins/svc-rating/package-lock.json"},{"revision":"7039ff00a75fd32443048e6ed0020a91","url":"plugins/svc-rating/package.json"},{"revision":"1ed592c19b20d396536ebd3611f3ef40","url":"plugins/svc-rating/rating-display.js"},{"revision":"0267f54f7993bcd47793dd7f7be56c92","url":"plugins/svc-rating/rating-submit.js"},{"revision":"57e53998ce85ab911eea27fdc421480d","url":"plugins/svc-rating/rating.js"},{"revision":"1bb81f97b0723bfdd89184d485a0ecad","url":"plugins/tool-performance/config.json"},{"revision":"3062d3749c84c5dc3fc7013e11376fce","url":"plugins/tool-performance/css/main.css"},{"revision":"8ec7b430663c34b8e9882c923e34e86e","url":"plugins/tool-performance/index.html"},{"revision":"6fc8455688b00e5dd6d392b61743473a","url":"plugins/tool-performance/js/api/gsc.js"},{"revision":"d62937417a11fee561c78bf3b145d85d","url":"plugins/tool-performance/js/api/lighthouse.js"},{"revision":"d42b124fa3c85371ea563f49f38e5a3d","url":"plugins/tool-performance/js/commonData.js"},{"revision":"11e328184e68c05f60030c19aa4efca9","url":"plugins/tool-performance/js/main.js"},{"revision":"66d4aa241bb986851066c1684270d236","url":"plugins/tool-performance/js/parse.js"},{"revision":"3f82067c934ff332a430c76f9e37b260","url":"plugins/tool-performance/js/populate/gsc.js"},{"revision":"9e183c67dc9157cd26b8a076ccf04d69","url":"plugins/tool-performance/js/populate/lighthouse.js"},{"revision":"1709dc5f9149e869449dcb2b7a8b3a20","url":"plugins/tool-performance/js/util.js"},{"revision":"1bb81f97b0723bfdd89184d485a0ecad","url":"plugins/tool-validation/config.json"},{"revision":"95c086500b7a5941bd950f22c888cc41","url":"plugins/tool-validation/css/main.css"},{"revision":"8c8a8e5422cc687a53deffd1326e5556","url":"plugins/tool-validation/index.html"},{"revision":"a35ebe17ce73daf38433381fbe0071de","url":"plugins/tool-validation/js/link_validation.js"},{"revision":"acc595e531160409a0194bf7190696d0","url":"plugins/tool-validation/js/main.js"},{"revision":"49049daf46cd95b6d8754b4df6cd57b2","url":"plugins/tool-validation/package-lock.json"},{"revision":"3e614b98b80bb07eef3338b563d697af","url":"plugins/tool-validation/package.json"},{"revision":"b341854ea24eeb7a84f9b348608b80f6","url":"posttest.html"},{"revision":"ca324eaa13b14c73d883b42c1ab4a01d","url":"posttest.json"},{"revision":"995dfe8443be6ae08e237840cba33bb8","url":"practice.html"},{"revision":"5f9e133fc11aea545f1ef6d38aeefcd6","url":"practice/css/main.css"},{"revision":"cd16738115fcb223f7f163fd7e0ed505","url":"practice/index.html"},{"revision":"a42ce9994a39b0ea6cfaa78c18a723c7","url":"practice/js/main.js"},{"revision":"40a9b66a73e9a85c639d26f1b2ad7504","url":"pretest.html"},{"revision":"270e38626bc3bafcf0747872a0578ff5","url":"pretest.json"},{"revision":"479f2d796131390807aff224d51c9dee","url":"procedure.html"},{"revision":"80fe8f97daf7f8ceee9736d260c150aa","url":"references.html"},{"revision":"e676e5d674a613a3113f0faff3213109","url":"theory.html"},{"revision":"eed0482056c5619f9470ffc0e36effc0","url":"validator-report.html"}]);

// Add runtime caching for images, fonts, js, css.
workbox.routing.registerRoute(
    ({request}) => request.destination === 'script' || request.destination === 'style' || request.destination === 'font' || request.destination === 'image',
    new workbox.strategies.CacheFirst()
);

// Cache the json data from url https://github.com/exp-adder-circuit-iiith/pretest.json
// workbox.routing.registerRoute(
//     ({url}) => url.origin === 'https://github.com' && url.pathname === '/exp-adder-circuit-iiith/pretest.json',
//     new workbox.strategies.NetworkFirst()
// );