type Post = {
      small_image_url: string,
      large_image_url: string,
      date: string,
      title: string,
      desc: string

}

type Testimonial = {
  name: string,
  position: string,
  quote: string
}

type Product = {
  name: string,
  price: number,
  image_url: string
};

type CartItem = {
  quantity: number,
} & Product;

type Cart = CartItem[];