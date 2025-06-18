import Chart from "react-apexcharts";

export const IncidentsParRegion = () => {
    const series = [
      {
        name: 'Île-de-France',
        data: [12000, 8500, 6200, 4800, 3200]
      },
      {
        name: 'Provence-Alpes-Côte d\'Azur',
        data: [8500, 6200, 4800, 3500, 2400]
      },
      {
        name: 'Auvergne-Rhône-Alpes',
        data: [7200, 5800, 4200, 3200, 2100]
      },
      {
        name: 'Hauts-de-France',
        data: [6800, 4900, 3600, 2800, 1900]
      }
    ];
  
    const options = {
      chart: {
        type: 'bar',
        height: 350,
        stacked: true,
        toolbar: {
          show: true
        }
      },
      responsive: [{
        breakpoint: 480,
        options: {
          legend: {
            position: 'bottom',
            offsetX: -10,
            offsetY: 0
          }
        }
      }],
      plotOptions: {
        bar: {
          horizontal: false,
          borderRadius: 5
        },
      },
      xaxis: {
        categories: ['Vols', 'Agressions', 'Cambriolages', 'Fraudes', 'Autres'],
      },
      yaxis: {
        title: {
          text: 'Nombre d\'incidents'
        },
        labels: {
          formatter: function (val) {
            return val.toLocaleString();
          }
        }
      },
      title: {
        text: 'Répartition des Incidents par Région (2024)',
        align: 'left',
        style: {
          fontSize: '16px',
          fontWeight: 'bold',
          color: '#333'
        }
      },
      colors: ['#3498db', '#e74c3c', '#2ecc71', '#f39c12'],
      legend: {
        position: 'top',
        horizontalAlign: 'right'
      },
      fill: {
        opacity: 1
      }
    };
  
    return <Chart options={options} series={series} type="bar" height="350" />;
  };