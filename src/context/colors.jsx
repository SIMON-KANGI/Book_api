
import { useTheme } from "./themeContext";

function colorPallete() {
    const darkTheme = useTheme();
    
    const ThemeStyles = darkTheme === true ? {
        bg: "#15032D",
        bg2:'rgba(32, 12, 62, 0.5)',
        bg3:"#1D2B53",
        bg4:"#2E4374",
        bg5:"rgba(45, 16, 88, 0.5)",
        color: "#e0e0e0",
        color2:"#e0e0e0",
        color3:"#FFD700",
        color4:"#181818",
        color5:"#16161a"
    } : {
        bg: "#e0e0e0",
        bg2:'#F8EDED',
        bg3:"#F5E8C7",
        bg5:"rgba(200, 200, 200, 0.5)",
         color: "#141414",
        color2:'#33658a',
        color3:'#CA3E47',
        color4:"#e1e1e1",
        color5:"#33658a"
    };
    
       

    return ThemeStyles;
}

export default colorPallete;
