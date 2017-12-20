var movies_base_url = 'https://bmovies.is'
var options = {
    url: function(phrase) {
        var query = {
           "query": {
              "match": {
                 "name": {
                    "query": phrase,
                    "operator": "and"
                 }
              }
           }
        }
        var filter_path='&filter_path=hits.hits._source.name,hits.hits._source.link'
        var query_type = '&source_content_type=application/json'
        return "http://localhost:9200/movies/movie/_search?source=" + encodeURI(JSON.stringify(query)) + filter_path + query_type;
    },

    listLocation: function(data) {
        if (!data.hasOwnProperty('hits')) {
            return {}
        }
        return data["hits"]["hits"];
    },

    getValue: function(element) {
        if (!element.hasOwnProperty('_source')) {
            return ''
        }
        return element["_source"]["name"];
    },

    list: {
        onClickEvent: function() {
            var selectedItemData = $("#suggestion").getSelectedItemData();
            var url = movies_base_url + selectedItemData['_source']['link']
            window.open(url, '_blank');
        },
    }
};

$("#suggestion").easyAutocomplete(options);
