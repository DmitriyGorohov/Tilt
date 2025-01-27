import React from 'react';
import {
  FlatList,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import Header from '../../components/Header.tsx';
import { useDispatch, useSelector } from 'react-redux';
import {
  addProductToCart,
  decreaseProductQuantityTint,
  shopMyBookSelector,
} from '../../store/shop/shopTintSlice.ts';
import Counter from '../../components/Counter.tsx';
import Colors from '../../styles/Colors.ts';
import { SafeAreaView } from 'react-native-safe-area-context';
import Navigation from '../../navigation/navigation.ts';
import Screens from '../../navigation/consts/screens.ts';

const CartTintScreen = (): React.JSX.Element => {
  const dispatch = useDispatch();
  const { itemsCart, totalCount } = useSelector(shopMyBookSelector);

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: Colors.white }}>
      <Header />
      <FlatList
        data={itemsCart}
        contentContainerStyle={styles.flatListContent}
        showsVerticalScrollIndicator={false}
        keyExtractor={(item) => `${item.product.id}`}
        ListEmptyComponent={
          <View
            style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}
          >
            <Text
              style={{ color: Colors.black, fontSize: 24, fontWeight: '800' }}
            >
              В КОРЗИНЕ ПУСТО...
            </Text>
          </View>
        }
        renderItem={({ item }) => (
          <View style={styles.itemContainer}>
            <Image
              source={item.product.images}
              resizeMode="cover"
              style={styles.itemImage}
            />
            <View style={styles.itemDetailsContainer}>
              <Text style={styles.itemTitle}>{item.product.name}</Text>
              <Text style={styles.itemDescription}>
                {item.product.description}
              </Text>
              <View style={styles.itemFooter}>
                <View style={styles.priceContainer}>
                  <Text style={styles.priceText}>{item.product.price} $</Text>
                </View>
                <Counter
                  quantity={
                    itemsCart.find(
                      (basketItem) => basketItem.product.id === item.product.id
                    )?.quantity
                  }
                  onIncrement={() => dispatch(addProductToCart(item.product))}
                  onDecrement={() =>
                    dispatch(decreaseProductQuantityTint(item.product.id))
                  }
                />
              </View>
            </View>
          </View>
        )}
      />
      {itemsCart.length !== 0 && (
        <Text
          style={{
            paddingHorizontal: 16,
            color: Colors.black,
            fontSize: 20,
            fontWeight: '700',
          }}
        >
          К оплате: {totalCount} $
        </Text>
      )}
      <View
        style={{
          alignSelf: 'center',
          paddingHorizontal: 16,
          width: '100%',
          marginBottom: 20,
          paddingTop: 12,
          backgroundColor: Colors.white,
          zIndex: 999,
        }}
      >
        <TouchableOpacity
          onPress={() => {
            if (itemsCart.length === 0) {
              Navigation.navigate(Screens.MAIN_APP);
            } else {
              Navigation.navigate(Screens.BASKET_SUCCESS);
            }
          }}
          activeOpacity={0.8}
          style={{
            borderRadius: 20,
            backgroundColor: Colors.yellowButton,
            paddingVertical: 10,
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <Text
            style={{ color: Colors.black, fontSize: 18, fontWeight: '600' }}
          >
            {itemsCart.length === 0 ? 'НА ГЛАВНУЮ' : 'ЗАКАЗАТЬ'}
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  flatListContent: {
    paddingTop: 20,
    flexGrow: 1,
    paddingHorizontal: 16,
  },
  itemContainer: {
    flex: 1,
    borderColor: Colors.yellowButton,
    borderWidth: 1,
    borderRadius: 16,
    marginBottom: 16,
    overflow: 'hidden',
    flexDirection: 'row',
  },
  itemImage: {
    width: 140,
    height: 120,
  },
  itemDetailsContainer: {
    width: '100%',
    flex: 1,
    padding: 6,
  },
  itemTitle: {
    color: Colors.black,
    fontSize: 16,
    fontWeight: '800',
    marginBottom: 6,
  },
  itemDescription: {
    color: 'gray',
    fontSize: 8,
    marginBottom: 4,
    flex: 1,
  },
  itemFooter: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 12,
  },
  priceContainer: {
    padding: 6,
  },
  priceText: {
    fontSize: 16,
    fontWeight: '900',
  },
  addButton: {
    backgroundColor: Colors.yellowButton,
    borderRadius: 8,
    width: '70%',
    padding: 6,
  },
  addButtonText: {
    fontSize: 12,
    fontWeight: '800',
    textAlign: 'center',
    color: Colors.white,
  },
});
export default CartTintScreen;
