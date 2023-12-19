"use strict";

let latsList = [];
let lngsList = [];



let porchfestData = {  // was parksData
  "performances": [  //was parks
    {
      "perfName": "Acoustic-Thursday ",
      "description": "Guitars, mandolin, fiddle, banjo and vocals! Fun mix of Folk/Country/Bluegrass",
      "perfTime": "12:30pm",
      "perfLength": "1 hour",
      "SocialMedia": "Acoustic-Thursday.com",
      "Prearranged": "112 Dalton Rd",
      "latitude": "42.3826846",
      "longitude": "-71.161134"
    },
    {
        "perfName": "Business Goose",
        "description": "Business Goose is a modern Jazz/Funk band based in New England.  Drawing on artists from John Coltrane to Snarky Puppy, their music is one big melting pot of styles.\nThe members met at the 2022 Litchfield Jazz Camp, and a few weeks later, they recorded their first EP, 'The Woodshop Sessions'.  Six months later, they recorded their first full length album, titled 'Bongoes with Issues', which was their first release containing original music.  Their second album was recorded at the end of July 2023, and is expected to be released within the month of September.  Stay tuned!",
        "perfTime": "2:00pm",
        "perfLength": "90 minutes",
        "SocialMedia": "businessgoosemusic@gmail.com",
        "Prearranged": "116 Orchard Street",
        "latitude": "42.3915439",
        "longitude": "-71.1716105"
    },
    {
        "perfName": "Andrew Sue WIng and Friends",
        "description": "Andrew Sue Wing is a Boston based singer/songwriter and guitarist specializing in funk-rock. Equipped with a strong baritone voice and a unique style of rhythm and lead guitar, heâ€™s able to belt out soaring choruses and deliver soulful ballads. His repertoire includes both original compositions and covers of classics. With influences such as Stevie Wonder, Sam Cooke, Curtis Mayfield, and Gary Clark Jr., his originals combine blues, rock, funk, and soul.",
        "perfTime": "2:00pm",
        "perfLength": "full 2 hours",
        "SocialMedia": "https://andrewsuewing.com/",
        "Prearranged": "156 Common St",
        "latitude": "42.3911322",
        "longitude": "-71.1735688"
    },
        {
          "PerformingName": "The Berklee Professors of Belmont",
          "description": "Concert by The Berklee College of Music Professors who live in and around Belmont.",
          "perfTime": "12:30pm",
          "perfLength": "1 hour",
          "SocialMedia": "www.johnbaboian.com",
          "PrearrangedAddress": "122 Cross St, Belmont, MA 02478",
          "latitude": "42.39950397755575",
          "longitude": "-71.1689150094519"
        },
        {
          "PerformingName": "En Route Jazz Quartet",
          "description": "The EnRoute quartet is composed of 4 professional musicians, they perform music from Pat Metheny, John Scofield and original compositions.",
          "perfTime": "4:30pm",
          "perfLength": "1 hour",
          "SocialMedia": "jeanmariecorrois.com",
          "PrearrangedAddress": "17 Sycamore Street, Belmont, MA 02478",
          "latitude": "42.38677382982333",
          "longitude": "-71.1880981211644"
        },
        {
          "PerformingName": "Box of Records",
          "description": "Classic rock cover band that plays your favorite tunes from the 60s through today!",
          "perfTime": "2:30pm",
          "perfLength": "2 hour",
          "SocialMedia": "https://www.facebook.com/BoxofRecordsBand?mibextid=LQQJ4d",
          "PrearrangedAddress": "6 Stella Rd, Belmont, MA 02478",
          "latitude": "42.40210851449226",
          "longitude": "-71.17096417767691"
        },
        {
          "PerformingName": "The Motown Band",
          "description": "Playing the hits and pulse of Motown",
          "perfTime": "1:30pm",
          "perfLength": "2 hour",
          "SocialMedia": "https://www.youtube.com/watch?v=xBk4zltyN2c&list=PLE6NlkF0BCY0mYQYPERIyfu4q27LPwA19&pp=gAQBiAQB",
          "PrearrangedAddress": "52 Washington Street, Belmont, MA 02478",
           "latitude": "42.3870083552469",
          "longitude": "-71.17249186435949"
        },

        {
          "PerformingName": "Summer Dads",
          "description": "Summer Dads have lit the grill and promise cover songs for everyone, from medium rare to well done. Don't be late or you'll have to ketchup!",
          "perfTime": "3:30pm",
          "perfLength": "1 hour",
          "SocialMedia": "https://www.youtube.com/watch?v=HwrPr3M0JkU",
          "PrearrangedAddress": "65 Kilburn Rd, Belmont, MA 02478",
          "latitude": "42.3911322",
          "longitude": "-71.1735688"
        },
        {
          "PerformingName": "Sarah Albright",
          "description": "Just a gal and her guitar and some folk music. Special fiddle guest to perform.",
          "perfTime": "4:30pm",
          "perfLength": "1 hour",
          "SocialMedia": "https://www.youtube.com/watch?v=ETLOVbTC1Bw&list=PLmxrtVowTqOxZrosgD6clK94dAOxt2zHy",
          "PrearrangedAddress": "24 Wiley Road, Belmont, MA 02478",
          "latitude": "42.39142939575537",
          "longitude": "-71.17812286500018"
        },
 
          {
            "PerformingName": "Music from Turkiye",
            "description": "We will perform classical and folk music from Turkey with traditional Turkish music instruments",
            "perfTime": "2:30pm",
            "perfLength": "3 hour",
            "SocialMedia": "volkanefe.com",
            "PrearrangedAddress": "6 Gale Rd, Belmont, MA 02478",
           "latitude": "42.388910656095966",
           "longitude": " -71.16136700920504"
          }
  ] 
};

window.addEventListener("DOMContentLoaded", function(){ // could put this in map.js instead
  let popupTemplate = document.querySelector 
  ("#template-infowindow").innerHTML;
  let compiledPopupTemplate = Handlebars.compile(popupTemplate);  
  let map = L.map("map_container");
  map.setView([42.39,-71.17],14);


        /* required attribution */
        let attributionHtml = '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors';

        /* create tile layer with attribution */
        let tileLayer = L.tileLayer(
          "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", 
        {
            attribution: attributionHtml,
       } 
       );  
       tileLayer.addTo(map);
       let markersLayer = new L.LayerGroup();

       for (let place of porchfestData.performances) {
        console.log(place);
        latsList.push(place.latitude);  //push grabs lat and long
        lngsList.push(place.longitude);
        let latlng = [place.latitude, place.longitude];


        //   altText object for alt text for each property
        let altText = {
            perfName: "Alternative text for " + place.perfName,
            address: "Alternative text for Performance address" + place.address
        };

        // add alt tex to data object 

        let dataWithAlt = Object.assign({}, place, altText);
        let popupHTML = compiledPopupTemplate(place);
        let marker = L.marker(latlng);

        marker.bindPopup(popupHTML);
        markersLayer.addLayer(marker);
        markersLayer.addTo(map);
       }


})