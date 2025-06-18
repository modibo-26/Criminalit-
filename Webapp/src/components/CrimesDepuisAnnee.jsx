import Chart from "react-apexcharts";


export const CrimesDepuisAnnee = () => {
    const series = [
      {
        name: 'Vols',
        data: [45000, 47500, 44200, 42800, 41200, 38500, 39800, 41500, 43200, 44800]
      },
      {
        name: 'Agressions',
        data: [12000, 11800, 13200, 12500, 11900, 10500, 11200, 12000, 12800, 13500]
      },
      {
        name: 'Cambriolages',
        data: [8500, 9200, 8900, 7800, 7200, 6500, 6800, 7100, 7500, 7900]
      },
      {
        name: 'Fraudes',
        data: [15000, 16500, 18200, 19500, 21000, 25000, 27500, 29000, 31500, 34000]
      }
    ];
  
    const options = {
      chart: {
        height: 350,
        type: 'line',
        zoom: {
          enabled: false
        },
        toolbar: {
          show: true
        }
      },
      dataLabels: {
        enabled: false
      },
      stroke: {
        curve: 'smooth',
        width: 3
      },
      title: {
        text: 'Évolution des Crimes et Délits depuis 2015',
        align: 'left',
        style: {
          fontSize: '16px',
          fontWeight: 'bold',
          color: '#333'
        }
      },
      grid: {
        row: {
          colors: ['#f3f3f3', 'transparent'],
          opacity: 0.5
        },
      },
      xaxis: {
        categories: ['2015', '2016', '2017', '2018', '2019', '2020', '2021', '2022', '2023', '2024'],
        title: {
          text: 'Années'
        }
      },
      yaxis: {
        title: {
          text: 'Nombre de cas'
        },
        labels: {
          formatter: function (val) {
            return val.toLocaleString();
          }
        }
      },
      colors: ['#e74c3c', '#f39c12', '#9b59b6', '#3498db'],
      legend: {
        position: 'top',
        horizontalAlign: 'right'
      }
    };
  
    return <Chart options={options} series={series} type="line" height="350" />;
  };
  