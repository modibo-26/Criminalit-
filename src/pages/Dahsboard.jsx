import React from 'react';
import { CrimesDepuisAnnee } from '../components/CrimesDepuisAnnee';
import { CrimesTraitesDepuisAnnee } from '../components/CrimesTraitesDepuisAnnee';
import { IncidentsParRegion } from '../components/IncidentsParRegion';
import { TempsReponseInterventions } from '../components/TempsReponseInterventions';
import { AlertesSecuriteMensuelle } from '../components/AlertesSecuriteMensuelle';

const Dashboard = () => {
  const stats = [
    { title: 'Polices Actives', value: '1,247', icon: '🛡️', color: '#2196F3' },
    { title: 'Incidents Résolus', value: '89', icon: '✅', color: '#4CAF50' },
    { title: 'Alertes en Cours', value: '12', icon: '⚠️', color: '#FF9800' },
    { title: 'Taux de Sécurité', value: '97.8%', icon: '🔒', color: '#9C27B0' }
  ];

  const recentActivities = [
    'Nouvelle police de sécurité créée',
    'Incident de sécurité résolu',
    'Mise à jour des protocoles',
    'Audit de sécurité terminé',
    'Formation équipe sécurité'
  ];

  const styles = {
    pageContent: {
      padding: 'clamp(15px, 3vw, 25px)',
      background: 'linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)',
      minHeight: 'calc(100vh - 70px)',
      width: '100%',
      boxSizing: 'border-box'
    },
    pageHeader: {
      marginBottom: 'clamp(20px, 4vw, 30px)'
    },
    pageTitle: {
      fontSize: 'clamp(1.8rem, 4vw, 2.5rem)',
      fontWeight: 'bold',
      color: '#333',
      margin: 0
    },
    statsGrid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 220px), 1fr))',
      gap: 'clamp(10px, 2vw, 20px)',
      marginBottom: 'clamp(15px, 3vw, 25px)',
      width: '100%'
    },
    statCard: {
      background: 'linear-gradient(145deg, #ffffff, #f5f5f5)',
      borderRadius: '12px',
      padding: 'clamp(15px, 3vw, 20px)',
      transition: 'all 0.3s ease',
      cursor: 'pointer',
      position: 'relative',
      overflow: 'hidden'
    },
    statContent: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      position: 'relative',
      zIndex: 1
    },
    statInfo: {
      flex: 1
    },
    statTitle: {
      color: '#666',
      fontSize: 'clamp(0.8rem, 2vw, 0.9rem)',
      marginBottom: '8px',
      margin: 0
    },
    statValue: {
      fontSize: 'clamp(1.5rem, 4vw, 2rem)',
      fontWeight: 'bold',
      margin: 0
    },
    statIcon: {
      fontSize: 'clamp(1.5rem, 4vw, 2rem)',
      opacity: 0.8
    },
    chartsGrid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 280px), 1fr))',
      gap: 'clamp(10px, 2vw, 20px)',
      width: '100%'
    },
    chartCard: {
      background: 'linear-gradient(145deg, #ffffff, #f5f5f5)',
      border: '1px solid #e0e0e0',
      borderRadius: '12px',
      padding: 'clamp(15px, 3vw, 20px)'
    },
    chartTitle: {
      marginBottom: '15px',
      fontWeight: 'bold',
      color: '#333',
      fontSize: 'clamp(1rem, 3vw, 1.2rem)'
    },
    chartPlaceholder: {
      height: 'clamp(200px, 40vw, 300px)',
      borderRadius: '8px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      color: 'white',
      fontSize: 'clamp(1rem, 3vw, 1.2rem)',
      fontWeight: 'bold',
      background: 'linear-gradient(45deg, #2196F3, #21CBF3)',
      textAlign: 'center',
      padding: '10px'
    },
    activitiesList: {
      maxHeight: 'clamp(200px, 40vw, 300px)',
      overflowY: 'auto'
    },
    activityItem: {
      padding: '12px 0',
      borderBottom: '1px solid #f0f0f0',
      display: 'flex',
      alignItems: 'center'
    },
    activityIcon: {
      width: '8px',
      height: '8px',
      backgroundColor: '#2196F3',
      borderRadius: '50%',
      marginRight: '12px',
      flexShrink: 0
    },
    activityText: {
      fontSize: 'clamp(0.8rem, 2.5vw, 0.9rem)',
      color: '#333',
      flex: 1
    },
    activityTime: {
      fontSize: 'clamp(0.7rem, 2vw, 0.75rem)',
      color: '#666',
      flexShrink: 0
    }
  };

  return (
    <div style={styles.pageContent}>
      <div style={styles.pageHeader}>
        <h1 style={styles.pageTitle}>Dashboard </h1>
      </div>

      <div style={styles.statsGrid}>
        {stats.map((stat, index) => (
          <div
            key={index}
            style={{
              ...styles.statCard,
              border: `1px solid ${stat.color}30`
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-4px)';
              e.currentTarget.style.boxShadow = `0 8px 25px ${stat.color}25`;
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = 'none';
            }}
          >
            <div
              style={{
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                background: `linear-gradient(45deg, ${stat.color}15, ${stat.color}08)`,
                pointerEvents: 'none'
              }}
            ></div>
            <div style={styles.statContent}>
              <div style={styles.statInfo}>
                <p style={styles.statTitle}>{stat.title}</p>
                <p style={{ ...styles.statValue, color: stat.color }}>
                  {stat.value}
                </p>
              </div>
              <div style={{ ...styles.statIcon, color: stat.color }}>
                {stat.icon}
              </div>
            </div>
          </div>
        ))}
      </div>

      <div style={styles.chartsGrid}>
      <div style={styles.chartCard}>
          <CrimesDepuisAnnee />
        </div>
      </div>
      <br/>

      <div style={styles.chartsGrid}>
        <div style={styles.chartCard}>
          <CrimesTraitesDepuisAnnee />
        </div>
        <div style={styles.chartCard}>
          <AlertesSecuriteMensuelle />
        </div>
      </div>
      <br />
      <div style={styles.chartsGrid}>
        <div style={styles.chartCard}>
          <IncidentsParRegion />
        </div>

        <div style={styles.chartCard}>
          <TempsReponseInterventions />
        </div>
      </div>
      <br/>
      <div style={styles.chartsGrid}>
        <div style={styles.chartCard}>
          <h3 style={styles.chartTitle}>Évolution des Incidents de Sécurité</h3>
          <div style={styles.chartPlaceholder}>
            <span>Graphique des incidents par mois</span>
          </div>
        </div>

        <div style={styles.chartCard}>
          <h3 style={styles.chartTitle}>Activités Récentes</h3>
          <div style={styles.activitiesList}>
            {recentActivities.map((text, index) => (
              <div key={index} style={styles.activityItem}>
                <div style={styles.activityIcon}></div>
                <div style={styles.activityText}>{text}</div>
                <div style={styles.activityTime}>
                  {index + 1}h
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;