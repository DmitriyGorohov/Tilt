import React from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Colors from '../../styles/Colors.ts';
import Header from '../../components/Header.tsx';

const events = [
  {
    id: '1',
    league: 'UEFA',
    dateTime: '12.06 00:45',
    teams: ['Bayern Munich', 'Real Madrid'],
  },
  {
    id: '2',
    league: 'CFL',
    dateTime: '20.06 00:30',
    teams: ['Hamilton Tiger-Cats', 'Montreal Alouettes'],
  },
  {
    id: '3',
    league: 'NLL',
    dateTime: '25.06 00:00',
    teams: ['Colorado Mammoth', 'Calgary Roughnecks'],
  },
  {
    id: '4',
    league: 'AFL',
    dateTime: '30.06 00:55',
    teams: ['Adelaide Crows', 'Melbourne Demons'],
  },
];

const BroadcastScreenMyBook = (): React.JSX.Element => {
  const renderEvent = ({ item }: { item: (typeof events)[0] }) => (
    <View style={styles.eventContainer}>
      <View style={styles.leagueBadge}>
        <Text style={styles.leagueText}>{item.league}</Text>
      </View>
      <View style={styles.detailsContainer}>
        <Text style={styles.dateTime}>{item.dateTime}</Text>
        <Text style={styles.teams}>{item.teams[0]}</Text>
        <Text style={styles.teams}>{item.teams[1]}</Text>
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
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
    borderRadius: 12,
    padding: 12,
  },
  leagueBadge: {
    width: 70,
    height: 70,
    borderWidth: 2,
    borderColor: Colors.redButton,
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 16,
  },
  leagueText: {
    fontSize: 22,
    fontWeight: '900',
  },
  detailsContainer: {
    flex: 1,
  },
  dateTime: {
    backgroundColor: Colors.redButton,
    color: Colors.white,
    fontSize: 14,
    fontWeight: '600',
    paddingVertical: 4,
    paddingHorizontal: 8,
    borderRadius: 8,
    alignSelf: 'flex-start',
    marginBottom: 8,
  },
  teams: {
    fontSize: 16,
    fontWeight: '500',
    color: Colors.black,
  },
});
export default BroadcastScreenMyBook;
