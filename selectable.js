javascript: (function() {
    function ats() {
        var styles = '*,p,div{user-select:text !important;-moz-user-select:text !important;-webkit-user-select:text !important;}';
        jQuery('head').append(jQuery('<style />').html(styles));
        var allowNormal = function() {
            return true;
        };
        jQuery('*[onselectstart], *[ondragstart], *[oncontextmenu]').unbind('contextmenu').unbind('selectstart').unbind('dragstart').unbind('mousedown').unbind('mouseup').unbind('click').attr('onselectstart', allowNormal).attr('oncontextmenu', allowNormal).attr('ondragstart', allowNormal);
    }

    function atswp() {
        if (window.jQuery) {
            ats();
        } else {
            window.setTimeout(atswp, 100);
        }
    }
    if (window.jQuery) {
        ats();
    } else {
        var s = document.createElement('script');
        s.setAttribute('src', 'http://code.jquery.com/jquery-1.11.2.min.js');
        document.getElementsByTagName('body')[0].appendChild(s);
        atswp();
    }
})();
