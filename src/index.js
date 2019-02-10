"use strict";
exports.__esModule = true;
var repos_1 = require("./repos");
var searchIssues_1 = require("./searchIssues");
// const gitHub = new GitHubApi({ userAgent: "My Client/1.0.0" });
// gitHub.searchIssuesAsync(`is:open is:pr -label:Epic ${repoSearchString}`).then((data) => {
//     console.log('open PRs: ' + data.length);
// });
//
// gitHub.searchIssuesAsync(`is:open is:issue ${tagString} ${repoSearchString}`).then((data) => {
//     console.log('untriage issues: ' + data.length);
// });
var now = new Date();
var oneWeekAgo = new Date();
oneWeekAgo.setDate(now.getDate() - 7);
var dateRegx = oneWeekAgo.toISOString().match(/^\d+-\d+-\d+/);
if (dateRegx) {
    var dateStr = dateRegx.pop();
    searchIssues_1.searchIssues("closed:>" + dateStr + " is:issue label:type/bug " + repos_1.repoSearchString);
}
// gitHub.searchIssuesAsync(`is:issue is:open label:type/bug ${tagString} ${repoSearchString}`).then((data) => {
//     console.log('Open bugs: ' + data.length);
// });
