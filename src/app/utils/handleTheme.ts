export const getSavedTheme = () => {
    if (typeof window !== "undefined") {
      return localStorage.getItem("theme");
    }
    return null;
  };
  
  export const applyTheme = (isDark: boolean) => {
    if (typeof window !== "undefined") {
      if (isDark) {
        document.documentElement.classList.add("dark");
        localStorage.setItem("theme", "dark");
      } else {
        document.documentElement.classList.remove("dark");
        localStorage.setItem("theme", "light");
      }
    }
  };
  