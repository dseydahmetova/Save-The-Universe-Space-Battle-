// create classe for spaceship and alienship assign properties
// create methods attack() in each class to attack the enemy
// create objects using classes ====> 1 spaceship and 6 alienships
// create function battle() and call attack() methods nad switch turns
// You attack the first alien ship  
// check if alienship hull <= 0 
// if it is true prompt attack or retreat
// if retreat() ---- > return   or end the game
// if all alienShips in array are  destroyed   ----> console.log(you win)
// if a spaceship.hull === 0  ===> console.log(i lose)



console.log('%c spacebattle', 'font-size: 40px');
class Spaceship {
    constructor() {
        this.hull = 20
        this.firepower = 5
        this.accuracy = 0.7
    }
    attackAlien(index) {
        if (Math.random() <= this.accuracy) {
            console.log('%c You are attacking an alien!', 'color: navy; font-size: 15px')
            alien[index].hull = alien[index].hull - this.firepower
        } else {
            console.log("%c Your attack has failed", 'color: tomato; font-size: 15px')
        }
    }
}


// const hullArr = [3, 4, 5, 6];   alien hull values
// const firepowrArr = [2, 3, 4]   alien fire power values
// const accuracyArr = [0.6, 0.7, 0.8]  alien accuracy values


class Alienship {
    constructor() {
        this.hull = Math.floor(Math.random() * 4 + 3)
        this.firepower = Math.floor(Math.random() * 3 + 2)
        this.accuracy = (Math.random() * (0.2) + 0.6).toFixed(1)
    }
    attackSpaceship() {
        if (Math.random() <= this.accuracy) {
            console.log('%c Aliens are attacking spaceship', 'font-size: 15px')
            spaceShip.hull -= this.firepower
        } else {
            console.log("%c Alien's attack has failed", 'color: olive; font-size: 15px')
        }
    }
}


const alien = []
for (let i = 0; i < 6; i++) {
    const newAlienship = new Alienship()
    alien.push(newAlienship)
}

const spaceShip = new Spaceship()

console.log(alien);
console.log(spaceShip)

function battle() {

    let currentAlien = 0;
    while (spaceShip.hull > 0) {

        console.log(`You have ${spaceShip.hull} hull remaining. Alien has ${alien[currentAlien].hull} remaining`)

        if (alien[currentAlien].hull <= 0) {
            console.log(`%c You HIT the alien!!!`, 'color: red; font-size: 15px; font-weight: bold');
            currentAlien++;
            if (currentAlien === alien.length) {
                console.log("%c You win! All alien ships are destroyed!", 'font-style: italic; font-size: 17px; background: plum; border: 1px solid grey;');
                document.querySelector('#result').innerHTML = 'You win! All alien ships are destroyed!'
                return;
            }
            let retreat = confirm(`Do you want to attack alien ship ${currentAlien} or retreat?`);
            if (!retreat) {
                console.log('%c You retreat and the game is over.', 'color: navy; font-size: 15px; font-weight: bold');
                return;
            }
        }
        spaceShip.attackAlien(currentAlien);
        if (alien[currentAlien].hull <= 0) {
            continue;
        }
        alien[currentAlien].attackSpaceship();
        if (spaceShip.hull <= 0) {
            console.log("%c You lose! Your spaceship is destroyed.", 'font-style: italic; font-size: 17px; background: #ffccff; border: 1px solid grey');
            document.querySelector('#result').innerHTML = 'You lose! Your spaceship is destroyed.'
            return;
        }
    }
}

battle();








