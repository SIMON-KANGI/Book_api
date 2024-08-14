
import { useTheme } from "./themeContext";

function colorPallete() {
    const darkTheme = useTheme();
    
    const ThemeStyles = darkTheme === true ? {
        bg: "#15032d",
        bg2:'rgba(32, 12, 62, 0.5)',
        color: "#e0e0e0",
        color2:"#e0e0e0",
        color3:"#212121",
        color4:"#181818",
        color5:"#16161a"
    } : {
        bg: "#e0e0e0",
        bg2:'#F8EDED',
        color: "#141414",
        color2:'#33658a',
        color3:'#e1e1e1',
        color4:"#e1e1e1",
        color5:"#33658a"
    };
    
       

    return ThemeStyles;
}

export default colorPallete;
