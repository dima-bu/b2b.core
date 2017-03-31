(function(self) {
    try {
        if (new self.URL('test:///').protocol === 'test:') {
            return
        }
    }
    catch(e) {}

    // from https://gist.github.com/Yaffle/1088850
    function URLPolyfill(url, baseURL) {
        if (typeof url !== 'string')
            throw new TypeError('URL must be a string');
        let m = String(url).replace(/^\s+|\s+$/g, "").match(/^([^:\/?#]+:)?(?:\/\/(?:([^:@\/?#]*)(?::([^:@\/?#]*))?@)?(([^:\/?#]*)(?::(\d*))?))?([^?#]*)(\?[^#]*)?(#[\s\S]*)?/);
        if (!m)
            throw new RangeError('Invalid URL format');
        let protocol = m[1] || "";
        let username = m[2] || "";
        let password = m[3] || "";
        let host = m[4] || "";
        let hostname = m[5] || "";
        let port = m[6] || "";
        let pathname = m[7] || "";
        let search = m[8] || "";
        let hash = m[9] || "";
        if (baseURL !== undefined) {
            let base = baseURL instanceof URLPolyfill ? baseURL : new URLPolyfill(baseURL);
            let flag = !protocol && !host && !username;
            if (flag && !pathname && !search)
                search = base.search;
            if (flag && pathname[0] !== "/")
                pathname = (pathname ? (((base.host || base.username) && !base.pathname ? "/" : "") + base.pathname.slice(0, base.pathname.lastIndexOf("/") + 1) + pathname) : base.pathname);
            // dot segments removal
            let output = [];
            pathname.replace(/^(\.\.?(\/|$))+/, "")
                .replace(/\/(\.(\/|$))+/g, "/")
                .replace(/\/\.\.$/, "/../")
                .replace(/\/?[^\/]*/g, function (p) {
                    if (p === "/..")
                        output.pop();
                    else
                        output.push(p);
                });
            pathname = output.join("").replace(/^\//, pathname[0] === "/" ? "/" : "");
            if (flag) {
                port = base.port;
                hostname = base.hostname;
                host = base.host;
                password = base.password;
                username = base.username;
            }
            if (!protocol)
                protocol = base.protocol;
        }

        // convert URLs to use / always
        pathname = pathname.replace(/\\/g, '/');

        this.origin = host ? protocol + (protocol !== "" || host !== "" ? "//" : "") + host : "";
        this.href = protocol + ((protocol && host) || protocol === "file:" ? "//" : "") + (username !== "" ? username + (password !== "" ? ":" + password : "") + "@" : "") + host + pathname + search + hash;
        this.protocol = protocol;
        this.username = username;
        this.password = password;
        this.host = host;
        this.hostname = hostname;
        this.port = port;
        this.pathname = pathname;
        this.search = search;
        this.hash = hash;
    }
    self.URL = URLPolyfill;
    self.URL.polyfill = true
})(typeof self !== 'undefined' ? self : this);
