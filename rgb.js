/* 
    * Project Requirements : 
    *_ Change the background color by generating random 
    rgb color by clicking a button _ _ _
*/

// Step 1 - create onload handler
    function main () {
        const container = document.getElementById ('cnt')
        const btn = document.getElementById ('btn')
        const blank = document.getElementById('blank')

        btn.addEventListener ('click',function () {
            const bgColor = generateRGBColor()
            container.style.backgroundColor = bgColor
            blank.innerHTML = bgColor
        })
    }
    main ()
// Step 2 - random color ganerator function 
    function generateRGBColor () {
        const red = Math.floor ( Math.random () * 255);
        const green = Math.floor ( Math.random () * 255);
        const blue = Math.floor ( Math.random () * 255);
        return `rgb(${red} ${green} ${blue})`
    }
// Step 3 - collect all necessary references
// Step 4 - handle the click event