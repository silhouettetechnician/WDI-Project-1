$(() => {

  const containerWidth = 1000
  const width = 30
  const height = 20
  const rightKey = 39
  const leftKey = 37
  const spaceBar = 32
  const baddieArray = []
  let playerIndex = 544

  const $gameBoard = $('.game-container')
  const cellArray = []
  let direction = 1
  let movementId = null
  var shootAudio = new Audio('Sounds/shoot.wav')

  function init(){

    const spawnGood = () => {

      const $startingPoint = cellArray[544].addClass('goodGuy')

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


      if(i > 6 && i < 25 && i%2) {
        baddieArray.push(new Baddie(i, 20))
      } else if (i > 39 && i < 58 && i%2){
        baddieArray.push(new Baddie(i, 20))
      } else if (i > 72 && i < 91 && i%2){
        baddieArray.push(new Baddie(i, 20))
      } else if (i > 105 && i < 124 && i%2){
        baddieArray.push(new Baddie(i, 20))
      }

      // *******************************BULLET LOADING INTO CANNON**************************************

      $(window).on('keydown', function(e){
        const bulletStart = cellArray[511]
        const bulletPosition = playerIndex
        bulletStart.addClass('bullet')
        const bullets = {
          position: []
        }
      })
      $(window).on('keydown', function(e){
        const bullet = new Bullet(index, 'up')
        if (e.keyCode === spaceBar){
          shootAudio.play('Sounds/shoot.wav')
          // if (bullet.direction === 'up') {
          //   bullet.index = bullet.index - 20 && bullet.addClass('bullet')
          // } else {
          //   this.index = this.index + 20
          // }
          // bullets.position.push(bulletPosition)

        }
      })



    }
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
      if(baddieArray.find(baddie => baddie.currentIndex % 66 === 33) && direction === -1) {
        direction = 66


      }
      // console.log(direction)


      // if (baddieArray.find(baddie => baddie.currentIndex >= 495) && baddieArray.find(baddie => baddie.currentIndex =< 527){
      //   clearInterval(movementId)
      //   console.log('you lost')
      // }

      // if




    }  , 2000)
  }
  // if baddieArray.forEach(baddie => baddie.baddieMove())



  class Bullet {
    constructor(direction, index){
      this.direction = direction
      this.index = index
      this.currentMoves = 0
    }

    // $(window).on('keydown', function(e){
    //   const bullet = new Bullet(index, 'up')
    //   if (e.keyCode === spaceBar){
    //     shootAudio.play('Sounds/shoot.wav')
    //     if (this.direction === 'up') {
    //       this.index = this.index - 20 && bullet.addClass('bullet')
    //     } else {
    //       this.index = this.index + 20
    //     }
    //     bullets.position.push(bulletPosition)
    //   }
    // })
  }

  // this.render()

  //
  //   }
  //
  // }
  // $(window).on('keydown', function(e){
  // const bullet = {
  //   position: []
  // }



  // const bulletIndex = playerIndex
  // if (e.keyCode === spaceBar) {
  // $gameBoard.find('cell').eq(playerIndex).addClass('.bullet')


  // (cellArray)[421].addClass('bullet')
  // cellArray[bulletIndex].classList.add('bullet')
  // bullet.position.push(bulletIndex)
  // shootAudio.play('Sounds/shoot.wav')

  //   }
  // )



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
  }



  //   //     if (e.keyCode === $spaceBar) {
  //   //       console.log('firing')
  //   //       $gameBoard.find('.cell').eq(playerIndex).addClass('.bullet')
  //   //
  //   //
  //   //       bullet.push(bullets)
  //   //
  // function animate() {
  //   requestAnimationFrame(animate)
  //   keyPress()
  //   moveBaddies()
  // }
  // animate()


  init()
  keyPress()
  moveBaddies()

  // startBtn.click(() => {
  //   startsGrid()
  //   startGame
  // })





})
