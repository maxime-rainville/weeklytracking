"use strict";
exports.__esModule = true;
var request_promise_1 = require("request-promise");
exports.searchIssues = function (q) {
    request_promise_1["default"]('https://api.github.com/search/issues?q=' + encodeURIComponent(q)).then(console.dir);
};
