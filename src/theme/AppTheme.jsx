import { ThemeProvider } from "@emotion/react"
import { CssBaseline } from "@mui/material"
import { oldTheme } from "./oldTheme"
import { purpleTheme } from "./purpleTheme"
import { whatsAppTheme } from "./whatsAppTheme"


export const AppTheme = ({children}) => {
    return (
      <ThemeProvider theme={ purpleTheme }>      
        <CssBaseline />
        {children}
      </ThemeProvider>
    )
}
