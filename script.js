const hero = {
  hp: 1000,
  mana: 30,
  attack: 0,
  food: 5,
  armor: 30,
};

const boss = {
  hp: 2000,
  mana: 100,
  attack: 0,
  armor: 60,
};
//HERO STATS
const hero_hp = document.getElementById("hero-hp");
hero_hp.innerHTML = hero.hp;
const hero_mana = document.getElementById("hero-mana");
hero_mana.innerHTML = hero.mana;
const hero_attack = document.getElementById("hero-attack");
const hero_food = document.getElementById("hero-food");
hero_food.innerHTML = hero.food;
const hero_armor = document.getElementById("hero-armor");
hero_armor.innerHTML = hero.armor;
//BOSS STATS
const boss_hp = document.getElementById("boss-hp");
boss_hp.innerHTML = boss.hp;
const boss_mana = document.getElementById("boss-mana");
boss_mana.innerHTML = boss.mana;
const boss_attack = document.getElementById("boss-attack");
const boss_armor = document.getElementById("boss-armor");
boss_armor.innerHTML = boss.armor;
//GIF ANIMATION
let gifHeroAttack = `<div class="img" ><img src="img/sprite-fight.gif"  /></div>`;
let gif_HeroAttack = document.getElementById("gif-hero-attack");
let gifHeroGun = `<div class="img" ><img src="img/sprite-gun.gif"  /></div>`;
let gif_HeroGun = document.getElementById("gif-hero-attack");
let gifBossPain = `<div class="img" ><img src="img/sprite-pain.gif"  /></div>`;
let gif_BossPain = document.getElementById("gif-boss-pain");
let gifBossGun = `<div class="img"><img src="img/sprite-gun-boss.gif"  /></div>`;
let gif_BossGun = document.getElementById("gif-boss-pain");
let gif_HeroFood = document.getElementById("gif-hero-attack");
let gifHeroFood = `<div class="img"><img src="img/sprite-food.gif"  /></div>`;
let gifHeroBlood = `<div class="img" ><img src="img/sprite-hero-blood.gif"  /></div>`;
let gif_HeroBlood = document.getElementById("gif-hero-attack");
let gifBossBlood = `<div class="img" ><img src="img/sprite-boss-blood.gif"  /></div>`;
let gif_BossBlood = document.getElementById("gif-boss-pain");
//ANIMATION SKILLS
function animationGifAttack() {
  gif_HeroAttack.innerHTML = gifHeroAttack;
  gif_BossPain.innerHTML = gifBossPain;
  setTimeout(() => {
    gif_HeroAttack.innerHTML = "";
    gif_BossPain.innerHTML = "";
    document.getElementById("hero-attack").style.display = "flex";
    document.getElementById("hero-superUdar").style.display = "flex";
    document.getElementById("hero-strangeUdar").style.display = "flex";
    document.getElementById("hero-heal").style.display = "flex";
    document.getElementById("gif-idle").style.display = "flex";
    document.getElementById("gif-idle-boss").style.display = "flex";
  }, 2500);
}

function animationGifGun() {
  gif_HeroGun.innerHTML = gifHeroGun;
  gif_BossGun.innerHTML = gifBossGun;
  setTimeout(() => {
    gif_HeroGun.innerHTML = "";
    gif_BossGun.innerHTML = "";
    document.getElementById("hero-attack").style.display = "flex";
    document.getElementById("hero-superUdar").style.display = "flex";
    document.getElementById("hero-strangeUdar").style.display = "flex";
    document.getElementById("hero-heal").style.display = "flex";
    document.getElementById("gif-idle").style.display = "flex";
    document.getElementById("gif-idle-boss").style.display = "flex";
  }, 3000);
}

