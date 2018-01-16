# EternagameScript2018

## input letters that allowed : 
- A
- U
- G
- C
- E

### That means adenine , uracil , guanine , cytosine , empty.

## Options:

1. __On all pages__
     - __Save .json File__ => (save into .json , only current state from memory at memoryPosition) __ONLY ONE STATE__ => ( memoryPosition / max ).  
     - __Load .json File__ => __ONLY ONE STATE__ (First object from .json file).
     - __Z__ <= __BACKWARDS__ switch page __FORWARD__ => __X__
     - __T__ <= __DOWN__ scale canvas elements __UP__ => __B__
     - __mouseWheel+Backward__  <= __DOWN__ scale canvas elements __UP__ => __mouseWheel+Forward__
     - __ESQ__ - go to helpMenu | go to State All page
2. __On page 1 (State all)__
     - __In all modes__
        - __SPACE__ => change mode auto/manual 
        - __Q__ <=  __UP__ move oligo location ( Y - axis ) __DOWN__ => __W__
            - Choose oligo that you are trying to move in oligo select box before you apply "Q" or "W".
            - You could save that options for future and load saved file later it will open your saved memory that stores oligo location on canvas and ofcource data.    
     - __In manual mode__
         - __leftMouseClick__ + on oligo letter +
             - __Shift , Ctrl , Alt__ - have memory once you push that key it will remember it (push any other key to reset or forget) 
             - __+Shift__ => change oligo letter A => U => G => C => E => A
             - __+Ctrl__ => add here "E" 
             - __+Alt__ => remove letter
         - __R__ <= __LEFT__ [move oligo1 to] __RIGHT__ => __Y__
         - __F__ <= __LEFT__ [move oligo2 to] __RIGHT__ => __H__
     - __In auto mode__
         - __V__ <= __Decrement__ [change memory position] __Increment__ => __N__

## Add oligo1 , oligo2 and calculate rna. Because it does not count energy between oligos and rna it probably not predict rna folding.
   - Made to solve hard tasks eternagame.com

## Have an idea to make it better ? 
   - create issue : https://github.com/Worseize/EternagameScript2018/issues/new 
   - or create .js file and Pull Request

## Author : 
- Nikita Bogdanov
- January 2018 
- Estonia , Tallinn.