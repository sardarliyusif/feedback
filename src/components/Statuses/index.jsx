import React from "react";
import map from "lodash/map";
import filter from "lodash/filter";
import groupBy from "lodash/groupBy";
import find from "lodash/find";
import categories from "../../data/categories.json";
import { FaAngleUp, FaComment } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { Status, statues } from "../../data/statuses";
import { upvoteFeedback } from "../../redux/actions/feedback";
import { Card, Chip, Typography } from "../shared";
import { StatusCircle } from "../StatusCircle";
import "./style.scss";

export const Statuses = () => {
  const feedback = useSelector((s) => s.feedback);
  const dispatch = useDispatch();

  const calculated = groupBy(feedback, (f) => f.status);
  return (
    <div className="statuses">
      {map(
        filter(statues, (s) => s.value !== Status.SUGGESTION),
        ({ label, value, color }) => {
          return (
            <div key={value}>
              <Typography color="purple" weight="bold">
                {label} ({calculated[value]?.length ?? 0})
              </Typography>
              <ul>
                {map(
                  calculated[value],
                  ({
                    id,
                    title,
                    description,
                    category,
                    upvotes,
                    selected,
                    comments,
                  }) => (
                    <li key={id}>
                      <Card direction="column">
                        <StatusCircle name={label} backgroundColor={color} />
                        <Typography color="purple" weight="bold">
                          {title}
                        </Typography>
                        <Typography color="light" weight="small" size="medium">
                          {description}
                        </Typography>
                        <Chip className="statuses__chip">
                          {find(categories, (c) => c.value === category).label}
                        </Chip>
                        <div
                          style={{
                            display: "flex",
                            justifyContent: "space-between",
                            alignItems: "center",
                            width: "100%",
                          }}
                        >
                          <Chip.Upvote
                            onClick={() =>
                              dispatch(upvoteFeedback(id, upvotes, selected))
                            }
                            selected={selected}
                            direction="row"
                          >
                            <FaAngleUp style={{ marginRight: "10px" }} />{" "}
                            {upvotes}
                          </Chip.Upvote>
                          
                        </div>
                      </Card>
                    </li>
                  )
                )}
              </ul>
            </div>
          );
        }
      )}
    </div>
  );
};
