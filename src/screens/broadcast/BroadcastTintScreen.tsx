import React from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Colors from '../../styles/Colors.ts';
import Header from '../../components/Header.tsx';

const events = [
  {
    id: '1',
    league: 'UEFA',
    dateTime: '30.08  00:15',
    teams: ['Juventus', 'Barcelona'],
  },
  {
    id: '2',
    league: 'CFL',
    dateTime: '28.08  00:00',
    teams: ['Calgary Stampeders', 'Ottawa Redblacks'],
  },
  {
    id: '3',
    league: 'NLL',
    dateTime: '25.08  00:15',
    teams: ['Philadelphia Wings', 'New England Black Wolves'],
  },
  {
    id: '4',
    league: 'NBA',
    dateTime: '12.08  00:25',
    teams: ['Miami Heat', 'San Antonio Spurs'],
  },
];

const BroadcastTintScreen = (): React.JSX.Element => {
  const renderEvent = ({ item }: { item: (typeof events)[0] }) => (
    <View style={styles.eventContainer}>
      <View style={styles.leagueBadge}>
        <Text style={styles.leagueText}>{item.league}</Text>
      </View>
      <View style={styles.detailsContainer}>
        <Text style={styles.teams}>{item.teams[0]}</Text>
        <Text style={styles.teams}>{item.teams[1]}</Text>
        <Text style={styles.dateTime}>{item.dateTime}</Text>
      </View>
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      <Header />
      <Text style={{ color: Colors.black, fontSize: 22, fontWeight: '700' }}>
        Спортивные трансляции
      </Text>
      <FlatList
        data={events}
        renderItem={renderEvent}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.listContent}
      />
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 16,
    backgroundColor: Colors.white,
  },
  listContent: {
    paddingBottom: 16,
  },
  eventContainer: {
    borderRadius: 12,
    padding: 12,
  },
  leagueBadge: {
    width: 100,
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
  },
  leagueText: {
    alignSelf: 'flex-start',
    fontSize: 30,
    color: Colors.yellowButton,
    fontWeight: '900',
  },
  detailsContainer: {
    flex: 1,
  },
  dateTime: {
    color: Colors.black,
    fontSize: 14,
    fontWeight: '600',
    paddingVertical: 4,
    alignSelf: 'flex-start',
    marginTop: 8,
  },
  teams: {
    fontSize: 16,
    fontWeight: '900',
    color: Colors.black,
  },
});
export default BroadcastTintScreen;
