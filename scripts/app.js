$(() => {

  const containerWidth = 1000
  const width = 30
  const height = 20
  const rightKey = 39
  const leftKey = 37
  const spaceBar = 32
  const baddieArray = []
  let playerIndex = 511
  const $gameBoard = $('.game-container')
  const cellArray = []
  let direction = 1
  let movementId = null
  var shootAudio = new Audio('Sounds/shoot.wav')

  function init(){

    const spawnGood = () => {
      const $startingPoint = cellArray[511].addClass('goodGuy')

    }
    startsGrid()
    spawnGood()
  }


  function startsGrid(){

    for(let i = 0; i < Math.floor(height * width); i++) {
      const $div = $('<div></div>').addClass('cell')
      $div.attr( 'id', i)
      cellArray.push($div)
      $gameBoard.append($div)
      console.log($div)

      if(i > 6 && i < 25 && i%2) {
        baddieArray.push(new Baddie(i, 20))
      } else if (i > 39 && i < 58 && i%2){
        baddieArray.push(new Baddie(i, 20))
      } else if (i > 72 && i < 91 && i%2) {
        baddieArray.push(new Baddie(i, 20))
      } else if (i > 105 && i < 124 && i%2) {
        baddieArray.push(new Baddie(i, 20))
      }



    }
    console.log(baddieArray,'baddy array')
  }

  baddieArray.forEach(baddie => baddie.render())

  function moveBaddies() {
    movementId = setInterval(() => {
      baddieArray.forEach(baddie => baddie.baddieMove())
      if(direction === 33) direction = -1
      if(baddieArray.find(baddie => baddie.currentIndex % 33 === 32) && direction === 1) {
        direction = 33
      }
      if(direction === 66) direction = 1
      if(baddieArray.find(baddie => baddie.currentIndex % 67 === 33) && direction === -1) {
        direction = 66
      }

      // if (baddieArray.find(baddie => baddie.currentIndex >= 495 && baddieArray.find(baddie => baddie.currentIndex <= 527)){
      //   console.log('you lost')
    }

    , 1000)
  }




  class Baddie {
    constructor(startingIndex, points){
      // const startingIndex = alienSpawn()


      this.startingIndex = startingIndex
      this.currentIndex = startingIndex
      this.points = points
      this.movesMade = 0
      this.isMovingRight = true
      this.isHit = false
      this.render()

    }


    render() {
      // $gameBoard.eq(this.currentIndex).addClass('badGuy')
      cellArray[this.currentIndex].addClass('badGuy')
    }




    baddieMove() {
      cellArray[this.currentIndex].removeClass('badGuy')

      this.currentIndex += direction
      // const cell = $('.cell')
      // console.log(cell)

      // for(let i = 0; i < cell.length; i++) {
      //   if(cell[i] === 32 || cell[i] === 65) {
      //     console.log('here')
      //
      // //   }
      // // }
      // if(currentIndex === 266) {
      //   !playerCurrentIndex++
      // }
      // if(playerCurrentIndex === 284) {
      //   !playerCurrentIndex--
      // }

      this.render()
    }
  }


  // ***************************KEYPRESS FUNCTIONS*************************

  //move left and right
  function keyPress(){

    $(window).on('keydown', function(e){
      if (e.keyCode === leftKey && playerIndex > [495]) {
        $(cellArray).eq(playerIndex)[0].removeClass('goodGuy')
        playerIndex--
        $(cellArray).eq(playerIndex)[0].addClass('goodGuy')

      }

      if (e.keyCode === rightKey && playerIndex < [527]) {
        $(cellArray).eq(playerIndex)[0].removeClass('goodGuy')
        playerIndex++
        $(cellArray).eq(playerIndex)[0].addClass('goodGuy')
      }
    })

    $(window).on('keydown', function(e){

      // const bulletIndex = (playerIndex - 30)
      if (e.keyCode === spaceBar) {
        shootAudio.play('Sounds/shoot.wav')

        // const bullet = new Bullet(bulletIndex, 'up')
        // $bullet.position.push(bullets)
      }
    })

  }

  function shootBullet(){
    var bulletDraw = playerIndex
    $(cellArray).eq(bulletDraw).addClass('bullet')
  }
  shootBullet()


  // function animate() {
  //   requestAnimationFrame(animate)
  //   keyPress()
  //   moveBaddies()
  // }
  // animate()
  //laser
  // const lasers = []
  //
  // class  Laser {
  //   constructor(index, direction) {
  //     this.index = index
  //     this.direction = direction
  //   }
  // }

  init()
  keyPress()
  moveBaddies()





})
