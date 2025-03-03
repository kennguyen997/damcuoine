import React from "react";

export interface CarouselHomePageType {
  id: string;
  src: string;
  subtitle: string;
  title: string;
  desc: string;
}
export interface FoodType {
  id: string;
  src: string;
  name: string;
  subTitle?: string;
  detail?: string;
  price: string;
}

export const carouselHomePage: CarouselHomePageType[] = [
  {
    id: "1",
    src: "/Club/carousel/carousel1.mp4",
    subtitle: "INDAHOOD in your area.",
    title: "INDAHOOD  / n / :",
    desc: "Homiee thich uong gi, chung toi ban cai do.",
  },
  {
    id: "2",
    src: "/Club/carousel/carousel2.mp4",
    subtitle: "INDAHOOD in your area.",
    title: "I’ll be die,\n Hiphop never die.",
    desc: "Chung toi khong choi HipHop, HipHop choi chung toi.",
  },
  {
    id: "3",
    src: "/Club/carousel/carousel3.mp4",
    subtitle: "INDAHOOD in your area.",
    title: "PEACE!",
    desc: "INDAHOOD khong chi la INDAHOOD, INDAHOOD la mot he tu tuong",
  },
];

export let signature: FoodType[] = [
  {
    id: "1",
    src: "/Club/menu/images.jpg",
    name: "Vừa Đấm Vừa Xoa",
    subTitle: "Shot ăn chơi",
    detail: "Cointreau, Baileys, Syrup Blue Caracao",
    price: "12.000đ",
  },
  {
    id: "2",
    src: "/Club/menu/images.jpg",
    name: "Vạn Sự Tuỳ Duyên",
    subTitle: "Your Choice Your Desition",
    detail: "Tuỳ duyên nên tuỳ ý bạn chọn",
    price: "12.000đ",
  },
  {
    id: "3",
    src: "/Club/menu/images.jpg",
    name: "Mật Ngọt Chết Ruồi",
    subTitle: "Trà Sữa Cùng Cồn",
    detail: "Rum, Baileys, Cream, Cốt Dừa, Đường",
    price: "12.000đ",
  },
  {
    id: "4",
    src: "/Club/menu/images.jpg",
    name: "Hồng Nhan Bạc Phận",
    subTitle: "Ngọt Ngào Kh Béo",
    detail: "Gin, Rasberry, Chanh, Đường, Egg White",
    price: "12.000đ",
  },
  {
    id: "5",
    src: "/Club/menu/images.jpg",
    name: "Than Thân Trách Phận",
    subTitle: "Đắng, Cay, Ngọt, nhưng thiếu Bùi",
    detail: "Vodka, Gin, Tabasco, Rasberry, Bitter, Rasberry",
    price: "12.000đ",
  },
  {
    id: "6",
    src: "/Club/menu/images.jpg",
    name: "InDaHood!!!!",
    subTitle: "Ngọt, Béo",
    detail: "Vodka, Kahlua, Cream, Baileys",
    price: "12.000đ",
  },
];

export let cocktail: FoodType[] = [
  {
    id: "1",
    src: "/Club/menu/images.jpg",
    name: "Whisky Sour",
    subTitle: "Chua Chua Ít Ngọt",
    detail: "Whisky, Chanh, Đường, Egg White",
    price: "12.000đ",
  },
  {
    id: "2",
    src: "/Club/menu/images.jpg",
    name: "Long island Iced Tea",
    subTitle: "Trà Đá Xỉn",
    detail: "Rum, Tequila, Vodka, Gin, Cointreau, Chanh, Coke",
    price: "12.000đ",
  },
  {
    id: "3",
    src: "/Club/menu/images.jpg",
    name: "Magarita",
    subTitle: "Chua Mặn Cùng Chút Ngọt",
    detail: "Tequila, Cointreau, Chanh, Đường",
    price: "12.000đ",
  },
  {
    id: "4",
    src: "/Club/menu/images.jpg",
    name: "Blue Magarita",
    subTitle: "Như Magarita Nhưng Khác Màu",
    detail: "Tequila, Blue Caracao, Chanh, Đường",
    price: "12.000đ",
  },
  {
    id: "5",
    src: "/Club/menu/images.jpg",
    name: "Gin Fizz",
    subTitle: "Giải Khát Có Cồn",
    detail: "Gin, Chanh, Đường, Soda",
    price: "12.000đ",
  },
];

