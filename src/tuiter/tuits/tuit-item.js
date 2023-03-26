import React from "react";
import TuitStats from "./tuit-stats";
import { useDispatch } from "react-redux";
import { deleteTuit } from "./tuits-reducer";

const TuitItem = ({
  tuit = {
    _id: 123,
    topic: "Space",
    userName: "SpaceX",
    title:
      "Tesla Cybertruck lands on Mars and picks up the Curiosity rover on its 6' bed",
    time: "2h",
    image: "../images/tesla.png",
    liked: true,
    replies: 123,
    retuits: 432,
    likes: 2345,
    handle: "@tesla",
    tuit: "You want to wake up in the morning and think the future is going to be great",
  },
}) => {
  const dispatch = useDispatch();
  const deleteTuitHandler = (id) => {
    dispatch(deleteTuit(id));
  };
  return (
    <div
      className={"border border-secondary border-opacity-25 border-bottom-0"}
    >
      <div className={"row pt-2 ps-3 pe-2"}>
        <div className="col-1">
          <img
            className="rounded-circle"
            height={48}
            width={48}
            src={`/images/${tuit.image}`}
            alt=""
          />
        </div>
        <div className="col-11">
          <i
            className={"bi bi-x-lg float-end"}
            onClick={() => deleteTuitHandler(tuit._id)}
          ></i>
          <div className="row ps-4">
            <span className="ps-0 fw-bold">
              {tuit.userName}
              <span className="ps-1">
                <i className="bi bi-patch-check-fill text-primary" />
              </span>
              <span className="fw-normal text-secondary ps-1">
                {tuit.handle}
              </span>
              <span className="text-secondary">
                <i className="bi bi-dot"></i>
              </span>
              <span className=" text-secondary fw-normal">{tuit.time}</span>
            </span>
            <div className="ps-0 pt-1">
              <p className={"me-5"}>{tuit.tuit}</p>
            </div>
          </div>
          <TuitStats tuit={tuit} />
        </div>
      </div>
    </div>
  );
};
export default TuitItem;
