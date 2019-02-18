$(() => {

  // caching the dom
  // const $hero = {
  //   $startingPoint =
  //
  const $cubeWidth = 1
  const $width = 30
  const $height = 20
  const $goodGuy = $('.good-guy')
  const $spaceBar = 32
  const $gridCell = $('.cell-guy')
  const $rightKey = 39
  const $leftKey = 37
  const $gameBoard = $('.game-container')
  const $badGuy = $('.bad-guy')

  // }

  // //
      let lives = 3
      let level = 1
      let score = 0
      let goodieIndex = 0
  //     //
  //     const aliens = []
  //     const bullets = []

let currentDivWidth =  1
let array = []
  function init(){

    for(let i = 0; i < Math.floor($height * $width / currentDivWidth); i++) {
      var $div = $('<div></div>').addClass('good-guy')
      $gameBoard.append($div)
    }
for (var i = 0; i < $gameBoard.length; i++) {
      array.push($gameBoard[i])
      console.log(array)
    }
  }

  init()
  })



//   function alien(){
//     let aliens = []
//
//
//   }
// //
// class Alien(width){
//   constructor{



// console.log(init)

    function keyPressed(e) {

    $(document).keydown(function(e){
      if (e.which === $leftKey){
        $($goodGuy).finish().animate({
          left: '-=10'
        })
      }
      if (e.which === $rightKey){
        $($goodGuy).finish().animate({
          left: '+=10'
        })

        if (e.which === $spaceBar){
          let bullet = new Bullet
          bullet.push(bullets)
        }
      }
    })

    $(document).keyup(function(){
      if ($leftKey.active){
        $($goodGuy).stop()
      }

      if ($rightKey.active){
        $($goodGuy).stop()
      }
    }

  )
})




// function gameLoop()
//      {
//          // change position based on speed
//          moveSelection();
//          setTimeout('gameLoop()',10);
//      }




  //
  //     console.log(init)

          // Class hero{
          //   constructor(direction, start position)

  //     Class enemies{
  //       constructor(speed, direction, hit, height, width){
  //         this.speed = speed;
  //         this.direction = direction
  //         this.hit = hit;
  //         this.height = height
  //         this.width = width;
  //       }
  //     }
  //
  //     Class bullets {
  //       constructor(speed, hit)
  //     }
  //
  //
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
