import { useState as e, useEffect as r } from "react";

import { u as t, p as n, R as i, P as o, O as a, q as s, r as c, T as p, L as u, t as m, v as l } from "./chunk1.mjs";

import { R as h } from "./chunk3.mjs";

import { jsx as d } from "react/jsx-runtime";

import "polished";

import "react-i18next";

import "i18next";

import "react-dom/client";

import "tslib";

import "rxjs";

import "rxjs/operators";

import "react-dom";

import "react-focus-lock";

import "classnames";

import "framer-motion";

import "handlebars";

import "zod";

import "axios";

import "reselect";

import "@popperjs/core";

import "react-popper";

import "./i18n/nova_i18n.mjs";

import "memoize-one";

import "cldr-core/supplemental/weekData.json";

import "use-memo-one";

import "@tanstack/react-query";

import "react-cropper";

import "redux-observable";

import "redux";

import "@redux-devtools/extension";

import "react-redux";

const f = ({message: e}) => d(o, {
    style: {
        display: "flex",
        flexShrink: 1,
        height: "100%",
        justifyContent: "center",
        alignItems: "center"
    },
    children: d(a, {
        text: e,
        mode: "error"
    })
});

const g = n => {
    const [i, o] = e();
    const [a, m] = e();
    const [g] = s();
    const y = t();
    r((() => c(n.url, n.authenticationType).subscribe((e => {
        if (e.error) {
            m(e.error);
            return;
        }
        if (e.status !== "initalizing") {
            o(e.status === "authorized");
        }
        m(undefined);
    }))), [ n.url, n.authenticationType ]);
    let T = n.children;
    if (a) {
        T = d(p, {
            currentTheme: g,
            children: d(f, {
                message: a
            })
        });
    } else if (i === undefined) {
        T = d(p, {
            currentTheme: g,
            children: d(l, {})
        });
    } else if (i === false) {
        T = d(p, {
            currentTheme: g,
            children: d(u, {
                url: n.url,
                authenticationType: n.authenticationType
            })
        });
    }
    return d(h, {
        className: y,
        children: T
    });
};

const y = r => {
    const [o, a] = e();
    const s = t();
    if (o || "packageUri" in r) {
        return d(h, {
            className: s,
            children: d(f, {
                message: o || n["SASReport.genericError.msg"]()
            })
        });
    } else {
        return d(g, {
            url: r.url,
            authenticationType: r.authenticationType,
            children: d(i, {
                mobileView: true,
                reportUri: r.reportUri,
                host: r.url,
                authenticationType: r.authenticationType,
                onError: e => a(e || n["SASReport.genericError.msg"]())
            })
        });
    }
};

const T = r => {
    const [o, a] = e();
    const s = t();
    if (o || "packageUri" in r) {
        return d(h, {
            className: s,
            children: d(f, {
                message: o || n["SASReport.genericError.msg"]()
            })
        });
    } else {
        return d(g, {
            url: r.url,
            authenticationType: r.authenticationType,
            children: d(i, {
                mobileView: true,
                reportUri: r.reportUri,
                host: r.url,
                authenticationType: r.authenticationType,
                objectName: r.objectName || "",
                onError: e => a(e || n["SASReport.genericError.msg"]())
            })
        });
    }
};

async function x(e, r, t, n) {
    const i = {};
    i.headers = {};
    if (n) {
        i.headers.Authorization = n;
        i.credentials = "omit";
    }
    const o = await fetch(`${e}${r}/content/elements`, i);
    const a = await o.json();
    const s = a?.items?.filter((e => e?.type === "Section"))?.findIndex((e => e?.name === t));
    if (s === undefined || s === -1) {
        throw new Error(`Unable to find Section with name ${t}`);
    }
    return s;
}

const S = t => {
    const [n, o] = e("pageIndex" in t ? t.pageIndex : undefined);
    const a = "pageName" in t ? t.pageName : undefined;
    r((() => {
        if (!a) {
            return;
        }
        let e = false;
        t.authenticationType === "guest" ? m(t.url).then((r => {
            if (e) {
                return;
            }
            x(t.url, t.reportUri, a, r).then((r => {
                if (e) {
                    return;
                }
                o(r);
            }));
        })) : x(t.url, t.reportUri, a).then((r => {
            if (e) {
                return;
            }
            o(r);
        }));
        return () => {
            e = true;
        };
    }), [ a, t.url, t.reportUri, t.authenticationType ]);
    if (n === undefined) {
        return d(l, {});
    } else {
        return d(i, {
            mobileView: true,
            reportUri: t.reportUri,
            host: t.url,
            authenticationType: t.authenticationType,
            sectionIndex: n,
            onError: t.onError
        });
    }
};

const U = r => {
    const [i, o] = e();
    const a = t();
    if (i || "packageUri" in r) {
        return d(h, {
            className: a,
            children: d(f, {
                message: i || n["SASReport.genericError.msg"]()
            })
        });
    } else {
        return d(g, {
            url: r.url,
            authenticationType: r.authenticationType,
            children: d(S, {
                ...r,
                onError: e => o(e || n["SASReport.genericError.msg"]())
            })
        });
    }
};

export { y as SASReport, T as SASReportObject, U as SASReportPage };
