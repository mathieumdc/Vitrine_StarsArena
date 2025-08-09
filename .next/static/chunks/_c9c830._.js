(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push(["static/chunks/_c9c830._.js", {

"[project]/app/provider.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, k: __turbopack_refresh__, m: module, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "ThemeProvider": (()=>ThemeProvider)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$themes$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next-themes/dist/index.mjs [app-client] (ecmascript)");
"use client";
;
;
function ThemeProvider({ children, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$themes$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ThemeProvider"], {
        ...props,
        children: children
    }, void 0, false, {
        fileName: "[project]/app/provider.tsx",
        lineNumber: 10,
        columnNumber: 10
    }, this);
}
_c = ThemeProvider;
var _c;
__turbopack_refresh__.register(_c, "ThemeProvider");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_refresh__.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/components/GlobalBackground.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, k: __turbopack_refresh__, m: module, z: __turbopack_require_stub__ } = __turbopack_context__;
{
// components/GlobalBackground.tsx
__turbopack_esm__({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_refresh__.signature();
"use client";
;
/** RNG déterministe à partir d’un seed */ function makeRng(seed) {
    let s = seed >>> 0;
    return ()=>{
        s = s * 1664525 + 1013904223 >>> 0;
        return s / 0xffffffff;
    };
}
/** seed crypto sûr côté client */ function cryptoSeed() {
    if ("object" === "undefined" || !window.crypto) return Math.floor(Math.random() * 2 ** 32);
    const arr = new Uint32Array(1);
    window.crypto.getRandomValues(arr);
    return arr[0];
}
const GlobalBackground = ({ mode = "reload", fixedSeed = 1337 })=>{
    _s();
    const [seed, setSeed] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    // Choix du seed selon le mode
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "GlobalBackground.useEffect": ()=>{
            if (mode === "fixed") {
                setSeed(fixedSeed);
                return;
            }
            if (mode === "session") {
                const key = "starsarena-bg-seed";
                const stored = ("TURBOPACK compile-time truthy", 1) ? sessionStorage.getItem(key) : ("TURBOPACK unreachable", undefined);
                if (stored) {
                    setSeed(parseInt(stored, 10));
                } else {
                    const s = cryptoSeed();
                    sessionStorage.setItem(key, String(s));
                    setSeed(s);
                }
            } else {
                // "reload" -> nouveau seed à chaque page load
                setSeed(cryptoSeed());
            }
        }
    }["GlobalBackground.useEffect"], [
        mode,
        fixedSeed
    ]);
    // Tant qu’on n’a pas de seed on ne rend rien pour éviter un flash
    if (seed === null) return null;
    const { blobs, bokehs } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "GlobalBackground.useMemo": ()=>{
            const rand = makeRng(seed);
            const blobs = Array.from({
                length: 12
            }).map({
                "GlobalBackground.useMemo.blobs": ()=>({
                        size: 200 + Math.floor(rand() * 200),
                        top: 5 + Math.floor(rand() * 90),
                        left: 5 + Math.floor(rand() * 90),
                        opacity: +(0.45 + rand() * 0.3).toFixed(2),
                        delay: +(rand() * 4).toFixed(2),
                        colorIdx: Math.floor(rand() * 6)
                    })
            }["GlobalBackground.useMemo.blobs"]);
            const bokehs = Array.from({
                length: 24
            }).map({
                "GlobalBackground.useMemo.bokehs": ()=>({
                        size: 8 + Math.floor(rand() * 12),
                        top: Math.floor(rand() * 100),
                        left: Math.floor(rand() * 100),
                        delay: +(rand() * 5).toFixed(2),
                        twinkle: 5 + Math.floor(rand() * 5),
                        drift: 12 + Math.floor(rand() * 8),
                        hue: Math.floor(260 + rand() * 70),
                        alpha: +(0.2 + rand() * 0.18).toFixed(2),
                        dx: Math.floor((rand() - 0.5) * 180),
                        dy: Math.floor((rand() - 0.5) * 180)
                    })
            }["GlobalBackground.useMemo.bokehs"]);
            return {
                blobs,
                bokehs
            };
        }
    }["GlobalBackground.useMemo"], [
        seed
    ]);
    const palette = [
        "rgba(138, 43, 226, OPACITY)",
        "rgba(186, 85, 211, OPACITY)",
        "rgba(153, 50, 204, OPACITY)",
        "rgba(255, 105, 180, OPACITY)",
        "rgba(147, 112, 219, OPACITY)",
        "rgba(72, 61, 139, OPACITY)"
    ];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute inset-0 -z-50 bg-gradient-to-br from-[#2a1155] via-[#180b36] to-[#3b0080]"
            }, void 0, false, {
                fileName: "[project]/components/GlobalBackground.tsx",
                lineNumber: 95,
                columnNumber: 7
            }, this),
            blobs.map((b, i)=>{
                const color = palette[b.colorIdx].replace("OPACITY", String(b.opacity));
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "absolute rounded-full pointer-events-none animate-blob blur-2xl md:blur-3xl",
                    style: {
                        width: b.size,
                        height: b.size,
                        top: `${b.top}%`,
                        left: `${b.left}%`,
                        backgroundColor: color,
                        animationDelay: `${b.delay}s`,
                        willChange: "transform, opacity",
                        mixBlendMode: "screen"
                    }
                }, `blob-${i}`, false, {
                    fileName: "[project]/components/GlobalBackground.tsx",
                    lineNumber: 101,
                    columnNumber: 11
                }, this);
            }),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute inset-0 pointer-events-none",
                style: {
                    backgroundImage: "linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)",
                    backgroundSize: "40px 40px",
                    maskImage: "radial-gradient(ellipse at 50% 20%, rgba(0,0,0,0.6), rgba(0,0,0,0.1) 60%, transparent)",
                    WebkitMaskImage: "radial-gradient(ellipse at 50% 20%, rgba(0,0,0,0.6), rgba(0,0,0,0.1) 60%, transparent)"
                }
            }, void 0, false, {
                fileName: "[project]/components/GlobalBackground.tsx",
                lineNumber: 119,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                className: "absolute inset-0 w-full h-full pointer-events-none",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("defs", {
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("pattern", {
                            id: "diag",
                            patternUnits: "userSpaceOnUse",
                            width: "40",
                            height: "40",
                            patternTransform: "rotate(45)",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                                x1: "0",
                                y1: "0",
                                x2: "0",
                                y2: "40",
                                stroke: "rgba(255,255,255,0.02)",
                                strokeWidth: "1"
                            }, void 0, false, {
                                fileName: "[project]/components/GlobalBackground.tsx",
                                lineNumber: 136,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/components/GlobalBackground.tsx",
                            lineNumber: 135,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/GlobalBackground.tsx",
                        lineNumber: 134,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                        width: "100%",
                        height: "100%",
                        fill: "url(#diag)"
                    }, void 0, false, {
                        fileName: "[project]/components/GlobalBackground.tsx",
                        lineNumber: 139,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/GlobalBackground.tsx",
                lineNumber: 133,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute inset-0 pointer-events-none",
                children: bokehs.map((k, i)=>{
                    const glow = `hsla(${k.hue}, 90%, 65%, ${k.alpha})`;
                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "absolute rounded-full animate-bokeh-twinkle animate-bokeh-drift",
                        style: {
                            width: k.size,
                            height: k.size,
                            left: `${k.left}%`,
                            top: `${k.top}%`,
                            backgroundColor: glow,
                            boxShadow: `0 0 ${Math.max(14, k.size * 2)}px ${Math.max(6, Math.floor(k.size / 2))}px ${glow}`,
                            animationDelay: `${k.delay}s`,
                            animationDuration: `${k.twinkle}s, ${k.drift}s`,
                            filter: "blur(2px)",
                            mixBlendMode: "screen",
                            willChange: "transform, opacity",
                            // variables CSS pour la dérive
                            // @ts-ignore
                            "--dx": `${k.dx}px`,
                            // @ts-ignore
                            "--dy": `${k.dy}px`
                        }
                    }, `bokeh-${i}`, false, {
                        fileName: "[project]/components/GlobalBackground.tsx",
                        lineNumber: 147,
                        columnNumber: 13
                    }, this);
                })
            }, void 0, false, {
                fileName: "[project]/components/GlobalBackground.tsx",
                lineNumber: 143,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true);
};
_s(GlobalBackground, "u1czN4ZO/j5gjoplT60PUtU/jFg=");
_c = GlobalBackground;
const __TURBOPACK__default__export__ = GlobalBackground;
var _c;
__turbopack_refresh__.register(_c, "GlobalBackground");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_refresh__.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/app/layout.tsx [app-rsc] (ecmascript, Next.js server component, client modules)": ((__turbopack_context__) => {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, t: __turbopack_require_real__ } = __turbopack_context__;
{
}}),
}]);

//# sourceMappingURL=_c9c830._.js.map