// productlist.ts


interface Product {
    id: number;
    name: string;
    price: number;
    available: boolean;
  }
  
  
  function getMobileDetails(productName: string, productId: number): void {
    
    let productList: Product[] = [
      { id: 231, name: "Samsung Galaxy Note 7", price: 699, available: true },
      { id: 875, name: "Samsung Galaxy S6 Edge", price: 630, available: true },
      { id: 231, name: "Nokia Lumia 640XL", price: 224, available: false },
      
    ];
  
    
    let filteredList: Product[] = productList.filter(product => product.id === productId);
  
    
    if (filteredList.length > 0) {
      
      localStorage.setItem("Product", JSON.stringify(filteredList[0]));
  
    
      window.location.href = "ProductDetail.html";
    } else {
      console.log("Product not found");
    }
  }
  
