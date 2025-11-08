window.onload = function(){

    const dyes = [
        [
            {
                "img" : "00.png",
                "name": "No Dye",
                "row": 0,
                "col": 0,
                "main_color": "#000000",
                "fade_color": "#000000",
                "text_color": "#FFFFFF"
            },
            {
                "img": "01_LUSH_GREEN.png",
                "name": "Lush Green",
                "row": 0,
                "col": 1,
                "main_color": "#469E53",
                "fade_color": "#183C1A"
            },
            {
                "img": "02_SANDFURY_YELLOW.png",
                "name": "Sandfury Yellow",
                "row": 0,
                "col": 2,
                "main_color": "#B59C26",
                "fade_color": "#47390E"
            },
            {
                "img": "03_ELWYNN_PUMPKIN.png",
                "name": "Elwynn Pumpkin",
                "row": 0,
                "col": 3,
                "main_color": "#E08127",
                "fade_color": "#B46016"
            }
        ],
        [
            {
            "img": "04_BONE_WHITE.png",
            "name": "Bone White",
            "row": 1,
            "col": 0,
            "main_color": "#F2F0D4",
            "fade_color": "#C6BDA2"
            },
            {
            "img": "05_OBSIDIUM_BLACK.png",
            "name": "Obsidium Black",
            "row": 1,
            "col": 1,
            "main_color": "#484C53",
            "fade_color": "#131416"
            },
            {
            "img": "06_EARTHEN_BROWN.png",
            "name": "Earthen Brown",
            "row": 1,
            "col": 2,
            "main_color": "#755837",
            "fade_color": "#2E2216"
            },
            {
            "img": "07_STORMHEIM_GREY.png",
            "name": "Stormheim Grey",
            "row": 1,
            "col": 3,
            "main_color": "#746F69",
            "fade_color": "#2E2A27"
            }
        ],
        [
            {
            "img": "08_SILVERSAGE_GREEN.png",
            "name": "Silversage Green",
            "row": 2,
            "col": 0,
            "main_color": "#A0B78C",
            "fade_color": "#495440"
            },
            {
            "img": "09_UNGORO_GREEN.png",
            "name": "Un'goro Green",
            "row": 2,
            "col": 1,
            "main_color": "#1F7B65",
            "fade_color": "#0E3128"
            },
            {
            "img": "10_FIREBLOOM_RED.png",
            "name": "Firebloom Red",
            "row": 2,
            "col": 2,
            "main_color": "#A93F1F",
            "fade_color": "#40170C"
            },
            {
            "img": "11_KALIMDOR_SAND.png",
            "name": "Kalimdor Sand",
            "row": 2,
            "col": 3,
            "main_color": "#AC8D59",
            "fade_color": "#44341E"
            }
        ],
        [
            {
            "img": "12_ZEPHRAS_BLUE.png",
            "name": "Zephras Blue",
            "row": 3,
            "col": 0,
            "main_color": "#84CAE5",
            "fade_color": "#598DA1"
            },
            {
            "img": "13_KODOHIDE_BROWN.png",
            "name": "Kodohide Brown",
            "row": 3,
            "col": 1,
            "main_color": "#A46342",
            "fade_color": "#46221A"
            },
            {
            "img": "14_DUSTWALLOW_GREEN.png",
            "name": "Dustwallow Green",
            "row": 3,
            "col": 2,
            "main_color": "#929639",
            "fade_color": "#333713"
            },
            {
            "img": "15_EMERALD_DREAMING.png",
            "name": "Emerald Dreaming",
            "row": 3,
            "col": 3,
            "main_color": "#5EBA91",
            "fade_color": "#214837"
            }
        ],
        [
            {
            "img": "16_VORTEX_TEAL.png",
            "name": "Vortex Teal",
            "row": 4,
            "col": 0,
            "main_color": "#A8DAE3",
            "fade_color": "#385256"
            },
            {
            "img": "17_SUNGRASS_YELLOW.png",
            "name": "Sungrass Yellow",
            "row": 4,
            "col": 1,
            "main_color": "#FFF597",
            "fade_color": "#EBD46A"
            },
            {
            "img": "18_SAVANNAH_GOLD.png",
            "name": "Savannah Gold",
            "row": 4,
            "col": 2,
            "main_color": "#E3C055",
            "fade_color": "#B48D18"
            },
            {
            "img": "19_VOLDUN_TAUPE.png",
            "name": "Vol'dun Taupe",
            "row": 4,
            "col": 3,
            "main_color": "#766E55",
            "fade_color": "#312B1D"
            }
        ],
        [
            {
            "img": "20_RATCHET_RUST.png",
            "name": "Ratchet Rust",
            "row": 5,
            "col": 0,
            "main_color": "#73392F",
            "fade_color": "#311611"
            },
            {
            "img": "21_GRAVEMOSS_GREEN.png",
            "name": "Gravemoss Green",
            "row": 5,
            "col": 1,
            "main_color": "#5B6759",
            "fade_color": "#20271F"
            },
            {
            "img": "22_TIMBERMAW_BROWN.png",
            "name": "Timbermaw Brown",
            "row": 5,
            "col": 2,
            "main_color": "#6D5B52",
            "fade_color": "#2F2622"
            },
            {
            "img": "23_GRIZZLY_HILLS_GREEN.png",
            "name": "Grizzly Hills Green",
            "row": 5,
            "col": 3,
            "main_color": "#4F6740",
            "fade_color": "#1E2A17"
            }
        ],
        [
            {
            "img": "24_TIDESAGE_TEAL.png",
            "name": "Tidesage Teal",
            "row": 6,
            "col": 0,
            "main_color": "#3D8180",
            "fade_color": "#183231"
            },
            {
            "img": "25_HIGHBORNE_MARBLE.png",
            "name": "Highborne Marble",
            "row": 6,
            "col": 1,
            "main_color": "#D7CCC7",
            "fade_color": "#59504D"
            },
            {
            "img": "26_EARTHROOT.png",
            "name": "Earthroot",
            "row": 6,
            "col": 2,
            "main_color": "#7B6E2B",
            "fade_color": "#2A2510"
            },
            {
            "img": "27_DEEP_MAGEROYAL_RED.png",
            "name": "Deep Mageroyal Red",
            "row": 6,
            "col": 3,
            "main_color": "#692727",
            "fade_color": "#260E0E"
            }
        ],
        [
            {
            "img": "28_HINTERLANDS_HICKORY.png",
            "name": "Hinterlands Hickory",
            "row": 7,
            "col": 0,
            "main_color": "#854949",
            "fade_color": "#301919"
            },
            {
            "img": "29_HORDE_RED.png",
            "name": "Horde Red",
            "row": 7,
            "col": 1,
            "main_color": "#B01C1E",
            "fade_color": "#4C090A"
            },
            {
            "img": "30_GILNEAN_ROSE.png",
            "name": "Gilnean Rose",
            "row": 7,
            "col": 2,
            "main_color": "#A62A47",
            "fade_color": "#3E0E19"
            },
            {
            "img": "31_RAIN_POPPY.png",
            "name": "Rain Poppy",
            "row": 7,
            "col": 3,
            "main_color": "#E76B6D",
            "fade_color": "#5C262C"
            }
        ],
        [
            {
            "img": "32_ARCWINE.png",
            "name": "Arcwine",
            "row": 8,
            "col": 0,
            "main_color": "#AB487D",
            "fade_color": "#4A1C2D"
            },
            {
            "img": "33_NETHERSTORM_FUCHSIA.png",
            "name": "Netherstorm Fuchsia",
            "row": 8,
            "col": 1,
            "main_color": "#B85AB4",
            "fade_color": "#4F214E"
            },
            {
            "img": "34_MOONBERRY_AMATHYST.png",
            "name": "Moonberry Amathyst",
            "row": 8,
            "col": 2,
            "main_color": "#7E4675",
            "fade_color": "#30172B"
            },
            {
            "img": "35_KIRIN_TOR_VIOLET.png",
            "name": "Kirin Tor Violet",
            "row": 8,
            "col": 3,
            "main_color": "#8E4AB8",
            "fade_color": "#351A49"
            }
        ],
        [
            {
            "img": "36_VOID_VIOLET.png",
            "name": "Void Violet",
            "row": 9,
            "col": 0,
            "main_color": "#6137B2",
            "fade_color": "#24183F"
            },
            {
            "img": "37_NIGHTSONG_LILAC.png",
            "name": "Nightsong Lilac",
            "row": 9,
            "col": 1,
            "main_color": "#9B7FD9",
            "fade_color": "#4F3C77"
            },
            {
            "img": "38_DUSK_LILY.png",
            "name": "Dusk Lily Grey",
            "row": 9,
            "col": 2,
            "main_color": "#AC99D3",
            "fade_color": "#6F5F93"
            },
            {
            "img": "39_FORSAKEN_PLUM.png",
            "name": "Forsaken Plum",
            "row": 9,
            "col": 3,
            "main_color": "#73627C",
            "fade_color": "#2A242E"
            }
        ],
        [
            {
            "img": "40_MIDNIGHT_BLUE.png",
            "name": "Midnight Blue",
            "row": 10,
            "col": 0,
            "main_color": "#3E4ED2",
            "fade_color": "#161D50"
            },
            {
            "img": "41_ALLIANCE_BLUE.png",
            "name": "Alliance Blue",
            "row": 10,
            "col": 1,
            "main_color": "#3F5592",
            "fade_color": "#141B34"
            },
            {
            "img": "42_NAZJATAR_NAVY.png",
            "name": "Nazjatar Navy",
            "row": 10,
            "col": 2,
            "main_color": "#4C506E",
            "fade_color": "#1C1E28"
            },
            {
            "img": "43_STORMSTEEL.png",
            "name": "Stormsteel",
            "row": 10,
            "col": 3,
            "main_color": "#C0D1CE",
            "fade_color": "#414646"
            }
        ],
        [
            {
            "img": "44_COPPER.png",
            "name": "Copper",
            "row": 11,
            "col": 0,
            "main_color": "#C78B45",
            "fade_color": "#422C18"
            },
            {
            "img": "45_ZANDALARI_GOLD.png",
            "name": "Zandalari Gold",
            "row": 11,
            "col": 1,
            "main_color": "#F5C83D",
            "fade_color": "#5E3E10"
            },
            {
            "img": "46_MESQUITE_BROWN.png",
            "name": "Mesquite Brown",
            "row": 11,
            "col": 2,
            "main_color": "#9F7F5B",
            "fade_color": "#402B1B"
            },
            {
            "img": "47_BRASS.png",
            "name": "Brass",
            "row": 11,
            "col": 3,
            "main_color": "#E3CE79",
            "fade_color": "#4E4321"
            }
        ],
        [
            {
            "img": "48_BRONZE.png",
            "name": "Bronze",
            "row": 12,
            "col": 0,
            "main_color": "#E3CE79",
            "fade_color": "#4E4321" 
            },
            {
            "img": "49_DARK_IRON.png",
            "name": "Dark Iron",
            "row": 12,
            "col": 1,
            "main_color": "#868D90",
            "fade_color": "#282A2B"
            },
            {
            "img": "50_KUL_TIRAN_STEEL.png",
            "name": "Kul Tiran Steel",
            "row": 12,
            "col": 2,
            "main_color": "#A2D5D1",
            "fade_color": "#3A4746"
            },
            {
            "img": "51_GOLD.png",
            "name": "Gold",
            "row": 12,
            "col": 3,
            "main_color": "#DFBE20",
            "fade_color": "#CC8E15"
            }
        ],
        [
            {
            "img": "52_IRONCLAW.png",
            "name": "Ironclaw",
            "row": 13,
            "col": 0,
            "main_color": "#738675",
            "fade_color": "#272E27"
            },
            {
            "img": "53_DARK_GOLD.png",
            "name": "Dark Gold",
            "row": 13,
            "col": 1,
            "main_color": "#9C8337",
            "fade_color": "#322810"
            },
            {
            "img": "54_WARM_TEAK.png",
            "name": "Warm Teak",
            "row": 13,
            "col": 2,
            "main_color": "#C69A66",
            "fade_color": "#4B301D"
            },
            {
            "img": "55_BASIC_BIRCH.png",
            "name": "Basic Birch",
            "row": 13,
            "col": 3,
            "main_color": "#F3E2CE",
            "fade_color": "#604A3B"
            }
        ],
        [
            {
            "img": "56_PINEWOOD.png",
            "name": "Pinewood",
            "row": 14,
            "col": 0,
            "main_color": "#A7A47C",
            "fade_color": "#3B3722"
            },
            {
            "img": "57_DARKWOOD.png",
            "name": "Darkwood",
            "row": 14,
            "col": 1,
            "main_color": "#8E8173",
            "fade_color": "#2C2725"
            },
            {
            "img": "58_HIGHLAND_BIRCH.png",
            "name": "Highland Birch",
            "row": 14,
            "col": 2,
            "main_color": "#DFCEAE",
            "fade_color": "#968B7B"
            },
            {
            "img": "59_HOLY_OAK_TAN.png",
            "name": "Holy Oak Tan",
            "row": 14,
            "col": 3,
            "main_color": "#DFC48C",
            "fade_color": "#4F3B26"
            }
        ],
        [
            {
            "img": "60_PALE_UMBER.png",
            "name": "Pale Umber",
            "row": 15,
            "col": 0,
            "main_color": "#C0B096",
            "fade_color": "#483B35"
            },
            {
            "img": "61_MAHOGANY.png",
            "name": "Mahogany",
            "row": 15,
            "col": 1,
            "main_color": "#694234",
            "fade_color": "#41251E"
            },
            {
            "img": "62_HEARTWOOD.png",
            "name": "Heartwood",
            "row": 15,
            "col": 2,
            "main_color": "#8A744B",
            "fade_color": "#34261A"
            }
        ]
    ]

    function createMap(dyes){
    const dyemap = document.getElementById("dyemap");

    for (let i = 0; i < dyes.length; i++) {
        const newRow = document.createElement("tr");

        for (let x =0;x<dyes[i].length; x++){

            const newCell = document.createElement("td");
            newCell.style.backgroundImage = 'linear-gradient(to bottom right, '+dyes[i][x]["main_color"]+ ' 0%,'+dyes[i][x]["main_color"]+ ' 40%,'+dyes[i][x]["fade_color"]+ ' 60%,'+dyes[i][x]["fade_color"]+ ' 100%)';
            newCell.setAttribute("class", "swatch");
            newCell.innerHTML = dyes[i][x]["name"];
            newCell.onmouseover = function (){showImage("img/"+dyes[i][x]["img"], dyes[i][x]["name"])};
            newCell.onmouseout = function (){hideImage()}; 

            newRow.append(newCell);
        }
            dyemap.append(newRow);
      };
    }

    createMap(dyes);

    function isMobileMediaQuery() {
        return window.matchMedia("(max-width: 767px)").matches; // Example: mobile up to 767px width
    }


    function showImage(imgSrc,altText) {

        if (isMobileMediaQuery()) {
            console.log("Mobile device detected via Media Query.");

            var modal = document.getElementById("example_modal");
            var captionText = document.getElementById("caption");
            var modalImg = document.getElementById("example");

            modal.style.display = "block";
            modalImg.src = imgSrc;
            captionText.innerHTML = altText;

            // Get the <span> element that closes the modal
            var span = document.getElementsByClassName("close")[0];

            // When the user clicks on <span> (x), close the modal
            span.onclick = function() { 
              modal.style.display = "none";
            }


        } else {
            console.log("Desktop device detected via Media Query.");
            const elem = document.getElementById("example_room");
            const dyeImage = new Image();
            dyeImage.src = imgSrc;
            dyeImage.style.zIndex = "1";
            dyeImage.setAttribute("class", "img-fluid");
            dyeImage.setAttribute("alt",altText)
            elem.appendChild(dyeImage);


        }
    }
    function hideImage() {
        const elem = document.getElementById("example_room");
        while (elem.childElementCount > 0) {
            elem.removeChild(elem.lastChild);
        }
    }

}