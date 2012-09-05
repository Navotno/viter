var blocks = {};

blocks['b-page'] = function(data) {
    return [
        {
            block: 'b-page',
            title: 'Вітер',
            head: [
                { elem: 'favicon', url: '/favicon.ico' },
                { elem: 'css', url: '/pages-desktop/index/_index.css' },
                { block: 'i-jquery', elem: 'core' },
                { elem: 'js', url: '/pages-desktop/index/_index.js' }
            ],
            content: 'test: ' + data.page
        }
    ]
};
