var Http = { 
    request: function(options) {
        var url = options.url,
            nop = function() {};
        return $.ajax($.extend({
            // See if we can use jsonp, by checking the domain for
            // services known to support it.
            dataType: /\.json$/.test(url)
                ? /\b(vimeo\.com|twitter\.com|yahoo\.com|googleapis\.com)\b/.test(url)
                    ? 'jsonp'
                    : 'json'
                : (url.match(/\.(xml|html)$/) || [])[1],
            success: function(data) {
                (options.onSuccess || nop)(data);
            },
            error: function(xhr, error) {
                (options.onError || nop)(error);
            },
            complete: function() {
                (options.onComplete || nop)();
                if (paper.view)
                    paper.view.draw(true);
            }
        }, options));
    }
};