function animationGifBlood() {
  gif_HeroBlood.innerHTML = gifHeroBlood;
  gif_BossBlood.innerHTML = gifBossBlood;
  setTimeout(() => {
    gif_HeroBlood.innerHTML = "";
    gif_BossBlood.innerHTML = "";
    document.getElementById("hero-attack").style.display = "flex";
    document.getElementById("hero-superUdar").style.display = "flex";
    document.getElementById("hero-heal").style.display = "flex";
    document.getElementById("gif-idle").style.display = "flex";
    document.getElementById("gif-idle-boss").style.display = "flex";
  }, 4000);
}

function animationGifFood() {
  gif_HeroFood.innerHTML = gifHeroFood;
  gif_BossGun.innerHTML = gifBossGun;
  setTimeout(() => {
    gif_HeroFood.innerHTML = "";
    gif_BossGun.innerHTML = "";
    document.getElementById("hero-attack").style.display = "flex";
    document.getElementById("hero-superUdar").style.display = "flex";
    document.getElementById("hero-strangeUdar").style.display = "flex";
    document.getElementById("hero-heal").style.display = "flex";
    document.getElementById("gif-idle").style.display = "flex";
    document.getElementById("gif-idle-boss").style.display = "flex";
  }, 3000);
}
// ROUND
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
  animationGifAttack();
  superCrit();
  bossAtack();
  countRound();
  log();
  check();
  document.getElementById("hero-attack").style.display = "none";
  document.getElementById("hero-superUdar").style.display = "none";
  document.getElementById("hero-strangeUdar").style.display = "none";
  document.getElementById("hero-heal").style.display = "none";
  document.getElementById("gif-idle").style.display = "none";
  document.getElementById("gif-idle-boss").style.display = "none";
}

function superUdar() {
  if (hero.mana > 0) {
    hero.attack = 200;
    hero.mana -= 5;
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

  animationGifGun();
  superCrit();
  bossAtack();
  countRound();
  check();
  document.getElementById("hero-attack").style.display = "none";
  document.getElementById("hero-superUdar").style.display = "none";
  document.getElementById("hero-strangeUdar").style.display = "none";
  document.getElementById("hero-heal").style.display = "none";
  document.getElementById("gif-idle").style.display = "none";
  document.getElementById("gif-idle-boss").style.display = "none";
}

function strangeUdar() {
  let tallage = 50;
  boss.hp = Math.ceil((boss.hp / 100) * tallage);
  hero.hp = Math.ceil((hero.hp / 100) * tallage);
  hero_hp.innerHTML = hero.hp;
  boss_hp.innerHTML = boss.hp;
  animationGifBlood();
  superCrit();
  countRound();
  check();
  document.getElementById("hero-attack").style.display = "none";
  document.getElementById("hero-superUdar").style.display = "none";
  document.getElementById("hero-strangeUdar").style.display = "none";
  document.getElementById("hero-heal").style.display = "none";
  document.getElementById("gif-idle").style.display = "none";
  document.getElementById("gif-idle-boss").style.display = "none";
}

function heal() {
  if (hero.food > 0) {
    hero.hp = hero.hp + 400;
    hero.food = hero.food - 1;
  } else {
    hero.hp = hero.hp + 0;
  }
  animationGifFood();
  superCrit();
  bossAtack();
  hero_food.innerHTML = hero.food;
  hero_hp.innerHTML = hero.hp;
  countRound();
  check();
  document.getElementById("hero-attack").style.display = "none";
  document.getElementById("hero-superUdar").style.display = "none";
  document.getElementById("hero-strangeUdar").style.display = "none";
  document.getElementById("hero-heal").style.display = "none";
  document.getElementById("gif-idle").style.display = "none";
  document.getElementById("gif-idle-boss").style.display = "none";
}
//FUNCTIONS
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
//LOG
const logData = document.getElementById("log-data");
function log() {
  const p = document.createElement("p");
  p.innerHTML = `Damage: ${hero.attack}, Damage Taken: ${boss.attack}`;
  logData.appendChild(p);
}
//KEY BINDS
document.addEventListener("keypress", (event) => {
  const keyName = event.key;
  if (keyName === "q") {
    attack();
  }
  console.log("key: " + keyName);
});
