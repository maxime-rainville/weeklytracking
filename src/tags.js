"use strict";
exports.__esModule = true;
var tags = [
    'Epic', 'type/docs', 'type/ux', 'type/bug', 'type/enhancement', 'effort/easy', 'effort/medium', 'effort/hard',
    'impact/critical', 'impact/high', 'impact/medium', 'impact/low', 'rfc/draft', 'rfc/accepted'
];
exports.tagString = tags.map(function (tag) { return "-label:" + tag; }).join(' ');
