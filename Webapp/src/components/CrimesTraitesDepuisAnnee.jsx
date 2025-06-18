import Chart from "react-apexcharts";


export const CrimesTraitesDepuisAnnee = () => {
    const series = [
      {
        name: 'Total des cas',
        type: 'column',
        data: [80500, 85300, 89600, 95000, 100200]
      },
      {
        name: 'Cas résolus',
        type: 'column',
        data: [65200, 69800, 74500, 79800, 85400]
      },
      {
        name: 'Taux de résolution (%)',
        type: 'line',
        data: [81, 82, 83, 84, 85]
      }
    ];
  
    const options = {
      chart: {
        height: 350,
        type: 'line',
        toolbar: {
          show: true
        }
      },
      stroke: {
        width: [0, 0, 4]
      },
      title: {
        text: 'Crimes et Délits Traités par les Polices depuis 2020',
        align: 'left',
        style: {
          fontSize: '16px',
          fontWeight: 'bold',
          color: '#333'
        }
      },
      dataLabels: {
        enabled: true,
        enabledOnSeries: [2]
      },
      labels: ['2020', '2021', '2022', '2023', '2024'],
      xaxis: {
        type: 'category'
      },
      yaxis: [
        {
          title: {
            text: 'Nombre de cas',
          },
          labels: {
            formatter: function (val) {
              return val.toLocaleString();
            }
          }
        },
        {
          opposite: true,
          title: {
            text: 'Taux de résolution (%)'
          }
        }
      ],
      colors: ['#3498db', '#2ecc71', '#e74c3c'],
      legend: {
        position: 'top',
        horizontalAlign: 'right'
      }
    };
  
    return <Chart options={options} series={series} type="line" height="350" />;
  };