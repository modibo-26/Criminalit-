import Chart from "react-apexcharts";

export const TempsReponseInterventions = () => {
    const series = [{
      name: 'Temps de réponse (minutes)',
      data: [
        { x: 'Urgence Vitale', y: 8 },
        { x: 'Urgence Absolue', y: 15 },
        { x: 'Urgence Relative', y: 25 },
        { x: 'Non Urgent', y: 45 },
        { x: 'Différé', y: 120 }
      ]
    }];
  
    const options = {
      chart: {
        height: 350,
        type: 'bar',
        toolbar: {
          show: true
        }
      },
      colors: ['#FF6B6B', '#FFA726', '#FFEB3B', '#66BB6A', '#42A5F5'],
      plotOptions: {
        bar: {
          columnWidth: '45%',
          distributed: true,
          borderRadius: 5
        }
      },
      dataLabels: {
        enabled: true,
        formatter: function (val) {
          return val + ' min';
        }
      },
      title: {
        text: 'Temps de Réponse Moyen par Type d\'Intervention',
        align: 'left',
        style: {
          fontSize: '16px',
          fontWeight: 'bold',
          color: '#333'
        }
      },
      xaxis: {
        categories: ['Urgence Vitale', 'Urgence Absolue', 'Urgence Relative', 'Non Urgent', 'Différé'],
        labels: {
          style: {
            fontSize: '12px'
          }
        }
      },
      yaxis: {
        title: {
          text: 'Temps (minutes)'
        }
      },
      legend: {
        show: false
      }
    };
  
    return <Chart options={options} series={series} type="bar" height="350" />;
  };
  