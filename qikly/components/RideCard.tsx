// import React from 'react';
// import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
// import { useRideContext } from '../components/CountContext';
// import { Ride } from '../types';

// interface RideCardProps {
//    ride: Ride;
// }

// export const RideCard: React.FC<RideCardProps> = ({ ride }) => {
//    const { incrementBookings } = useRideContext();

//    return (
//       <TouchableOpacity style={styles.card} onPress={incrementBookings}>
//          <Image
//             source={{ uri: ride.image }}
//             style={styles.image}
//             resizeMode="cover"
//          />
//          <View style={styles.content}>
//             <View style={styles.header}>
//                <Text style={styles.title}>{ride.type}</Text>
//                <View style={[
//                   styles.statusTag,
//                   { backgroundColor: ride.available ? '#4CAF50' : '#F44336' }
//                ]}>
//                   <Text style={styles.statusText}>
//                      {ride.available ? 'Available' : 'Unavailable'}
//                   </Text>
//                </View>
//             </View>
//             <Text style={styles.info}>From: {ride.from}</Text>
//             <Text style={styles.info}>To: {ride.to}</Text>
//             <Text style={styles.price}>Price: ${ride.price}</Text>
//             <Text style={styles.time}>ETA: {ride.estimatedTime}</Text>
//          </View>
//       </TouchableOpacity>
//    );
// };

// // styles.ts
// const styles = StyleSheet.create({
//    container: {
//       flex: 1,
//       backgroundColor: '#f5f5f5',
//    },
//    centered: {
//       flex: 1,
//       justifyContent: 'center',
//       alignItems: 'center',
//    },
//    listContainer: {
//       padding: 16,
//    },
//    card: {
//       backgroundColor: 'white',
//       borderRadius: 12,
//       marginBottom: 16,
//       shadowColor: '#000',
//       shadowOffset: {
//          width: 0,
//          height: 2,
//       },
//       shadowOpacity: 0.25,
//       shadowRadius: 3.84,
//       elevation: 5,
//       overflow: 'hidden',
//    },
//    image: {
//       width: '100%',
//       height: 150,
//    },
//    content: {
//       padding: 16,
//    },
//    header: {
//       flexDirection: 'row',
//       justifyContent: 'space-between',
//       alignItems: 'center',
//       marginBottom: 8,
//    },
//    title: {
//       fontSize: 18,
//       fontWeight: 'bold',
//    },
//    statusTag: {
//       paddingHorizontal: 8,
//       paddingVertical: 4,
//       borderRadius: 4,
//    },
//    statusText: {
//       color: 'white',
//       fontSize: 12,
//       fontWeight: 'bold',
//    },
//    info: {
//       fontSize: 14,
//       color: '#666',
//       marginBottom: 4,
//    },
//    price: {
//       fontSize: 16,
//       fontWeight: 'bold',
//       color: '#2196F3',
//       marginTop: 8,
//    },
//    time: {
//       fontSize: 14,
//       color: '#666',
//       marginTop: 4,
//    },
//    input: {
//       width: '100%',
//       height: 48,
//       borderWidth: 1,
//       borderColor: '#ddd',
//       borderRadius: 8,
//       paddingHorizontal: 16,
//       marginBottom: 16,
//       backgroundColor: 'white',
//    },
//    button: {
//       backgroundColor: '#2196F3',
//       paddingVertical: 12,
//       paddingHorizontal: 24,
//       borderRadius: 8,
//       width: '100%',
//    },
//    buttonText: {
//       color: 'white',
//       fontSize: 16,
//       fontWeight: 'bold',
//       textAlign: 'center',
//    },
//    link: {
//       color: '#2196F3',
//       marginTop: 16,
//       textAlign: 'center',
//    },
// });