

// Dom Style start here



let leftVal = 250

let topVal = 50
let ballWidth = 30
let cvwidth = ballWidth * 10
const ballstyle = {
    width:`${ballWidth}px`,
    height: '30px',
    borderRadius:'50%',
    background:'blue',
    position:'absolute',
    left:`${leftVal}px`,
    top:`${topVal}px`
}
const cvstyle = {
    width:`${cvwidth}px`,
    height:'300px',
    marginTop:'50px',
    border: '1px solid red',
    position:'relative'
    
}
console.log(cvwidth)
// Dom style ends here


// get all dom from here

    let cv = document.getElementById('canvas')
    let ball = document.getElementById('ball')

    let btns = document.querySelectorAll('.btn')
    console.dir(btns)


    let canvasWidth = cv.clientWidth
    
    let canvasHeight = cv.clientHeight
    let ballHeight = ball.clientHeight

    let toTopBottomMove = canvasHeight/ballHeight
    let toLeftRightMove = canvasWidth/ballWidth



//   get all dom to here

// Object.assign(ball.style,{
//     background :'red'
//  })

// dom style assign
    Object.assign(cv.style, cvstyle)
    Object.assign(ball.style, ballstyle)

    for(let i=0;i<btns.length;i++){
        btns[i].addEventListener('click',function(e){
           
            if(e.target.value === 'left'){
                if(leftVal <= 0){
                    alert('you crossed')
                }else{
                    leftVal = leftVal - 30
                    Object.assign(ball.style,{
                        left :`${leftVal}px`
                     })
                }

               
            }
            else if(e.target.value === 'right'){
                if(leftVal >= cvwidth){
                    alert('you crossed')
                }else{
                    leftVal = leftVal + 30
                    Object.assign(ball.style,{
                        left :`${leftVal}px`
                     })
                }

               
            }
            else if(e.target.value === 'top'){
                if(leftVal >= cvwidth){
                    alert('you crossed')
                }else{
                    leftVal = leftVal + 30
                    Object.assign(ball.style,{
                        left :`${leftVal}px`
                     })
                }

               
            }
           
            
        })
    }


