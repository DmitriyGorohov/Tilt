export const iconsList = {
  logo: require('./logo/logo.png'),
  basket_menu: require('./basket_menu/Vector.png'),
  basket: require('./basket/Vector.png'),
  menu: require('./menu/menu.png'),
  qr: require('./qr-code/qr-code.png'),
  reserve_success: require('./reserve_success/Group.png'),
  events1: require('./events-1/События2.png'),
  events2: require('./events-2/События3.png'),
  events3: require('./events-3/События4.png'),
  events4: require('./events-4/События1.png'),
  events5: require('./events-5/События5.png'),
  eventsBack: require('./back-enevts/back-enevts.png'),

  logoTint: require('./tint/logo-tint/logo-tint.png'),
  cartMain: require('./tint/cart_main/Group.png'),
  logoHeader: require('./tint/logo-header/logo-header.png'),
  burgerMenu: require('./tint/burger-menu/burger-menu.png'),
  burgerWidget: require('./tint/burger-widget/burger-widget.png'),
  cartHeader: require('./tint/cart-header/Group.png'),
  qrCode: require('./tint/qr/Group.png'),
  widget: require('./tint/widget/widget.png'),
}

export type IconTypes = keyof typeof iconsList;
