// Loads runtime dependencies (needed at init-time)
// of amber-attic/IDE.
define([
    "amber-attic/IDE",
    "codemirror/lib/codemirror",
    "codemirror/mode/smalltalk/smalltalk",
    "codemirror/addon/hint/show-hint",
    "css!codemirror/theme/ambiance",
    "css!codemirror/lib/codemirror",
    "css!codemirror/addon/hint/show-hint",
    "jquery-ui",
    "css!./resources/amber"
], function (x) {
    return x;
});
