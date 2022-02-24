type IGetColor = (
  color: keyof typeof COlORS,
  type?: keyof typeof COlORS.primary
) => string;

export const getColor: IGetColor = (color, type = "default") => {
  return COlORS[color][type];
};

const COlORS = {
  gray: {
    light: "#E8E8E8",
    default: "#969696",
    dark: "#4C4C4C",
  },
  primary: {
    light: "#DDEEEF",
    default: "#4FB0AE",
    dark: "#385959",
  },
  danger: {
    light: "#F1E1DE",
    default: "#E26E5A",
    dark: "#A3493C",
  },
  warning: {
    light: "#FAEBD3",
    default: "#FFBA49",
    dark: "#C97F07",
  },
};

export default COlORS;
