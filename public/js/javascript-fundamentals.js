/**
 * Variable declaration with let, const & var that's an old way to declare it.
* */
function variables () {
  let name
  let admin
  name = 'Jhon'
  admin = name
  console.log(admin)
}
/**
 * Naming convention is a good practice for a developer that wants
 * to improve code readability, USE THE RIGHT NAME FOR VARIABLES
* */
function rightVariableName () {
  const ourPlanetName = 'Earth'
  const currentUserName = 'Jhon'

  console.log(`We are on the planet ${ourPlanetName} with the user ${currentUserName}`)
}

const BIRTHDAY = '2003-07-17'
const age = calculateAgeFromBirthday(BIRTHDAY)
console.log(age)

function calculateAgeFromBirthday (birthdayDate) {
  const birthYear = new Date(birthdayDate).getFullYear()
  const currentYear = new Date().getFullYear()
  return currentYear - birthYear
}

variables()
rightVariableName()
