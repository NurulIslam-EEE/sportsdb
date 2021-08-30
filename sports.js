const loadData = () => {
    document.getElementById('input-btn').addEventListener('click', () => {
        const inputText = document.getElementById('input-text');
        const inputValue=inputText.value;
        
        document.getElementById('spinner').classList.remove('d-none');
        fetch(`https://www.thesportsdb.com/api/v1/json/1/searchteams.php?t=${inputValue}`)
        .then(res => res.json())
        .then(data => displayData(data.teams))
    })

  
}
loadData()

const displayData = teams => {
    const parent = document.getElementById('team');
    // console.log(teams)
    teams.forEach(team => {

        const div = document.createElement('div');
        div.innerHTML = `
    <img class="img" src="${team.strTeamBadge}" alt="">
    <p class="img" >${team.strDescriptionEN.slice(0,100)}</p>
    `;

        parent.appendChild(div);
        document.getElementById('spinner').classList.add('d-none');
        // console.log(div)
    });

}