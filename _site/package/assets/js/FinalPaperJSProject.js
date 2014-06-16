var values = {
    place: 'US',
    trend: null
};
var components = {
    place: {
        type: 'list',
        label: 'Place',
        options: ['US', 'World'],
        onChange: function() {
            if (values.place == "US") {
                place = 2458833;
            } else if (values.place == "World") {
                place = 1;
            }
            goodwords = [];
            goodids = [];
            indices = [];
            count = 0;
            getTrends(place);
        }
    },
    trend: {
        type: 'list',
        label: 'Trend',
        options: [],
        onChange: function() {
            goodwords = [];
            goodids = [];
            indices = [];
            count = 0
            getTweets(values.trend, 15);
        }
    },
    clear: {
        type: 'button',
        value: 'Clear Canvas',
        onClick: function() {
            project.activeLayer.removeChildren();
        }
    }
};
var palette = new Palette('My Palette', components, values);

var assignedColors = {};
var colorcount = 0;
function getTrendColor(trend) {
    var color = assignedColors[trend];
    if (color == null) {
        color = colors[colorcount];
        assignedColors[trend] = color;
        colorcount +=1;
    }
    return color;
}

var trends = [];
var place;
var tweets = null;
var goodwords = [];
var goodids = [];
var indices = [];
var trendorder = [];
var count = 0;
var colors = ["#F8766D","#D89000","#A3A500","#39B600", "#00BF7D", "#00BFC4", "#00B0F6",
"#9590FF", "#E76BF3", "#FF62BC"];
if (values.place == "US") {
    place = 2458833;
} else if (values.place == "World") {
    place = 1;
}

//Shuffle function from http://jsfromhell.com/array/shuffle
shuffle = function(v){
    for(var j, x, i = v.length; i; j = parseInt(Math.random() * i), x = v[--i], v[i] = v[j], v[j] = x);
    return v;
};

function getTrends(place){
    Http.request({
        url: 'http://api.twitter.com/1/trends/'+ place +'.json',
        onSuccess: function (result) {
            var temptrends = result[0].trends;
            for (var i=0; i < temptrends.length; i++) {
                trends[i] = temptrends[i].name;
            }
            if (trends.length != 0) {
                for (var i=0; i<trends.length; i++) trendorder.push(i);
                shuffle(trendorder);
                components.trend.options = trends;
                values.trend = trends[trendorder[0]];
                getTweets(values.trend, 15);
            }
        },
        onError: function(error) {
            //console.log(error);
        }
    });
}

getTrends(place)

function getTweets (trend, numTweets) {
    Http.request({
        url: 'http://search.twitter.com/search.json',
        data: {
            q: trend,
            page: numTweets,
            rpp: 15
         },
         onSuccess: function(result) {
            tweets = result.results;
            transformTweets(tweets);
            },
         onError: function(error) {
            //console.log(error);
        }
    });
}

function transformTweets(tweets) {
     if (tweets != null) {
        var words =[];
        var userid=[];
        for (var i=0; i< tweets.length; i++){
            var tweettemp = tweets[i].text.replace(values.trend,"");
            var strwords = tweettemp.split(/\s+/);
            for (var j=0; j<strwords.length; j++){
                userid.push(tweets[i].from_user_id);
            }
            words = words.concat(strwords);
        }
        for (var i=0; i < words.length; i++) {
            var word = words[i];
            if (/@/.test(word) | /#/.test(word) | /http/.test(word) | /RT/.test(word)) {
            } else if (/[\.,-\/|?!$%\^&=\-_`"~]+$/.test(word)) {
                word=word.replace(/[\.,-\/|?!$%\^&=\-_`~]+$/,"");
                if (word.length != 0){
                    goodwords.push(word);
                    goodids.push(userid[i]);
                }
            } else if (/^[\.,-\/|?!$%\^&=\-_`"~]+/.test(word)) {
                word=word.replace(/^[\.,-\/|?!$%\^&=\-_`~]+/,"");
                if (word.length != 0){
                    goodwords.push(word);
                    goodids.push(userid[i]);
                }
            }
            else {
                // 
                if (word.length != 0){
                    goodwords.push(word);
                    goodids.push(userid[i]);
                }
            }
            }
            if (goodwords != null){
                for (var i=0; i<goodwords.length; i++) indices.push(i);
                shuffle(indices);
            }
    }

}

function onMouseUp(event) {
    if (goodwords.length != 0) {
        text = new PointText(event.middlePoint);
        var angle = (event.point - event.downPoint).angle
        text.rotate(angle);
        text.justification = 'center';
        var index = indices[count];
        var userId = goodids[index];
        text.fontSize = userId % 100;
        text.fillColor = getTrendColor(values.trend);
        if (count < goodwords.length) {
            text.content = goodwords[index];
        }
        count +=1;
    }
}