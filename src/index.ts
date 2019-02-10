import { repoSearchString } from './repos';
import { tagString} from "./tags";
import { searchIssues } from './searchIssues';

const showIssueCount = (label: string) => {
    return (count: number): void => {
        console.log(`${label}: ${count.toString()}`);
    }
}


searchIssues(`is:open is:pr -label:Epic ${repoSearchString}`)
    .then(showIssueCount('Open PRs'));

searchIssues(`is:open is:issue ${tagString} ${repoSearchString}`)
    .then(showIssueCount('Untriaged issues'));


const now = new Date();
const oneWeekAgo = new Date();
oneWeekAgo.setDate(now.getDate() - 7);
const dateRegx = oneWeekAgo.toISOString().match(/^\d+-\d+-\d+/) as string[];
const dateStr = dateRegx.pop();
searchIssues(`closed:>${dateStr} is:issue label:"type/bug" ${repoSearchString}`)
    .then(showIssueCount(`Bugs closed since ${dateStr}`));


searchIssues(`is:issue is:open ${repoSearchString}`)
    .then(showIssueCount('All open issues'));

searchIssues(`is:issue is:open label:"type/bug" ${repoSearchString}`)
    .then(showIssueCount('Open bugs'));