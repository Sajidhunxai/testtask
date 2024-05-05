/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      keyframes: {
        typing: {
          "0%": {
            width: "0%",
            visibility: "hidden"
          },
          "100%": {
            width: "100%"
          }
        },
        blink: {
          "50%": {
            borderColor: "transparent"
          },
          "100%": {
            borderColor: "white"
          }
        }
      },
      animation: {
        typing: "typing 2s steps(20) infinite alternate, blink .7s infinite"
      }
    },
    container: {
      center: true,
      padding: "2rem",
      padding: {
        DEFAULT: "1rem",
        xs: "0rem",
        sm: "0rem",
        lg: "4rem",
        xl: "1rem",
        "2xl": "6rem",
      },
    },
    extend: {
      opacity: ['disabled'],
      border: ['disabled'],
      colors: {
        white: "#fff",
        red:"#ff0000",
        dodgerblue: "#008ffb",
        black: "#000",
        seagreen: {
          100: "#268d61",
          200: "#25845d",
        },
        gray1: {
          100: "#292929",
          200: "#242424",
          300: "#1b1b1b",
          400: "#14192e",
          500: "#18181e",
          600: "#070a16",
          700: "#05050c",
          800: "rgba(0, 0, 0, 0.33)",
          900: "#07090d",
          1000: "#878787",
          1300: "#232124",
          1600: "#011f3b",
          1800: "#050b18",
          2100: "#06090f",
        },
        darkturquoise: {
          100: "#00eafe",
          200: "#00e7fa",
        },
        blueviolet: "#2e53ff",
        lightseagreen: {
          100: "#19bbad",
          200: "#17b3a6",
        },
        mediumslateblue: "#0052fb",
        springgreen: "#83ff6e",
        darkslateblue: {
          100: "#0059b2",
          200: "#1d3d86",
          300: "#193a8b",
          400: "#1e264e",
        },
        green: "#077c07",
        dimgray: {
          100: "#585858",
          200: "#4f4f4f",
        },
        darkslategray: {
          100: "#464646",
          200: "#3f4254",
          300: "#3e3e3e",
          400: "#054a51",
          500: "#2f2f2f",
          600: "#3b3b3b",
          700: "#383838",
          800: "#353535",
        },
        greenyellow: "#8eff5f",
        firebrick: {
          100: "#c00002",
          200: "#b10000",
        },
        deeppink: "#f04378",
        khaki: {
          100: "#ffd98c",
          200: "#ffd88c",
        },
        lightgreen: {
          100: "#b9ffb9",
          200: "#afffaf",
        },
        lightblue: "#b8e4fd",
        pink: {
          100: "#ffc9cc",
          200: "#ffc1c5",
        },
        lightsteelblue: "#cdd5ff",
        mediumseagreen: {
          100: "#50cd89",
          200: "#74b96a",
        },
        cornsilk: "#fcf5de",
        lavenderblush: "#fef0f0",
        brown: "#aa0d29",
        lavender: {
          100: "#edf0ff",
          200: "#fae4fe",
          300: "#d3daff",
        },
        darkblue: "#0020b6",
        lightcyan: "#e2fffd",
        fuchsia: {
          100: "#e62bd3",
          200: "#cf24eb",
        },
        whitesmoke: {
          100: "#f2f2f2",
          200: "#eee",
        },
        honeydew: "#f7ffee",
        silver: "#b5b5b5",
        "gray-300": "#a1a9b8",
        crimson: {
          100: "#f94144",
          200: "#cc0f2d",
        },
        darkgray: {
          100: "#a9a9a9",
          200: "#a1a1a1",
          300: "#9f9f9f",
          400: "#989898",
        },
        cornflowerblue: {
          100: "#7aa6ff",
          200: "#6e9eff",
          300: "#3a67c0",
        },
        mediumaquamarine: "#00bf9e",
        sienna: "#9f5925",
        orangered: "#ec5b08",
        goldenrod: "#f6b74d",
        deepskyblue: {
          100: "#65bcfe",
          200: "#3cb2e4",
        },
        rosybrown: "#8b5c56",
        darkgreen: "#006800",
        royalblue: "#3a66c0",
        paleturquoise: "#a6fff8",
        lightgray: "#d0d0d0",
        gainsboro: "#dbdbdb",
        indianred: "#cf4e4e",
      },
      spacing: {},
      fontFamily: {
        poppins: "Poppins",
        "body-b2": "Inter",
        lato: "Lato",
        sans: ['Montserrat', 'Helvetica', 'Arial', 'sans-serif'],
      },
      borderRadius: {
        "8xs": "5px",
        "10xs": "3px",
        "12xs-7": "0.7px",
        "12xs-3": "0.3px",
        "12xs": "1px",
        "11xs-6": "1.6px",
        "3xs": "10px",
        "9xs-4": "3.4px",
        "12xs-5": "0.5px",
        "11xs-1": "1.1px",
        "6xs-8": "6.8px",
        "11xs-9": "1.9px",
        "8xs-6": "4.6px",
        smi: "13px",
      },
    },
    fontSize: {
      "5xl": "24px",
      base: "16px",
      sm: "14px",
      lg: "18px",
      "13xl": "32px",
      "21xl": "40px",
      "17xl": "36px",
      xl: "20px",
      "11xs": "2px",
      "11xs-7": "1.7px",
      "4xs": "9px",
      lgi: "19px",
      "xs-8": "11.8px",
      "5xs-9": "7.9px",
      "5xs-2": "7.2px",
      "7xs-3": "5.3px",
      "3xs-9": "9.9px",
      "8xl-1": "27.1px",
      "sm-6": "13.6px",
      "5xs": "8px",
      "8xs-9": "4.9px",
      "9xs-6": "3.6px",
      "6xs-7": "6.7px",
      "3xl": "22px",
      "3xl-2": "22.2px",
      "xl-4": "20.4px",
      "mini-8": "14.8px",
      smi: "13px",
      "xs-7": "11.7px",
      "smi-5": "12.5px",
      "base-6": "15.6px",
      "2xs-9": "10.9px",
      inherit: "inherit",
    },
  },
  variants: {
    extend: {
      textColor: ['hover'],
      borderColor: ['hover'],
      borderWidth: ['hover'],
      backgroundColor: ['hover'],
      
    },
  },
 
 
};
