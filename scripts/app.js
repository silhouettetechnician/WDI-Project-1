$(() => {

  // *******************************************GLOBALS*********************************************
  const width = 30
  const height = 20
  const rightKey = 39
  const leftKey = 37
  const spaceBar = 32
  const baddieArray = []
  let playerIndex = 544
  let alienPoints = 0
  const $score = $('.score-ctn')
  const $lives = $('.lives')
  const $startScreen = $('#startScreen')
  const $gameBoard = $('.game-container')
  const $playbutton = $('.playGame')
  const $button = $('#button')
  const cellArray = []
  const lives = 3
  let direction = 1
  let movementId = null
  var shootAudio = new Audio('Sounds/shoot.wav')
  const invaderExplosion = new Audio('Sounds/invaderkilled.wav')

  // *****************************************GAME INITIALISER************************************
  $($button).on('click', () => {
    if ($startScreen.hasClass('hidden'))
      $startScreen.css({
        display: 'none'
      })
    init()
  })

  function init(){

    const spawnGood = () => {

      // *****************************************SET PLAYER POSITION*************************************

      const $startingPoint = cellArray[544].addClass('goodGuy')

    }
    startsGrid()
    spawnGood()
    moveBaddies()
    keyPress()


  }
  // *****************************************SET UP PLAYING AREA*************************************

  function startsGrid(){
    let looopCount = 0
    for(let i = 0; i < Math.floor(height * width); i++) {
      looopCount ++
      const $div = $('<div></div>').addClass('cell')
      $div.attr( 'id', i)
      cellArray.push($div)
      $gameBoard.append($div)
      // *****************************************SPAWN BADDIES*************************************

      if(i > 6 && i < 25 && i%2) {
        baddieArray.push(new Baddie(i, 20))
      } else if (i > 39 && i < 58 && i%2){
        baddieArray.push(new Baddie(i, 20))
      } else if (i > 72 && i < 91 && i%2){
        baddieArray.push(new Baddie(i, 20))
      } else if (i > 105 && i < 124 && i%2){
        baddieArray.push(new Baddie(i, 20))
      }
    }
    console.log(looopCount)
  }

  // *****************************************MOVE ENEMIES*************************************
  baddieArray.forEach(baddie => baddie.render())

  function moveBaddies() {
    movementId = setInterval(() => {
      baddieArray.forEach(baddie => baddie.baddieMove())
      if(direction === 33) direction = -1
      if(baddieArray.find(baddie => baddie.currentIndex % 33 === 32) && direction === 1) {
        direction = 33
      }

      if(direction === 66) direction = 1
      if(baddieArray.find(baddie => baddie.currentIndex % 66 === 33) && direction === -1) {
        direction = 66
      }
    }
    , 300)
  }

  // function helloFred() {
  //   shootingId = setInterval(() => {
  //
  //     // cellArray[.currentIndex]
  //     // const random = (Math.floor(Math.random()*currentIndex.length))
  //     // console.log(cellArray[this.currentIndex])
  //
  //     // const randomBullet = cellArray
  //     // cellArray[random]
  //     // console.log(cellArray[random])
  //     // randomBullet.addClass('enemyBullet')
  //   }, 2000)
  //
  // }



  // *****************************************BULLET CLASS*************************************

  class Bullet {
    constructor(direction, index){
      this.direction = direction
      this.index = index - 33
      this.currentMoves = 0
      this.bulletTimer = null
      this.render()
      this.moveBullet()
    }

    render() {
      cellArray[this.index].addClass('bullet')
      this.checkHit()
    }

    remove() {
      cellArray[this.index].removeClass('bullet')
    }

    checkHit() {
      if (cellArray[this.index].hasClass('badGuy')) {
        cellArray[this.index].removeClass('badGuy')
        const hitAlien = baddieArray.find(baddie => baddie.currentIndex  ===  this.index)
        hitAlien.isHit = true
        alienPoints += 20
        $score.text(alienPoints)
        console.log(alienPoints)
        invaderExplosion.play('Sounds/invaderkilled.wav')
        this.remove()
        clearInterval(this.bulletTimer)
      }
    }



    moveBullet() {
      this.bulletTimer = setInterval(() => {
        this.remove()
        this.index -= 33
        if (this.index < 0) {
          clearInterval(this.bulletTimer)
        } else {
          this.render()
        }
      }, 100)
    }

  }

  $(window).on('keydown', function(e){
    if (e.keyCode === spaceBar){
      bullet = new Bullet('up', playerIndex)
      shootAudio.play('Sounds/shoot.wav')
    }
  })

  // *****************************************BADDIE CLASS*************************************

  class Baddie {
    constructor(startingIndex, points){

      this.startingIndex = startingIndex
      this.currentIndex = startingIndex

      this.points = points
      this.movesMade = 0
      this.isMovingRight = true
      this.outOfBounds = startingIndex + 500
      this.isHit = false
      this.render()
    }

    render() {
      if(!this.isHit) {
        cellArray[this.currentIndex].addClass('badGuy')
      }
    }

    checkLose() {

      this.lives -=
      this.lives.text($lives)
      alert('You Lose')
    }


    baddieMove() {
      cellArray[this.currentIndex].removeClass('badGuy')
      this.currentIndex += direction
      if(this.currentIndex > 500) {
        this.checkLose()
      } else {
        this.movesMade ++
        this.render()
      }
    }
  }



  //
  // if (cellArray[this.currentIndex] >= this.outOfBounds){
  //
  // }


  //     baddieShoot(){
  // // (Math.floor(Math.random()*baddieArray.length))
  //       // const shot = cellArray[this.currentIndex].hasClass('badGuy')
  //       shootingId = setInterval(() => {
  //         console.log(shot)
  //         cellArray.currentIndex[random]
  //         if (cellArray.hasClass('badGuy'))
  //           console.log(cellArray.currentIndex[random])
  //         baddieArray[this.currentIndex].removeClass('enemyBullet')
  //         console.log(baddieArray[this.currentIndex])
  //         this.startIndex += 33
  //         if (this.currentIndex < 0) {
  //           clearInterval(this.shootingId)
  //         } else {
  //           cellArray[this.currentIndex].addClass('enemyBullet')
  //         }
  //       }, 1000)
  //
  //     }


  // ***************************KEYPRESS FUNCTIONS*************************

  //move left and right
  function keyPress(){

    $(window).on('keydown', function(e){
      if (e.keyCode === leftKey && playerIndex > 528) {
        $(cellArray).eq(playerIndex)[0].removeClass('goodGuy')
        playerIndex--
        $(cellArray).eq(playerIndex)[0].addClass('goodGuy')
      }

      if (e.keyCode === rightKey && playerIndex < 560) {
        $(cellArray).eq(playerIndex)[0].removeClass('goodGuy')
        playerIndex++
        $(cellArray).eq(playerIndex)[0].addClass('goodGuy')
      }
    })
  }


  // init()




  // startBtn.click(() => {
  //   startsGrid()
  //   startGame
  // })

})
