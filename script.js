const billTotalInput = document.getElementById('billTotalInput')
const tipInput = document.getElementById('tipInput')
const perPersonTotalDIv = document.getElementById('perPersonTotal')
const numberOfPeopleDiv = document.getElementById('numberOfPeople')

let numberOfPeople = Number(numberOfPeopleDiv.innerText)
 
 
const calculateBill = () => {
    const bill = Number (billTotalInput.value)
    const tip = Number (tipInput.value) / 100
    const tipttotal = bill * tip
    const totaltotal = bill + tipttotal
    const getCurrencySymbol = (locale, currency) => (0).toLocaleString(locale, { style: 'currency', currency, minimumFractionDigits: 0, maximumFractionDigits: 0 }).replace(/\d/g, '').trim()

    const perPersonTotal = totaltotal / numberOfPeople
    perPersonTotalDIv.innerText =   `$${perPersonTotal.toLocaleString('en-us')}` 
}

const increasePeople = () => {
    numberOfPeople += 1
    numberOfPeopleDiv.innerText = numberOfPeople 

    calculateBill()
}

const decreasePeople = () => {

    if (numberOfPeople <= 1) {
        alert ('Comrade, you no fit get less than 1 person. Lol 🤣')
        return
    }
    numberOfPeople -= 1
    numberOfPeopleDiv.innerText = numberOfPeople

    calculateBill()
}
