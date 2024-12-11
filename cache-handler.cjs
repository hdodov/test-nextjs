console.log("inside cache-handler");

const cache = new Map();

module.exports = class CacheHandler {
  constructor(options) {
    this.options = options;
  }

  async get(key) {
    console.log("CACHE GET", key);
    return cache.get(key);
  }

  async set(key, data, ctx) {
    console.log("CACHE SET", key, data);
    cache.set(key, {
      value: data,
      lastModified: Date.now(),
      tags: ctx.tags,
    });
  }

  async revalidateTag(tags) {
    console.log("CACHE TAGS", tags);
    // tags is either a string or an array of strings
    tags = [tags].flat();
    // Iterate over all entries in the cache
    for (let [key, value] of cache) {
      // If the value's tags include the specified tag, delete this entry
      if (value.tags.some((tag) => tags.include(tag))) {
        cache.delete(key);
      }
    }
  }
};
