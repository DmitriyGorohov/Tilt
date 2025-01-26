import React, { useEffect } from 'react';
import {
  FlatList,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { Screen } from '../../components/base/Screen.tsx';
import Header from '../../components/Header.tsx';
import Colors from '../../styles/Colors.ts';
import {
  addProductToCart,
  decreaseProductQuantityTint,
  shopMyBookSelector,
  visibleBurgers,
} from '../../store/shop/shopTintSlice.ts';
import { useDispatch, useSelector } from 'react-redux';
import Counter from '../../components/Counter.tsx';
import { burgers } from '../../utils/common.ts';

const MenuTintScreen = (): React.JSX.Element => {
  const dispatch = useDispatch();
  const { items, itemBasket } = useSelector(shopMyBookSelector);

  useEffect(() => {
    dispatch(visibleBurgers(burgers));
  }, [dispatch]);
  return (
    <Screen safeAreaEdges={['top']}>
      <Header />
      <FlatList
        data={items}
        // key={2}
        // numColumns={2}
        contentContainerStyle={styles.flatListContent}
        showsVerticalScrollIndicator={false}
        keyExtractor={(item) => `${item.id}`}
        renderItem={({ item }) => (
          <View style={styles.itemContainer}>
            <Image
              source={item.images}
              resizeMode="cover"
              style={styles.itemImage}
            />
            <View style={styles.itemDetailsContainer}>
              <Text style={styles.itemTitle}>{item.name}</Text>
              <Text style={styles.itemDescription}>{item.description}</Text>
              <View style={styles.itemFooter}>
                <View style={styles.priceContainer}>
                  <Text style={styles.priceText}>{item.price} $</Text>
                </View>
                {itemBasket.some(
                  (basketItem) => basketItem.product.id === item.id
                ) ? (
                  <Counter
                    quantity={
                      itemBasket.find(
                        (basketItem) => basketItem.product.id === item.id
                      )?.quantity
                    }
                    onIncrement={() => dispatch(addProductToCart(item))}
                    onDecrement={() =>
                      dispatch(decreaseProductQuantityTint(item.id))
                    }
                  />
                ) : (
                  <TouchableOpacity
                    onPress={() => dispatch(addProductToCart(item))}
                    style={styles.addButton}
                  >
                    <Text style={styles.addButtonText}>В корзину</Text>
                  </TouchableOpacity>
                )}
              </View>
            </View>
          </View>
        )}
      />
    </Screen>
  );
};
const styles = StyleSheet.create({
  containerPadding: {
    paddingHorizontal: 16,
  },
  menuTitle: {
    color: Colors.black,
    fontSize: 20,
    marginBottom: 20,
    textAlign: 'center',
    fontWeight: '800',
  },
  rowContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 12,
  },
  selectedButton: {
    backgroundColor: Colors.redButtonBlack,
    paddingVertical: 10,
    borderRadius: 12,
    width: '48%',
  },
  unselectedButton: {
    backgroundColor: Colors.yellowButton,
    paddingVertical: 10,
    borderRadius: 12,
    width: '48%',
  },
  buttonText: {
    color: Colors.white,
    fontSize: 12,
    fontWeight: '700',
    textAlign: 'center',
  },
  flatListContent: {
    paddingTop: 20,
    paddingBottom: 200,
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
    height: '100%',
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
  },
  itemFooter: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 12,
  },
  priceContainer: {
    borderRadius: 6,
    borderColor: Colors.yellowButton,
    borderWidth: 1,
    padding: 6,
  },
  priceText: {
    fontSize: 16,
    fontWeight: '900',
  },
  addButton: {
    backgroundColor: Colors.yellowButton,
    borderRadius: 20,
    width: '50%',
    padding: 6,
  },
  addButtonText: {
    fontSize: 12,
    fontWeight: '600',
    textAlign: 'center',
    color: Colors.black,
  },
});
export default MenuTintScreen;
