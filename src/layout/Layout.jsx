import React, { useEffect, useState } from 'react';
import Dashboard from '../pages/Dahsboard';
import Polices from '../pages/Polices';

// Layout principal avec responsive amélioré
const Layout = () => {
  const [selectedPage, setSelectedPage] = useState('dashboard');
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  // Hook pour détecter la taille d'écran
  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth <= 768);
      if (window.innerWidth > 768) {
        setSidebarOpen(false);
      }
    };

    checkScreenSize();
    window.addEventListener('resize', checkScreenSize);
    return () => window.removeEventListener('resize', checkScreenSize);
  }, []);

  const menuItems = [
    { text: 'Dashboard', icon: '📊', key: 'dashboard' },
    { text: 'Polices', icon: '🛡️', key: 'polices' }
  ];

  const renderContent = () => {
    switch (selectedPage) {
      case 'polices':
        return <Polices />;
      default:
        return <Dashboard />;
    }
  };

  const styles = {
    appContainer: {
      display: 'flex',
      minHeight: '100vh',
      fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
      position: 'relative'
    },
    sidebar: {
      width: isMobile ? '280px' : '240px',
      background: 'linear-gradient(180deg, #ffffff, #f8f9fa)',
      borderRight: '1px solid #e0e0e0',
      boxShadow: '2px 0 10px rgba(0,0,0,0.1)',
      position: 'fixed',
      height: '100vh',
      zIndex: 1000,
      transition: 'transform 0.3s ease',
      transform: isMobile ? (sidebarOpen ? 'translateX(0)' : 'translateX(-100%)') : 'translateX(0)',
      left: 0,
      top: 0
    },
    sidebarHeader: {
      padding: 'clamp(15px, 4vw, 20px)',
      borderBottom: '1px solid #e0e0e0'
    },
    sidebarTitle: {
      fontSize: 'clamp(1.2rem, 4vw, 1.5rem)',
      fontWeight: 'bold',
      color: '#2196F3',
      margin: 0
    },
    sidebarMenu: {
      padding: '20px 0'
    },
    menuItem: {
      display: 'flex',
      alignItems: 'center',
      padding: 'clamp(12px, 3vw, 15px) clamp(15px, 4vw, 20px)',
      cursor: 'pointer',
      color: '#333',
      transition: 'all 0.3s ease',
      borderRight: '3px solid transparent',
      backgroundColor: 'transparent'
    },
    menuItemActive: {
      backgroundColor: 'rgba(33, 150, 243, 0.15)',
      borderRightColor: '#2196F3',
      color: '#2196F3',
      fontWeight: 'bold'
    },
    menuIcon: {
      marginRight: '15px',
      fontSize: 'clamp(1rem, 3vw, 1.2rem)'
    },
    menuText: {
      fontSize: 'clamp(0.9rem, 2.5vw, 1rem)'
    },
    mainContent: {
      flex: 1,
      marginLeft: isMobile ? '0' : '240px',
      width: isMobile ? '100%' : 'calc(100% - 240px)',
      transition: 'margin-left 0.3s ease'
    },
    topBar: {
      background: 'linear-gradient(45deg, #2196F3, #21CBF3)',
      color: 'white',
      padding: 'clamp(12px, 3vw, 15px) clamp(15px, 4vw, 20px)',
      boxShadow: '0 4px 20px rgba(33, 150, 243, 0.3)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      position: 'sticky',
      top: 0,
      zIndex: 100
    },
    menuToggle: {
      display: isMobile ? 'flex' : 'none',
      background: 'none',
      border: 'none',
      color: 'white',
      fontSize: 'clamp(1.2rem, 4vw, 1.5rem)',
      cursor: 'pointer',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '5px'
    },
    pageTitle: {
      fontSize: 'clamp(1.2rem, 4vw, 1.5rem)',
      fontWeight: 'bold',
      margin: 0,
      textAlign: isMobile ? 'center' : 'left',
      flex: 1
    },
    overlay: {
      display: sidebarOpen && isMobile ? 'block' : 'none',
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      background: 'rgba(0,0,0,0.5)',
      zIndex: 999
    }
  };

  return (
    <div style={styles.appContainer}>
      {/* Sidebar */}
      <div style={styles.sidebar}>
        <div style={styles.sidebarHeader}>
          <h2 style={styles.sidebarTitle}>G3IPSSI</h2>
        </div>
        <nav style={styles.sidebarMenu}>
          {menuItems.map((item) => (
            <div
              key={item.key}
              style={{
                ...styles.menuItem,
                ...(selectedPage === item.key ? styles.menuItemActive : {})
              }}
              onClick={() => {
                setSelectedPage(item.key);
                setSidebarOpen(false);
              }}
              onMouseEnter={(e) => {
                if (selectedPage !== item.key) {
                  e.target.style.backgroundColor = 'rgba(33, 150, 243, 0.08)';
                }
              }}
              onMouseLeave={(e) => {
                if (selectedPage !== item.key) {
                  e.target.style.backgroundColor = 'transparent';
                }
              }}
            >
              <span style={styles.menuIcon}>{item.icon}</span>
              <span style={styles.menuText}>{item.text}</span>
            </div>
          ))}
        </nav>
      </div>

      {/* Overlay pour mobile */}
      <div 
        style={styles.overlay} 
        onClick={() => setSidebarOpen(false)}
      />

      {/* Contenu principal */}
      <div style={styles.mainContent}>
        <div style={styles.topBar}>
          <button 
            style={styles.menuToggle} 
            onClick={() => setSidebarOpen(!sidebarOpen)}
          >
            ☰
          </button>
          <h1 style={styles.pageTitle}>
            {selectedPage === 'dashboard' ? 'Tableau de Bord' : 'Gestion des Polices'}
          </h1>
          <div style={{ width: isMobile ? '30px' : '0' }}></div>
        </div>
        
        {renderContent()}
      </div>
    </div>
  );
};

export default Layout;