(function () {
    "use strict";

    const SITE_ORIGIN = "https://judocenterny.com";
    const SITE_NAME = "Judo Center New York";
    const DEFAULT_DESCRIPTION = "Judo Center New York offers professional judo training for kids, teens, and adults in Staten Island and Brooklyn.";

    const ROUTES = {
        "/": {
            title: "Judo Center New York | Judo Classes in Staten Island & Brooklyn",
            description: DEFAULT_DESCRIPTION
        },
        "/athletes": {
            title: "Athletes | Judo Center New York",
            description: "Meet the Judo Center New York athletes who train, compete, and represent our team on the mat."
        },
        "/profile": {
            title: "Athlete Profile | Judo Center New York",
            description: "View athlete profiles, achievements, training history, and judo experience from Judo Center New York."
        }
    };

    function cleanPath(pathname) {
        if (!pathname || pathname === "/index.html") return "/";
        return pathname
            .replace(/\/index\.html$/i, "/")
            .replace(/\.html$/i, "")
            .replace(/\/+$/i, "") || "/";
    }

    function setMeta(name, content) {
        let meta = document.querySelector(`meta[name="${name}"]`);
        if (!meta) {
            meta = document.createElement("meta");
            meta.setAttribute("name", name);
            document.head.appendChild(meta);
        }
        meta.setAttribute("content", content);
    }

    function setProperty(property, content) {
        let meta = document.querySelector(`meta[property="${property}"]`);
        if (!meta) {
            meta = document.createElement("meta");
            meta.setAttribute("property", property);
            document.head.appendChild(meta);
        }
        meta.setAttribute("content", content);
    }

    function setCanonical(url) {
        let canonical = document.querySelector('link[rel="canonical"]');
        if (!canonical) {
            canonical = document.createElement("link");
            canonical.setAttribute("rel", "canonical");
            document.head.appendChild(canonical);
        }
        canonical.setAttribute("href", url);
    }

    function setJsonLd(data) {
        let script = document.querySelector('script[type="application/ld+json"][data-seo-schema]');
        if (!script) {
            script = document.createElement("script");
            script.type = "application/ld+json";
            script.setAttribute("data-seo-schema", "true");
            document.head.appendChild(script);
        }
        script.textContent = JSON.stringify(data);
    }

    function normalizeLinks() {
        document.querySelectorAll('a[href], [onclick*="profile.html"], [onclick*="athletes.html"]').forEach((element) => {
            if (element.href) {
                const href = element.getAttribute("href");
                if (href === "index.html" || href === "/index.html" || href === "#home") element.setAttribute("href", "/");
                if (href === "index.html#contact" || href === "/index.html#contact") element.setAttribute("href", "/#contact");
                if (href === "athletes.html" || href === "/athletes.html") element.setAttribute("href", "/athletes");
            }

            const onclick = element.getAttribute("onclick");
            if (!onclick) return;

            element.setAttribute(
                "onclick",
                onclick
                    .replace(/profile\.html\?id=/g, "/profile?id=")
                    .replace(/athletes\.html/g, "/athletes")
            );
        });
    }

    function normalizeBrowserUrl(path) {
        const clean = cleanPath(path);
        const nextUrl = clean + window.location.search + window.location.hash;
        if (window.location.pathname !== clean) {
            window.history.replaceState(null, "", nextUrl);
        }
        return clean;
    }

    function applySeo() {
        const path = normalizeBrowserUrl(window.location.pathname);
        const route = ROUTES[path] || ROUTES["/"];
        const canonicalUrl = SITE_ORIGIN + path;

        if (!document.title || /\.html/i.test(document.title) || document.title === "Athlete Profile") {
            document.title = route.title;
        }

        setMeta("description", route.description);
        setMeta("robots", "index, follow");
        setProperty("og:site_name", SITE_NAME);
        setProperty("og:title", document.title);
        setProperty("og:description", route.description);
        setProperty("og:type", path === "/" ? "website" : "article");
        setProperty("og:url", canonicalUrl);
        setProperty("og:image", "https://i.postimg.cc/jq4s9dLf/091.jpg");
        setMeta("twitter:card", "summary_large_image");
        setMeta("twitter:title", document.title);
        setMeta("twitter:description", route.description);
        setCanonical(canonicalUrl);
        setJsonLd({
            "@context": "https://schema.org",
            "@type": "SportsActivityLocation",
            "name": SITE_NAME,
            "url": SITE_ORIGIN + "/",
            "sport": "Judo",
            "description": DEFAULT_DESCRIPTION,
            "areaServed": ["Staten Island", "Brooklyn", "New York"],
            "sameAs": [
                "https://instagram.com/judosambocenter",
                "https://www.facebook.com/sambocenter",
                "https://www.tiktok.com/@judocenterny"
            ]
        });
    }

    applySeo();
    document.addEventListener("DOMContentLoaded", normalizeLinks);
})();
