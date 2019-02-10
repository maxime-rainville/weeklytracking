"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const repos_1 = require("./repos");
const tags_1 = require("./tags");
const searchIssues_1 = require("./searchIssues");
const showIssueCount = (label) => {
    return (count) => {
        console.log(`${label}: ${count.toString()}`);
    };
};
searchIssues_1.searchIssues(`is:open is:pr -label:Epic ${repos_1.repoSearchString}`)
    .then(showIssueCount('Open PRs'));
searchIssues_1.searchIssues(`is:open is:issue ${tags_1.tagString} ${repos_1.repoSearchString}`)
    .then(showIssueCount('Untriaged issues'));
const now = new Date();
const oneWeekAgo = new Date();
oneWeekAgo.setDate(now.getDate() - 7);
const dateRegx = oneWeekAgo.toISOString().match(/^\d+-\d+-\d+/);
const dateStr = dateRegx.pop();
searchIssues_1.searchIssues(`closed:>${dateStr} is:issue label:"type/bug" ${repos_1.repoSearchString}`)
    .then(showIssueCount(`Bugs closed since ${dateStr}`));
searchIssues_1.searchIssues(`is:issue is:open ${repos_1.repoSearchString}`)
    .then(showIssueCount('All open issues'));
searchIssues_1.searchIssues(`is:issue is:open label:"type/bug" ${repos_1.repoSearchString}`)
    .then(showIssueCount('Open bugs'));
//# sourceMappingURL=index.js.map