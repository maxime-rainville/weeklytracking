"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tags = [
    'Epic', 'type/docs', 'type/ux', 'type/bug', 'type/enhancement', 'effort/easy', 'effort/medium', 'effort/hard',
    'impact/critical', 'impact/high', 'impact/medium', 'impact/low', 'rfc/draft', 'rfc/accepted'
];
exports.tagString = tags.map(tag => `-label:${tag}`).join(' ');
//# sourceMappingURL=tags.js.map