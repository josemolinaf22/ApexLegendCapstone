
// const choicesDiv = document.querySelector('#choices')
const seeLegends = document.querySelector('#see-all')
const allLegendsDiv = document.querySelector('#all-legends')
const favLegendsDiv /* choicesDiv*/ = document.querySelector('#favLegends')

let choices = []
let favLegends = []

// VV Controller <VV i think 
const makeLegendChoiceCard = (legend) => {
    return `
    <div class="character-container">
    <img src='${legend.imgAddress}' alt='${legend.name}' onclick='putLegendBack(${legend.id})'/>
    <h3>${legend.name}</h3>
    <p>${legend.lure}</p>
    </div>
    `
}
/* <button class="legend-btn" onclick="putLegendBack(${legend.id})">Remove from list</button> */

const makeLegendDisplayCard = (legend) => {
    return `
    <div class="character-container">
    <img  id='charac-img' src='${legend.imgAddress}' alt='${legend.name}' onclick='chooseLegend(${legend.id})'/>
    <h3>${legend.name}</h3>
    <p>${legend.lure}</p>
    </div>
    `
}
/* <button class="legend-btn" onclick="chooseLegend(${legend.id})">Add to list</button> */

// const renderChoices = () => {
//     favLegendsDiv.innerHTML = ''

//     favLegends.forEach(choice => {
//         let legendHtml = makeLegendChoiceCard(choice)
//         favLegendsDiv.innerHTML += legendHtml
//     });
// }

const renderFavLegends = () => {
    favLegendsDiv.innerHTML = ''

    .forEach(legend =>{
        let legendHtml = makeLegendChoiceCard(legend)
        favLegendsDiv.innerHTML += legendHtml
    })
}

const chooseLegend = (id) => {
    if(favLegends.length === 5){
        return alert('you can only have 5 on the list.')
    }
    let index = favLegends.findIndex(legend => legend.id ===id)
    favLegends.push(favLegends[index])
     choices.splice(index, 1)
    /*renderChoices()*/
    renderFavLegends()

}

const putLegendBack = (id) => {
    let index = favLegends.findIndex(legend => legend.id ===id)
    choices.push(favLegends[index])
    favLegends.splice(index,1)
    renderChoices()
    
}


const allLegends = () => {
    // console.log('why is this not working?')
    axios.get('http://localhost:4006/api/legends')
    .then(res => {

        console.log(choices)
        // console.log(res.data)
        allLegendsDiv.innerHTML = ''

        
        res.data.forEach(legend =>{
            let legendHtml = makeLegendDisplayCard(legend)
            allLegendsDiv.innerHTML += legendHtml 
        })

        seeLegends.style.display="none";
    })
    
}

seeLegends.addEventListener('click', allLegends)