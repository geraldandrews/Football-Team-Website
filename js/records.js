const search = document.getElementById('search');
const matchList = document.getElementById('match-list'); 

// Search records.json and filter it
const searchRecords = async searchText => {
    const res = await fetch('records.json');
    const records = await res.json();

// Get matches to current text input
let matches = records.filter(record => {
    const regex = new RegExp(`^${searchText}`, 'gi');
    return record.year.match(regex); //|| record.year.match(regex);
});

if (searchText.length === 0) {
    matches = [];
    matchList.innerHTML = '';
    noResults.innerHTML = '';
}

outputHtml(matches);
};

// Show results in HTML
const outputHtml = matches => {
    if (matches.length === 0) { 
        matchList.innerHTML = '<p>No results found.</p>'
    } else {                                                                         
        const html = matches.map(match =>
            `<div class="records">
                <div class="card">
                    <div class="year-header">
                       <h4>${match.year}</h4>
                       <h4>Record: ${match.record}</h4>
                    </div>
                </div>
                <table class="season-table">
                    <tr>
                        <th scope="col">Date</th>
                        <th scope="col">Opponent</th>
                        <th scope="col">Result</th>
                    </tr>
                    <tr>
                        <td>${match.one.date}</td>
                        <td>${match.one.opponent}</td>
                        <td>${match.one.result}</td>
                    </tr>
                    <tr>
                        <td>${match.two.date}</td>
                        <td>${match.two.opponent}</td>
                        <td>${match.two.result}</td>
                    </tr>
                    <tr>
                        <td>${match.three.date}</td>
                        <td>${match.three.opponent}</td>
                        <td>${match.three.result}</td>
                    </tr>
                    <tr>
                        <td>${match.four.date}</td>
                        <td>${match.four.opponent}</td>
                        <td>${match.four.result}</td>
                    </tr>
                    <tr>
                        <td>${match.five.date}</td>
                        <td>${match.five.opponent}</td>
                        <td>${match.five.result}</td>
                    </tr>
                    <tr>
                        <td>${match.six.date}</td>
                        <td>${match.six.opponent}</td>
                        <td>${match.six.result}</td>
                    </tr>
                    <tr>
                        <td>${match.seven.date}</td>
                        <td>${match.seven.opponent}</td>
                        <td>${match.seven.result}</td>
                    </tr>
                    <tr>
                        <td>${match.eight.date}</td>
                        <td>${match.eight.opponent}</td>
                        <td>${match.eight.result}</td>
                    </tr>
                    <tr>
                        <td>${match.nine.date}</td>
                        <td>${match.nine.opponent}</td>
                        <td>${match.nine.result}</td>
                    </tr>
                    <tr>
                        <td>${match.ten.date}</td>
                         <td>${match.ten.opponent}</td>
                        <td>${match.ten.result}</td>
                    </tr>
                    <tr>
                        <td>-</td>
                        <td>${match.playoff}</td>
                        <td>-</td>
                    </tr>
                    <tr>
                        <td>${match.eleven.date}</td>
                        <td>${match.eleven.opponent}</td>
                        <td>${match.eleven.result}</td>
                    </tr>
                    <tr>
                        <td>${match.twelve.date}</td>
                        <td>${match.twelve.opponent}</td>
                        <td>${match.twelve.result}</td>
                    </tr>
                    <tr>
                        <td>${match.thirteen.date}</td>
                        <td>${match.thirteen.opponent}</td>
                        <td>${match.thirteen.result}</td>
                    </tr>
                    <tr>
                        <td>${match.fourteen.date}</td>
                        <td>${match.fourteen.opponent}</td>
                        <td>${match.fourteen.result}</td>
                    </tr>
                    <tr>
                        <td>${match.fifteen.date}</td>
                        <td>${match.fifteen.opponent}</td>
                        <td>${match.fifteen.result}</td>
                    </tr>
                </table>
            </div>`
        )
        .join('');

        matchList.innerHTML = html;
    } 
};

search.addEventListener('input', () => searchRecords(search.value));
