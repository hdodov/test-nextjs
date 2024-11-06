// https://nextjs.org/docs/app/building-your-application/deploying#configuring-caching

const cache = new Map();

module.exports = class CacheHandler {
  constructor(options) {
    this.options = options;
  }

  async get(key) {
    console.log("get", key);
    return cache.get(key);
  }

  async set(key, data, ctx) {
    console.log("set", key, ctx);
    cache.set(key, {
      value: data,
      lastModified: Date.now(),
      tags: ctx.tags,
    });
  }

  async revalidateTag(tags) {
    console.log("revalidateTag", tags);
    tags = [tags].flat();
    for (let [key, value] of cache) {
      if (value.tags.some((tag) => tags.include(tag))) {
        cache.delete(key);
      }
    }
  }
};
