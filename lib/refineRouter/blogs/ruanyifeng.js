const parser = require('@/utils/rss-parser');

module.exports = async (ctx) => {
    const feed = await parser.parseURL('https://www.ruanyifeng.com/blog/atom.xml');

    const items = await Promise.all(
        feed.items.map((item) => {
            const data = {
                title: item.title,
                description: item.title,
                pubDate: item.pubDate,
                link: item.link,
                author: item.author,
            };
            return data;
        })
    );

    ctx.state.data = {
        title: feed.title,
        link: feed.link,
        description: feed.description,
        item: items,
    };
};
