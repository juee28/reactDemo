function ProductList(props) {
  const product = props.product;
  const catId = props.catId;
  const listItems = product.map((product) =>
   {
        if(product.catId == catId){
         return (<li key={product.id}>
            {product.name}
          </li>)
        }
  });
  
   if(listItems.lemght > 0){
     return null;
   }else{
      return (
        <ul>{listItems}</ul>
      );
   }
 
}

function CategoryList(props) {
  const category = props.category;
  const product = props.product;
  const listItems = category.map((category) =>
    <li key={category.id}>
      {category.name}
      <ProductList product={product} catId={category.id}/>
    </li>
  );
  return (
    <ul>{listItems}</ul>
  );
}


const category =[
{id:1, name: "Home"},
{id:2, name: "Food"},
{id:3, name: "Stationary"},
{id:4, name: "Electronics"}
];
const product = [
{id:1, name: "Curtain", catId: 1},
{id:2, name: "Table", catId: 1},
{id:3, name: "AngularJS Intro", catId: 3},
{id:4, name: "Analytical Reasoning", catId: 3},
{id:5, name: "Samsung LED TV", catId: 4},
{id:6, name: "Samsung Mobile", catId: 4},
{id:7, name: "Whirlpool Washing Machine", catId: 4},
{id:8, name: "Potato Chips", catId: 2},
{id:9, name: "Packed Lunch", catId: 2}
]
ReactDOM.render(
  <CategoryList category={category} product={product}/>,
  document.getElementById('root')
);