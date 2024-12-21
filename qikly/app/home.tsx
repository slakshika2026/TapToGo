import React, { useEffect, useState, useContext } from "react";
import {
   View,
   Text,
   FlatList,
   TouchableOpacity,
   StyleSheet,
   Image,
   ActivityIndicator,
} from "react-native";

import { ClickCountContext } from "./CountContext";

// Define TypeScript interfaces for the API response
interface Station {
   id: string;
   locationX: string;
   locationY: string;
   name: string;
   standardname: string;
}

interface Vehicle {
   id: string;
   name: string;
   shortname: string;
   departureStation: string;
   platform: string;
   delay: string;
   canceled: boolean;
   imageUrl: string;
}

export default function Home() {
   const { clickCount, setClickCount, yourName } = useContext(ClickCountContext);
   const [vehicles, setVehicles] = useState<Vehicle[]>([]);
   const [loading, setLoading] = useState(true);
   const [error, setError] = useState<string | null>(null);

   useEffect(() => {
      const fetchVehicles = async () => {
         try {
            const response = await fetch(
               "https://api.irail.be/liveboard/?station=Brussel-Zuid&format=json&lang=en"
            );

            if (!response.ok) {
               throw new Error('Network response was not ok');
            }

            const data = await response.json();
            const departures = data.departures.departure;

            const transformedData: Vehicle[] = departures.map((dep: any) => ({
               id: dep.vehicle,
               name: dep.station,
               shortname: dep.vehicle.split('.').pop(),
               departureStation: "Brussels South",
               platform: dep.platform,
               delay: Math.floor(parseInt(dep.delay) / 60),
               canceled: dep.canceled === 1,
               imageUrl: ('../assets/images/train1.jpeg'), // Set the same image for all trains
            }));

            setVehicles(transformedData);
            setError(null);
         } catch (error) {
            console.error("Error fetching vehicles:", error);
            setError("Failed to load train data. Please try again later.");
         } finally {
            setLoading(false);
         }
      };

      fetchVehicles();
      const interval = setInterval(fetchVehicles, 60000);

      return () => clearInterval(interval);
   }, []);

   const handleItemClick = () => {
      setClickCount(clickCount + 1);
   };

   if (loading) {
      return (
         <View style={styles.loadingContainer}>
            <ActivityIndicator size="large" color="#3b8d99" />
         </View>
      );
   }

   if (error) {
      return (
         <View style={styles.errorContainer}>
            <Text style={styles.errorText}>{error}</Text>
            <TouchableOpacity
               style={styles.retryButton}
               onPress={() => setLoading(true)}
            >
               <Text style={styles.retryButtonText}>Retry</Text>
            </TouchableOpacity>
         </View>
      );
   }

   return (
      <View style={styles.container}>
         <View style={styles.header}>
            <Image
               source={require('../assets/images/logo.png')}
               style={styles.homepagelogo}
            />
            <View style={styles.usernamebox}>
               <Text style={styles.username}>Welcome, {yourName}!</Text>
            </View>

         </View>


         <FlatList
            data={vehicles.slice(0, 8)} // Display only the first 8 trains
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => (
               <TouchableOpacity style={styles.card} onPress={handleItemClick}>
                  <Image
                     source={require('../assets/images/train2.jpg')}
                     style={styles.trainImage}
                     resizeMode="cover"
                  />
                  <View style={styles.cardContent}>
                     <View style={styles.headerRow}>
                        <Text style={styles.cardTitle}>Train to {item.name}</Text>
                        <View style={[styles.statusTag, { backgroundColor: item.canceled ? '#ff4444' : '#4CAF50' }]} >
                           <Text style={styles.statusText}>
                              {item.canceled ? 'Canceled' : 'On Time'}
                           </Text>
                        </View>
                     </View>
                     <View style={styles.infoRow}>
                        <Text style={styles.infoText}>Platform {item.platform}</Text>
                        {!item.canceled && item.delay !== null && typeof item.delay === 'number' && item.delay > 0 && (
                           <Text style={styles.delayText}>
                              Delay: {item.delay} min
                           </Text>
                        )}
                     </View>
                     <Text style={styles.trainId}>Train ID: {item.shortname}</Text>
                  </View>
               </TouchableOpacity>
            )}
            contentContainerStyle={styles.flatListContainer} // Added padding at the bottom
         />

         <TouchableOpacity style={styles.countButton}>
            <Text style={styles.countButtonText}>Trains Viewed: {clickCount}</Text>
         </TouchableOpacity>
      </View>
   );
}

const styles = StyleSheet.create({
   container: {
      flex: 1,
      backgroundColor: "#f5f5f5",
   },
   header: {
      paddingVertical: 15,
      backgroundColor: "#f5f5f5",
      flexDirection: "column",



   },
   username: {
      fontSize: 22,
      color: "#fff",
      fontWeight: "bold",
      textAlign: "center",

   },
   usernamebox: {
      padding: 15,
      backgroundColor: "#3b8d99",
      borderRadius: 15,


   },
   loadingContainer: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
   },
   errorContainer: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      padding: 20,
   },
   errorText: {
      color: '#D93B3B',
      fontSize: 16,
      textAlign: 'center',
      marginBottom: 20,
   },
   retryButton: {
      backgroundColor: '#3b8d99',
      padding: 12,
      borderRadius: 8,
   },
   retryButtonText: {
      color: '#fff',
      fontSize: 16,
   },
   card: {
      margin: 10,
      backgroundColor: "#fff",
      borderRadius: 8,
      overflow: "hidden",
      elevation: 3,
      shadowColor: "#000",
      shadowOffset: {
         width: 0,
         height: 2,
      },
      shadowOpacity: 0.25,
      shadowRadius: 3.84,
   },
   trainImage: {
      width: '100%',
      height: 200,
      backgroundColor: '#e1e1e1',
   },
   cardContent: {
      padding: 15,
   },
   headerRow: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginBottom: 10,
   },
   cardTitle: {
      fontSize: 18,
      fontWeight: "bold",
      color: "#333",
      flex: 1,
   },
   statusTag: {
      paddingHorizontal: 8,
      paddingVertical: 4,
      borderRadius: 4,
      marginLeft: 10,
   },
   statusText: {
      color: '#fff',
      fontSize: 12,
      fontWeight: 'bold',
   },
   infoRow: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginBottom: 5,
   },
   infoText: {
      fontSize: 16,
      color: "#666",
   },
   delayText: {
      fontSize: 16,
      color: "#D93B3B",
      fontWeight: '500',
   },
   trainId: {
      fontSize: 14,
      color: "#888",
      marginTop: 5,
   },
   countButton: {
      position: "absolute",
      bottom: 0,
      width: "100%",
      height: 60,
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: '#3b8d99',
   },
   countButtonText: {
      color: "#fff",
      fontSize: 18,
      fontWeight: "bold",
   },
   flatListContainer: {
      paddingBottom: 80, // Added bottom padding to avoid overlap with the count button
   },
   homepagelogo: {
      width: 100,
      height: 80,
      alignSelf: "center",
      marginBottom: 10,



   }
});
