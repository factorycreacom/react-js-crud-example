import PageNotFound from "./pageNotFound";
import ProductAdd from "./ProductAdd";
import ProductList from "./ProductList";

export { ProductAdd, ProductList, PageNotFound };

/**
 * var olan bütün sayfalarımızı buraya import ederek buradan ortak olarak export ediyoruz.
 * Aslında zaten component'ten export default olarak export ettiğimiz için kullanacağımız yerde direkt
 * olarak import edebilirdik. Ama her bir component bu durumda 1 satırlık import kaplardı ve düzensiz bir görünüm oluştururdu.
 * Bu nedenle hepsini buraya import edip, buradan default olmadan export ettiğimiz için, Çekeceğimiz bütün page ögeleri tek bir satırda
 * import edilebilecek. Daha okunaklı bir kod elde edeceğiz.
 */
