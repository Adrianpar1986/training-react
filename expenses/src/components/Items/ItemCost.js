import "./ItemCost.css";

function ItemCost() {
  return (
    <div className="item-cost flex-20 expense fa-3x flex-center">
      <span>&#8722; $20</span>
      <FontAwesomeIcon icon={faArrowDownLong} className="m-left-20" />
    </div>
  );
}

export default ItemCost;
