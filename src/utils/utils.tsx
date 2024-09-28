export const hasUSAIP = async () => {
    
        try {
          // Use fetch to call ipinfo.io without axios
          const response = await fetch('https://geo.ipify.org/api/v2/country?apiKey=at_tZrT0SXlOxR6UqgSldOEWkNtfAH9u')
          const data = await response.json()
          if (data.location && data.location?.country === 'US') {
            return true
          } else {
            return false
          }
          
        } catch (error) {
          console.error('Error fetching location:', error)
          return true
        } 
      }