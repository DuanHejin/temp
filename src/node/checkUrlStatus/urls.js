const urls = [
    // 'https://ss2.meipian.me/official-website/imgs/template_1.png',
    // 'https://ss2.meipian.me/official-website/imgs/demo-bg1.jpg',
    // 'https://ss2.meipian.me/official-website/imgs/m-demo-bg1-1.jpg',
    // 'https://ss2.meipian.me/editor-v3/webcdn/officialwebsite/officeSiteAudio3.mp3',
    // 'https://ss2.meipian.me/official-website/imgs/template_2.png',
    // 'https://ss2.meipian.me/official-website/imgs/demo-bg2.jpg',
    // 'https://ss2.meipian.me/official-website/imgs/m-demo-bg2-1.jpg',
    // 'https://ss2.meipian.me/editor-v3/webcdn/officialwebsite/officeSiteAudio4.mp3',
    // 'https://ss2.meipian.me/official-website/imgs/template_3.png',
    // 'https://ss2.meipian.me/official-website/imgs/demo-bg3.jpg',
    // 'https://ss2.meipian.me/official-website/imgs/m-demo-bg3-1.jpg',
    // 'https://ss2.meipian.me/editor-v3/webcdn/officialwebsite/officeSiteAudio5.mp3',
    // 'https://ss2.meipian.me/official-website/imgs/template_4.png',
    // 'https://ss2.meipian.me/official-website/imgs/demo-bg4.jpg',
    // 'https://ss2.meipian.me/official-website/imgs/m-demo-bg4-1.jpg',
    // 'https://ss2.meipian.me/users/36169565/81874a60-9106-11ea-a87b-c7a6ea4c261b.aac?v=1',
    // 'https://ss2.meipian.me/official-website/imgs/template_5.png',
    // 'https://ss2.meipian.me/official-website/imgs/demo-bg5.jpg',
    // 'https://ss2.meipian.me/official-website/imgs/m-demo-bg5-1.jpg',
    // 'https://ss2.meipian.me/editor-v3/webcdn/officialwebsite/officeSiteAudio7.mp3',
    // 'https://ss2.meipian.me/official-website/imgs/template_6.png',
    // 'https://ss2.meipian.me/official-website/imgs/demo-bg6.jpg',
    // 'https://ss2.meipian.me/official-website/imgs/m-demo-bg6-1.jpg',
    // 'https://ss2.meipian.me/editor-v3/webcdn/officialwebsite/officeSiteAudio8.mp3',
    // 'https://ss2.meipian.me/official-website/imgs/template_7.png',
    // 'https://ss2.meipian.me/official-website/imgs/demo-bg7.jpg',
    // 'https://ss2.meipian.me/official-website/imgs/m-demo-bg7-1.jpg',
    // 'https://ss2.meipian.me/editor-v3/webcdn/officialwebsite/officeSiteAudio9.mp3',
    // 'https://ss2.meipian.me/official-website/imgs/photo1.jpg',
    // 'https://ss2.meipian.me/official-website/imgs/photo2.jpg',
    // 'https://ss2.meipian.me/official-website/imgs/photo3.jpg',
    // 'https://ss2.meipian.me/official-website/imgs/photo4.jpg',
    // 'https://ss2.meipian.me/official-website/imgs/photo5.jpg',
    // 'https://ss2.meipian.me/official-website/imgs/photo6.jpg',
    // 'https://ss2.meipian.me/official/resource/favicon.ico',
    // 'https://ss2.meipian.me/official-website/js/client.js',
    // 'https://ss2.meipian.me/cdn/official-website/img/single-color-logo.png',
    // 'https://ss2.meipian.me/editor-v3/webcdn/officialwebsite/icp.jpeg',
    // 'https://ss2.meipian.me/editor-v3/webcdn/officialwebsiteLark20210402-142138.png',
    // 'https://ss2.meipian.me/editor-v3/webcdn/officialwebsiteLark20210402-142142.png',
    // 'https://ss2.meipian.me/editor-v3/webcdn/officialwebsite/meipian-business-licence.png',
    // 'https://ss2.meipian.me/cdn/official-website/img/slogan.svg',
    // 'https://ss2.meipian.me/editor-v3/webcdn/officialwebsite/qrcodeios.png',
    // 'https://ss2.meipian.me/editor-v3/webcdn/officialwebsite/mina_qrcode.jpg',
    // 'https://ss2.meipian.me/editor-v3/webcdn/officialwebsite/qrcodeanzhuo.png',
    // 'https://ss2.meipian.me/editor-v3/webcdn/officialwebsite/qrcode_mp.jpg',
    // 'https://ss2.meipian.me/official-website/imgs/img-err.png',
    // 'https://ss2.meipian.me/cdn/official-website/img/color-black-logo.png',
    // 'https://ss2.meipian.me/cdn/official-website/img/color-white-logo.png',
    // 'https://ss2.meipian.me/official-website/imgs/quick-download.png',
    // 'https://ss2.meipian.me/official-website/imgs/page1-1.png',
    // 'https://ss2.meipian.me/official-website/imgs/page1-1.png?imageView2/2/w/1400/h/1400/q/80/format/jpg/interlace/1',
    // 'https://ss2.meipian.me/official-website/imgs/pc-bg.mp4',
    // 'https://ss2.meipian.me/cdn/official-website/img/slogan1.svg',
    // 'https://ss2.meipian.me/cdn/official-website/img/play-btn-icon.png',
    // 'https://ss2.meipian.me/cdn/official-website/img/pull-guide.webp',
    // 'https://ss2.meipian.me/official-website/media/qianliang-vip.mp4',
    // 'https://ss2.meipian.me/cdn/official-website/img/close-btn-1.png',
    // 'https://ss2.meipian.me/cdn/official-website/img/close-btn-hover-1.png',
    // 'https://ss2.meipian.me/official-website/imgs/download_code.png',
    // 'https://ss2.meipian.me/official-website/imgs/offical_account_code.png',
    // 'https://ss2.meipian.me/official-website/imgs/pc-bg.mp4',
    // 'https://ss2.meipian.me/cdn/official-website/img/mini-qrcode-1.png',
    // 'https://ss2.meipian.me/cdn/official-website/img/page5.png',
    // 'https://ss2.meipian.me/official-website/imgs/intrest.png?imageView2/2/w/2800/h/2800',
    // 'https://ss2.meipian.me/cdn/official-website/img/page4.png',
    // 'https://ss2.meipian.me/cdn/official-website/img/video.png',
    // 'https://ss2.meipian.me/cdn/official-website/img/sound_on.png',
    // 'https://ss2.meipian.me/cdn/official-website/img/sound_off.png',
    // 'https://ss2.meipian.me/cdn/official-website/img/page2.png',
    // 'https://ss2.meipian.me/cdn/official-website/img/video.png',
    // 'https://ss2.meipian.me/official-website/imgs/jing.png',
    // 'https://ss2.meipian.me/official-website/imgs/praise.svg',
    // 'https://ss2.meipian.me/cdn/official-website/img/article-icon.png',
    // 'https://ss2.meipian.me/cdn/official-website/img/s-video.png',
    // 'https://ss2.meipian.me/cdn/official-website/img/short-content.png',
    // 'https://ss2.meipian.me/cdn/official-website/img/page8.png',
    // 'https://ss2.meipian.me/cdn/official-website/img/page8.png',
    // 'https://ss2.meipian.me/official-website/imgs/book-icon.png',
    // 'https://ss2.meipian.me/official-website/imgs/book-code.png',
    // 'https://ss2.meipian.me/official-website/imgs/meipian_book.png',
    // 'https://ss2.meipian.me/cdn/official-website/img/certificate.png',
    // 'https://ss2.meipian.me/official-website/imgs/book_page.png',
    // 'https://ss2.meipian.me/official-website/imgs/book.png',
    // 'https://ss2.meipian.me/cdn/official-website/img/page6_circle.png',
    // 'https://ss2.meipian.me/cdn/official-website/img/pre.png',
    // 'https://ss2.meipian.me/cdn/official-website/img/next.png',
    // 'https://ss2.meipian.me/cdn/official-website/img/page6_phone.png',
    // 'https://ss2.meipian.me/cdn/official-website/img/music.png',
    // 'https://ss2.meipian.me/cdn/official-website/img/music-ani.webp',
    // 'https://ss2.meipian.me/cdn/official-website/img/page6_circle.png',
    // 'https://ss2.meipian.me/cdn/official-website/img/pre.png',
    // 'https://ss2.meipian.me/cdn/official-website/img/next.png',
    // 'https://ss2.meipian.me/cdn/official-website/img/page6_phone.png',
    // 'https://ss2.meipian.me/cdn/official-website/img/music.png',
    // 'https://ss2.meipian.me/cdn/official-website/img/bullet-screen.png',
    // 'https://ss2.meipian.me/cdn/official-website/img/share-panel.png',
    // 'https://ss2.meipian.me/cdn/official-website/img/share-zoom.png',
    // 'https://ss2.meipian.me/cdn/official-website/img/page3.png',
    // 'https://ss2.meipian.me/cdn/official-website/img/single-color-logo.png',
    // 'https://ss2.meipian.me/cdn/official-website/img/slogan.svg',
    // 'https://ss2.meipian.me/editor-v3/webcdn/officialwebsite/icp.jpeg',
    // 'https://ss2.meipian.me/editor-v3/webcdn/officialwebsiteLark20210402-142138.png',
    // 'https://ss2.meipian.me/editor-v3/webcdn/officialwebsiteLark20210402-142142.png',
    // 'https://ss2.meipian.me/editor-v3/webcdn/officialwebsite/meipian-business-licence.png',
    // 'https://ss2.meipian.me/cdn/official-website/img/color-black-logo.png',
    // 'https://ss2.meipian.me/cdn/official-website/img/m-black-menu.png',
    // 'https://ss2.meipian.me/cdn/official-website/img/color-white-logo.png',
    // 'https://ss2.meipian.me/cdn/official-website/img/m-white-menu.png',
    // 'https://ss2.meipian.me/cdn/official-website/img/close.png',
    // 'https://ss2.meipian.me/cdn/official-website/img/grey-slogan.svg',
    // 'https://ss2.meipian.me/cdn/official-website/img/m-bg5.png',
    // 'https://ss2.meipian.me/official-website/imgs/intrest.png?imageView2/2/w/1400/h/1400',
    // 'https://ss2.meipian.me/official-website/imgs/m-bg1-1.png',
    // 'https://ss2.meipian.me/cdn/official-website/img/play-btn-icon.png',
    // 'https://ss2.meipian.me/official-website/imgs/mobile-bg-1.webp',
    // 'https://ss2.meipian.me/official-website/imgs/mobile-bg.mp4',
    // 'https://ss2.meipian.me/official-website/imgs/m-bg1-1.png?imageView2/2/w/750/h/750/q/80/format/jpg/interlace/1',
    // 'https://ss2.meipian.me/official-website/imgs/mobile-bg.mp4',
    // 'https://ss2.meipian.me/cdn/official-website/img/slogan1.svg',
    // 'https://ss2.meipian.me/official-website/media/qianliang-vip.mp4',
    // 'https://ss2.meipian.me/official-website/json/pull-slide.json',
    // 'https://ss2.meipian.me/cdn/official-website/img/m-bg4.png',
    // 'https://ss2.meipian.me/cdn/official-website/img/video.png',
    // 'https://ss2.meipian.me/cdn/official-website/img/pause.png',
    // 'https://ss2.meipian.me/cdn/official-website/img/m-bg2.png',
    // 'https://ss2.meipian.me/cdn/official-website/img/video.png',
    // 'https://ss2.meipian.me/official-website/imgs/jing.png',
    // 'https://ss2.meipian.me/official-website/imgs/praise.svg',
    // 'https://ss2.meipian.me/cdn/official-website/img/article-icon.png',
    // 'https://ss2.meipian.me/cdn/official-website/img/s-video.png',
    // 'https://ss2.meipian.me/cdn/official-website/img/short-content.png',
    // 'https://ss2.meipian.me/cdn/official-website/img/m-bg8.png',
    // 'https://ss2.meipian.me/official-website/imgs/book-icon.png',
    // 'https://ss2.meipian.me/official-website/imgs/book_page.png',
    // 'https://ss2.meipian.me/official-website/imgs/book.png',
    // 'https://ss2.meipian.me/cdn/official-website/img/page6_circle.png',
    // 'https://ss2.meipian.me/cdn/official-website/img/page6_phone.png',
    // 'https://ss2.meipian.me/cdn/official-website/img/music.png',
    // 'https://ss2.meipian.me/cdn/official-website/img/pre.png',
    // 'https://ss2.meipian.me/cdn/official-website/img/next.png',
    // 'https://ss2.meipian.me/cdn/official-website/img/page6_circle.png',
    // 'https://ss2.meipian.me/cdn/official-website/img/page6_phone.png',
    // 'https://ss2.meipian.me/cdn/official-website/img/music.png',
    // 'https://ss2.meipian.me/cdn/official-website/img/m-bullet-screen.png',
    // 'https://ss2.meipian.me/cdn/official-website/img/share-panel.png',
    // 'https://ss2.meipian.me/cdn/official-website/img/share-zoom.png',
    // 'https://ss2.meipian.me/cdn/official-website/img/pre.png',
    // 'https://ss2.meipian.me/cdn/official-website/img/next.png',
    // 'https://ss2.meipian.me/official-website/json/music.json',
    // 'https://ss2.meipian.me/cdn/official-website/img/m-bg3.png',
    // 'https://ss2.meipian.me/app/qualification/yellowV.png',
    // 'https://ss2.meipian.me/app/qualification/redStar.png',
    // 'https://ss2.meipian.me/official-website/imgs/id-v.png',
    // 'https://ss2.meipian.me/official-website/imgs/id-star.png',
    // 'https://ss2.meipian.me/cdn/official-website/img/about-banner.png',
    // 'https://ss2.meipian.me/cdn/official-website/img/mission.1e09958.png',
    // 'https://ss2.meipian.me/cdn/official-website/img/vision.b9a99e4.png',
    // 'https://ss2.meipian.me/cdn/official-website/img/value.44f5a03.png',
    // 'https://ss2.meipian.me/cdn/official-website/img/gen-banner.png',
    // 'https://ss2.meipian.me/cdn/official-website/img/gen-id1.png',
    // 'https://ss2.meipian.me/cdn/official-website/img/gen-id2.png',
    // 'https://ss2.meipian.me/cdn/official-website/img/gen-id3.png',
    // 'https://ss2.meipian.me/official-website/imgs/arrrow.png',
    // 'https://ss2.meipian.me/official-website/js/scrolloverflow.min.js',
    // 'https://ss2.meipian.me/cdn/official-website/img/join-banner.png',
    // 'https://ss2.meipian.me/cdn/official-website/img/benifit2.png',
    // 'https://www.zhipin.com/gongsi/abd056d7b564454d1nN82dS4.html',
    // 'https://ss2.meipian.me/cdn/official-website/img/flat.799cce0.png',
    // 'https://ss2.meipian.me/cdn/official-website/img/warn.beafb7c.png',
    // 'https://ss2.meipian.me/cdn/official-website/img/achievement.aab002e.png',
    // 'https://ss2.meipian.me/cdn/official-website/img/tech.png',
    // 'https://ss2.meipian.me/cdn/official-website/img/content.png',
    // 'https://ss2.meipian.me/cdn/official-website/img/product.png',
    // 'https://ss2.meipian.me/cdn/official-website/img/support.png',
    // 'https://ss2.meipian.me/official-website/imgs/1-1.png',
    // 'https://ss2.meipian.me/official-website/imgs/1-2.png',
    // 'https://ss2.meipian.me/official-website/imgs/1-3.png',
    // 'https://ss2.meipian.me/official-website/imgs/1-4.png',
    // 'https://ss2.meipian.me/official-website/imgs/1-5.png',
    // 'https://ss2.meipian.me/official-website/imgs/1-6.png',
    // 'https://ss2.meipian.me/official-website/imgs/638555.png',
    // 'https://ss2.meipian.me/official-website/imgs/87976313.png',
    // 'https://ss2.meipian.me/official-website/imgs/1813599.png',
    // 'https://ss2.meipian.me/official-website/imgs/954953.png',
    // 'https://ss2.meipian.me/official-website/imgs/7628010.png',
    // 'https://ss2.meipian.me/official-website/imgs/7961485.png',
    // 'https://ss2.meipian.me/official-website/imgs/714501.png',
    // 'https://ss2.meipian.me/official-website/imgs/19769450.png',
    // 'https://ss2.meipian.me/official-website/imgs/61029632.png',
    // 'https://ss2.meipian.me/official-website/imgs/87976313-1.png',
    // 'https://ss2.meipian.me/official-website/imgs/302181.png',
    // 'https://ss2.meipian.me/official-website/imgs/7710015.png',
    // 'https://ss2.meipian.me/official-website/imgs/424496.jpeg',
    // 'https://ss2.meipian.me/official-website/imgs/29588021.jpeg',
    // 'https://ss2.meipian.me/official-website/imgs/3ex78nsw.png',
    // 'https://ss2.meipian.me/official-website/imgs/3panwnog.png',
    // 'https://ss2.meipian.me/official-website/imgs/799bdxd.png',
    // 'https://ss2.meipian.me/official-website/imgs/31h6oed.png',

    'https://ss2.meipian.me/official-website/imgs/2040790.png',
    'https://ss2.meipian.me/official-website/imgs/1314218.png',
    'https://ss2.meipian.me/official-website/imgs/5191885.png',
    'https://ss2.meipian.me/official-website/imgs/5640532.png',
    'https://ss2.meipian.me/official-website/imgs/1319030.png',
    'https://ss2.meipian.me/official-website/imgs/782835.png',
    'https://ss2.meipian.me/official-website/imgs/16891566.png',
    'https://ss2.meipian.me/official-website/imgs/9485667.png',
    'https://ss2.meipian.me/official-website/imgs/7314620.png',
    'https://ss2.meipian.me/official-website/imgs/16907094.png',
    'https://ss2.meipian.me/official-website/imgs/head_44518974.png',
    'https://ss2.meipian.me/official-website/imgs/media_44518974.png',
    'https://ss2.meipian.me/official-website/imgs/44518974.mp4',
    'https://ss2.meipian.me/official-website/imgs/head_46900590.png',
    'https://ss2.meipian.me/official-website/imgs/media_46900590.png',
    'https://ss2.meipian.me/official-website/imgs/46900590.mp4',
    'https://ss2.meipian.me/official-website/imgs/head_56261685.png',
    'https://ss2.meipian.me/official-website/imgs/media_56261685.png',
    'https://ss2.meipian.me/official-website/imgs/56261685.mp4',
    'https://ss2.meipian.me/official-website/imgs/head_60565841.png',
    'https://ss2.meipian.me/official-website/imgs/media_60565841.png',
    'https://ss2.meipian.me/official-website/imgs/60565841.mp4',
    'https://ss2.meipian.me/official-website/imgs/head_56261677.png',
    'https://ss2.meipian.me/official-website/imgs/media_56261677.png',
    'https://ss2.meipian.me/official-website/imgs/56261677.mp4',
    'https://ss2.meipian.me/official-website/imgs/head_56261689.png',
    'https://ss2.meipian.me/official-website/imgs/media_56261689.png',
    'https://ss2.meipian.me/official-website/imgs/56261689.mp4',
    'https://ss2.meipian.me/official-website/imgs/head_56261684.png',
    'https://ss2.meipian.me/official-website/imgs/media_56261684.png',
    'https://ss2.meipian.me/official-website/imgs/56261684.mp4',
    'https://ss2.meipian.me/official-website/imgs/head_56261656.png',
    'https://ss2.meipian.me/official-website/imgs/media_56261656.png',
    'https://ss2.meipian.me/official-website/imgs/56261656.mp4',
    'https://ss2.meipian.me/official-website/imgs/head_56261673.png',
    'https://ss2.meipian.me/official-website/imgs/media_56261673.png',
    'https://ss2.meipian.me/official-website/imgs/56261673.mp4',
    'https://ss2.meipian.me/official-website/imgs/head_56261699.png',
    'https://ss2.meipian.me/official-website/imgs/media_56261699.png',
    'https://ss2.meipian.me/official-website/imgs/56261699.mp4',
    'https://ss2.meipian.me/official-website/imgs/head_56261670.png',
    'https://ss2.meipian.me/official-website/imgs/media_56261670.png',
    'https://ss2.meipian.me/official-website/imgs/56261670.mp4',
    'https://ss2.meipian.me/official-website/imgs/head_56261735.png',
    'https://ss2.meipian.me/official-website/imgs/media_56261735.png',
    'https://ss2.meipian.me/official-website/imgs/56261735.mp4',
]

exports.urls = urls;
