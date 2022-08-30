const hero = {
  hp: 1000,
  mana: 500,
  attack: 0,
  armor: 30,
};

const boss = {
  hp: 2000,
  mana: 100,
  attack: 0,
  armor: 60,
};

const hero_hp = document.getElementById("hero-hp");
hero_hp.innerHTML = hero.hp;
const hero_mana = document.getElementById("hero-mana");
hero_mana.innerHTML = hero.mana;
const hero_attack = document.getElementById("hero-attack");

const hero_armor = document.getElementById("hero-armor");
hero_armor.innerHTML = hero.armor;

const boss_hp = document.getElementById("boss-hp");
boss_hp.innerHTML = boss.hp;
const boss_mana = document.getElementById("boss-mana");
boss_mana.innerHTML = boss.mana;
const boss_attack = document.getElementById("boss-attack");

const boss_armor = document.getElementById("boss-armor");
boss_armor.innerHTML = boss.armor;

const round = document.getElementById("round-data");
let number = 0;
function countRound() {
  number += 1;
  round.innerHTML = `Round: ${number}`;
  if (number === 7) {
    hero.armor = 30;
  }
}

//SKILLS
function attack() {
  hero.attack = Math.ceil(Math.random() * 100);
  checkAttack();
  boss.hp = boss.hp + boss.armor - hero.attack;
  boss.armor -= 10;
  if (boss.armor <= 0) {
    boss.armor = 0;
  }
  boss_armor.innerHTML = boss.armor;
  boss_hp.innerHTML = boss.hp;
  superCrit();
  bossAtack();
  check();
  countRound();
  log();
  // updataProgressHp(abc, boss.hp);
}

function superUdar() {
  if (hero.mana > 0) {
    hero.attack = 200;
    hero.mana -= 200;
    boss.hp = boss.hp + boss.armor - hero.attack;
    boss.armor -= 10;
  } else {
    hero.attack = 0;
    hero.mana = 0;
    hero.hp += 0;
  }
  if (boss.armor <= 0) {
    boss.armor = 0;
  }
  hero_mana.innerHTML = hero.mana;
  boss_armor.innerHTML = boss.armor;
  boss_hp.innerHTML = boss.hp;
  superCrit();
  bossAtack();
  console.log(hero);
  check();
  countRound();
}

function strangeUdar() {
  let tallage = 50;
  boss.hp = Math.ceil((boss.hp / 100) * tallage);
  hero.hp = Math.ceil((hero.hp / 100) * tallage);
  hero_hp.innerHTML = hero.hp;
  boss_hp.innerHTML = boss.hp;
  countRound();
}

function heal() {
  if (hero.mana > 0) {
    hero.hp = hero.hp + 400;
    hero.mana = hero.mana - 100;
  } else {
    hero.hp = hero.hp + 0;
  }
  superCrit();
  bossAtack();
  hero_mana.innerHTML = hero.mana;
  hero_hp.innerHTML = hero.hp;
  countRound();
}
//SKILLS
function bossAtack() {
  boss.attack = Math.ceil(Math.random() * 200);
  checkAttack();
  hero.hp = hero.hp + hero.armor - boss.attack;
  hero.armor -= 10;
  if (hero.armor <= 0) {
    hero.armor = 0;
  }
  hero_armor.innerHTML = hero.armor;
  hero_hp.innerHTML = hero.hp;
  crit();
}

function check() {
  if (hero.hp <= 0 || hero.hp < -0) {
    alert("you lose");
    window.location.reload();
  }
  if (boss.hp <= 0) {
    alert("you win");
    window.location.reload();
  }
}

function checkAttack() {
  if (hero.attack <= 60 && boss.armor != 0) {
    hero.attack = 61;
  }
  if (boss.attack <= 30 && hero.armor != 0) {
    boss.attack = 31;
  }
}

function checkMana() {
  if (hero.mana <= -1) {
    hero.attack = 0;
    hero.mana = 0;
    hero.hp += 0;
  }
}

let acc = 0;
function crit() {
  acc += 1;
  if (acc === 5 || acc === 10) {
    boss.attack = boss.attack * 2;
    console.log("crit boss");
    console.log(boss.attack);
  }
}

function superCrit() {
  let crit = 2000;
  let death = 3;
  let result = (crit / 100) * death;
  boss.attack = result;
  hero.hp = hero.hp - boss.attack;
  hero_hp.innerHTML = hero.hp;
  console.log(boss.attack);
}

const logData = document.getElementById("log-data");
function log() {
  logData.innerHTML = `Damage: ${hero.attack}, Damage Taken: ${boss.attack}`;
}

// const abc = document.querySelector(".boss-style-hp");
// function updataProgressHp(progressHp, value) {
//   progressHp.querySelector(
//     ".progress-boss-data-style"
//   ).style.width = `${value}`;
//   progressHp.querySelector(".boss-data-style").textContent = `${value}`;
// }
