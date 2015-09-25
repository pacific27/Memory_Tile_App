$('document').ready(function(){

    $('#shuffle').click(memory.shuffle);
    $('#deck').change(memory.shuffle);
});

var memory = (function() {

  var arrays = {

          linux: ['img/linux/linuxDebian', 'img/linux/linuxDebian',
              'img/linux/linuxArch', 'img/linux/linuxArch',
              'img/linux/linuxUbuntu', 'img/linux/linuxUbuntu',
              'img/linux/linuxOpenSuse', 'img/linux/linuxOpenSuse',
              'img/linux/linuxChakra', 'img/linux/linuxChakra',
              'img/linux/linuxSliTaz', 'img/linux/linuxSliTaz',
              'img/linux/linuxAntiX', 'img/linux/linuxAntiX',
              'img/linux/linuxMint', 'img/linux/linuxMint',
              'img/linux/linuxKali', 'img/linux/linuxKali',
              'img/linux/linuxSlackWare', 'img/linux/linuxSlackWare',
              'img/linux/linuxGentoo', 'img/linux/linuxGentoo',
              'img/linux/linuxPuppy', 'img/linux/linuxPuppy',
              'img/linux/linuxBodhi', 'img/linux/linuxBodhi',
              'img/linux/linuxCentOS', 'img/linux/linuxCentOS',
              'img/linux/linuxElementary', 'img/linux/linuxElementary'
          ],

          seinfeld: ['img/seinfeld/seinfeldBoss', 'img/seinfeld/seinfeldBoss',
              'img/seinfeld/seinfeldCastanzaMom', 'img/seinfeld/seinfeldCastanzaMom',
              'img/seinfeld/seinfeldCastanza', 'img/seinfeld/seinfeldCastanza',
              'img/seinfeld/seinfeldCosmo', 'img/seinfeld/seinfeldCosmo',
              'img/seinfeld/seinfeldElaine', 'img/seinfeld/seinfeldElaine',
              'img/seinfeld/seinfeldGeorge', 'img/seinfeld/seinfeldGeorge',
              'img/seinfeld/seinfeldGroup', 'img/seinfeld/seinfeldGroup',
              'img/seinfeld/seinfeldJerry', 'img/seinfeld/seinfeldJerry',
              'img/seinfeld/seinfeldNewman', 'img/seinfeld/seinfeldNewman',
              'img/seinfeld/seinfeldNewman2', 'img/seinfeld/seinfeldNewman2',
              'img/seinfeld/seinfeldSoupNazi', 'img/seinfeld/seinfeldSoupNazi',
              'img/seinfeld/seinfeldSteinbrenner', 'img/seinfeld/seinfeldSteinbrenner',
              'img/seinfeld/seinfeldUncleLeo', 'img/seinfeld/seinfeldUncleLeo',
              'img/seinfeld/seinfeldDecider', 'img/seinfeld/seinfeldDecider',
              'img/seinfeld/seinfeldBabu', 'img/seinfeld/seinfeldBabu'
          ],

          starTrek: ['img/starTrek/starTrekWorf', 'img/starTrek/starTrekWorf',
              'img/starTrek/starTrekCisco', 'img/starTrek/starTrekCisco',
              'img/starTrek/starTrekData', 'img/starTrek/starTrekData',
              'img/starTrek/starTrekKirk', 'img/starTrek/starTrekKirk',
              'img/starTrek/starTrekSpock', 'img/starTrek/starTrekSpock',
              'img/starTrek/starTrekQuark', 'img/starTrek/starTrekQuark',
              'img/starTrek/starTrekMartok', 'img/starTrek/starTrekMartok',
              'img/starTrek/starTrekGarok', 'img/starTrek/starTrekGarok',
              'img/starTrek/starTrekDax', 'img/starTrek/starTrekDax',
              'img/starTrek/starTrekGeordi', 'img/starTrek/starTrekGeordi',
              'img/starTrek/starTrekKhan', 'img/starTrek/starTrekKhan',
              'img/starTrek/starTrekOdo', 'img/starTrek/starTrekOdo',
              'img/starTrek/starTrekBorgQueen', 'img/starTrek/starTrekBorgQueen',
              'img/starTrek/starTrekGalDukat', 'img/starTrek/starTrekGalDukat',
              'img/starTrek/starTrekSevenOfNine', 'img/starTrek/starTrekSevenOfNine'
          ]
      };//end arrays

      /*Global Variables*/
      var deck = "";
      var cardBackGround = "";


      /* Randomly sort an array by calculating a value within array
       * range and then swaps values by randomly calculated value
       */
      Array.prototype.randomizeArray = function() {

              var i = this.length;
              var j = 0;
              var temp = "";

              while (--i > 0) {
                  j = Math.floor(Math.random() * (i + 1));
                  temp = this[j];
                  this[j] = this[i];
                  this[i] = temp;
              }
          } //end randomizeArray

      /* Checks which deck the user has selected to play*/
      function deckSelected() {
        deck = $('#deck option:selected').val();
      } //end deckSelected

      /* Sets the deck background to user selected deck*/
      function changeBackground() {

        switch(deck) {
          case 'linux':
            $('[id^=card_]').css('background', 'url(assets/img/linux/linux_bg.jpg)');
            cardBackGround = 'assets/img/linux/linux_bg.jpg';
            break;

          case 'seinfeld':
            $('[id^=card_]').css('background', 'url(assets/img/seinfeld/seinfeldLogo.jpg)');
            cardBackGround = 'assets/img/seinfeld/seinfeldLogo.jpg';
            break;

          case 'starTrek':
            $('[id^=card_]').css('background', 'url(assets/img/starTrek/starTrekLogo.jpg)');
            cardBackGround = 'assets/img/starTrek/starTrekLogo.jpg';
            break;
        } // End Switch
      } // End changeBackGround

      /*Creates the cards for the memory game after randomizing array selected by user putting each card into its own <div>*/
      function shuffle() {

              var output = '';

              //call deckSelected to find which deck to shuffle/create
              deckSelected();

              //shuffle the deck deckSelected returned
              arrays[deck].randomizeArray();

              /*Now that cards are randomized within the array create the cards for the
              game board giving each a unique id and passing (cardId,val) onClick*/
              for (var i = 0; i < arrays[deck].length; i++) {
                  output += '<div class="tile" id="card_' + i + '" onclick="memory.flipCard(this,\'' + arrays[deck][i] + '\')"></div>';
              }

              //put the newly created cards into the gameboard
              document.getElementById('memory-board').innerHTML = output;

              //Change the back of card to represent the deck that is being played
              changeBackground();
          } //End Shuffle

      var public = {
          shuffle: shuffle,
          arrays: arrays,
          deckSelected: deckSelected,
          changeBackground: changeBackground
      };

      return public;

})();
