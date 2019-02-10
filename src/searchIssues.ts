import request from "request-promise";


export const searchIssues = (q: string) => {
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

    return request(options).then(data => data['total_count']);
}
