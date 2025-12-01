import { y as r, z as t, M as o } from "./chunk1.mjs";

import { jsx as e } from "react/jsx-runtime";

import "react";

import "react-dom/client";

import "tslib";

import "rxjs";

import "rxjs/operators";

import "i18next";

import "react-i18next";

import "react-dom";

import "react-focus-lock";

import "classnames";

import "framer-motion";

import "handlebars";

import "zod";

import "polished";

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

const i = i => {
    const p = r("Settings");
    const {CLOSE: m} = t();
    return e(o, {
        type: "error",
        isOpen: true,
        title: p("settings.invertApplicationColorsError.dialog.title"),
        text: p("settings.invertApplicationColorsError.error.msg"),
        dismissAction: {
            text: m,
            onPress: () => i.onClose(),
            isDefault: true
        }
    });
};

export { i as default };
