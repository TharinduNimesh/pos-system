export default (datasets: Array<Object>) => {
  const colors = getPredefinedColors();
  return datasets.map((dataset, index) => {
    const color = colors[index % colors.length]; // Cycle through colors
    return {
      ...dataset,
      backgroundColor: color.backgroundColor,
      borderColor: color.borderColor,
      borderWidth: 1,
    };
  });
};



function getColorGradient(color: string) {
  return `linear-gradient(180deg, ${color} 0%, ${color} 100%)`;
}
