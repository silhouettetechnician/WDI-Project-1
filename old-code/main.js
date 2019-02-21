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
  let goodieIndex = 0
  let lives = 3
  let level = 1
  // const $startingPoint = cellArray[511]
  let points = 20
  let playerIndex = 511
  // }

  // //

  const score = 0

  const cellArray = []

  const squadWidth = 17

  //     //
  //     const aliens = []
  //     const bullets = []

  console.log(playerIndex)
  const currentDivWidth =  1
  // let array = $gameBoard.find()

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


  class Baddie {
    constructor(startingIndex, points, direction){
      // const startingIndex = alienSpawn()


      this.startingIndex = startingIndex
      this.currentIndex = startingIndex
      this.points = points
      this.movesMade = 0
      this.isMovingRight = true
      this.isHit = false
      this.render()
      this.movementId = null
      this.baddieMove()
      this.direction = direction

    }


    render() {
      $gameBoard.eq(this.currentIndex).addClass('badGuy')
    }




    baddieMove() {
      this.movementId = setInterval(() => {

        $gameBoard.find('.cell').eq(this.currentIndex).removeClass('badGuy')

        // this.movesMade++
        // console.log(this.currentIndex)
        // this.currentIndex++
        // if (this.movesMade === 7) {
        //   this.currentIndex++
        //   this.movesMade = 0
        //   if(this.isMovingRight) {
        //     this.currentIndex + 30
        //   } else {
        //     this.currentIndex--
        //   }
        //
        // } else {
        //   this.currentIndex++
        //   this.movesMade === 9
        //   this.isMovingRight = !this.isMovingRight
        // }
        //
        //


        this.render()
        this.currentIndex++


      }, 1000)
    }
  }



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
  //
  // function gameLoop(){
  //   baddieArray.forEach(baddie => baddie.baddieMove())
  // }


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
        baddieArray.push(new Baddie(i, 20, 1))
        console.log(baddieArray)

      }else if (i > 39 && i < 58){
        baddieArray.push(new Baddie(i, 20, 1))
      } else if (i > 72 && i < 91) {
        baddieArray.push(new Baddie(i, 20), 1)
      } else if (i > 105 && i < 124) {
        baddieArray.push(new Baddie(i, 20, 1))
      }
    }
  }
  // const cell = document.querySelectorAll('.cell')
  // console.log(cell[3])
  //
  // function add() {
  // cell[3].classList.add('badGuy')
  // }
  // add()














  // body > div > div.cell.goodGuy

  // function goodGuymove(){
  //   if ()
  // }

  // const keyPressed = () => {

  // window.addEventListener('keydown', () => console.log('keyed'))

  // ***************************************** KEYPRESS FUNCTIONS ***************************************

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

  })

  // $(window).on('keyup', function(e){
  //   if(e.keyCode === $leftKey){
  //     delete cellArray[0]
  //   }
  //   if(e.keyCode === $rightKey){
  //     delete cellArray[0]
  //   }
  // })
  //
  // $(window).on('keydown', function(e){
  //   const bulletIndex = (playerIndex - 30)
  //   if (e.keyCode === $spaceBar) {
  //     console.log('firing')
  //     const bullet = new Bullet(bulletIndex, 'up')
  //     $bullet.position.push(bullets)
  //   }
  // })

  // const findPosition = () => {
  //   $('cellArray').find(playerIndex[0])
  //   console.log(playerIndex)
  //   guyLocation = $('div.cell.goodGuy')
  //   return findPosition()
  //
  // }

  // class Bullet {
  //
  //   constructor (index, direction){
  //     this.index = index
  //     this.direction = direction
  //     this.bulletIndex = playerIndex
  //     this.render()
  //   }
  //
  //   // shooting() {
  //   //   $(window).on('keydown', function(e){
  //   //     const bullets = []
  //   //     if (e.keyCode === $spaceBar) {
  //   //       console.log('firing')
  //   //       $gameBoard.find('.cell').eq(playerIndex).addClass('.bullet')
  //   //       $bullet.position.push(bullets)
  //   //
  //   //       bullet.push(bullets)
  //   //
  //   //     }
  //   //   })
  //   // }
  //
  // }
  //


  // *************************CHECK IF ALIENS ARE REMAINING************************
  // if (baddieArray.length === 0) {
  //       win();
  //     }






  // findPosition()
  // shooting()
  init()
  // gameLoop()

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
//   //
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
//




















 })
