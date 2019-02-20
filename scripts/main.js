$(() => {

  // caching the dom
  // const $hero = {
  //   $startingPoint =
  //
  const $cubeWidth = 1
  const $width = 30
  const $height = 20
  const $goodGuy = $('.goodGuy')
  const $spaceBar = 32
  const $gridCell = $('.cell-guy')
  const $rightKey = 39
  const $leftKey = 37
  const baddieArray = []

  const $gameBoard = $('.game-container')
  const $badGuy = $('.badGuy')
  let $cell = $('.cell')
  let $bullet = $('.bullet')
  // }

  // //
  let lives = 3
  let level = 1
  const score = 0
  let goodieIndex = 0
  const cellArray = []
  let $startingPoint = cellArray[511]
  let points = 20
  const squadWidth = 17

  //     //
  //     const aliens = []
  //     const bullets = []
  let playerIndex = 511
  console.log(playerIndex)
  const currentDivWidth =  1
  // let array = $gameBoard.find()
  const bullets = []
  const baddie = []

  // Class hero{
  //   constructor(direction, start position){
  //     this.cu
  //   }

  function init(){

    const spawnGood = () => {
      const $startingPoint = cellArray[511].addClass('goodGuy')

    }
    alienSpawn()
    spawnGood()
    // keyPressed()
    // startGame()
  }
  //
  // function startGame(){


  // this.config = {
  //   $width: = 30,
  //   $height: = 20,
  //   fps: = 50
  // }

  // class Bullet {
  //   constructor (index, directon){
  //     this.index = index
  //     this.direction = direction
  //   }
  // }
  class Baddie {
    constructor(startingIndex, points){
      // const startingIndex = alienSpawn()


      this.startingIndex = startingIndex
      this.currentIndex = startingIndex
      this.points = points
      this.currentMoves = 0
      this.isMovingRight = true
      this.isHit = false
      this.render()
      this.movementId = null
      this.baddieMove()

    }


    render() {
      $gameBoard.find('.cell').eq(this.currentIndex).addClass('badGuy')
    }
    // $gameBoard.eq(this.currentIndex).addClass('badGuy')




    baddieMove() {
      this.movementId = setInterval(() => {
        // console.log('game updating')
        $gameBoard.find('.cell').eq(this.currentIndex).removeClass('badGuy')
        if (this.currentMoves < 6) {
          this.currentMoves++
          if(this.isMovingRight) {
            this.currentIndex++
          } else {
            this.currentIndex--
          }
        } else {
          this.currentIndex ++
          this.currentMoves = 0
          this.isMovingRight = !this.isMovingRight
        }
        this.render()

      }, 1000)

    }
  }
  console.log(baddieArray)
  // const baddieRow = [new Baddie(8, 20, 17), new Baddie(40, 20, 17), new Baddie(73, 20, 17), new Baddie(123, 20, 17)]
  //
  // shoot() {
  //   var bullet = new Bullet(this.position.x, this.position.y - this.bounds.h / 2, 1, 1000);
  //   this.bullets.push(bullet);
  // }

  // function moveBaddie(){
  //   baddieRow.forEach(baddie => {
  //     baddie.baddieMove()
  //     // console.log(baddie.currentIndex)
  //   })
  // }
  //
  // }

  function gameLoop(){
    baddieArray.forEach(baddie => baddie.baddieMove())
  }


  // )]
  //
  //
  // this.lives = 3
  // this.height = 0
  // this.width = 0
  //
  // startGame()
  // keyPressed()
  // gameLoop()
  //
  // let bullet = new Bullet
  // bullet.push(bullets)



  function alienSpawn(){

    for(let i = 0; i < Math.floor($height * $width); i++) {
      const $div = $('<div></div>').addClass('cell')
      $div.attr( 'id', i)
      cellArray.push($div)
      $gameBoard.append($div)
      if(i > 6 && i < 25) {
        baddieArray.push(new Baddie(i, 20))
      } else if (i > 39 && i < 58) {
        baddieArray.push(new Baddie(i, 20))
      } else if (i > 72 && i < 91) {
        baddieArray.push(new Baddie(i, 20))
      } else if (i > 105 && i < 124) {
        baddieArray.push(new Baddie(i, 20))
      }

    }
    // console.log($cell[i])
  }






  // body > div > div.cell.goodGuy

  // function goodGuymove(){
  //   if ()
  // }

  // const keyPressed = () => {

  // window.addEventListener('keydown', () => console.log('keyed'))

  $(window).on('keydown', function(e) {
    if (e.keyCode === $leftKey && playerIndex > [495]) {
      $(cellArray).eq(playerIndex)[0].removeClass('goodGuy')
      playerIndex--
      $(cellArray).eq(playerIndex)[0].addClass('goodGuy')

    }

    if (e.keyCode === $rightKey && playerIndex < [527]) {
      $(cellArray).eq(playerIndex)[0].removeClass('goodGuy')
      playerIndex++
      $(cellArray).eq(playerIndex)[0].addClass('goodGuy')
    }

    // if (e.keyCode === $spaceBar) {
    //   $(cellArray).eq(playerIndex)[0].removeClass('goodGuy')
    //   playerIndex++
    //   $(cellArray).eq(playerIndex)[0].addClass('bullet')
    //   console.log('bullet')
    // let bullet = new Bullet
    // bullet.push(bullets)
    // }
  })

  $(window).on('keyup', function(e){
    if(e.keyCode === $leftKey){
      delete cellArray[0]
    }
    if(e.keyCode === $rightKey){
      delete cellArray[0]
    }
  })


  // const findPosition = () => {
  //   $('cellArray').find(playerIndex[0])
  //   console.log(playerIndex)
  //   guyLocation = $('div.cell.goodGuy')
  //   return findPosition()
  //
  // }


  function shooting() {
    $(window).on('keyup', function(e){
      const bulletIndex = playerIndex
      if (e.keyCode === $spaceBar) {

        $gameBoard[bulletIndex].addClass('bullet')
        $bullet.position.push(bullets)

      }
    }
    )
  }



  // findPosition()
  shooting()
  init()
  gameLoop()

})





// function animate() {
//   RequestAnimationFrame(animate)

//   $(document).keyup(function(e) {
//     delete 'keydown'[e.keyCode]
//   });
// }
// // animate()


// }

//

// const index = $('.$cell').removeClass('cell')

// $goodGuy.animate({left: +1})
// playerIndex.hasClass('goodGuy')? playerIndex++ : playerIndex


// if (e.which === $spaceBar){
//   // let bullet = new Bullet
//   // bullet.push(bullets)
// }



// function gameLoop()
//      {
//          // change position based on speed
//          moveSelection();
//          setTimeout('gameLoop ,1000);
//      }

//
//     START GAME
//
//     window.addEventListener('click', ev => {
//
//       if (ev.keyCode === 38) {
//         $welcome.css({
//           display: 'none'
//         })
//         play()
//         setInterval(timeCounter, 1000)
//       }
//     })
//
//
//   // })
//   })
//
// })
