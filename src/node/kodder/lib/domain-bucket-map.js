
const bucketDomainMap = {
    ivwen: [
        "static2-src2.ivwen.com",
        "ss-biz.meipian.me",
        "ss2-src.meipian.me",
        "static2-src.ivwen.com",
        "oimage.ivwen.com",
        "primg.meipian.me",
        "dl.meipian.cn",
        "static3.ivwen.com",
        "ss3.meipian.me",
        "static2.meip0.me",
        "music.ivwen.com",
        "video.ivwen.com",
        "ss2.meipian.me",
        "test-static2.ivwen.com",
        "static2.ivwen.com",
        "7xjpsx.com0.z0.glb.clouddn.com",
        "7xjpsx.com0.z0.glb.qiniucdn.com",
        "algrisk.ivwen.com",
        "download.ivwen.com",
        "imganaufop.meipian.cn",
        "ss2-src.meipian.me",
        "static2-src.ivwen.com",
        "video-src.ivwen.com",
    ],
    "ivwen-test": [
        "t-ss-biz.meipian.me",
        "t-resource.meipian.me",
        "t-oimage.ivwen.com",
        "t-primg.meipian.me",
        "t-static2.meip0.me",
        "test-music.ivwen.com",
        "t-video.ivwen.com",
        "t-ss2.meipian.me",
        "t-static2.ivwen.com",
        "7xqs25.com0.z0.glb.clouddn.com",
        "7xqs25.com0.z0.glb.qiniucdn.com",
        "t-ss2-src.meipian.me",
        "t-static2-src.ivwen.com",
        "t-video-src.ivwen.com",
    ],
    "ivwen-short-video": [
        "short-video.ivwen.com",
        "ali-short-video.ivwen.com",
        "short-video-src.ivwen.com",
    ],
    "ivwen-short-video-test": [
        "test-ali-short-video.ivwen.com",
        "test-short-video-src.ivwen.com",
    ],
    "album-video": [
        "bd-album-video.ivwen.com",
        "album-video.ivwen.com",
        "album-video-src.ivwen.com",
    ],
    "test-album-video": [
        "t-album-video.ivwen.com",
        "t-album-video-src.ivwen.com",
    ],
};
exports.bucketDomainMap = bucketDomainMap;

const domainBucketMap = {};
for (const bucket in bucketDomainMap) {
    bucketDomainMap[bucket].forEach((domain) => {
        domainBucketMap[domain] = bucket;
    });
}
exports.domainBucketMap = domainBucketMap;

