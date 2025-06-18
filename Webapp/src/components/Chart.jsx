

const Chart = ({ options, series, type, height }) => (
    <div style={{ 
      height: height || '300px', 
      background: 'linear-gradient(45deg, #f8f9fa, #e9ecef)',
      borderRadius: '8px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      color: '#666',
      fontSize: '14px',
      textAlign: 'center',
      padding: '20px'
    }}>
      <div>
        <strong>{type.toUpperCase()} CHART</strong><br/>
        {options.title?.text}<br/>
        <small>Installez: npm install apexcharts react-apexcharts</small>
      </div>
    </div>
  );