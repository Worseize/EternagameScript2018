# EternagameScript2018
## Video manual (playlist) :
   - https://www.youtube.com/watch?v=dYDxDWK1A4U&list=PL7CHTefBrBuj3EMghG_MJ-AuV1Hwmrab6
   ![engine image 1D --> 2D](https://github.com/Worseize/EternagameScript2018/tree/master/img/Engine.jpg)
## Options:
1. __On all pages__
     - __Save .json File__ => (save into .json , only current state from memory at memoryPosition) __ONLY ONE STATE__ => ( memoryPosition / max ).  
     - __Load .json File__ => __ONLY ONE STATE__ (First object from .json file).
     - __Z | X__ => switch page __BACKWARD | FORWARD__
     - __T | B__ => scale canvas elements __DOWN | UP__
     - __mouseWheel + | -__ => scale canvas elements __DOWN | UP__ 
     - __ESQ__ - go to helpMenu | go to State All page
2. __On page 1 (State all)__
     - __In all modes__
        - __SPACE__ => change mode auto | manual 
        - __Q | W__ => move oligo location ( Y - axis ) __UP | DOWN__
            - Choose oligo that you are trying to move in oligo select box before you apply "Q" or "W".
            - You could save that options for future and load saved file later it will open your saved memory that stores oligo location on canvas and ofcource data.    
     - __In manual mode__
         - __Shift , Ctrl , Alt__ - have they own memory once you push that key it will remember it (push any other key to reset | forget) 
         - __leftMouseClick on oligo letter +__
             - __Shift__ => to change oligo letter A => U => G => C => E => A
             - __Ctrl__ => to add here "E" 
             - __Alt__ => to remove letter
         - __R | Y__ => move oligo1 to  __LEFT | RIGHT__
         - __F | H__ => move oligo2 to __LEFT | RIGHT__
     - __In auto mode__
         - __V | N__ => change memory position __LOWER | HIGHER__
3. __On page 2 (State 1)__
     - __R | Y__ => move loop to  __LEFT | RIGHT__
     - __F | H__ => move left tail __IN | OUT__  (H - make more static steam pairs and less tail that will connect to Oligo)
     - __V | N__ => move right tail __IN | OUT__ (V - make more static steam pairs and less tail that will connect to Oligo)

## input letters that allowed : 
- A
- U
- G
- C
- E

### That means adenine , uracil , guanine , cytosine , empty.

### Add oligo1 , oligo2 and calculate rna. Because it does not count energy between oligos and rna it probably not predict rna folding.
   - Made to solve hard tasks eternagame.com

## Currently working on:
   - code optimization (too many operations are called everytime user change any value) (prediction could be 2-3 times faster)

### Last update:
  -manual mode is done.

## Have an idea to make it better ? 
   - create issue : https://github.com/Worseize/EternagameScript2018/issues/new 
   - or create .js file and Pull Request

## Author : 
   - Nikita Bogdanov
   - January 2018 --> February 2018 
   - Estonia , Tallinn.