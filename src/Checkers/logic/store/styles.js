export const pieceStyles = {
        1: {
            themes: {
                aqua:{
                    fillStyle : "#b3c0d6",
                    strokeStyle : '#9aa2af'
                },
                lava:{
                    fillStyle : "#b3c0d6",
                    strokeStyle : '#9aa2af'
                }
            }
        },

        2: {
            themes: {
                aqua:{
                    fillStyle : "#1b1c1e",
                    strokeStyle : '#545556'
                },
                lava:{
                    fillStyle : "#480007",
                    strokeStyle : '#7a7878'
                }
            }
        }
}

export const cellStyles = {
    0: {
        themes: {
            aqua:{
                fillStyle : "rgba(255, 255, 255, 0.75)",
                hoveredStyle:  "rgba(255, 255, 255, 0.5)"
            },
            lava:{
                fillStyle : "rgba(255, 255, 255, 0.75)",
                hoveredStyle:  "rgba(255, 255, 255, 0.5)"
            },
            ruby:{
                fillStyle : "rgba(255, 255, 255, 0.75)",
                hoveredStyle:  "rgba(255, 255, 255, 0.5)"
            }
        }
    },

    1: {
        themes: {
            aqua:{
                fillStyle : "rgba(0,53,107,1)",
                hoveredStyle: "rgba(0,53,107,0.5)",
                selectedStyle: "#84b3ff"
            },
            lava:{
                fillStyle : "#dd4e1a",
                hoveredStyle:  "#ff9966",
                selectedStyle: "blue"
            },
            ruby: {
                fillStyle : "rgba(178, 5, 5, .85)",
                hoveredStyle: "rgba(178, 5, 5, .55)",
                selectedStyle: "rgba(243, 195, 52, 0.8)"
            }
        }
    }
}