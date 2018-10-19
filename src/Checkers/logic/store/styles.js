export const pieceStyles = {
        1: {
            themes: {
                aqua:{
                    fillStyle : "#b3c0d6",
                    strokeStyle : '#9aa2af'
                },
                lava:{
                    fillStyle : "#eae7cc",
                    strokeStyle:  "#f2f47d",
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
                    fillStyle : "#3e3529",
                    strokeStyle:  "#262727",
                }
            }
        }
}

export const cellStyles = {
    0: {
        themes: {
            aqua:{
                fillStyle : "rgba(255, 255, 255, 0.75)",
                hoveredStyle:  "rgba(255, 255, 255, 0.5)",
            },
            lava:{
                fillStyle : "#e8eaea",
                hoveredStyle:  "#eee3b1",
            }
        }
    },

    1: {
        themes: {
            aqua:{
                fillStyle : "rgba(0,53,107,1)",
                hoveredStyle: "rgba(0,53,107,0.5)",
                selectedStyle: "rgba(236, 229, 135, 0.9)"
            },
            lava:{
                fillStyle : "#dd4e1a",
                hoveredStyle:  "#ff9966",
                selectedStyle: "blue"
            }
        }
    }
}