export let beer: FoodType[] = [
  {
    id: "1",
    src: "/Club/menu/images.jpg",
    name: "Strong Bow",
    price: "38.000đ",
  },
  {
    id: "2",
    src: "/Club/menu/images.jpg",
    name: "Heniken",
    price: "38.000đ",
  },
  {
    id: "3",
    src: "/Club/menu/images.jpg",
    name: "Cọp",
    price: "27.000đ",
  },
  {
    id: "4",
    src: "/Club/menu/images.jpg",
    name: "Bud",
    price: "38.000đ",
  },
  {
    id: "5",
    src: "/Club/menu/images.jpg",
    name: "Covid",
    price: "40.000đ",
  },
  {
    id: "6",
    src: "/Club/menu/images.jpg",
    name: "Craft",
    price: "40.000đ",
  },
];

export let milktea: FoodType[] = [
  {
    id: "1",
    src: "/Club/menu/images.jpg",
    name: "Trà sữa Ủ Lạnh",
    price: "37.000đ ~ 40.000đ",
  },
  {
    id: "2",
    src: "/Club/menu/images.jpg",
    name: "Trà sữa OLong",
    price: "37.000đ ~ 40.000đ",
  },
  {
    id: "3",
    src: "/Club/menu/images.jpg",
    name: "Trà sữa Lài",
    price: "37.000đ ~ 40.000đ",
  },
  {
    id: "4",
    src: "/Club/menu/images.jpg",
    name: "Trà sữa Matcha",
    price: "37.000đ ~ 40.000đ",
  },
  {
    id: "5",
    src: "/Club/menu/images.jpg",
    name: "Trà sữa Than Tre",
    price: "37.000đ ~ 40.000đ",
  },
  {
    id: "6",
    src: "/Club/menu/images.jpg",
    name: "Trà sữa Socola",
    price: "37.000đ ~ 40.000đ",
  },
  {
    id: "7",
    src: "/Club/menu/images.jpg",
    name: "Sữa tươi chân trâu đường đen",
    price: "37.000đ ~ 40.000đ",
  },
];

export let softDrink: FoodType[] = [
  {
    id: "1",
    src: "/Club/menu/images.jpg",
    name: "Spriteeeee",
    price: "28.000đ",
  },
  {
    id: "2",
    src: "/Club/menu/images.jpg",
    name: "Warrior Nho",
    price: "28.000đ",
  },
  {
    id: "3",
    src: "/Club/menu/images.jpg",
    name: "Sờ tin dâu",
    price: "28.000đ",
  },
  {
    id: "4",
    src: "/Club/menu/images.jpg",
    name: "Rì vai",
    price: "28.000đ",
  },
  {
    id: "5",
    src: "/Club/menu/images.jpg",
    name: "Bò Đỏ ( Redbull )",
    price: "28.000đ",
  },
  {
    id: "6",
    src: "/Club/menu/images.jpg",
    name: "Pepsi",
    price: "28.000đ",
  },
  {
    id: "7",
    src: "/Club/menu/images.jpg",
    name: "Trà Ô Long",
    price: "28.000đ",
  },
  {
    id: "8",
    src: "/Club/menu/images.jpg",
    name: "Nutri Boost",
    price: "28.000đ",
  },
  {
    id: "9",
    src: "/Club/menu/images.jpg",
    name: "Fanta đủ vị",
    price: "28.000đ",
  },
  {
    id: "10",
    src: "/Club/menu/images.jpg",
    name: "CoCa Má La",
    price: "28.000đ",
  },
];

export let otherDrinks: FoodType[] = [
  {
    id: "1",
    src: "/Club/menu/images.jpg",
    name: "Trà Đớ",
    price: "30.000đ",
  },
  {
    id: "2",
    src: "/Club/menu/images.jpg",
    name: "Nước múc ờ Suối",
    price: "20.000đ",
  },
  {
    id: "3",
    src: "/Club/menu/images.jpg",
    name: "Nước Chanh",
    price: "32.000đ",
  },
  {
    id: "4",
    src: "/Club/menu/images.jpg",
    name: "Cà Phê Sữa/Đen",
    price: "29.000đ",
  },
  {
    id: "5",
    src: "/Club/menu/images.jpg",
    name: "Bạc Xĩu",
    price: "29.000đ",
  },
  {
    id: "6",
    src: "/Club/menu/images.jpg",
    name: "Monster",
    price: "43.000đ",
  },
  {
    id: "7",
    src: "/Club/menu/images.jpg",
    name: "Nước ép Tropical",
    price: "55.000đ",
  },
];

