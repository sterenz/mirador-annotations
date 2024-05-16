export const customTheme = {
  selectedTheme: "Custom Theme",
  themes: {
    dark: {
      palette: {
        type: "dark",
        primary: {
          main: "#ffd000",
        },
        secondary: {
          main: "#ffd000",
        },
        shades: {
          dark: "#000000",
          main: "#424242",
          light: "#616161",
        },
      },
    },
    light: {
      palette: {
        type: "light",
      },
    },
    "Custom Theme": {
      palette: {
        type: "light",
        primary: {
          main: "#ffd000",
        },
        secondary: {
          main: "#ffd000",
        },
      },
      typography: {},
      overrides: {},
      props: {},
      theme: {
        // Move the theme customization here
        palette: {
          type: "light",
          primary: {
            main: "#1967d2",
          },
          secondary: {
            main: "#1967d2",
          },
          shades: {
            dark: "#eeeeee",
            main: "#ffffff",
            light: "#f5f5f5",
          },
          error: {
            main: "#b00020",
          },
          notification: {
            main: "#ffa224",
          },
          hitCounter: {
            default: "#bdbdbd",
          },
          highlights: {
            primary: "#ffff00",
            secondary: "#00BFFF",
          },
          section_divider: "rgba(0, 0, 0, 0.25)",
          annotations: {
            hidden: {
              globalAlpha: 0,
            },
            default: {
              strokeStyle: "#00BFFF",
              globalAlpha: 1,
            },
            hovered: {
              strokeStyle: "#BF00FF",
              globalAlpha: 1,
            },
            selected: {
              strokeStyle: "#ffff00",
              globalAlpha: 1,
            },
          },
          search: {
            default: {
              fillStyle: "#00BFFF",
              globalAlpha: 0.3,
            },
            hovered: {
              fillStyle: "#00FFFF",
              globalAlpha: 0.3,
            },
            selected: {
              fillStyle: "#ffff00",
              globalAlpha: 0.3,
            },
          },
        },
        typography: {
          body1: {
            fontSize: "1rem",
            letterSpacing: "0em",
            lineHeight: "1.6em",
          },
          body2: {
            fontSize: "0.878rem",
            letterSpacing: "0.015em",
            lineHeight: "1.6em",
          },
          button: {
            fontSize: "0.878rem",
            letterSpacing: "0.09em",
            lineHeight: "2.25rem",
            textTransform: "uppercase",
          },
          caption: {
            fontSize: "0.772rem",
            letterSpacing: "0.033em",
            lineHeight: "1.6rem",
          },
          body1Next: {
            fontSize: "1rem",
            letterSpacing: "0em",
            lineHeight: "1.6em",
          },
          body2Next: {
            fontSize: "0.878rem",
            letterSpacing: "0.015em",
            lineHeight: "1.6em",
          },
          buttonNext: {
            fontSize: "0.878rem",
            letterSpacing: "0.09em",
            lineHeight: "2.25rem",
          },
          captionNext: {
            fontSize: "0.772rem",
            letterSpacing: "0.33em",
            lineHeight: "1.6rem",
          },
          overline: {
            fontSize: "0.678rem",
            fontWeight: 500,
            letterSpacing: "0.166em",
            lineHeight: "2em",
            textTransform: "uppercase",
          },
          h1: {
            fontSize: "2.822rem",
            letterSpacing: "-0.015em",
            lineHeight: "1.2em",
          },
          h2: {
            fontSize: "1.575rem",
            letterSpacing: "0em",
            lineHeight: "1.33em",
          },
          h3: {
            fontSize: "1.383rem",
            fontWeight: 300,
            letterSpacing: "0em",
            lineHeight: "1.33em",
          },
          h4: {
            fontSize: "1.215rem",
            letterSpacing: "0.007em",
            lineHeight: "1.45em",
          },
          h5: {
            fontSize: "1.138rem",
            letterSpacing: "0.005em",
            lineHeight: "1.55em",
          },
          h6: {
            fontSize: "1.067rem",
            fontWeight: 400,
            letterSpacing: "0.01em",
            lineHeight: "1.6em",
          },
          subtitle1: {
            fontSize: "0.937rem",
            letterSpacing: "0.015em",
            lineHeight: "1.6em",
            fontWeight: 300,
          },
          subtitle2: {
            fontSize: "0.878rem",
            fontWeight: 500,
            letterSpacing: "0.02em",
            lineHeight: "1.75em",
          },
          useNextVariants: true, // set so that console deprecation warning is removed
        },
        overrides: {
          MuiListSubheader: {
            root: {
              '&[role="presentation"]:focus': {
                outline: 0,
              },
            },
          },
          MuiTooltip: {
            // Overridden from https://github.com/mui-org/material-ui/blob/master/packages/material-ui/src/Tooltip/Tooltip.js#L40-L70
            tooltipPlacementLeft: {
              "@media (min-width:600px)": {
                margin: 0,
              },
            },
          },
          MuiTouchRipple: {
            childPulsate: {
              animation: "none",
            },
            rippleVisible: {
              animation: "none",
            },
          },
        },
        props: {
          MuiButtonBase: {
            disableTouchRipple: true,
          },
          MuiLink: {
            underline: "always",
          },
        },
      },
    },
  },
};
