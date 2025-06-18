import Chart from "react-apexcharts";

export const AlertesSecuriteMensuelle = () => {
    const series = [{
      name: 'Alertes critiques',
      data: [45, 52, 38, 41, 47, 39, 44, 51, 43, 48, 41, 39]
    }, {
      name: 'Alertes importantes',
      data: [78, 85, 72, 69, 81, 74, 88, 92, 79, 86, 83, 77]
    }, {
      name: 'Alertes mineures',
      data: [156, 142, 168, 171, 149, 163, 158, 144, 167, 152, 159, 161]
    }];
  
    const options = {
      chart: {
        height: 350,
        type: 'area',
        toolbar: {
          show: true
        }
      },
      dataLabels: {
        enabled: false
      },
      stroke: {
        curve: 'smooth',
        width: 2
      },
      title: {
        text: 'Évolution Mensuelle des Alertes de Sécurité (2024)',
        align: 'left',
        style: {
          fontSize: '16px',
          fontWeight: 'bold',
          color: '#333'
        }
      },
      xaxis: {
        categories: ['Jan', 'Fév', 'Mar', 'Avr', 'Mai', 'Jun', 'Jul', 'Aoû', 'Sep', 'Oct', 'Nov', 'Déc']
      },
      yaxis: {
        title: {
          text: 'Nombre d\'alertes'
        }
      },
      colors: ['#e74c3c', '#f39c12', '#3498db'],
      fill: {
        type: 'gradient',
        gradient: {
          shadeIntensity: 1,
          opacityFrom: 0.7,
          opacityTo: 0.9,
          stops: [0, 90, 100]
        }
      },
      legend: {
        position: 'top',
        horizontalAlign: 'right'
      }
    };
  
    return <Chart options={options} series={series} type="area" height="350" />;
  };
  