<script setup>
import { Line } from "vue-chartjs";
import {
  Chart as ChartJS,
  Title,
  Tooltip,
  Legend,
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Filler,
} from "chart.js";

ChartJS.register(
  Title,
  Tooltip,
  Legend,
  Filler,
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement
);
const years = ["2022", "2023", "2024"];

const selectedYears = ref(["2024"]);
const revenueData = [
  {
    label: "2023",
    data: [82, 47, 93, 58, 72, 64, 51, 77, 69, 88, 53, 91],
    tension: 0.4,
    fill: true,
    pointRadius: 5,
  },
  {
    label: "2022",
    data: [45, 67, 89, 23, 56, 78, 34, 90, 12, 65, 43, 76],
    tension: 0.4,
    fill: true,
    pointRadius: 5,
  },
  {
    label: "2024",
    data: [65, 59, 80, 81, 56, 55, 40, 53, 65, 75],
    tension: 0.4,
    fill: true,
    pointRadius: 5,
  },
];
const revenueChartOptions = computed(() => {
  const datasets = selectedYears.value
    .map((year) => revenueData.find((data) => data.label === year))
    .filter((data) => data !== undefined);
  // console.log("selected years updated : ", revenueChartOptions.value);

  return {
    labels: [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ],
    datasets: getColors(datasets),
  };
});

const chartOptions = ref({
  responsive: true,
  maintainAspectRatio: false,
});
</script>

<template>
  <UContent class="h-fit">
    <div class="flex justify-between items-center">
      <h3 class="text-sm uppercase text-gray-500 font-semibold">
        Total Revenue
      </h3>

      <div class="text-sm flex gap-3 text-gray-400">
        <div class="cursor-pointer">
          <span>Daily</span>
        </div>
        <div
          class="text-gray-700 font-semibold dark:text-slate-200 px-1 pb-1 border-b-2 border-b-primary/60 cursor-pointer"
        >
          <span>Monthly</span>
        </div>
        <div class="cursor-pointer">
          <span>Yearly</span>
        </div>
      </div>
    </div>
    <div class="flex flex-col sm:flex-row sm:justify-between items-center mt-3">
      <div class="flex gap-3 items-center self-start sm:self-auto">
        <span class="text-xl font-bold"> Rs. 399,020.00 </span>
        <div
          class="flex items-center gap-2 text-xs text-green-600 dark:text-green-500"
        >
          <Icon name="material-symbols:trending-up" class="text-xl" />
          <span> +20% <span class="text-gray-500">Increase</span> </span>
        </div>
      </div>
      <USelectMenu
        v-model="selectedYears"
        :options="years"
        placeholder="Select A Month"
        size="sm"
        class="w-40 self-end sm:self-auto"
        multiple
      />
    </div>
    <div class="h-96 mt-3">
      <Line
        id="my-chart-id"
        :options="chartOptions"
        :data="revenueChartOptions"
      />
    </div>
  </UContent>
</template>
