javascript: (function() {
    function W(w, o) {
        if (w.addEventListener) w.addEventListener(o, function(e) {
            for (var n = e.target || e.srcElement || e.originalTarget; n; n = n.parentNode) n[o] = null
        }, true);
        w[o] = null
    }

    function P(ds, d, t) {
        var fs = d.getElementsByTagName(t);
        for (var i = 0; i < fs.length; ++i) ds.push(fs[i].contentDocument)
    }

    function D(d, o) {
        d[o] = null;
        if (d.body) d.body[o] = null;
        var ds = [];
        P(ds, d, "frame");
        P(ds, d, "iframe");
        for (var i = 0; i < ds.length; ++i)
            if (ds[i]) D(ds[i], o)
    }

    function R(a) {
        var o = "on" + a;
        W(window, o);
        D(document, o)
    }
    R("contextmenu");
    R("click");
    R("mousedown");
    R("mouseup")
})()
