
import './globalConfig.mjs';

console.log("App has loaded successfully.");




async function loadConfig() {
    const hour = new Date().getHours();
    const theme = await import('./theme.mjs');
  
    if (hour < 18) {
      theme.setLightTheme();
    } else {
      theme.setDarkTheme();
    }
  }
  
  loadConfig();
  

