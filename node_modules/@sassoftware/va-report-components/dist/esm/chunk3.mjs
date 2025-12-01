import { jsx as r } from "react/jsx-runtime";

import { useEffect as e, Suspense as s } from "react";

import { e as a, d as t, B as n } from "./chunk1.mjs";

import p from "classnames";

const o = () => {
    e((() => () => {
        a.publish(t);
    }), []);
    return null;
};

var c = "sas_components-ReportContentWrapper-ReportContentWrapper_wrapper";

var m = {
    wrapper: c
};

const i = e => {
    const a = n();
    return r("div", Object.assign({
        className: p(e.className, m.wrapper),
        dir: a,
        style: e.style
    }, {
        children: r(s, Object.assign({
            fallback: r(o, {})
        }, {
            children: e.children
        }))
    }));
};

export { i as R };
