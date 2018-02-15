# EternagameScript2018
## Releases:
   - https://github.com/Worseize/EternaScript2018-v.1.8.2-first-release old stable version 1.8.2 (updated 07.02.2018) repository
   - https://worseize.github.io/EternaScript2018-v.1.8.2-first-release/ old stable version 1.8.2 (updated 07.02.2018) app
   
## Video manual (playlist) :
   - https://www.youtube.com/watch?v=dYDxDWK1A4U&list=PL7CHTefBrBuj3EMghG_MJ-AuV1Hwmrab6 youtube playlist link
   - at the moment supports only in google chrome browser (CSS , DOM objects could be overfit in firefox but canvas script should work same)

## ![engine image 1D --> 2D](/img/Engine.jpg?raw=true)

## Options:
1. __On all pages__
     - __Save .json File__ => (save into .json , only current state from memory at memoryPosition) __ONLY ONE STATE__ => ( memoryPosition / max ).  
     - __Load .json File__ => __ONLY ONE STATE__ (First object from .json file).
     - __Shift__ + __(1 | 2 | 3 | 4)__ => __SWITCH PAGE__
     - __T | B__ => scale canvas elements __DOWN | UP__
     - __mouseWheel__ +  __+__ | __-__ => scale canvas elements __DOWN | UP__ 
     - __ESC__ - go to __page1__ | go to __page2__
2. __On page 2__
     - __In all modes__
        - __SPACE__ => change mode auto | manual 
        - __SHIFT + W | S__ => move oligo location ( Y - axis ) __UP | DOWN__
            - Choose oligo that you are trying to move in oligo select box before you apply "W" or "S".
            - You could save that options for future and load saved file later it will open your saved memory that stores oligo location on canvas and ofcource data.    
     - __In manual mode__ 
         - __leftMouseClick on oligo letter +__
             - __Shift__ => to change oligo letter A => U => G => C => E => A
             - __Ctrl__ => to add here "E" 
             - __Alt__ => to remove letter
         - __SHIFT + Q | E__ => move oligo1 to  __LEFT | RIGHT__
         - __SHIFT + A | D__ => move oligo2 to __LEFT | RIGHT__
     - __In auto mode__
         - __V | N__ => change memory position __LOWER | HIGHER__
3. __On page 3__
    - __In all modes__
        - __SPACE__ => change mode auto | manual 
    - __In manual mode__
        - __leftMouseClick on oligo letter +__
            - __Shift__ => to change oligo letter A => U => G => C => E => A
            - __Ctrl__ => to add here "E" 
            - __Alt__ => to remove letter
        - __R | Y__ => move loop to  __LEFT | RIGHT__
        - __F | H__ => move left tail to loop __IN | OUT__
        - __V | N__ => move right tail to loop __IN | OUT__
        - __SHIFT + W | S__ => move whole RNA __UP | DOWN__
        - __SHIFT + A | D__ => move whole RNA __LEFT | RIGHT__
        - __Shift__ + __CLICK__ ==> change nuclebase letter
    - __In auto mode__
        - __V | N__ => change memory position __LOWER | HIGHER__

## input letters that allowed : 
- A (Adenine)
- U (Uracil)
- G (Guanine)
- C (Cytosine)
- E (Empty)

### __STATE ALL PAGE 1D ENGINE__  Add oligos into first box , oligos into second box and it calculates rna in state All. Because it does not count energy between oligos and rna it probably not predict rna folding.
   - Made to solve hard tasks eternagame.com

## Currently working on:

### Known bugs:
   - On Page2 :
     - rna Origin not at [0, 0]  it is at: [1.5 * baseSize * scaler, 1.5 * baseSize * scaler] => need to be at [0, 0] in future
     - ~~if rna have odd loop then user should mouseClick 1/2 base higher to catch (parts 2, 3, 4, 5, 6)~~  

### Last update:
   - On page2 :
     - Fixed bugs :
       - mouseClick event if loop is odd fixed
       - textSize when scale fixed
       - pages renamed to 1, 2, 3, 4
       - memory dislpay added
     - Added : 
       - All Shift + Click Events on 2D Engine [remove | add | change] letter.
       - readme and page 1 updated

### CODE STRUCTURE:
  - Pages
    - page1 manual page
    - page2 1D engine page 
    - page3 2D engine page 
    - page4 empty 

## Future plans:
   - Near future :
     - Make more functions to wrap the code and make code less in volume
     - Change rna origin on (page3)
     - Add 3rd oligo input (page2)
     - Add Oligos on (page3)
     -Improove rna step move in maual mode on (page3) (R, Y, F, H, V, N)
   - In a distant future :
     - Improove folding engine (page3) ==> make it better predictor than NuPack
     - AI solving machine , get data from eternagame.org


## Have an idea to make it better ? 
   - create issue : https://github.com/Worseize/EternagameScript2018/issues/new 
   - or create .js file and Pull Request

## Author : 
   - Nikita Bogdanov
   - January 2018 --> February 2018 
   - Estonia , Tallinn.