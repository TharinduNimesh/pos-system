<template>
  <Pie id="my-chart-id" :options="chartOptions" :data="chartData" />
</template>

<script setup>
import { Pie } from "vue-chartjs";
import {
  Chart as ChartJS,
  Title,
  Tooltip,
  Legend,
  PieController,
  CategoryScale,
  LinearScale,
  ArcElement,
} from "chart.js";

ChartJS.register(
  Title,
  Tooltip,
  Legend,
  PieController,
  CategoryScale,
  LinearScale,
  ArcElement
);

const sellData = [
  {
    label: "A10s Case",
    data: 40,
  },
  {
    label: "iPhone 13 Pro Max",
    data: 20,
  },
  {
    label: "Samsung Galaxy S21",
    data: 12,
  },
];
const colors = getPredefinedColors(0.4).slice(0, sellData.length);
const chartData = {
  labels: sellData.map((data) => data.label),
  datasets: [{
    labels: sellData.map((data) => data.label),
    data: [300, 50, 100],
    backgroundColor: colors.map((color) => color.backgroundColor),
    borderColor: colors.map((color) => color.borderColor),
    hoverOffset: 4
  }]
};
const chartOptions = {
  responsive: true,
};
console.log(colors.map((color) => color.backgroundColor));
</script>
