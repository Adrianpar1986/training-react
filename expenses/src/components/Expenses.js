import "./Expenses.css";
import {
  faChampagneGlasses,
  faSquare,
  faBurger,
  faGlassWater,
  faArrowDownLong,
  faArrowUpLong,
  faBriefcase,
  faCommentDollar,
  faSackDollar,
} from "@fortawesome/free-solid-svg-icons";

function Expenses() {
  return (
    <div className="wrapper">
      {/* item */}
      <div className="item-container"></div>
      {/* item */}
      {/* <div className="item-container">
        <div className="item-icon fa-4x flex-20 flex-center">
          <span className="fa-layers fa-fw fa-xl">
            <FontAwesomeIcon icon={faSquare} className="light-incoming" />
            <FontAwesomeIcon
              icon={faBriefcase}
              inverse
              transform="shrink-8"
              className="incoming"
            />
          </span>
        </div>
        <div className="item-info flex-60">
          <h2>Freelancing Work</h2>
          <small className="expense-date">31/08/21</small>
        </div>
        <div className="item-cost flex-20 income fa-3x flex-center">
          <span>&#43; $260</span>
          <FontAwesomeIcon icon={faArrowUpLong} className="m-left-20" />
        </div>
      </div> */}
      {/* item */}
      {/* <div className="item-container">
        <div className="item-icon fa-4x flex-20 flex-center">
          <span className="fa-layers fa-fw fa-xl">
            <FontAwesomeIcon icon={faSquare} className="light-bizum" />
            <FontAwesomeIcon
              icon={faCommentDollar}
              inverse
              transform="shrink-8"
              className="bizum"
            />
          </span>
        </div>
        <div className="item-info flex-60">
          <h2>Send Bizum To a Friend</h2>
          <small className="expense-date">01/09/21</small>
        </div>
        <div className="item-cost flex-20 expense fa-3x flex-center">
          <span>&#8722; $50</span>
          <FontAwesomeIcon icon={faArrowDownLong} className="m-left-20" />
        </div>
      </div> */}
      {/* item */}
      {/* <div className="item-container">
        <div className="item-icon fa-4x flex-20 flex-center">
          <span className="fa-layers fa-fw fa-xl">
            <FontAwesomeIcon icon={faSquare} className="light-incoming" />
            <FontAwesomeIcon
              icon={faSackDollar}
              inverse
              transform="shrink-8"
              className="incoming"
            />
          </span>
        </div>
        <div className="item-info flex-60">
          <h2>Payroll</h2>
          <small className="expense-date">01/09/21</small>
        </div>
        <div className="item-cost flex-20 income fa-3x flex-center">
          <span>&#43; $2500</span>
          <FontAwesomeIcon icon={faArrowUpLong} className="m-left-20" />
        </div>
      </div> */}
      {/* item */}
      {/* <div className="item-container">
        <div className="item-icon fa-4x flex-20 flex-center">
          <span className="fa-layers fa-fw fa-xl">
            <FontAwesomeIcon icon={faSquare} className="light-electricity" />
            <FontAwesomeIcon
              icon={faGlassWater}
              inverse
              transform="shrink-9 right-1"
              className="bill"
            />
            <FontAwesomeIcon
              icon={faBurger}
              inverse
              transform="shrink-10 down-1 left-1"
              className="electricity"
            />
          </span>
        </div>
        <div className="item-info flex-60">
          <h2>Burger</h2>
          <small className="expense-date">21/08/21</small>
        </div>
        <div className="item-cost flex-20 income fa-3x flex-center">
          <span>&#43; $10</span>
          <FontAwesomeIcon icon={faArrowUpLong} className="m-left-20" />
        </div>
      </div> */}
    </div>
  );
}

export default Expenses;
