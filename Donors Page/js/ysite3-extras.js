$(document).ready(function () {
        ////////////////////////////////////////////////////////////////////////////
        // simple ajax search results loader
        // developed for use with the accrisoft freedom cms
        // Brian Stich (2013) + Edits by Andy Baltes (2014) for customization & COo00okies.
        ////////////////////////////////////////////////////////////////////////////
        
        var urlParams;
        (window.onpopstate = function(){
            var match,
                pl     = /\+/g,  // Regex for replacing addition symbol with a space
                search = /([^&=]+)=?([^&]*)/g,
                decode = function (s) { return decodeURIComponent(s.replace(pl, " ")); },
                query  = window.location.search.substring(1);
        
            urlParams = {};
            while (match = search.exec(query))
               urlParams[decode(match[1])] = decode(match[2]);
        })();
        
        var searchTerm = urlParams['search_this'];

        var ajxinput = 'input.searchBoxInput.ajaxSearch';
        $(ajxinput).val(searchTerm);
        $(ajxinput).keyup(function () {
            typewatch(function () {
                if ($(this).val !== '') {
    
                    
                    var keyterm = encodeURIComponent($(ajxinput).val());
                    $('#search-results').load('index.php?src=search&search_id=search_site&srctype=ajax_search_lister&direct=y&search_this=' + keyterm, function () {
                        //$('#search-results .searchWrapper h2:first, #ajxsearch .searchWrapper > ul:first').remove();
                        $('.gobutton').hide();
                        
                        // Coookiessss!!!
                        //$.cookie("search_this", '', {path: "/", domain: "toledo.com", expires: 0.02}); // 1 = 1 Day, 0.02 =~ half an hour

                    });
                    
                }
            }, 150);
        });
        var typewatch = (function () {
            var timer = 0;
            return function (callback, ms) {
                clearTimeout(timer);
                timer = setTimeout(callback, ms);
            };
        })();
});