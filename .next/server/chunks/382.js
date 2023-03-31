"use strict";
exports.id = 382;
exports.ids = [382];
exports.modules = {

/***/ 7020:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "N": () => (/* binding */ getServerSideProps),
/* harmony export */   "Z": () => (/* binding */ Chakra)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2210);
/* harmony import */ var _lib_theme__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6655);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__, _lib_theme__WEBPACK_IMPORTED_MODULE_2__]);
([_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__, _lib_theme__WEBPACK_IMPORTED_MODULE_2__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);



function Chakra({ cookies , children  }) {
    const colorModeManager = typeof cookies === "string" ? (0,_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.cookieStorageManagerSSR)(cookies) : _chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.localStorageManager;
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.ChakraProvider, {
        theme: _lib_theme__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z,
        colorModeManager: colorModeManager,
        children: children
    });
}
async function getServerSideProps({ req  }) {
    return {
        props: {
            cookies: req.headers.cookie ?? ""
        }
    };
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 8598:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Et": () => (/* binding */ WorkGridItem),
/* harmony export */   "P4": () => (/* binding */ GridItem),
/* harmony export */   "Pg": () => (/* binding */ GridItemStyle)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5675);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2210);
/* harmony import */ var _emotion_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(2805);
/* harmony import */ var _emotion_react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_emotion_react__WEBPACK_IMPORTED_MODULE_4__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__]);
_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];





const GridItem = ({ children , href , title , thumbnail  })=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.Box, {
        w: "100%",
        textAlign: "center",
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.LinkBox, {
            cursor: "pointer",
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {
                    src: thumbnail,
                    alt: title,
                    className: "grid-item-thumbnail",
                    loading: "lazy"
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.LinkOverlay, {
                    href: href,
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.Text, {
                        mt: 2,
                        children: title
                    })
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.Text, {
                    fontSize: 14,
                    children: children
                })
            ]
        })
    });
const WorkGridItem = ({ children , id , title , thumbnail  })=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.Box, {
        w: "100%",
        textAlign: "center",
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.LinkBox, {
            as: (next_link__WEBPACK_IMPORTED_MODULE_1___default()),
            href: `/works/${id}`,
            scroll: false,
            cursor: "pointer",
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {
                    src: thumbnail,
                    alt: title,
                    className: "grid-item-thumbnail",
                    height: 120,
                    width: 300,
                    loading: "lazy"
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.LinkOverlay, {
                    as: "div",
                    href: `/works/${id}`,
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.Text, {
                        mt: 2,
                        fontSize: 20,
                        children: title
                    })
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.Text, {
                    fontSize: 14,
                    children: children
                })
            ]
        })
    });
const GridItemStyle = ()=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_emotion_react__WEBPACK_IMPORTED_MODULE_4__.Global, {
        styles: `
      .grid-item-thumbnail {
        border-radius: 12px;
      }
    `
    });

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 951:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6197);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(968);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _grid_item__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(8598);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([framer_motion__WEBPACK_IMPORTED_MODULE_1__, _grid_item__WEBPACK_IMPORTED_MODULE_3__]);
([framer_motion__WEBPACK_IMPORTED_MODULE_1__, _grid_item__WEBPACK_IMPORTED_MODULE_3__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);




const variants = {
    hidden: {
        opacity: 0,
        x: 0,
        y: 20
    },
    enter: {
        opacity: 1,
        x: 0,
        y: 0
    },
    exit: {
        opacity: 0,
        x: -0,
        y: 20
    }
};
const Layout = ({ children , title  })=>{
    const t = `${title} - Noah Lhote`;
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(framer_motion__WEBPACK_IMPORTED_MODULE_1__.motion.article, {
        initial: "hidden",
        animate: "enter",
        exit: "exit",
        variants: variants,
        transition: {
            duration: 0.4,
            type: "easeInOut"
        },
        style: {
            position: "relative",
            minHeight: "100vh"
        },
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
            children: [
                title && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((next_head__WEBPACK_IMPORTED_MODULE_2___default()), {
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("title", {
                            children: t
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                            name: "twitter:title",
                            content: t
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                            property: "og:title",
                            content: t
                        })
                    ]
                }),
                children,
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_grid_item__WEBPACK_IMPORTED_MODULE_3__/* .GridItemStyle */ .Pg, {})
            ]
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Layout);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 8081:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "wL": () => (/* reexport */ data_formations),
  "Ok": () => (/* reexport */ data_links),
  "xu": () => (/* reexport */ data_posts),
  "_B": () => (/* reexport */ data_works)
});

