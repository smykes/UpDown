  (function( $ ){
                $.fn.updown = function( options ) {  
                    // Create some defaults, extending them with any options that were provided
                    var settings = $.extend( {
                      'duration' : 5,
                      'start' : 450,
                      'end' : 100
                    }, options);
                    var selector = $(this);
                    return this.each(function(options) {        
                        $(this).html(settings.start);
                        settings.duration = settings.duration * 1000;
                        var each_number_duration;

                        if (settings.start > settings.end) {
                            each_number_duration = settings.duration/(settings.start - settings.end);
                        }
                        else {
                            each_number_duration = settings.duration/(settings.end - settings.start);
                        }
                        var interval = 
                            setInterval(
                                function() {
                                    go(interval, selector)
                                }, 
                                each_number_duration
                            );
                    });

                    function go(interval, selector) {
                        var value = parseInt($(selector).text(),10);
                        if (settings.start > settings.end) {
                            if ( parseInt($(selector).text(),10) == settings.end) {
                                clearInterval(interval);
                            }
                            else {
                                $(selector).html(value - 1);
                            }
                        }
                        else {
                            if ( parseInt($(selector).text(),10) == settings.end) {
                                clearInterval(interval);
                            }
                            else {
                                $(selector).html(value + 1);
                            }
                        }
                    }
                };
            })( jQuery );
