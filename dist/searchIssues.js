"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const request_promise_1 = __importDefault(require("request-promise"));
exports.searchIssues = (q) => {
    const options = {
        uri: 'https://api.github.com/search/issues',
        qs: {
            q,
            per_page: 1
        },
        headers: {
            'User-Agent': 'Request-Promise'
        },
        json: true
    };
    return request_promise_1.default(options).then(data => data['total_count']);
};
//# sourceMappingURL=searchIssues.js.map