export let methaphetamax: FoodType[] = [
  {
    id: "1",
    src: "/Club/menu/images.jpg",
    name: "Socola đá xay",
    subTitle: "S/M",
    price: "37.000đ ~ 40.000đ",
  },
  {
    id: "2",
    src: "/Club/menu/images.jpg",
    name: "Matcha đá xay (S/M)",
    price: "37.000đ ~ 40.000đ",
  },
  {
    id: "3",
    src: "/Club/menu/images.jpg",
    name: "Cookies đá xay (S/M)",
    price: "37.000đ ~ 40.000đ",
  },
];


export let speacialDrink: FoodType[] = [
  {
    id: "1",
    src: "/Club/menu/images.jpg",
    name: "Summer Tropical",
    price: "25.000đ",
  },
  {
    id: "2",
    src: "/Club/menu/images.jpg",
    name: "Coca Chanh Muối",
    price: "25.000đ",
  },
  {
    id: "3",
    src: "/Club/menu/images.jpg",
    name: "Lạ Mà Quen",
    price: "20.000đ",
  },
];

export let foods: FoodType[] = [
  {
    id: "1",
    src: "/Club/menu/images.jpg",
    name: "Mì Trộn/Nước Trứng Xúc Xích",
    price: "38.000đ",
  },
  {
    id: "2",
    src: "/Club/menu/images.jpg",
    name: "Khô Gà",
    price: "30.000đ",
  },
  {
    id: "3",
    src: "/Club/menu/images.jpg",
    name: "Đậu Phộng Cháy Tỏi",
    price: "25.000đ",
  },
  {
    id: "4",
    src: "/Club/menu/images.jpg",
    name: "Bánh Bao Trứng Muối",
    price: "28.000đ",
  },
  {
    id: "5",
    src: "/Club/menu/images.jpg",
    name: "Hát Cảo Tôm/Thịt ( 5 Viên )",
    price: "25.000đ",
  },
  {
    id: "6",
    src: "/Club/menu/images.jpg",
    name: "Bánh Bao Hoàng Kim",
    price: "16.000đ",
  },
  {
    id: "7",
    src: "/Club/menu/images.jpg",
    name: "Bánh Giò",
    price: "20.000đ",
  },
];

export interface ListMenuProps {
  key: string;
  name: string;
  title: string;
  href: string;
  data: FoodType[];
}

export const dataListMenu: ListMenuProps[] = [
  // {
  //   key: 'discount',
  //   title: 'Discount',
  //   name: 'Discount',
  //   href: '/menu',
  //   data: signature
  // },
  {
    key: "signature",
    title: "Signature",
    name: "Sít nây chờ của quán",
    href: "/menu",
    data: signature,
  },
  {
    key: "cocktail",
    title: "Cocktaiils",
    name: "Cocktail mà quán nào cũng có",
    href: "/menu",
    data: cocktail,
  },
  {
    key: "speacialDrink",
    title: "Speacial Drink",
    name: "Speacial Drink",
    href: "/menu",
    data: speacialDrink,
  },
  {
    key: "beer",
    title: "Beer",
    name: "Beer",
    href: "/menu",
    data: beer,
  },
  {
    key: "milktea",
    title: "Milk tea",
    name: "Milk tea",
    href: "/menu",
    data: milktea,
  },
  {
    key: "Methaphetamax",
    title: "Methaphetamax xay",
    name: "Methaphetamax xay",
    href: "/menu",
    data: methaphetamax,
  },
  {
    key: "softDrink",
    title: "Nước Ngọt",
    name: "Nước Ngọt",
    href: "/menu",
    data: softDrink,
  },
  {
    key: "otherDrinks",
    title: "Thức Uống Khác",
    name: "Thức Uống Khác",
    href: "/menu",
    data: otherDrinks,
  },
  // {
  //   key: "gas",
  //   title: "Gas",
  //   name: "Gas",
  //   href: "/menu",
  //   data: cocktail,
  // },
  {
    key: "foods",
    title: "Foods",
    name: "Foods",
    href: "/menu",
    data: foods,
  },
];
