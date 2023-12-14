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
      "address": "112 Dalton Rd",
      "latitude": "42.3826846",
      "longitude": "-71.161134"
    },
    {
        "perfName": "Business Goose",
        "description": "Business Goose is a modern Jazz/Funk band based in New England.  Drawing on artists from John Coltrane to Snarky Puppy, their music is one big melting pot of styles.\nThe members met at the 2022 Litchfield Jazz Camp, and a few weeks later, they recorded their first EP, 'The Woodshop Sessions'.  Six months later, they recorded their first full length album, titled 'Bongoes with Issues', which was their first release containing original music.  Their second album was recorded at the end of July 2023, and is expected to be released within the month of September.  Stay tuned!",
        "perfTime": "2:00pm",
        "perfLength": "90 minutes",
        "address": "116 Orchard Street",
        "latitude": "42.3915439",
        "longitude": "-71.1716105"
    },
    {
        "perfName": "Andrew Sue WIng and Friends",
        "description": "Andrew Sue Wing is a Boston based singer/songwriter and guitarist specializing in funk-rock. Equipped with a strong baritone voice and a unique style of rhythm and lead guitar, heâ€™s able to belt out soaring choruses and deliver soulful ballads. His repertoire includes both original compositions and covers of classics. With influences such as Stevie Wonder, Sam Cooke, Curtis Mayfield, and Gary Clark Jr., his originals combine blues, rock, funk, and soul.",
        "perfTime": "2:00pm",
        "perfLength": "full 2 hours",
        "address": "156 Common St",
        "latitude": "42.3911322",
        "longitude": "-71.1735688"
    }
     /*   {
          "PerformingName": "The Berklee Professors of Belmont",
          "Description": "Concert by The Berklee College of Music Professors who live in and around Belmont.",
          "SocialMedia": "www.johnbaboian.com",
          "PrearrangedAddress": "122 Cross St, Belmont, MA 02478",
          "Photo": "berklee-professors.jpg"
        },
        {
          "PerformingName": "En Route Jazz Quartet",
          "Description": "The EnRoute quartet is composed of 4 professional musicians, they perform music from Pat Metheny, John Scofield and original compositions.",
          "SocialMedia": "jeanmariecorrois.com",
          "PrearrangedAddress": "17 Sycamore Street, Belmont, MA 02478",
          "Photo": "en-route-jazz-quartet.jpg"
        },
        {
          "PerformingName": "Box of Records",
          "Description": "Classic rock cover band that plays your favorite tunes from the 60s through today!",
          "SocialMedia": "https://www.facebook.com/BoxofRecordsBand?mibextid=LQQJ4d",
          "PrearrangedAddress": "6 Stella Rd, Belmont, MA 02478",
          "Photo": "box-of-records.jpg"
        },
        {
          "PerformingName": "The Motown Band",
          "Description": "Playing the hits and pulse of Motown",
          "SocialMedia": "https://www.youtube.com/watch?v=xBk4zltyN2c&list=PLE6NlkF0BCY0mYQYPERIyfu4q27LPwA19&pp=gAQBiAQB",
          "PrearrangedAddress": "52 Washington Street, Belmont, MA 02478",
          "Photo": "motown-band.jpg"
        },
        {
          "PerformingName": "Business Goose",
          "Description": "Business Goose is a modern Jazz/Funk band based in New England. Drawing on artists from John Coltrane to Snarky Puppy, their music is one big melting pot of styles.",
          "SocialMedia": "https://www.youtube.com/watch?v=th8dCv5BJxM",
          "PrearrangedAddress": "116 Orchard Street, Belmont, MA 02478",
          "Photo": "business-goose.jpg"
        },
        {
          "PerformingName": "Summer Dads",
          "Description": "Summer Dads have lit the grill and promise cover songs for everyone, from medium rare to well done. Don't be late or you'll have to ketchup!",
          "SocialMedia": "https://www.youtube.com/watch?v=HwrPr3M0JkU",
          "PrearrangedAddress": "65 Kilburn Rd, Belmont, MA 02478",
          "Photo": "summer-dads.jpg"
        },
        {
          "PerformingName": "Sarah Albright",
          "Description": "Just a gal and her guitar and some folk music. Special fiddle guest to perform.",
          "SocialMedia": "https://www.youtube.com/watch?v=ETLOVbTC1Bw&list=PLmxrtVowTqOxZrosgD6clK94dAOxt2zHy",
          "PrearrangedAddress": "24 Wiley Road, Belmont, MA 02478",
          "Photo": "sarah-albright.jpg"
        },
        {
          "PerformingName": "Bueller Bueller",
          "Description": "Blasting out songs from the 80's - nothing more, nothing less",
          "SocialMedia": "https://www.youtube.com/watch?v=9yJZZg9Shqw&list=PLE6NlkF0BCY2H3AjuTKrHQ3aJ6MULIMiG&pp=gAQBiAQB",
          "PrearrangedAddress": "52 Washington Street, Belmont, MA 02478",
          "Photo": "bueller-bueller.jpg"
        },
          {
            "PerformingName": "Velmas Vibe",
            "Description": "Cover band covering classic to modern hits",
            "SocialMedia": null,
            "PrearrangedAddress": "6 Stella Rd, Belmont, MA 02478",
            "Photo": "velmas-vibe.jpg"
          },
          {
            "PerformingName": "Music from Turkiye",
            "Description": "We will perform classical and folk music from Turkey with traditional Turkish music instruments",
            "SocialMedia": "volkanefe.com",
            "PrearrangedAddress": "6 Gale Rd, Belmont, MA 02478",
            "Photo": "music-from-turkiye.jpg"
          }*/
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