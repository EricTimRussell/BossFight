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

let goldCoins = 0

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
    hero.health -= 25
  })
  drawHP()
}

function bossLevelUp() {
  if (boss.health <= 0) {
    boss.damage + 50
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
  console.log(name);
  let hero = heroes.find(hero => hero.name == name)
  if (hero.health > 0) {
    hero.health += 100
    drawHP()
  }
  if (goldCoins > 100) {
    goldCoins -= 100
  } else
    drawGoldCoins()
}

setInterval(bossDmg, 5000)
drawHP()