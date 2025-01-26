import React, { useEffect, useState } from 'react';
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
import {classicCakes, desserts, drinks, fruitCakes, Product} from '../../utils/commonLists.ts';
import {
  addProductToBasketMyBook,
  decreaseProductQuantityMyBook,
  shopMyBookSelector,
  visibleItemsMyBook,
} from '../../store/shop/shopSliceMyBook.ts';
import { useDispatch, useSelector } from 'react-redux';
import Counter from '../../components/Counter.tsx';

const MenuScreenMyBook = (): React.JSX.Element => {
  const dispatch = useDispatch();
  const { items, itemBasket } = useSelector(shopMyBookSelector);
  const [selectedOption, setSelectedOption] = useState('4');

  useEffect(() => {
    const getProducts = (): Product[] => {
      switch (selectedOption) {
        case '1':
          return classicCakes;
        case '2':
          return desserts;
        case '3':
          return fruitCakes;
        case '4':
          return drinks;
        default:
          return [];
      }
    };

    // Отображаемые данные
    const products = getProducts();

    dispatch(visibleItemsMyBook(products));
  }, [selectedOption, dispatch]);
  return (
    <Screen safeAreaEdges={['top']}>
      <Header />
      <Text style={styles.menuTitle}>Menu</Text>
      <View style={styles.containerPadding}>
        <View style={styles.rowContainer}>
          <TouchableOpacity
            onPress={() => setSelectedOption('1')}
            activeOpacity={0.8}
            style={
              selectedOption === '1'
                ? styles.selectedButton
                : styles.unselectedButton
            }
          >
            <Text style={styles.buttonText}>Классические Торты</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => setSelectedOption('2')}
            activeOpacity={0.8}
            style={
              selectedOption === '2'
                ? styles.selectedButton
                : styles.unselectedButton
            }
          >
            <Text style={styles.buttonText}>Десерты и Сладости</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.rowContainer}>
          <TouchableOpacity
            onPress={() => setSelectedOption('3')}
            activeOpacity={0.8}
            style={
              selectedOption === '3'
                ? styles.selectedButton
                : styles.unselectedButton
            }
          >
            <Text style={styles.buttonText}>Фруктовые Торты</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => setSelectedOption('4')}
            activeOpacity={0.8}
            style={
              selectedOption === '4'
                ? styles.selectedButton
                : styles.unselectedButton
            }
          >
            <Text style={styles.buttonText}>Напитки</Text>
          </TouchableOpacity>
        </View>
      </View>
      <FlatList
        data={items}
        contentContainerStyle={styles.flatListContent}
        showsVerticalScrollIndicator={false}
        keyExtractor={(item) => `${item.id}`}
        renderItem={({ item }) => (
          <View style={styles.itemContainer}>
            <Image
              source={item.image}
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
                    onIncrement={() => dispatch(addProductToBasketMyBook(item))}
                    onDecrement={() =>
                      dispatch(decreaseProductQuantityMyBook(item.id))
                    }
                  />
                ) : (
                  <TouchableOpacity
                    onPress={() => dispatch(addProductToBasketMyBook(item))}
                    style={styles.addButton}
                  >
                    <Text style={styles.addButtonText}>В КОРЗИНУ</Text>
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
    backgroundColor: Colors.redButton,
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
    borderColor: Colors.redButton,
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
    borderColor: Colors.redButton,
    borderWidth: 1,
    padding: 6,
  },
  priceText: {
    fontSize: 16,
    fontWeight: '900',
  },
  addButton: {
    backgroundColor: Colors.redButton,
    borderRadius: 8,
    width: '70%',
    padding: 6,
  },
  addButtonText: {
    fontSize: 18,
    fontWeight: '800',
    textAlign: 'center',
    color: Colors.white,
  },
});
export default MenuScreenMyBook;
