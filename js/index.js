var term = $('body').terminal($.noop, {
    onBlur: function() {
        return false;
    }
});