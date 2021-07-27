import { Component, OnInit } from '@angular/core';
import { MyserviceService } from './myservice.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styles: [
  ]
})
export class ProductsComponent {

  constructor(public service: MyserviceService) { }

  products: any = [
    { name: "Apple_Watch", description: "The best thing About This Product is ease integration with our apple phone", price: "250", Myurl: "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/MTPL2ref_VW_34FR+watch-44-alum-spacegray-cell-6s_VW_34FR_WF_CO?wid=1400&hei=1400&trim=1,0&fmt=p-jpg&qlt=95&.v=1611165195000,1599519901000" },
    { name: "Lenovo Laptop", description: "with the letest technology installed in it ", price: "1200", Myurl: "https://www.lenovo.com/medias/lenovo-laptop-workstation-thinkpad-p15v-15-subseries-hero.png?context=bWFzdGVyfHJvb3R8MzA1NjUyfGltYWdlL3BuZ3xoYzcvaDgyLzExMDMzODg5NDA3MDA2LnBuZ3w0YzEyNTk5Njg3NjE5YzEyOWE5ZjhlODBjNTA3NDViYWM1OWExMzM2N2FkZjY0MWE1MWQzNTcxMDlmMWE3YWNh" },
    { name: "MacBook Pro", description: "13-inch with Touch Bar and Touch ID ", price: "1700", Myurl: "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/macbook-pro-13-og-202011?wid=1200&hei=630&fmt=jpeg&qlt=95&.v=1604347427000" },
    { name: "MacBook Air", description: " features fifth-generation Intel Core processors with Thunderbolt 2", price: "1250", Myurl: "https://www.apple.com/v/macbook-air/j/images/overview/processor__gb8d1ide5126_large_2x.png" },
    { name: "iMac Pro", description: " packed with the most staggeringly powerful collection of workstation-class graphics, processors, storage, memory, and I/O of any Macever", price: "4815.70", Myurl: "https://techcrunch.com/wp-content/uploads/2017/12/apple_imac_pro_001.jpg" },
  ]

  purchaseHundler(product: any) {
    let obj = {
      price: product.price,
      name: product.name,
      description: product.description
    }
    this.service.getUrlForPayment(obj).subscribe((data: any) => {
      console.log(data);
      let url = data.resp.data.hosted_url
      console.log("url is" + ' ' + url)
      if (data.status === "success") {
        window.location.href = url
        // this.location.go(url);
      } else {
        alert(" Transaction faild");
      }
    })
  }

}