;// CONCATENATED MODULE: ./data/formations.js
const formations = [
    {
        title: "Web Developer OpenClassRooms",
        link: "https://www.openclassrooms.com/fr/paths/185-developpeur-web-junior",
        text: "I followed an online training course on OpenClassrooms where I acquired strong skills in web development, particularly in HTML, CSS, Sass, JavaScript, NodeJS, and ReactJS. I also learned to work with MongoDB databases and to optimize my websites for search engines thanks to in-depth knowledge of SEO and optimization. Through this training, I developed key skills in designing and developing websites, creating attractive user interfaces, and optimizing website performance. I am passionate about web development and constantly seeking new opportunities to improve my skills and stay up-to-date with the latest technologies and industry trends.",
        year: "2022",
        certification: "Rncp level 5 (Bac+2)"
    },
    {
        title: "Developpeur Full Stack - Ynov Campus",
        link: "https://www.ynov.com/campus/lyon/",
        text: "im acutally following a training course on Ynov Campus. ",
        year: "2023 - 2024",
        certification: "Rncp level 6 (Bac+3)"
    }
];
/* harmony default export */ const data_formations = (formations);

;// CONCATENATED MODULE: ./public/images/works/omf/omf-full.png
/* harmony default export */ const omf_full = ({"src":"/_next/static/media/omf-full.becb524a.png","height":720,"width":1280,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAFCAMAAABPT11nAAAAKlBMVEX5+fnv7u/+/v7k4uTz9fXFxcaXk5Dl8e7q2enw5fO6sq+pm4jFxMbXz8Z5/ZNWAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAAKklEQVR4nBXGyREAIAwDsbUTwt1/uwx6CUVEDAkkaQK2SWzaXQdIatdPfwoJAIlcrs99AAAAAElFTkSuQmCC","blurWidth":8,"blurHeight":5});
;// CONCATENATED MODULE: ./public/images/works/omf/omf-phone_item.png
/* harmony default export */ const omf_phone_item = ({"src":"/_next/static/media/omf-phone_item.07b4c9fa.png","height":844,"width":390,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAAICAMAAADp7a43AAAALVBMVEXx8vHo7evd3N3m5ubjw+jv3+5rZ2f29vaLh4LNzs+ZlpKXkIuei3jd7OdbV1IaiGewAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAAJ0lEQVR4nAXBhwEAIAjAsLLB9f+5Jqx9Htmd6IwilGDKxYTCIgB3Pg/hAJ15eLpuAAAAAElFTkSuQmCC","blurWidth":4,"blurHeight":8});
;// CONCATENATED MODULE: ./public/images/works/pierrette-essentielle/pierrette-full.png
/* harmony default export */ const pierrette_full = ({"src":"/_next/static/media/pierrette-full.a0e619eb.png","height":720,"width":1280,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAFCAMAAABPT11nAAAAG1BMVEX////4+Pn7+/zo6PCKgHSxr6nR0M61tbLy8vmFTM5cAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAAJ0lEQVR4nGNgYmRiZGIAAWZmZg4wi5GRiZERxGBiZWGByLGxsgMpAAWsAEXh6wpmAAAAAElFTkSuQmCC","blurWidth":8,"blurHeight":5});
;// CONCATENATED MODULE: ./public/images/works/pierrette-essentielle/pierrette-full_about.png
/* harmony default export */ const pierrette_full_about = ({"src":"/_next/static/media/pierrette-full_about.eeefe7ba.png","height":720,"width":1280,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAFCAMAAABPT11nAAAAElBMVEX+/v739/jr7O6Gd2jIv7XS0czKahuYAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAAI0lEQVR4nGNgZGSAAEYmJkYWFhCLiZGRmRksxMDAygqVBgEAA7AAJpKFW04AAAAASUVORK5CYII=","blurWidth":8,"blurHeight":5});
;// CONCATENATED MODULE: ./public/images/works/pierrette-essentielle/pierrette-phone_item.png
/* harmony default export */ const pierrette_phone_item = ({"src":"/_next/static/media/pierrette-phone_item.79309fd7.png","height":1888,"width":390,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAIAAAAICAMAAADk895wAAAAHlBMVEXr7u/q7Ozh4uTy8/PW2NzOwqjZzbaTj3qLiXX39/c2bn/uAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAHElEQVR4nGPgYGdgZWNgYWFgYmJgZAYjBgYGTgADTgA56Z2z/wAAAABJRU5ErkJggg==","blurWidth":2,"blurHeight":8});
;// CONCATENATED MODULE: ./public/images/works/pierrette-essentielle/pierrette-phone-contact.png
/* harmony default export */ const pierrette_phone_contact = ({"src":"/_next/static/media/pierrette-phone-contact.2544423a.png","height":1041,"width":390,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAMAAAAICAMAAAALMbVOAAAAElBMVEX7+/ydwuaUu+bw8PHr8ffm6/NK6yd9AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAF0lEQVR4nGNgZmaAAyYmRghmhGBWFhYAAdYAJkRut8wAAAAASUVORK5CYII=","blurWidth":3,"blurHeight":8});
;// CONCATENATED MODULE: ./public/images/works/hottakes/rest.png
/* harmony default export */ const rest = ({"src":"/_next/static/media/rest.0dab975f.png","height":720,"width":1280,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAFCAMAAABPT11nAAAAFVBMVEXn9P7i8PzO5fnl6/DV6fq82vTk3tgngpNtAAAACXBIWXMAABcRAAAXEQHKJvM/AAAAJUlEQVR4nGNggAFGRmYQwcjAwMzGxMTMysLAxMLMxMLAxAhXAgAETwA0O02kfwAAAABJRU5ErkJggg==","blurWidth":8,"blurHeight":5});
;// CONCATENATED MODULE: ./public/images/works/kasa/kasa-phone_home.png
/* harmony default export */ const kasa_phone_home = ({"src":"/_next/static/media/kasa-phone_home.21ecbbd6.png","height":8239,"width":390,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAAICAMAAAAPxGVzAAAAElBMVEWgmZTKxMHa09CspaGxq6fWybv+dp6JAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAFUlEQVR4nGNgYWBkYGJgZWBkAAFmAACmABG+Ij/cAAAAAElFTkSuQmCC","blurWidth":1,"blurHeight":8});
;// CONCATENATED MODULE: ./public/images/works/kasa/kasa-phone_item.png
/* harmony default export */ const kasa_phone_item = ({"src":"/_next/static/media/kasa-phone_item.feeac42a.png","height":1109,"width":390,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAMAAAAICAMAAAALMbVOAAAAKlBMVEX81dX14+MEBAQ2OTnv2Nbp6utFSEni2de0qaKpnJrg3t7j4N/6zMz7/v5PnnG6AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAJElEQVR4nGPg5mJl4ORgZ2Bh5GUAAx4GBkYWRgZmNmYGJiYmAAhfAGnokCb4AAAAAElFTkSuQmCC","blurWidth":3,"blurHeight":8});
;// CONCATENATED MODULE: ./public/images/works/kasa/kasa-full_about.png
/* harmony default export */ const kasa_full_about = ({"src":"/_next/static/media/kasa-full_about.51723553.png","height":1003,"width":390,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAMAAAAICAMAAAALMbVOAAAALVBMVEX929v95eUEBAT38/JZYWGUm6f8mJj9r69pfYqJkqb7zs6gq7BjbGx+fY/8q6vtfOxiAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAJUlEQVR4nAXBiQEAIAgDsWsBf91/XBMUwR5F3QkLensIkSex/QEIcwB8+n9Q/QAAAABJRU5ErkJggg==","blurWidth":3,"blurHeight":8});
;// CONCATENATED MODULE: ./public/images/works/kasa/kasa-full_item.png
/* harmony default export */ const kasa_full_item = ({"src":"/_next/static/media/kasa-full_item.45dde895.png","height":720,"width":1280,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAFCAMAAABPT11nAAAAKlBMVEX////08vD49PP56OjSxrbe1sbGuqz9+fj/39760M384+Pp6uJ8f09yb0h0SYcnAAAACXBIWXMAAA7CAAAOwgEVKEqAAAAAK0lEQVR4nBXGtxEAIBAEsb232P7bZVAkLLckQOdWlKCjMuNnjjWmQS93N3gPsACyOdIecQAAAABJRU5ErkJggg==","blurWidth":8,"blurHeight":5});
;// CONCATENATED MODULE: ./public/images/works/lapanthere/lapanthere_full.png
/* harmony default export */ const lapanthere_full = ({"src":"/_next/static/media/lapanthere_full.c252f87c.png","height":720,"width":1280,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAFCAMAAABPT11nAAAANlBMVEXFwb74+fudiX69t7N5YFe7sayMiovKx8f////7/PyAfHzU0M2IhYR8amR0W0tnXl/DureTh4ODz6nZAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAALklEQVR4nAXBhwEAIAgDsCKjgPP/a03gD5zUCbMbEWegba9ee4DPXQEipaok8wMavQEiXKN6nwAAAABJRU5ErkJggg==","blurWidth":8,"blurHeight":5});
;// CONCATENATED MODULE: ./public/images/works/lapanthere/lapanthere_phone.png
/* harmony default export */ const lapanthere_phone = ({"src":"/_next/static/media/lapanthere_phone.62859896.png","height":6157,"width":390,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAAICAMAAAAPxGVzAAAAFVBMVEXm4uPTqoKYnZ7Mt7GajX+yqKWrlGHlzUG8AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAGElEQVR4nGNgYGBkYGNgYWBgYGZgZWACAACjABZhQ0d4AAAAAElFTkSuQmCC","blurWidth":1,"blurHeight":8});
;// CONCATENATED MODULE: ./public/images/works/booki/booki_full.png
/* harmony default export */ const booki_full = ({"src":"/_next/static/media/booki_full.41e3132b.png","height":720,"width":1280,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAFCAMAAABPT11nAAAAG1BMVEX8/P329/fu8PLe3dzn5ePCxbvO3fXOzcrd6PkxN50bAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAAJ0lEQVR4nB3GQRKAIBDAsLaL4v9f7EBOoVIA34+bRE8f9zTBtHLJDwXKAEcCqfEoAAAAAElFTkSuQmCC","blurWidth":8,"blurHeight":5});
;// CONCATENATED MODULE: ./public/images/works/booki/booki_phone.png
/* harmony default export */ const booki_phone = ({"src":"/_next/static/media/booki_phone.2f35f796.png","height":5116,"width":390,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAAICAMAAAAPxGVzAAAAD1BMVEXk5OXa2tq3u8HFwsHFyMivPeskAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAFUlEQVR4nGNgYGBkYGRgYQABZgYmAABXAAzl0HC7AAAAAElFTkSuQmCC","blurWidth":1,"blurHeight":8});
;// CONCATENATED MODULE: ./public/images/works/kanap/kanap_full.png
/* harmony default export */ const kanap_full = ({"src":"/_next/static/media/kanap_full.fd0fbdf7.png","height":720,"width":1280,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAFCAMAAABPT11nAAAANlBMVEXD4PRmbXaBjJU7SVB5eXuLioyhn6OSkJN7f4RLV2AYQz2tra62sq5lenXAvLmzsq9ibHEJJDH6AGu+AAAACXBIWXMAAA7DAAAOwwHHb6hkAAAAK0lEQVR4nDXBSQIAEAwDwKCV1O7/n3UyA3zH6GPtiRum2tUQSVlkQdDJSnsUfQEBBoCJywAAAABJRU5ErkJggg==","blurWidth":8,"blurHeight":5});
;// CONCATENATED MODULE: ./public/images/works/kanap/kanap_phone.png
/* harmony default export */ const kanap_phone = ({"src":"/_next/static/media/kanap_phone.a8e21155.png","height":4935,"width":390,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAAICAMAAAAPxGVzAAAAD1BMVEVOf6FSg6pWgJ+CiZFFdpokqYhHAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAGElEQVR4nGNgZmBiYGBgZGBgYGFgYmAEAAB7AA7owbEUAAAAAElFTkSuQmCC","blurWidth":1,"blurHeight":8});
;// CONCATENATED MODULE: ./data/works.js

















const works = [
    {
        id: "pierrette-essentielle",
        title: "Pierrette Essentielle",
        link: "https://www.pierrette-essentielle.com/",
        description: `Développeur Full Stack pour un site de commerce électronique chez Pierrette Essentielle (Freelance). Création d'un site de commerce électronique, développement d'une API sécurisée à l'aide de Nodejs et d'express pour la gestion des produits et des commandes, et développement du site web client en utilisant React, TailwindCss, Stripe.`,
        year: "2023",
        thumbnail: pierrette_full,
        imgs: [
            pierrette_full,
            pierrette_full_about,
            pierrette_phone_item,
            pierrette_phone_contact
        ],
        stack: [
            "React",
            "NodeJS",
            "Express",
            "MongoDB",
            "Stripe"
        ]
    },
    {
        id: "hot-takes",
        title: "HotTakes",
        link: "https://github.com/chifouu65",
        description: `Développement d'une API sécurisée pour une application de critique gastronomique en utilisant Nodejs, Express, JsonWebToken, Bcrypt et MongoDB.`,
        year: "2022",
        thumbnail: rest,
        imgs: [
            rest
        ],
        stack: [
            "JavaScript"
        ]
    },
    {
        id: "kasa",
        title: `Kasa`,
        link: `https://github.com/chifouu65/P7_OC`,
        description: `Développement d'une maquette pour une agence immobilière à l'aide de React et Sass.`,
        year: "2022",
        thumbnail: kasa_full_item,
        imgs: [
            kasa_phone_home,
            kasa_phone_item,
            kasa_full_about,
            kasa_full_item
        ],
        stack: [
            "React",
            "Sass"
        ]
    },
    {
        id: "la-panthere",
        title: `La Panthère`,
        link: `https://github.com/chifouu65/Projt_4_SEO_NL`,
        description: `J'ai optimisé un site web existant pour améliorer son référencement et sa performance. J'ai identifié les parties qui n'étaient pas optimisées pour le référencement et/ou n'étaient pas à jour en termes d'accessibilité, et j'ai fourni une liste de recommandations pour améliorer le site en mettant l'accent sur l'impact sur la vitesse de chargement de la page. J'ai ensuite optimisé le contenu et le code source du site en appliquant ces recommandations et j'ai comparé les résultats de performance avant et après l'optimisation.`,
        year: "2022",
        thumbnail: lapanthere_full,
        imgs: [
            lapanthere_full,
            lapanthere_phone
        ],
        stack: [
            "React",
            "Sass"
        ]
    },
    {
        id: "booki",
        title: `Booki`,
        link: "https://github.com/chifouu65/p2_OC_NL/tree/int\xe9gration-web",
        description: `Création d'une maquette pour une agence immobilière à l'aide de HTML, CSS, Sass et JavaScript.`,
        year: "2022",
        thumbnail: booki_full,
        imgs: [
            booki_full,
            booki_phone
        ],
        stack: [
            "React",
            "Sass"
        ]
    },
    {
        id: "ohmyfood",
        title: `OhMyFood`,
        link: "https://github.com/chifouu65/p3_OC_NL",
        description: `Création d'une maquette pour un site web de restaurant en utilisant HTML, CSS et JavaScript.`,
        year: "2022",
        thumbnail: omf_full,
        imgs: [
            omf_full,
            omf_phone_item
        ],
        stack: [
            "React",
            "Sass"
        ]
    },
    {
        id: "kanap",
        title: `Kanap`,
        link: "https://github.com/chifouu65/P5-Dev-Web-Kanap",
        description: `Création d'une maquette pour un site web de meubles en utilisant HTML, CSS, Sass et JavaScript.`,
        year: "2022",
        thumbnail: kanap_full,
        imgs: [
            kanap_full,
            kanap_phone
        ],
        stack: [
            "React",
            "Sass"
        ]
    }
];
/* harmony default export */ const data_works = (works);

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react-icons/io5"
var io5_ = __webpack_require__(9989);
;// CONCATENATED MODULE: ./data/links.js


const links = [
    {
        title: "Gthub",
        link: "https://github.com/chifouu65",
        icon: /*#__PURE__*/ jsx_runtime_.jsx(io5_.IoLogoGithub, {})
    }
];
/* harmony default export */ const data_links = (links);

;// CONCATENATED MODULE: ./public/images/posts/1651013899dMCV5xKEWj.jpeg
/* harmony default export */ const _1651013899dMCV5xKEWj = ({"src":"/_next/static/media/1651013899dMCV5xKEWj.1e1df74f.jpeg","height":505,"width":960,"blurDataURL":"data:image/jpeg;base64,/9j/2wBDAAoHBwgHBgoICAgLCgoLDhgQDg0NDh0VFhEYIx8lJCIfIiEmKzcvJik0KSEiMEExNDk7Pj4+JS5ESUM8SDc9Pjv/2wBDAQoLCw4NDhwQEBw7KCIoOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozv/wAARCAAEAAgDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAX/xAAbEAADAAIDAAAAAAAAAAAAAAAAAQIFERMhYf/EABQBAQAAAAAAAAAAAAAAAAAAAAb/xAAYEQEBAAMAAAAAAAAAAAAAAAABAAMRMf/aAAwDAQACEQMRAD8Au3SrGtccLUrtL1AAFnJhiXbf/9k=","blurWidth":8,"blurHeight":4});
;// CONCATENATED MODULE: ./data/posts.js

const posts = [
    {
        id: "quels-sont-les-meilleurs-frameworks-front-end-javascript",
        title: "Quels sont les meilleurs frameworks Front-end JavaScript ?",
        date: "2021-08-30",
        description: [
            `Les frameworks Front-end JavaScript sont des outils essentiels pour les développeurs web qui cherchent à créer des interfaces utilisateur modernes, interactives et réactives. Avec un grand nombre de frameworks disponibles, il peut être difficile de choisir celui qui convient le mieux à votre projet.`,
            `$$Pourquoi est-il important de choisir le bon framework Front-end ?`,
            `
            Le choix du framework Front-end peut avoir un impact significatif sur la qualité, la stabilité et les performances de votre application web. Il peut également affecter la productivité de votre équipe de développement et le temps de mise sur le marché de votre produit.`,
            `Cet article a pour objectif de présenter les meilleurs frameworks Front-end JavaScript disponibles sur le marché, de discuter de leurs avantages et inconvénients, et de fournir des conseils pratiques pour choisir le meilleur framework pour votre projet.`,
            `$$Qu'est-ce qu'un framework Front-end ?`,
            `
            Un framework Front-end est un ensemble d'outils, de bibliothèques et de conventions de codage qui facilitent la création d'interfaces utilisateur interactives et réactives pour les applications web.`,
            `$$Pourquoi utiliser un framework Front-end ?`,
            `
            Les frameworks Front-end offrent de nombreux avantages, notamment:
            
            
            Réduction du temps de développement
            
            Amélioration de la qualité et de la stabilité de l'application
            
            Réduction des coûts de maintenance
            
            Amélioration des performances de l'application
            `,
            `$$Exemples de frameworks Front-end JavaScript populaires`,
            `
            Les frameworks Front-end JavaScript les plus populaires sont React, Angular, et Vue.js.`,
            `Les meilleurs frameworks Front-end JavaScript`,
            `$$React`,
            `Présentation de React
            `,
            `React est un framework Front-end JavaScript créé par Facebook. Il est utilisé par de nombreuses grandes entreprises, telles que Netflix, Airbnb et Dropbox.
            
            Avantages et inconvénients de React
            Les avantages de React sont:
            
            
            
            Facilité d'utilisation
            
            Haute performance
            
            Grande communauté de développeurs
            Les inconvénients de React sont:
            
            Courbe d'apprentissage abrupte
            
            Nécessite une connaissance approfondie de JavaScript
            
            
            
            Cas d'utilisation de React
            React convient particulièrement aux projets nécessitant une grande interactivité et une grande réactivité, tels que les applications à page unique (SPA), les applications mobiles et les jeux en ligne.`,
            `$$Angular`,
            `Présentation d'Angular
            `,
            `Angular est un framework Front-end JavaScript créé par Google. Il est utilisé par de grandes entreprises telles que Microsoft, IBM et Deutsche Bank.
            
            Avantages et inconvénients d'Angular
            Les avantages d'Angular sont:
            
            
            
            Grande polyvalence
            
            Large gamme de fonctionnalités
            
            Grande communauté de développeurs
            Les inconvénients d'Angular sont:
            
            Courbe d'apprentissage abrupte
            
            Performance légèrement inférieure à celle de React
            
            
            
            Cas d'utilisation d'Angular
            Angular est particulièrement adapté aux projets de grande envergure nécessitant une structure solide et une organisation claire du code.
            
            `,
            `$$Vue.js`,
            `Présentation de Vue.js
            `,
            `Vue.js est un framework Front-end JavaScript créé par Evan You. Il est utilisé par des entreprises telles que Alibaba, Xiaomi et GitLab.
            
            Avantages et inconvénients de Vue.js
            Les avantages de Vue.js sont:
            
            
            
            Facilité d'utilisation
            
            Grande flexibilité
            
            Performance solide
            Les inconvénients de Vue.js sont:
            
            Communauté de développeurs plus petite que celles de React et Angular
            
            Moins de ressources et de documentation disponibles que pour React et Angular
            
            
            
            Cas d'utilisation de Vue.js
            `,
            `Vue.js est particulièrement adapté aux projets de petite et moyenne envergure, ainsi qu'aux projets nécessitant une grande flexibilité et une facilité d'intégration avec d'autres frameworks.
            `,
            `Autres frameworks Front-end JavaScript à considérer`,
            `A. Ember.js
            Ember.js est un framework Front-end JavaScript complet et robuste, conçu pour les applications web complexes.
            
            
            `,
            `$$B. Backbone.js`,
            `
            Backbone.js est un framework Front-end JavaScript léger et facile à utiliser, conçu pour les projets de petite et moyenne envergure.
            
            
            `,
            `$$C. Meteor`,
            `
            Meteor est un framework Front-end JavaScript complet qui prend en charge le développement complet de l'application, de la base de données au Front-end.`,
            `V. Comment choisir le meilleur framework Front-end pour votre projet ? 
            `,
            `A. Évaluez les besoins de votre projet`,
            `
               1. Quels sont les fonctionnalités nécessaires pour votre application ?`,
            `
               2. Quelle est la taille de votre application ?`,
            `
               3. Quel est le niveau de complexité de votre application ?`,
            `
            `,
            `B. Considérez la taille et la complexité de votre projet`,
            `
               1. Quel est le niveau de compétences de votre équipe de développement ?`,
            `
               2. Quelle est la taille de votre équipe de développement ?`,
            `
               3. Quelle est la durée de votre projet ?`,
            `
            `,
            `C. Évaluez les compétences de votre équipe de développement`,
            `
               1. Quelle est la connaissance de votre équipe de développement des différents frameworks Front-end ?`,
            `
               2. Est-ce que votre équipe de développement a l'expérience de travailler avec un framework Front-end en particulier ?`,
            `
            `,
            `D. Comparez les avantages et les inconvénients des différents frameworks`,
            `
               1. Quels sont les avantages et les inconvénients de chaque framework ?`,
            `
               2. Comment chaque framework répond-il à vos besoins spécifiques ?`,
            `
               3. Quel est le niveau de support et de documentation de chaque framework ?`
        ],
        tags: [
            "javascript",
            "front-end",
            "framework",
            "react",
            "angular",
            "vue.js",
            "ember.js",
            "backbone.js",
            "meteor"
        ],
        images: [
            {
                src: _1651013899dMCV5xKEWj,
                alt: "Next.js and TailwindCSS",
                width: 1200,
                height: 630
            }
        ]
    }
];
/* harmony default export */ const data_posts = (posts);

;// CONCATENATED MODULE: ./data/index.js







/***/ })

};
;