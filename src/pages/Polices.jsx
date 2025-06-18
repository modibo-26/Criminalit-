import React, { useState } from 'react';

// Composant Polices intégré
const Polices = () => {
    const [policies] = useState([
      { id: 1, name: "Protection Antivirus", status: "Actif", lastUpdate: "2024-01-15", risk: "Faible" },
      { id: 2, name: "Pare-feu Réseau", status: "Actif", lastUpdate: "2024-01-14", risk: "Moyen" },
      { id: 3, name: "Contrôle d'Accès", status: "Inactif", lastUpdate: "2024-01-10", risk: "Élevé" },
      { id: 4, name: "Chiffrement des Données", status: "Actif", lastUpdate: "2024-01-16", risk: "Faible" }
    ]);
  
    const styles = {
      pageContent: {
        padding: 'clamp(15px, 3vw, 25px)',
        background: 'linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)',
        minHeight: 'calc(100vh - 70px)',
        width: '100%',
        boxSizing: 'border-box'
      },
      pageTitle: {
        fontSize: 'clamp(1.8rem, 4vw, 2.5rem)',
        fontWeight: 'bold',
        color: '#333',
        marginBottom: 'clamp(20px, 4vw, 30px)'
      },
      table: {
        width: '100%',
        borderCollapse: 'collapse',
        background: 'white',
        borderRadius: '12px',
        overflow: 'hidden',
        boxShadow: '0 4px 20px rgba(0,0,0,0.1)'
      },
      tableHeader: {
        backgroundColor: '#2196F3',
        color: 'white'
      },
      th: {
        padding: 'clamp(12px, 3vw, 15px)',
        textAlign: 'left',
        fontSize: 'clamp(0.9rem, 2.5vw, 1rem)',
        fontWeight: 'bold'
      },
      td: {
        padding: 'clamp(12px, 3vw, 15px)',
        borderBottom: '1px solid #f0f0f0',
        fontSize: 'clamp(0.8rem, 2.5vw, 0.9rem)'
      },
      statusActive: {
        color: '#4CAF50',
        fontWeight: 'bold'
      },
      statusInactive: {
        color: '#f44336',
        fontWeight: 'bold'
      },
      riskLow: {
        color: '#4CAF50'
      },
      riskMedium: {
        color: '#FF9800'
      },
      riskHigh: {
        color: '#f44336'
      }
    };
  
    return (
      <div style={styles.pageContent}>
        <h1 style={styles.pageTitle}>Gestion des Polices</h1>
        
        <div style={{ overflowX: 'auto' }}>
          <table style={styles.table}>
            <thead style={styles.tableHeader}>
              <tr>
                <th style={styles.th}>Nom de la Police</th>
                <th style={styles.th}>Statut</th>
                <th style={styles.th}>Dernière MAJ</th>
                <th style={styles.th}>Niveau de Risque</th>
              </tr>
            </thead>
            <tbody>
              {policies.map((policy) => (
                <tr key={policy.id}>
                  <td style={styles.td}>{policy.name}</td>
                  <td style={{
                    ...styles.td,
                    ...(policy.status === 'Actif' ? styles.statusActive : styles.statusInactive)
                  }}>
                    {policy.status}
                  </td>
                  <td style={styles.td}>{policy.lastUpdate}</td>
                  <td style={{
                    ...styles.td,
                    ...(policy.risk === 'Faible' ? styles.riskLow : 
                        policy.risk === 'Moyen' ? styles.riskMedium : styles.riskHigh)
                  }}>
                    {policy.risk}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    );
  };
  
export default Polices;