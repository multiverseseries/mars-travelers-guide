module.exports = (eleventyConfig) => {
    eleventyConfig.addPassthroughCopy("src/images");
    eleventyConfig.addPassthroughCopy("src/audio");

    return {
        dir: {
            input: "src",
        },
        htmlTemplateEngine: "njk",
    };
};
