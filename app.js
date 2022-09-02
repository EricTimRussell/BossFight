let goldCoins = 0
const heroes = [
  {
    name: 'Fane',
    damage: 7,
    health: 100
  },
  {
    name: 'Red',
    damage: 10,
    health: 120
  }
]

const boss = {
  health: 200,
  maxHealth: 1000,
  damage: 25,
  level: 1
}

function heroesDoDmg() {
  heroes.forEach(hero => {
    if (hero.health > 0) {
      boss.health -= hero.damage
    }
    else {
      hero.damage == 0
    }
  })
  bossLevelUp()
  drawHP()

}

function drawHP() {
  // @ts-ignore
  document.getElementById('boss Hp').innerText = `Hp:${boss.health}`


  heroes.forEach(hero => {
    let heroHp = document.getElementById(hero.name)

    if (hero.health < 0)
      hero.health = 0
    // @ts-ignore
    heroHp.querySelector('.hero').innerText = `Name: ${hero.name} Hp: ${hero.health}`
  })
}

function bossDmg() {
  heroes.forEach(hero => {
    hero.health -= boss.damage
  })
  drawHP()
}

function bossLevelUp() {
  if (boss.health <= 0) {
    boss.damage += 20
    boss.health = 300 * boss.level
    boss.level++
    goldCoins += 100 * boss.level
  }
  drawHP()
  drawGoldCoins()
}

function drawGoldCoins() {
  // @ts-ignore
  document.getElementById('coins').innerText = `GoldCoins- ${goldCoins}`
}

function healthPotion(name) {
  let hero = heroes.find(hero => hero.name == name)
  // @ts-ignore
  if (hero.health > 0 && goldCoins > 99) {
    // @ts-ignore
    hero.health += 100
    goldCoins -= 100
    drawHP()
    drawGoldCoins()
  }


}

// function buyMagicSword() {
//   let hero = heroes.forEach(hero => {
//     hero.damage += 7
//     goldCoins -= 300
//   })
//   drawGoldCoins()
// }

setInterval(bossDmg, 7000)
drawHP()