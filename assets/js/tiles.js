$('Document').ready(function(){

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

})();
