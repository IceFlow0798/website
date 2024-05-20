const { DateTime } = require('luxon')
const navigationPlugin = require('@11ty/eleventy-navigation')
const rssPlugin = require('@11ty/eleventy-plugin-rss')

module.exports = (config) => {
    config.addPlugin(navigationPlugin);
    config.addPlugin(rssPlugin);

    config.addPassthroughCopy('css');
    config.addPassthroughCopy('static');
    config.addPassthroughCopy("posts/pictures");
    config.addPassthroughCopy("extensions/pictures");
  
    config.setDataDeepMerge(true);

    config.addFilter('htmlDateString', (dateObj) => {
        return DateTime.fromJSDate(dateObj, {zone: 'utc'}).toFormat('yyyy-LL-dd');
    });

    config.addFilter("readableDate", dateObj => {
        return DateTime.fromJSDate(dateObj, {zone: 'utc'}).toFormat("dd LLL, yyyy");
    });

    config.addCollection("tagList", collection => {
        const tagsObject = {}
        collection.getAll().forEach(item => {
            if (!item.data.tags) return;
            item.data.tags
            .filter(tag => !['post', 'all'].includes(tag))
            .forEach(tag => {
                if(typeof tagsObject[tag] === 'undefined') {
                    tagsObject[tag] = 1
                } else {
                    tagsObject[tag] += 1
                }
            });
        });
        const tagList = []
        Object.keys(tagsObject).forEach(tag => {
            tagList.push({ tagName: tag, tagCount: tagsObject[tag] })
        })
        return tagList.sort((a, b) => b.tagCount - a.tagCount)
    });

    config.addCollection("categoryList", collection => {
        const categoriesObject = {};
        collection.getAll().forEach(item => {
            if (!item.data.categories) return;
            item.data.categories
            .filter(categories => !['extensions', 'all'].includes(categories))
            .forEach(category => {
                if(typeof categoriesObject[category] === 'undefined') {
                    categoriesObject[category] = { categoryName: category, categoryCount: 1, posts: [item] };
                } else {
                    categoriesObject[category].categoryCount++;
                    categoriesObject[category].posts.push(item);
                }
            });
        });
        const categoryList = [];
        Object.keys(categoriesObject).forEach(category => {
            categoryList.push({
                categoryName: category,
                categoryCount: categoriesObject[category].categoryCount,
                posts: categoriesObject[category].posts
            });
        });
        return categoryList.sort((a, b) => b.categoryCount - a.categoryCount);
    });

}