function createGame(player1, hour, player2) {
  return `
    <li>
      <img src="./assets/icon-${player1}.svg" alt="Bandeira do ${player1}" />
      <strong>${hour}</strong>
      <img src="./assets/icon-${player2}.svg" alt="Bandeira da ${player2}" />
    </li>
  `
}

let delay = -0.4
function createCard(date, day, games) {
  delay = delay + 0.4
  return `
    <div class="card" style="animation-delay: ${delay}s">
      <h2>${date}<span>${day}</span></h2>
      <ul>
        ${games}
      </ul>
    </div>
  `
}
document.querySelector('#cards').innerHTML =
  createCard(
    '24/11',
    'quinta',
    createGame('british', '08:00', 'camaroon') +
      createGame('india', '13:00', 'armenia') +
      createGame('comoros', '20:00', 'jordan')
  ) +
  createCard(
    '28/11',
    'segunda',
    createGame('korea', '10:00', 'ghana') +
      createGame('Brazil', '13:00', 'Switzerland') +
      createGame('Portugal', '16:00', 'Uruguay')
  ) +
  createCard('02/12', 'sexta', createGame('Brazil', '16:00', 'camaroon'))
